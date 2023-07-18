import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">MINTO</h1>
      <ul className="nav_container">
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
