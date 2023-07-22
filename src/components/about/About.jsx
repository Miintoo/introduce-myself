import React, { forwardRef } from 'react';
import styles from './About.module.scss';
import Profile from '../../assets/profile.png';

export default forwardRef(function About(props, ref) {
  return (
    <div className={styles.container} ref={ref}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.profile}>
        <img src={Profile} alt="프로필 이미지입니다." />
        <ul>
          <li>김민혁</li>
          <li>1996.04.15</li>
          <li>단국대학교 전자전기공학부 졸업</li>
          <li>엘리스 IOT 1기 수료</li>
          <li>최근에는 Redux, Redux-toolkit, Nextjs에 관심이 생겨 공부하고 있습니다.</li>
        </ul>
      </div>
    </div>
  );
});
