

import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // adjust based on your path
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "./hooks/useAuth"; // custom hook/context to get user

export default function UserTable() {
  const [funds, setFunds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
  const { user } = useAuth(); // get current logged in user

  useEffect(() => {
    const fetchFundDetails = async () => {
      try {
        const res = await fetch("https://api.mfapi.in/mf");
        const fundList = await res.json();

        const topFunds = fundList.slice(0, 80);

        const detailPromises = topFunds.map(async (fund) => {
          const detailRes = await fetch(`https://api.mfapi.in/mf/${fund.schemeCode}`);
          const detail = await detailRes.json();

          const latestData = detail.data?.[0] || {};
          return {
            schemeCode: fund.schemeCode,
            name: fund.schemeName,
            nav: parseFloat(latestData.nav) || 0,
            date: latestData.date || "N/A",
          };
        });

        const fundDetails = await Promise.all(detailPromises);
        setFunds(fundDetails);
      } catch (error) {
        console.error("Error fetching mutual fund data:", error);
      }
    };

    fetchFundDetails();
  }, []);

  const handleTransaction = async (fund, type) => {
    const input = prompt(`Enter number of units to ${type} for "${fund.name}"`);
    const units = parseFloat(input);
    if (!units || units <= 0) return alert("Invalid quantity");

    const value = units * fund.nav;

    try {
      await addDoc(collection(db, "users", user.uid, "transactions"), {
        type,
        schemeCode: fund.schemeCode,
        fundName: fund.name,
        nav: fund.nav,
        units,
        value,
        date: fund.date,
        createdAt: serverTimestamp(),
      });
      alert(`${type} successful! ₹${value.toFixed(2)} saved.`);
    } catch (error) {
      console.error("Transaction error:", error);
      alert("Transaction failed!");
    }
  };

  const totalPages = Math.ceil(funds.length / rowsPerPage);
  const paginatedFunds = funds.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">Mutual Fund Prices</h2>

      <table className="min-w-full table-auto border">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-4 py-2 text-left">Scheme Name</th>
            <th className="px-4 py-2 text-left">Latest NAV</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedFunds.map((fund, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{fund.name}</td>
              <td className="px-4 py-2">₹{fund.nav.toFixed(2)}</td>
              <td className="px-4 py-2">{fund.date}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => handleTransaction(fund, "Buy")}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Buy
                </button>
                <button
                  onClick={() => handleTransaction(fund, "Sell")}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Sell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-1 text-sm">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 rounded ${
              currentPage === num ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
