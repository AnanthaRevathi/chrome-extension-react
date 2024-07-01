import React, { useState, useEffect } from 'react';

const ToggleSwitch = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    chrome.storage.sync.get(['enabled'], (result) => {
      setIsChecked(result.enabled || false);
    });
  }, []);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className="toggle-switch">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="slider round"></span>
      </label>
      <span>Enable Extension</span>
    </div>
  );
};

export default ToggleSwitch;
