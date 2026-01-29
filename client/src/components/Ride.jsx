import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Ride() {
  const [formData, setFormData] = useState({
    startingPoint: '',
    endingPoint: '',
    date: '',
    time: '',
    cost: '',
    passengerCount: '',
    carType: '',
    smoker: false,
    childSeat: false,
    petFriendly: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        setError("Please login to create a ride");
        setIsLoading(false);
        setTimeout(() => navigate("/login"), 2000);
        return;
      }

      const rideData = {
        startingPoint: formData.startingPoint,
        endingPoint: formData.endingPoint,
        date: formData.date,
        time: formData.time,
        cost: parseFloat(formData.cost),
      };

      const response = await axios.post(
        "http://localhost:8001/ride/create",
        rideData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status) {
        setSuccess("Ride created successfully!");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setError(response.data.msg || "Failed to create ride");
      }
    } catch (error) {
      console.error("Error creating ride:", error);
      setError(error.response?.data?.msg || "Failed to create ride. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-8 border-2 border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Create Your Ride
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="startingPoint"
                value={formData.startingPoint}
                onChange={handleChange}
                placeholder="Starting Point (e.g., Athens)"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="endingPoint"
                value={formData.endingPoint}
                onChange={handleChange}
                placeholder="Destination (e.g., Thessaloniki)"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                placeholder="Cost (€)"
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="number"
                name="passengerCount"
                value={formData.passengerCount}
                onChange={handleChange}
                placeholder="Available Seats"
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-6 py-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="smoker"
                checked={formData.smoker}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-900 font-medium">Smoking Allowed</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="childSeat"
                checked={formData.childSeat}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-900 font-medium">Child Seat Available</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="petFriendly"
                checked={formData.petFriendly}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-900 font-medium">Pet Friendly</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating Ride..." : "Create Ride"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Ride;