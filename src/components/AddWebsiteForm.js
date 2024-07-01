import React, { useState } from 'react';

const AddWebsiteForm = ({ onAdd }) => {
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website.trim()) {
      onAdd(website.trim());
      setWebsite('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter website URL"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <button type="submit">Add Website</button>
    </form>
  );
};

export default AddWebsiteForm;
