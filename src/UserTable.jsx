import { useState } from "react";

const UserTable = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { email: "hello@simmmple.com", provider: "Google", created: "06 Nov, 2023 11:33", lastSignIn: "06 Nov, 2023 11:33", uid: "f3f42fc419..." },
    { email: "thomas@gmail.com", provider: "Google", created: "06 Nov, 2023 11:29", lastSignIn: "06 Nov, 2023 11:29", uid: "f3f42fc419..." },
    { email: "markwilliam@hotmail.com", provider: "Email", created: "06 Nov, 2023 11:21", lastSignIn: "06 Nov, 2023 11:21", uid: "f3f42fc419..." },
    { email: "examplejosh@mail.com", provider: "Google", created: "06 Nov, 2023 11:19", lastSignIn: "06 Nov, 2023 11:19", uid: "f3f42fc419..." },
    { email: "esthera@aicompany.com", provider: "Email", created: "06 Nov, 2023 11:07", lastSignIn: "06 Nov, 2023 11:07", uid: "f3f42fc419..." }
  ]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-sm font-semibold">
              <th className="px-4 py-3"><input type="checkbox" /></th>
              <th className="px-4 py-3">EMAIL ADDRESS</th>
              <th className="px-4 py-3">PROVIDER</th>
              <th className="px-4 py-3">CREATED</th>
              <th className="px-4 py-3">LAST SIGN IN</th>
              <th className="px-4 py-3">USER UID</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3"><input type="checkbox" className="accent-purple-500" /></td>
                <td className="px-4 py-3 text-blue-600">{user.email}</td>
                <td className="px-4 py-3">{user.provider}</td>
                <td className="px-4 py-3">{user.created}</td>
                <td className="px-4 py-3">{user.lastSignIn}</td>
                <td className="px-4 py-3">{user.uid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-gray-500 mt-4">Showing 1 to {users.length} of 9794 results</div>
    </div>
  );
};

export default UserTable;
