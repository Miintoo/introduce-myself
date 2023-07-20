/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Header.scss';

export default function Header({ onHomeClick, onAboutClick, onSkillClick, onContactClick }) {
  return (
    <header className="header">
      <h1 className="title">
        <a href="/">MINTO</a>
      </h1>
      <ul className="nav_container">
        <li onClick={onHomeClick}>Home</li>
        <li onClick={onAboutClick}>About</li>
        <li onClick={onSkillClick}>Skill</li>
        <li onClick={onContactClick}>Contact</li>
      </ul>
    </header>
  );
}
