import React, { useState, useEffect } from 'react';
import { useAuth } from './ContextAuth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('YOUR_API_URL/user/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-3xl font-bold text-gray-600">
            {userData?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{userData?.name || 'User'}</h1>
            <p className="text-gray-600">{userData?.email}</p>
            <p className="text-sm text-gray-500 mt-1">Member since {new Date(userData?.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Ride Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-gray-600 mb-2">Rides Taken</h3>
          <p className="text-3xl font-bold text-blue-600">{userData?.ridesTaken || 0}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-gray-600 mb-2">Rides Offered</h3>
          <p className="text-3xl font-bold text-green-600">{userData?.ridesOffered || 0}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-gray-600 mb-2">Rating</h3>
          <p className="text-3xl font-bold text-yellow-600">{userData?.rating || 'N/A'}</p>
        </div>
      </div>

      {/* Account Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition">
            Edit Profile
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition">
            Change Password
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition">
            Payment Methods
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition">
            Notification Preferences
          </button>
          <button 
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;