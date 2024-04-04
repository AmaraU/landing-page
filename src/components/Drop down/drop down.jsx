import React, { useState } from 'react';

function DropdownExample() {
  // State to manage the selected value
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle changes in the dropdown
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {/* Dropdown */}
      <select value={Menu} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      
      {/* Display selected value */}
      {selectedOption && <p>Selected option: {Menu}</p>}
    </div>
  );
}

export default DropdownExample;
