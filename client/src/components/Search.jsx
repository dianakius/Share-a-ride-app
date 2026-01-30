import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

function Search() {
  const [searchData, setSearchData] = useState({
    startLocation: "",
    destination: "",
    dateTime: "",
  });
  const [rides, setRides] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setSearched(true);

    try {
      const params = new URLSearchParams();
      if (searchData.startLocation) params.append("startLocation", searchData.startLocation);
      if (searchData.destination) params.append("destination", searchData.destination);
      if (searchData.dateTime) params.append("dateTime", searchData.dateTime);

      const response = await axios.get(
        `http://localhost:8001/ride/search?${params.toString()}`
      );

      if (response.data.status) {
        setRides(response.data.rides);
      } else {
        setError("No rides found");
        setRides([]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setError("Failed to search rides. Please try again.");
      setRides([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Search for a Ride
          </h2>

          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  From
                </label>
                <input
                  type="text"
                  name="startLocation"
                  value={searchData.startLocation}
                  onChange={handleChange}
                  placeholder="e.g., Athens"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  To
                </label>
                <input
                  type="text"
                  name="destination"
                  value={searchData.destination}
                  onChange={handleChange}
                  placeholder="e.g., Thessaloniki"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="dateTime"
                  value={searchData.dateTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <Button
              type="submit"
              buttonStyle="search"
              buttonSize="large"
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Search Rides"}
            </Button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Search Results */}
        {searched && !isLoading && (
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {rides.length > 0
                ? `Found ${rides.length} ride${rides.length > 1 ? "s" : ""}`
                : "No rides found"}
            </h3>

            {rides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rides.map((ride) => (
                  <div
                    key={ride._id}
                    className="border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">From</p>
                          <p className="text-lg font-bold text-gray-900">
                            {ride.startingPoint}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">To</p>
                          <p className="text-lg font-bold text-gray-900">
                            {ride.endingPoint}
                          </p>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-semibold">
                            {new Date(ride.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-semibold">{ride.time}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Cost:</span>
                          <span className="font-semibold text-green-600">
                            €{ride.cost}
                          </span>
                        </div>
                        {ride.driver && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Driver:</span>
                            <span className="font-semibold">
                              {ride.driver.username}
                            </span>
                          </div>
                        )}
                      </div>

                      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Book Ride
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">
                Try adjusting your search criteria
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;