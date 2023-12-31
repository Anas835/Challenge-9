import React, { useState } from 'react';

const StateManipulation = () => {
  const [dataObj, setDataObj] = useState({ property1: '', property2: '' });
  const [dataArray, setDataArray] = useState(['initialValue1', 'initialValue2']);
  const [inputValue, setInputValue] = useState('');

  const handleObjInputChange = (e) => {
    const { name, value } = e.target;
    setDataObj({ ...dataObj, [name]: value });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleObjectReset = () => {
    setDataObj({ property1: '', property2: '' });
  };

  const handleArraySubmit = () => {
    if (inputValue) {
      setDataArray([...dataArray, inputValue]);
      setInputValue('');
      // Here you can also submit the object properties
      submitObject(dataObj);
    }
  };

  const submitObject = (data) => {
    // Perform submission logic for object properties
    console.log('Submitting Object:', data);
    // You can perform an API call or any logic here to submit the object properties
  };

  const handleArrayReset = () => {
    setDataArray([]);
  };

  return (
    <div>
      <h2>Manipulating State with useState</h2>
      <div>
        <h3>Object:</h3>
        {Object.keys(dataObj).map((property, index) => (
          <input
            key={index}
            type="text"
            name={property}
            value={dataObj[property]}
            onChange={handleObjInputChange}
            placeholder={`Property ${index + 1}`}
          />
        ))}
        <button onClick={handleObjectReset}>Reset Object</button>
      </div>
      <div>
        <h3>Array:</h3>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add to Array"
        />
        <button onClick={handleArraySubmit}>Submit</button>
        <button onClick={handleArrayReset}>Reset Array</button>
      </div>
      <div>
        <h3>Object State:</h3>
        <pre>{JSON.stringify(dataObj, null, 2)}</pre>
      </div>
      <div>
        <h3>Array State:</h3>
        <pre>{JSON.stringify(dataArray, null, 2)}</pre>
      </div>
    </div>
  );
};

export default StateManipulation;
