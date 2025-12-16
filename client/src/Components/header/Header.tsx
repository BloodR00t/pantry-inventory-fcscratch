import React, { useEffect, useState } from "react";
import "./header.css";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

export default function Header() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <h1 className="brand-title">🐶 Pantry Pal</h1>
          <p className="brand-subtitle">Track inventory. Stop duplicates.</p>
        </div>

        <button className="theme-btn" onClick={toggleTheme} type="button">
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}



// import './header.css';

// const Header = () => {
//   return (
//     <>
//       <div className='header-container'>
//         <div className='title' />
//         <h1>🐶Pantry Pal</h1>
//         <div className='slogan'>
//           <h2>
//             <em>Helping you fetch your groceries</em>
//           </h2>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
