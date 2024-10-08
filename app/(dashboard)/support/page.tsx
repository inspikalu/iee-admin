
"use client"
import React from 'react';

// Define types for component props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'ghost' | 'outline' | 'solid';
    className?: string;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    className?: string;
};

// Generic Card Component
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`bg-white rounded shadow p-4 ${className}`}>{children}</div>
);

// Button Component (using Tailwind CSS for styling)
const Button: React.FC<ButtonProps> = ({ variant, className = '', children, ...props }) => {
    const baseStyle = 'px-4 py-2 font-medium text-sm rounded';
    const variants = {
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
        solid: 'bg-blue-600 text-white hover:bg-blue-700',
    };
    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

// Input and Textarea components
const Input: React.FC<InputProps> = ({ className = '', ...props }) => (
    <input className={`border border-gray-300 rounded px-3 py-2 ${className}`} {...props} />
);

const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => (
    <textarea className={`border border-gray-300 rounded px-3 py-2 ${className}`} {...props} />
);

const SupportPage: React.FC = () => {

    return (
        <div className="flex h-screen bg-white">

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Messaging System */}
                        <Card>
                            <h2 className="text-lg font-bold mb-2">Messaging System</h2>
                            <Input placeholder="Search messages..." className="mb-2" />
                            <div className="space-y-2">
                                <div className="bg-white p-2 rounded shadow">
                                    <p className="font-semibold">John Doe</p>
                                    <p className="text-sm text-gray-600">Query about recycling electronics...</p>
                                </div>
                                <div className="bg-white p-2 rounded shadow">
                                    <p className="font-semibold">Jane Smith</p>
                                    <p className="text-sm text-gray-600">Dispute regarding waste collection...</p>
                                </div>
                            </div>
                        </Card>

                        {/* Notification System */}
                        <Card>
                            <h2 className="text-lg font-bold mb-2">Notifications</h2>
                            <div className="space-y-2">
                                <div className="bg-white p-2 rounded shadow">
                                    <p className="text-sm">New dispute filed by user #1234</p>
                                </div>
                                <div className="bg-white p-2 rounded shadow">
                                    <p className="text-sm">Urgent: Missed collection reported in Zone B</p>
                                </div>
                            </div>
                        </Card>

                        {/* User Feedback */}
                        <Card>
                            <h2 className="text-lg font-bold mb-2">User Feedback</h2>
                            <div className="space-y-2">
                                <div className="bg-white p-2 rounded shadow">
                                    <p className="font-semibold">Support Rating: 4.5/5</p>
                                    <p className="text-sm text-gray-600">Quick response to my query. Very helpful!</p>
                                </div>
                                <div className="bg-white p-2 rounded shadow">
                                    <p className="font-semibold">App Rating: 3/5</p>
                                    <p className="text-sm text-gray-600">The app is good but could use some improvements...</p>
                                </div>
                            </div>
                        </Card>

                        {/* Feature Requests */}
                        <Card className="md:col-span-2 lg:col-span-3">
                            <h2 className="text-lg font-bold mb-2">Feature Requests</h2>
                            <Textarea placeholder="Submit a new feature request..." className="mb-2" />
                            <Button variant="solid">Submit Request</Button>
                            <div className="mt-4 space-y-2">
                                <div className="bg-white p-2 rounded shadow">
                                    <p className="font-semibold">Waste Sorting Guide</p>
                                    <p className="text-sm text-gray-600">It would be helpful to have an in-app guide for proper waste sorting.</p>
                                </div>
                                <div className="bg-white p-2 rounded shadow">
                                    <p className="font-semibold">Real-time Collection Tracking</p>
                                    <p className="text-sm text-gray-600">Add a feature to track waste collection vehicles in real-time.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SupportPage;
