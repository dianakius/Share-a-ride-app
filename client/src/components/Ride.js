import React, { useState } from "react"
import './Ride.css'




function SearchForm({ onSearch }) {
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  const [potentialStops, setPotentialStops] = useState('');
  const [carType, setCarType] = useState('');
  const [smoker, setSmoker] = useState(false);
  const [childSeat, setChildSeat] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
  const [petType, setPetType] = useState('');
  const [petDimensions, setPetDimensions] = useState('');
  const [luggageSpace, setLuggageSpace] = useState('');

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

  const handlePotentialStopsChange = (event) => {
    setPotentialStops(event.target.value);
  };

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const handleSmokerChange = (event) => {
    setSmoker(event.target.checked);
  };

  const handleChildSeatChange = (event) => {
    setChildSeat(event.target.checked);
  };

  const handlePetFriendlyChange = (event) => {
    setPetFriendly(event.target.checked);
  };

  const handlePetTypeChange = (event) => {
    setPetType(event.target.value);
  };

  const handlePetDimensionsChange = (event) => {
    setPetDimensions(event.target.value);
  };

  const handleLuggageSpaceChange = (event) => {
    setLuggageSpace(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function to handle the search with the form values
    onSearch({
      departureCity,
      destinationCity,
      travelDate,
      passengerCount,
      potentialStops,
      carType,
      smoker,
      childSeat,
      petFriendly,
      petType,
      petDimensions,
      luggageSpace
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
      <input
        type="text"
        value={potentialStops}
        onChange={handlePotentialStopsChange}
        placeholder="Potential Stops"
        className="search-input"
      />
      <input
        type="text"
        value={carType}
        onChange={handleCarTypeChange}
        placeholder="Type of Car"
        className="search-input"
      />
      <label>
        Smoker:
        <input
          type="checkbox"
          checked={smoker}
          onChange={handleSmokerChange}
        />
      </label>
      <label>
      Pet Friendly:
        <input
          type="checkbox"
          checked={petFriendly}
          onChange={handlePetFriendlyChange}
        />
      </label>
      {petFriendly && (
        <div>
          <input
            type="text"
            value={petType}
            onChange={handlePetTypeChange}
            placeholder="Type of Pet"
            className="search-input"
          />
          <input
            type="text"
            value={petDimensions}
            onChange={handlePetDimensionsChange}
            placeholder="Dimensions of Pet (e.g., Height x Width)"
            className="search-input"
          />
        </div>
      )}
      <div>
        Luggage Space:
        <label>
          Small
          <input
            type="radio"
            name="luggageSpace"
            value="small"
            checked={luggageSpace === "small"}
            onChange={handleLuggageSpaceChange}
          />
        </label>
        <label>
          Medium
          <input
            type="radio"
            name="luggageSpace"
            value="medium"
            checked={luggageSpace === "medium"}
            onChange={handleLuggageSpaceChange}
          />
        </label>
        <label>
          Large
          <input
            type="radio"
            name="luggageSpace"
            value="large"
            checked={luggageSpace === "large"}
            onChange={handleLuggageSpaceChange}
          />
        </label>
      </div>
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchForm;