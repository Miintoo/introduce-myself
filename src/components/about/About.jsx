import React, { forwardRef } from 'react';
import styles from './About.module.scss';

export default forwardRef(function About(props, ref) {
  return (
    <div className={styles.container} ref={ref}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.container_item}>
        <img src="/assets/elice.png" alt="교육 과정 로고 입니다." />
        <div>
          <div>
            <h3>엘리스 IOT 1기</h3>
            <span>2022.12 ~ 2023.05 수료</span>
          </div>
        </div>
      </div>
      <div className={styles.container_item}>
        <img src="/assets/dankook.webp" alt="학교 로고 입니다." />
        <div>
          <h3>단국대학교 (전자전기공학부)</h3>
          <span>2016.03 ~ 2023.03 졸업</span>
        </div>
      </div>
    </div>
  );
});
