function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">📈 Overview</li>
        <li className="hover:text-blue-400 cursor-pointer">📊 Analytics</li>
        <li className="hover:text-blue-400 cursor-pointer">📚 Reports</li>
        <li className="hover:text-blue-400 cursor-pointer">🧠 Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
