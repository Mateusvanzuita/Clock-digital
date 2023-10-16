// DigitalClock.js
import React from 'react';
import { Clock } from "./clockDigitalStyle"

const DigitalClock = ({ hours, minutes, seconds }) => {
  return (
    <Clock>
      {hours}:{minutes}
      <span style={{ color: 'gray' }}>:{seconds}</span>
    </Clock>
  );
};

export default DigitalClock;
