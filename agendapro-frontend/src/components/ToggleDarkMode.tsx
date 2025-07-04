import { useEffect, useState } from 'react';

export default function ToggleDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggle = () => setDarkMode(prev => !prev);

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-3 focus:outline-none"
      aria-label="Ativar o tema escuro"
      type="button"
    >
      <div
        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300
          ${darkMode ? 'bg-gray' : 'bg-black'}`}
      >
        <div
          className={`w-6 h-6 rounded-full bg-primary shadow-md transform transition-transform duration-300
            ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
        />
      </div>
    </button>
  );
}
