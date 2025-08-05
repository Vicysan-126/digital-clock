import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString(); // e.g., 10:23:45 AM
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="clock-container">
      <h1>🕒 Digital Clock</h1>
      <div className="clock">{time}</div>
    </div>
  );
}

export default App;
