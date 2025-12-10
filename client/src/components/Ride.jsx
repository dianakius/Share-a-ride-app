import React, { useState } from "react";

function Ride() {
  const [formData, setFormData] = useState({
    departureCity: '',
    destinationCity: '',
    travelDate: '',
    passengerCount: '',
    potentialStops: '',
    carType: '',
    smoker: false,
    childSeat: false,
    petFriendly: false,
    petType: '',
    petDimensions: '',
    luggageSpace: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ride form submitted:', formData);
    // Add your API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-8 border-2 border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Create Your Ride
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="departureCity"
                value={formData.departureCity}
                onChange={handleChange}
                placeholder="Departure City"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleChange}
                placeholder="Destination City"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
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
                placeholder="Passenger Count"
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="potentialStops"
                value={formData.potentialStops}
                onChange={handleChange}
                placeholder="Potential Stops"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                placeholder="Type of Car"
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
              <span className="text-gray-900 font-medium">Smoker</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="childSeat"
                checked={formData.childSeat}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-900 font-medium">Child Seat</span>
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

          {/* Conditional Pet Fields */}
          {formData.petFriendly && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <input
                type="text"
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                placeholder="Type of Pet"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="petDimensions"
                value={formData.petDimensions}
                onChange={handleChange}
                placeholder="Pet Dimensions (e.g., Small, Medium)"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Luggage Space Radio Buttons */}
          <div className="py-4">
            <label className="block text-gray-900 font-semibold mb-3">
              Luggage Space:
            </label>
            <div className="flex flex-wrap gap-4">
              {['small', 'medium', 'large'].map((size) => (
                <label key={size} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="luggageSpace"
                    value={size}
                    checked={formData.luggageSpace === size}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-gray-900 capitalize">{size}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            Create Ride
          </button>
        </form>
      </div>
    </div>
  );
}

export default Ride;