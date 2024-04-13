import React, { useState } from 'react';
import './SearchForm.css'; 

function SearchForm({ onSearch }) {
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengerCount, setPassengerCount] = useState('');

  const handleDepartureCityChange = (event) => {
    setDepartureCity(event.target.value);
  };

  const handleDestinationCityChange = (event) => {
    setDestinationCity(event.target.value);
  };

  const handleTravelDateChange = (event) => {
    setTravelDate(event.target.value);
  };

  const handlePassengerCountChange = (event) => {
    setPassengerCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    onSearch({
      departureCity,
      destinationCity,
      travelDate,
      passengerCount
    });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={departureCity}
        onChange={handleDepartureCityChange}
        placeholder="Departure City"
        className="search-input"
      />
      <input
        type="text"
        value={destinationCity}
        onChange={handleDestinationCityChange}
        placeholder="Destination City"
        className="search-input"
      />
      <input
        type="date"
        value={travelDate}
        onChange={handleTravelDateChange}
        placeholder="Travel Date"
        className="search-input"
      />
      <input
        type="number"
        value={passengerCount}
        onChange={handlePassengerCountChange}
        placeholder="Passenger Count"
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchForm;
