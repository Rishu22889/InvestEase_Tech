import Sidebar from "../../../Sidebar.jsx";
import Card from "../../../Card.jsx";


export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Main Dashboard</h1>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card title="Credits Used" value="46,042" />
          <Card title="Total Credits" value="149,758" />
          <Card title="Plan Credits" value="100,000" />
        </div>
      </main>
    </div>
  );
}
