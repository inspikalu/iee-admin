"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { FaMoneyBill, FaArrowUp, FaArrowDown, FaUser } from "react-icons/fa";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Dummy data for the charts
const dummyRevenueData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            label: "Revenue",
            data: [1200, 1900, 3000, 5000, 2300, 4500],
            fill: false,
            backgroundColor: "rgba(46, 204, 113, 0.2)", // Subtle green
            borderColor: "#2ecc71", // Green for the line
        },
    ],
};

const dummyExpenseData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            label: "Expenses",
            data: [800, 1500, 2500, 3500, 1800, 3000],
            fill: false,
            backgroundColor: "rgba(231, 76, 60, 0.2)", // Subtle red
            borderColor: "#e74c3c", // Red for the line
        },
    ],
};

// Components
const FinancePage = () => {
    return (
        <div className="p-10 bg-gray-50 font-sans">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Finance Dashboard</h1>

            {/* Revenue and Expense Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-around mb-10">
                <div className="bg-white p-5 w-full shadow-md text-center">
                    <FaMoneyBill size={40} color="#2ecc71" />
                    <h3 className="text-lg text-gray-800 my-2">Total Revenue</h3>
                    <p className="text-2xl font-bold text-green-600">&#8358;12,000</p>
                    <Line data={dummyRevenueData} />
                </div>

                <div className="bg-white p-5 w-full shadow-md text-center">
                    <FaArrowDown size={40} color="#e74c3c" />
                    <h3 className="text-lg text-gray-800 my-2">Total Expenses</h3>
                    <p className="text-2xl font-bold text-red-600">&#8358;9,000</p>
                    <Line data={dummyExpenseData} />
                </div>

                <div className="bg-white p-5 w-full shadow-md text-center">
                    <FaArrowUp size={40} color="#3498db" />
                    <h3 className="text-lg text-gray-800 my-2">Net Profit</h3>
                    <p className="text-2xl font-bold text-blue-600">&#8358;3,000</p>
                    <p className="text-sm text-gray-500">Monthly Profit</p>
                </div>
            </div>

            {/* Membership Overview */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 justify-around mb-10">
                <div className="bg-white p-5 shadow-md text-center">
                    <FaUser size={40} color="#2ecc71" />
                    <h3 className="text-lg text-gray-800 my-2">Active Memberships</h3>
                    <p className="text-2xl font-bold text-green-600">1,500</p>
                    <p className="text-sm text-gray-500">Premium Members: 500</p>
                    <p className="text-sm text-gray-500">Free Members: 1,000</p>
                </div>

                <div className="bg-white  p-5 shadow-md text-center">
                    <FaArrowUp size={40} color="#2ecc71" />
                    <h3 className="text-lg text-gray-800 my-2">Renewal Rate</h3>
                    <p className="text-2xl font-bold text-green-600">80%</p>
                    <p className="text-sm text-gray-500">Last Month: 75%</p>
                </div>

                <div className="bg-white p-5  shadow-md text-center">
                    <FaArrowDown size={40} color="#e74c3c" />
                    <h3 className="text-lg text-gray-800 my-2">Churn Rate</h3>
                    <p className="text-2xl font-bold text-red-600">5%</p>
                    <p className="text-sm text-gray-500">Last Month: 8%</p>
                </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white p-5 shadow-md mb-10">
                <h2 className="text-2xl text-gray-800 mb-5 text-center">Transaction History</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="bg-green-600 text-white py-3 text-left px-4">Date</th>
                            <th className="bg-green-600 text-white py-3 text-left px-4">Type</th>
                            <th className="bg-green-600 text-white py-3 text-left px-4">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b py-3 px-4">2024-01-01</td>
                            <td className="border-b py-3 px-4">Revenue</td>
                            <td className="border-b py-3 px-4">&#8358;500</td>
                        </tr>
                        <tr>
                            <td className="border-b py-3 px-4">2024-01-02</td>
                            <td className="border-b py-3 px-4">Expense</td>
                            <td className="border-b py-3 px-4">&#8358;200</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinancePage;
