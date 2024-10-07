"use client"
import React, { useState, useEffect } from 'react';
import { Users, FileText, PieChart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import Image from 'next/image';
import { Poppins } from "next/font/google"
import { FiAlertTriangle } from 'react-icons/fi'
import { FcSupport } from 'react-icons/fc';

const poppins = Poppins({
  weight: ['400', "100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
})

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
  },
  {
    id: 'dispute',
    icon: <FiAlertTriangle size={20} />,
    label: 'Dispute',
    path: '/dispute',
  },
  {
    id: 'support',
    icon: <FcSupport color='black' size={20} />,
    label: 'Support',
    path: '/support',
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
    <nav className={`w-full h-screen grid grid-rows-[4.3rem_3fr] bg-[#F1F2F7] ${poppins.className}`}>
      <div className='border-b border-b-[#C8CBD9] flex items-center justify-start px-3'>
        <Image
          src="/logo_1.png"
          alt="Example Image"
          width={100}
          height={100}
        />
      </div>
      <ul className="space-y-2 h-[90%] mt-3 rounded-[1.75rem] text-sm px-3">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={`${link.path}`}
              className={`flex items-center justify-center md:justify-start space-x-2 w-full py-4 px-3 rounded-md ${activeTab === link.id ? 'bg-green-200 bg-opacity-60 text-green-600 font-bold ' : 'hover:bg-green-200'
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
