

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-white p-6 shadow-md h-screen">
      
//       <h2 className="text-xl font-bold text-gray-700 mb-6">Invest-Ease</h2>
//       <nav>
//         <ul className="space-y-4">
//           <li className="flex items-center space-x-2 text-blue-600 font-medium">
            
//             <span>Main Dashboard</span>
//           </li>
//           <li className="flex items-center space-x-2 text-gray-600">
            
//             <span>Users List</span>
//           </li>
//           <li className="flex items-center space-x-2 text-gray-600">
            
//             <span>Profile Settings</span>
//           </li>
//           <li className="flex items-center space-x-2 text-gray-600">
            
//             <span>Subscription</span>
//           </li>
//           <li className="flex items-center space-x-2 text-gray-600">
            
//             <span>Pricing Page</span>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// }


export default function Sidebar() {
  return (
    <div className="p-6 mt-8">
      <h2 className="text-xl font-bold text-gray-700 mb-6">Invest-Ease</h2>
      <nav>
        <ul className="space-y-4">
          <li className="text-blue-600 font-medium">Main Dashboard</li>
          <li className="text-gray-600">Users List</li>
          <li className="text-gray-600">Profile Settings</li>
          <li className="text-gray-600">Subscription</li>
          <li className="text-gray-600">Pricing Page</li>
          <li className="text-gray-600 mt-110">logout</li>
        </ul>
      </nav>
    </div>
  );
}
