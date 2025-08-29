import React, { useState, useEffect } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(response => response.text())
      .then(data => setBackendMessage(data))
      .catch(error => console.error('Error fetching backend message:', error));
  }, []);

  return (
    <div>
      <h1>Hello from Frontend!</h1>
      <p>{backendMessage}</p>
    </div>
  );
}

export default App;
