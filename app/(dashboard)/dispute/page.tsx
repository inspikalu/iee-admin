"use client"

// import React from 'react'

// const DisputePage = () => {
//   return (
//     <div>DisputePage</div>
//   )
// }

// export default DisputePage
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useState } from 'react';

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function DisputesPage() {
    const [disputes,] = useState([
        {
            id: 'D001',
            user: 'John Doe',
            type: 'Financial',
            date: '2024-10-01',
            status: 'Pending',
            amount: '500',
        },
        {
            id: 'D002',
            user: 'Jane Smith',
            type: 'Ads',
            date: '2024-10-02',
            status: 'Resolved',
            amount: '200',
        },
        // Additional sample data
        {
            id: 'D003',
            user: 'Alice Green',
            type: 'Financial',
            date: '2024-10-03',
            status: 'Escalated',
            amount: '700',
        },
        {
            id: 'D004',
            user: 'Bob White',
            type: 'Ads',
            date: '2024-10-04',
            status: 'Pending',
            amount: '150',
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [typeFilter, setTypeFilter] = useState('All');

    const chartData = {
        labels: ['Resolved', 'Pending', 'Escalated'],
        datasets: [
            {
                label: 'Disputes Status',
                data: [10, 5, 2],
                backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
            },
        ],
    };

    const handleResolveDispute = (id: string) => {
        // Handle dispute resolution logic here
        console.log(id)
    };

    // Filtering logic based on search query, status, and type
    const filteredDisputes = disputes.filter((dispute) => {
        const matchesSearch =
            dispute.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dispute.id.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus =
            statusFilter === 'All' || dispute.status === statusFilter;

        const matchesType = typeFilter === 'All' || dispute.type === typeFilter;

        return matchesSearch && matchesStatus && matchesType;
    });

    return (
        <div className="p-6 bg-white">
            <h1 className="text-2xl font-bold mb-4">Disputes Management</h1>

            {/* Dispute Overview Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Total Disputes</h2>
                    <p className="text-3xl mt-2">15</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Financial Disputes</h2>
                    <p className="text-3xl mt-2">10</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold">Ads Disputes</h2>
                    <p className="text-3xl mt-2">5</p>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-lg font-semibold">Dispute Status Breakdown</h2>
                <Line data={chartData} />
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <input
                    type="text"
                    placeholder="Search by user or dispute ID"
                    className="w-full md:w-1/3 px-4 py-2 border bg-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="w-full md:w-1/3">
                    <select
                        className="w-full px-4 py-2 border bg-gray-400"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Escalated">Escalated</option>
                    </select>
                </div>
                <div className="w-full md:w-1/3">
                    <select
                        className="w-full px-4 py-2 border bg-gray-400"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        <option value="All">All Types</option>
                        <option value="Financial">Financial</option>
                        <option value="Ads">Ads</option>
                    </select>
                </div>
            </div>

            {/* Disputes Table */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Disputes</h2>
                <table className="min-w-full bg-white text-center">
                    <thead>
                        <tr>
                            <th className="py-2">Dispute ID</th>
                            <th className="py-2">User</th>
                            <th className="py-2">Type</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Amount</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDisputes.map((dispute) => (
                            <tr key={dispute.id} className="border-t">
                                <td className="py-2">{dispute.id}</td>
                                <td className="py-2">{dispute.user}</td>
                                <td className="py-2">{dispute.type}</td>
                                <td className="py-2">{dispute.date}</td>
                                <td
                                    className={`py-2 ${dispute.status === 'Resolved'
                                            ? 'text-green-600'
                                            : dispute.status === 'Pending'
                                                ? 'text-yellow-600'
                                                : 'text-red-600'
                                        }`}
                                >
                                    {dispute.status}
                                </td>
                                <td className="py-2">&#8358;{dispute.amount}</td>
                                <td className="py-2">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleResolveDispute(dispute.id)}
                                    >
                                        Resolve
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredDisputes.length === 0 && (
                    <p className="mt-4 text-center">No disputes found.</p>
                )}
            </div>
        </div>
    );
}
