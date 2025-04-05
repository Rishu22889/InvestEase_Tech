
import { useState } from "react";
import Card from "./Card.jsx";
import Sidebar from "./Sidebar.jsx";
import UserTable from "./UserTable.jsx";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 transition-all">
      
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
       
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-4  left-0  bg-gray-800 text-white w-10 h-10 rounded-md"
        >
          ☰
        </button>

        {isSidebarOpen && <Sidebar />}
      </aside>

      
      <main
        className={`flex-1 p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="grid grid-cols-3 gap-4 mt-6">
        <Card title="Credits Used" value="46,042" />
          <Card title="Total Credits" value="149,758" />
          <Card title="Plan Credits" value="100,000" />
          </div>
        <div className="overflow-x-auto transition-all duration-300 mt-10">
          <UserTable />
        </div>
      </main>
    </div>
  );
}

