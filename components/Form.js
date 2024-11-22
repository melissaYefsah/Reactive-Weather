import React, { useState } from 'react';

function Form({ fetchData }) {
  const [typedLocation, setTypedLocation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (typedLocation) {
      fetchData(typedLocation);  // Trigger the fetch when the form is submitted
      setTypedLocation('');  // Reset the input field after submitting
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="city">
          City:
          <input
            value={typedLocation}
            onChange={(e) => setTypedLocation(e.target.value)}
            type="text"
            placeholder="Enter city name"
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
