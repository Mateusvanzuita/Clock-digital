import React, { useState, useEffect } from 'react';
import { ButtonComand, ButtonReset, Counter } from './cronometroStyle';

export default function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 10); // Atualização a cada 10 milissegundos (0.01 segundos)
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    return `${minutes}m ${seconds}s ${milliseconds.toString().padStart(3, '0')}ms`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Counter>{formatTime(elapsedTime)}</Counter>
      <div style={{ marginTop: '10px' }}>
        <ButtonComand style={{ backgroundColor: running ? '#1E90FF' : '#008000' }} onClick={startStop}>
          {running ? 'Pause' : 'Start'}
        </ButtonComand>
        <ButtonReset onClick={reset}>Reset</ButtonReset>
      </div>
    </div>
  );
}
