import React, { useState } from "react";
import axios from "axios";
import "./Search.css"; // Import the CSS file for Search component

const Search = () => {
    const [startLocation, setStartLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            // Make an API call to search for available rides
            const response = await axios.get(`http://localhost:8001/rides?startLocation=${startLocation}&destination=${destination}&dateTime=${dateTime}`);
            
            // Set the search results in state
            setSearchResults(response.data);
        } catch (error) {
            console.error("Error searching for rides:", error);
        }
    }

    return (
        <div id="search" className="search-container">
            <div className="search-form">
                <div>
                    <label>Start Location:</label>
                    <input type="text" value={startLocation} onChange={(e) => setStartLocation(e.target.value)} className="search-input" />
                </div>
                <div>
                    <label>Destination:</label>
                    <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} className="search-input" />
                </div>
                <div>
                    <label>Date and Time:</label>
                    <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} className="search-input" />
                </div>
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>

            {/* Display search results */}
            {searchResults.length > 0 && (
                <div className="search-results">
                    <h3>Search Results:</h3>
                    <ul>
                        {searchResults.map((ride, index) => (
                            <li key={index}>
                                {ride.startingPoint} to {ride.endingPoint}, {ride.date} at {ride.time}, Cost: {ride.cost}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Search;

