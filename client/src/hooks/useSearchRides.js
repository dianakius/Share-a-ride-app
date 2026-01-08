import { useState } from "react";
import axios from "axios";

export default function useSearchRides() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRides = async ({ startLocation, destination, dateTime }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:8001/rides", {
        params: {
          startLocation,
          destination,
          dateTime,
        },
      });

      setSearchResults(response.data);
    } catch (err) {
      console.error("Error searching for rides:", err);
      setError("Failed to search for rides. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    searchResults,
    isLoading,
    error,
    searchRides,
    clearError,
  };
}
