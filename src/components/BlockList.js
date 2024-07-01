import React from 'react';

const Blocklist = ({ blocklist, onRemove }) => {
  return (
    <div className="blocklist">
      {blocklist.length > 0 ? (
        <ul>
          {blocklist.map((website, index) => (
            <li key={index}>
              {website}
              <button onClick={() => onRemove(website)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No websites in blocklist</p>
      )}
    </div>
  );
};

export default Blocklist;
