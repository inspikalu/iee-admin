"use client"
import React, { useState, useEffect } from 'react';
import { Users, FileText, PieChart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';

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
    id: 'finance',
    icon: <FaMoneyBillTrendUp size={20} />,
    label: 'Finance',
    path: '/finance',
  }
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
  }, [pathname]);

  return (
    <nav className="w-full h-screen">
      <ul className="space-y-2 h-[90%] mt-3 rounded-[1.75rem] text-sm">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={`${link.path}`}
              className={`flex items-center justify-center md:justify-start space-x-2 w-full py-4 px-3 ${activeTab === link.id ? 'bg-[#86f0a954] border-r-[.5rem] border-r-green-600 ' : 'hover:bg-green-200'
                }`}
              onClick={() => setActiveTab(link.id)}
            >
              {link.icon}
              <span className='hidden md:block'>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Sidebar;
