import React from 'react';
import './About.scss';

export default function About() {
  return (
    <div className="container">
      <h2 className="title">About Me</h2>
      <div className="container_item">
        <img src="/assets/elice.png" alt="교육 과정 로고 입니다." />
        <div>
          <div>
            <h3>엘리스 IOT 1기</h3>
            <span>2022.12 ~ 2023.05 수료</span>
          </div>
          {/* <ul>
            <li>사</li>
            <li>랑</li>
            <li>해</li>
            <li>요</li>
          </ul> */}
        </div>
      </div>
      <div className="container_item">
        <img src="/assets/dankook.webp" alt="학교 로고 입니다." />
        <div>
          <h3>단국대학교 (전자전기공학부)</h3>
          <span>2016.03 ~ 2023.03 졸업</span>
        </div>
      </div>
    </div>
  );
}
