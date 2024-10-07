"use client"
import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaTrashAlt, FaRecycle, FaUsers, FaDollarSign } from 'react-icons/fa';

const revenueData = [
  { day: '01', lastWeek: 650000, last6Days: 700000 },
  { day: '02', lastWeek: 730000, last6Days: 680000 },
  { day: '03', lastWeek: 710000, last6Days: 740000 },
  { day: '04', lastWeek: 680000, last6Days: 720000 },
  { day: '05', lastWeek: 720000, last6Days: 750000 },
  { day: '06', lastWeek: 750000, last6Days: 790000 },
];

const orderTimeData = [
  { name: 'Morning', value: 28 },
  { name: 'Afternoon', value: 40 },
  { name: 'Evening', value: 32 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

// Define types for Card component props
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
    {children}
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <Card>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Total Revenue</span>
            <FaDollarSign className="text-gray-400" />
          </div>
          <div className="text-2xl font-bold">IDR 7,852,000</div>
          <p className="text-xs text-gray-500">+2.1% from last week</p>
        </Card>

        <Card>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Total Orders</span>
            <FaRecycle className="text-gray-400" />
          </div>
          <div className="text-2xl font-bold">2,568</div>
          <p className="text-xs text-gray-500">-2.1% from last week</p>
        </Card>

        <Card>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Active Users</span>
            <FaUsers className="text-gray-400" />
          </div>
          <div className="text-2xl font-bold">11,257</div>
          <p className="text-xs text-gray-500">+5.4% from last month</p>
        </Card>

        <Card>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">Waste Collected</span>
            <FaTrashAlt className="text-gray-400" />
          </div>
          <div className="text-2xl font-bold">1,234 kg</div>
          <p className="text-xs text-gray-500">+10.2% from last month</p>
        </Card>
      </div>

      {/* Revenue and Order Time Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <Card>
          <h2 className="text-lg font-semibold mb-4">Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="lastWeek" fill="#8884d8" name="Last Week" />
              <Bar dataKey="last6Days" fill="#82ca9d" name="Last 6 Days" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold mb-4">Order Time Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderTimeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {orderTimeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4">
            {orderTimeData.map((entry, index) => (
              <div key={`legend-${index}`} className="flex items-center mx-2">
                <div className="w-3 h-3 mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span>{entry.name}: {entry.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Most Ordered Waste Products and User Ratings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <h2 className="text-lg font-semibold mb-4">Most Ordered Waste Products</h2>
          <div className="space-y-4">
            {[
              { name: 'Plastic Bottles', price: 'IDR 45,000', img: '/logo.png' },
              { name: 'Paper Waste', price: 'IDR 30,000', img: '/logo.png' },
              { name: 'Metal Scraps', price: 'IDR 75,000', img: '/logo.png' },
              { name: 'E-waste', price: 'IDR 100,000', img: '/logo.png' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <img src={item.img} alt={item.name} className="w-8 h-8 rounded-full mr-2" />
                <div className="flex-grow">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold mb-4">User Ratings</h2>
          <div className="space-y-2">
            {[
              { name: 'Overall', value: 4.5 },
              { name: 'App Usability', value: 4.2 },
              { name: 'Transaction Experience', value: 4.7 },
              { name: 'Customer Support', value: 4.3 },
            ].map((rating, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32">{rating.name}</div>
                <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(rating.value / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="w-12 text-right">{rating.value.toFixed(1)}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
