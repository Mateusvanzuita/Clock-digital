// toogleTheme.js
import React from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <div>
      {isDarkMode ? (
        <BsSun size={40} onClick={toggleTheme} />
      ) : (
        <BsMoonStars size={40} onClick={toggleTheme} />
      )}
    </div>
  );
};

export default ThemeToggle;
