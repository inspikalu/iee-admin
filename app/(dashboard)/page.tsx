"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { Settings, Users, FileText, PieChart } from 'lucide-react';

const WasteManagementDashboard = () => {

  const mockData = [
    { name: 'Mon', value: 20 },
    { name: 'Tue', value: 35 },
    { name: 'Wed', value: 25 },
    { name: 'Thu', value: 40 },
    { name: 'Fri', value: 30 },
    { name: 'Sat', value: 15 },
    { name: 'Sun', value: 10 },
  ];

  const renderContent = () => {
    return (
      <div className="p-4 rounded-lg w-full">
        <h2 className="text-xl font-bold mb-4">Weekly Ad Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockData}>
            <XAxis dataKey="name" stroke="#000" />
            <YAxis stroke="#000" />
            <Tooltip />
            <Bar dataKey="value" fill="#4ade80" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className=" min-h-screen text-black">
      <div className="container mx-auto p-4">
        <main className="w-4/5">{renderContent()}</main>
      </div>
    </div>
  );
};

export default WasteManagementDashboard;
