import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [carTypeValue, setCarTypeValue] = useState('');
  const [serialNumberValue, setSerialNumberValue] = useState('');

  const handleCarTypeChange = (event) => {
    setCarTypeValue(event.target.value);
  };

  const handleSerialNumberChange = (event) => {
    setSerialNumberValue(event.target.value);
  };

  const handleSubmit = (formData) => {
    console.log(formData);
    setCarTypeValue('');
    setSerialNumberValue('');
  };

  return (
    <div className="App">
      <h1>Check The Car's Availability by Serial Number</h1>
      <Card
        carTypeValue={carTypeValue}
        serialNumberValue={serialNumberValue}
        onCarTypeChange={handleCarTypeChange}
        onSerialNumberChange={handleSerialNumberChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
