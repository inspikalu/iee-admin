"use client"
import React, { useState, useEffect } from 'react';
import { Settings, Users, FileText, PieChart } from 'lucide-react';
import { usePathname } from 'next/navigation';

const links = [
  {
    id: 'analytics',
    icon: <PieChart size={20} />,
    label: 'Analytics',
    path: '/',
  },
  {
    id: 'manageAds',
    icon: <FileText size={20} />,
    label: 'Manage Ads',
    path: '/manage-ads',
  },
  {
    id: 'manageUsers',
    icon: <Users size={20} />,
    label: 'Manage Users',
    path: '/manage-users',
  },
  {
    id: 'profile',
    icon: <Settings size={20} />,
    label: 'Profile',
    path: '/profile',
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const currentLink = links.find((link) => link.path === pathname);
    if (currentLink) {
      setActiveTab(currentLink.id);
    }
  }, [pathname, links]);

  return (
    <nav className="w-full pr-4">
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.id}>
            <button
              className={`flex items-center space-x-2 w-full p-2 rounded ${activeTab === link.id ? 'bg-green-600' : 'hover:bg-gray-800'
                }`}
              onClick={() => setActiveTab(link.id)}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Sidebar;
