
// import Sidebar from "./Sidebar.jsx";
// import Card from "./Card.jsx";

// export default function Dashboard() {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold">User Dashboard</h1>
//         <div className="grid grid-cols-3 gap-4 mt-4">
//           <Card name="John Doe" email="john@example.com" role="Admin" />
//           <Card name="Jane Smith" email="jane@example.com" role="User" />
//           <Card name="Alice Johnson" email="alice@example.com" role="Moderator" />
//         </div>
//       </main>
//     </div>
//   );
// }


// import { useState } from "react";
// import Sidebar from "./Sidebar.jsx";
// import UserTable from "./UserTable.jsx";
// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-100">
//      <aside className="w-6 bg-white p-6 shadow-md h-screen">
//       <button className="absolute top-5 left-2 bg-grey-800 w-8 h-8 ">☰</button>
//      </aside>
//       <main className="flex-1 p-6">
//         <UserTable />
//       </main>
//     </div>
//   );
// }

// import { useState } from "react";
// import Sidebar from "./Sidebar.jsx";
// import UserTable from "./UserTable.jsx";

// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-100">
      
//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="absolute top-5 left-1 bg-gray-800 text-white w-10 h-10 rounded-md"
//       >
//         ☰
//       </button>

      
//       <aside
//         className={`bg-white p-6 shadow-md h-screen transition-all duration-300 ${
//           isSidebarOpen ? "w-64 bg-black" : "w-0 overflow-hidden"
//         }`}
//       >
//         {isSidebarOpen && <Sidebar />}
//       </aside>

    
//       <main className="flex-1 p-6">
//         <UserTable />
//       </main>
//     </div>
//   );
// }

import { useState } from "react";
import Card from "./Card.jsx";
import Sidebar from "./Sidebar.jsx";
import UserTable from "./UserTable.jsx";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 transition-all">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-4  left-0  bg-gray-800 text-white w-10 h-10 rounded-md"
        >
          ☰
        </button>

        {isSidebarOpen && <Sidebar />}
      </aside>

      {/* Main Content (Including Table) */}
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

