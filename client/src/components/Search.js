import React, { useState } from "react";
import axios from "axios";
import "./Search.css"; // Import the CSS file for Search component

const Search = () => {
    const [startLocation, setStartLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [dateTime, setDateTime] = useState('');

    const handleSearch = async () => {
        try {
            // Make an API call to search for available rides
            const response = await axios.get(`http://localhost:8001/rides?startLocation=${startLocation}&destination=${destination}&dateTime=${dateTime}`);
            
            // Process the response and display the search results
            console.log(response.data); // Assuming the response contains the list of matching rides
        } catch (error) {
            console.error("Error searching for rides:", error);
        }
    }

    return (
        <div id="search" className="search-container">
            <h2>Search for a Ride</h2>
            <div className="search-form">
                <label>Start Location:</label>
                <input type="text" value={startLocation} onChange={(e) => setStartLocation(e.target.value)} className="search-input" />
            </div>
            <div className="search-form">
                <label>Destination:</label>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} className="search-input" />
            </div>
            <div className="search-form">
                <label>Date and Time:</label>
                <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} className="search-input" />
            </div>
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
}

export default Search;
