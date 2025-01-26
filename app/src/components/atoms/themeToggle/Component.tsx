'use client';

import { useState } from 'react';
import Styles from './style.module.css';

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState('light');


  const setLightMode = () => {
    setActiveTheme('light');
    document.body.className = 'light-theme';
  };

  const setDarkMode = () => {
    setActiveTheme('dark');
    document.body.className = 'dark-theme';
  };

  return (
    <div className={Styles['toggle-group']}>
      <button
        type='button'
        className={`${Styles['toggle-button']} ${Styles.button} ${activeTheme === 'light' ? Styles.active : ''}`}
        onClick={setLightMode}
      >
        Light Mode
      </button>
      <button
        type='button'
        className={`${Styles['toggle-button']} ${Styles.button} ${activeTheme === 'dark' ? Styles.active : ''}`}
        onClick={setDarkMode}
      >
        Dark Mode
      </button>
    </div>
  );
}