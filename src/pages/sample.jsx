// src/StreamSelector.js
import React, { useState } from 'react';

const StreamSelector = () => {
  const [stream, setStream] = useState('');
  const [course, setCourse] = useState('');

  const streams = {
    Science: ['Physics', 'Chemistry', 'Biology'],
    Commerce: ['Business Studies', 'Accountancy', 'Economics'],
    Humanities: ['Psychology', 'Sociology', 'Political Science'],
  };

  return (
    <div className="stream-selector">
      <label htmlFor="stream">Select Stream:</label>
      <select id="stream" value={stream} onChange={(e) => {
        setStream(e.target.value);
        setCourse(''); // Reset course selection
      }}>
        <option value="">--Select Stream--</option>
        {Object.keys(streams).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>

      {stream && (
        <>
          <label htmlFor="course">Select Course:</label>
          <select id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">--Select Course--</option>
            {streams[stream].map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </>
      )}

      <button className="submit-button" onClick={() => alert(`Selected Stream: ${stream}, Course: ${course}`)}>
        Submit
      </button>
    </div>
  );
};

export default StreamSelector;