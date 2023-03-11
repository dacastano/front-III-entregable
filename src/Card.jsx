import React, { useState } from 'react';

function Card(props) {
  const [carTypeValue, setCarTypeValue] = useState('');
  const [serialNumberValue, setSerialNumberValue] = useState('');
  const [validMessage, setValidMessage] = useState('');
  const [invalidMessage, setInvalidMessage] = useState('');

  const handleCarTypeChange = (event) => {
    setCarTypeValue(event.target.value);
  };

  const handleSerialNumberChange = (event) => {
    setSerialNumberValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (carTypeValue.trim().length > 3) {
      setValidMessage('');
      setInvalidMessage('Car type should be at most 3 characters long');
      return;
    }

    if (serialNumberValue.trim().length < 6) {
      setValidMessage('');
      setInvalidMessage('Serial # should be at least 6 characters long');
      return;
    }

    setInvalidMessage('');
    setValidMessage('The car you are looking for is available');

    const formData = {
      carType: carTypeValue,
      serialNumber: serialNumberValue,
    };
    props.onSubmit(formData);
    setCarTypeValue('');
    setSerialNumberValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="carType">Car Type Code:</label>
        <input
          type="text"
          id="carType"
          value={carTypeValue}
          onChange={handleCarTypeChange}
        />
      </div>
      <div>
        <label htmlFor="serialNumber">Serial #:</label>
        <input
          type="text"
          id="serialNumber"
          value={serialNumberValue}
          onChange={handleSerialNumberChange}
        />
      </div>
      <button type="submit">Submit</button>
      <p style={{ color: 'red' }}>{invalidMessage}</p>
      <p style={{ color: 'green' }}>{validMessage}</p>
    </form>
  );
}

export default Card;
