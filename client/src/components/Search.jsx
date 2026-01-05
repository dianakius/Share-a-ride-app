import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import FloatingSticker from "./FloatingSticker";

function Search() {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8001/rides?startLocation=${startLocation}&destination=${destination}&dateTime=${dateTime}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching for rides:", error);
      alert("Failed to search for rides. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="search"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gray-50"
    >
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-8 border-2 border-black">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Search for Rides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-900">
              Start Location:
            </label>
            <input
              type="text"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
              className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter start location"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-900">
              Destination:
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter destination"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-900">
              Date and Time:
            </label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <FloatingSticker />

        <Button
          onClick={handleSearch}
          disabled={isLoading}
          buttonStyle="search"
          buttonSize="medium"
          type="button"
        >
          {isLoading ? "Searching..." : "Search Rides"}
        </Button>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="w-full max-w-4xl mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Search Results:
          </h3>
          <ul className="space-y-3">
            {searchResults.map((ride, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold">{ride.startingPoint}</span> to{" "}
                <span className="font-semibold">{ride.endingPoint}</span>
                <br />
                <span className="text-gray-600">
                  {ride.date} at {ride.time}
                </span>
                <br />
                <span className="text-green-600 font-semibold">
                  Cost: ${ride.cost}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
