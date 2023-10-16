import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

import 'react-clock/dist/Clock.css';

export default function AnalogClock() {
  const [value, setValue] = useState(new Date());

  // Verifique se a aplicação está no lado do cliente antes de usar useEffect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => setValue(new Date()), 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className="analog-clock-container">
      <div className="clock-frame">
        <Clock
          renderNumbers
          value={value}
          size={200}
        />
      </div>
    </div>
  );
}
