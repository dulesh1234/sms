// Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
        <ul className="space-y-4">
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Analytics</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Overview</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-medium">Total Users</h3>
            <p className="text-2xl font-bold mt-2">1,245</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-medium">Revenue</h3>
            <p className="text-2xl font-bold mt-2">$8,490</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-medium">New Orders</h3>
            <p className="text-2xl font-bold mt-2">324</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

