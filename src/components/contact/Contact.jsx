import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <div className="container">
      <h2 className="title">About Me</h2>
      <ul className="contact_logo_container">
        <li>
          <a href="https://github.com/Miintoo">
            <img src="/assets/github.png" alt="깃헙 로고 이미지" />
          </a>
        </li>
        <li>
          <a href="https://velog.io/@xpeed96">
            <img src="/assets/velog.png" alt="블로그 로고 이미지" />
          </a>
        </li>
        <li>
          <a href="mailto:xpeed96@gmail.com">
            <img src="/assets/mail.png" alt="메일 로고 이미지" />
          </a>
        </li>
      </ul>
    </div>
  );
}
