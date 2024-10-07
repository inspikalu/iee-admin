"use client";
import { baseBackendUrl } from '@/app/const';
import { useLoginContext } from '@/contexts/LoginContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaBuilding, FaUserShield } from 'react-icons/fa'; // Import icons

export interface IUser {
  id: string;
  google_id: string | null;
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  lga: string;
  state: string;
  role: 'ADMIN' | 'USER';
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

interface UserCardProps {
  user: IUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border border-gray-200 p-6 shadow-lg w-full h-full bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
        <FaUser className="mr-2 text-green-700" /> {user.name}
      </h2>
      <hr className='my-3'/>
      <p className="text-gray-600 mb-2 flex items-center">
        <FaEnvelope className="mr-2 text-green-700" /> <strong>Email: </strong> {user.email}
      </p>
      <p className="text-gray-600 mb-2 flex items-center">
        <FaPhone className="mr-2 text-green-700" /> <strong>Phone Number: </strong> {user.phoneNumber}
      </p>
      <div className="text-gray-600 mb-2 flex items-start">
        <FaMapMarkerAlt className="mr-2 text-green-700 mt-1" /> 
        <div>
          <strong>Address:</strong> <br />
          {user.address}, <br />
          {user.city}, {user.state}
        </div>
      </div>
      <p className="text-gray-600 mb-2 flex items-center">
        <FaBuilding className="mr-2 text-green-700" /> <strong>LGA: </strong> {user.lga}
      </p>
      <p className="text-gray-600 flex items-center">
        <FaUserShield className="mr-2 text-green-700" /> <strong>Role: </strong> {user.role}
      </p>
    </div>
  );
};

const ManageUsersPage = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { userData } = useLoginContext();

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${baseBackendUrl}/admin/users`, {
        headers: {
          "Authorization": `Bearer ${userData.token}`
        }
      });
      setUsers(response.data);
      setFilteredUsers(response.data); // Initialize with all users
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError('Failed to load users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    if (searchTerm === "") {
      setFilteredUsers(users); // If search is empty, show all users
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.phoneNumber.includes(searchTerm)
      );
      setFilteredUsers(filtered);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-green-700 font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-red-600 font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Manage Users</h1>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 bg-gray-200 text-black p-3 shadow-sm w-full max-w-lg"
          placeholder="Search users by name, email, or phone number..."
        />
      </div>

      {/* Users Grid */}
      {filteredUsers.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default ManageUsersPage;
