/* global chrome */
import React, { useState, useEffect } from 'react';
import BlockList from './components/BlockList'; // Ensure correct import path and filename
import AddWebsiteForm from './components/AddWebsiteForm';
import ToggleSwitch from './components/ToggleSwitch';
import './App.css';

function App() {
  const [blocklist, setBlocklist] = useState([]);

  useEffect(() => {
    chrome.storage.sync.get(['blocklist'], (result) => {
      setBlocklist(result.blocklist || []);
    });
  }, []);

  const handleAddWebsite = (website) => {
    const updatedBlocklist = [...blocklist, website];
    chrome.storage.sync.set({ blocklist: updatedBlocklist });
    setBlocklist(updatedBlocklist);
  };

  const handleRemoveWebsite = (website) => {
    const updatedBlocklist = blocklist.filter((item) => item !== website);
    chrome.storage.sync.set({ blocklist: updatedBlocklist });
    setBlocklist(updatedBlocklist);
  };

  const handleToggleExtension = (isChecked) => {
    chrome.storage.sync.set({ enabled: isChecked });
  };

  return (
    <div className="App">
      <h1>Chrome Extension using ReactJS</h1>
      <ToggleSwitch onChange={handleToggleExtension} />
      <h2>Current Blocklist</h2>
      <BlockList blocklist={blocklist} onRemove={handleRemoveWebsite} /> {/* Corrected component name */}
      <h2>Add Website to Blocklist</h2>
      <AddWebsiteForm onAdd={handleAddWebsite} />
    </div>
  );
}

export default App;
