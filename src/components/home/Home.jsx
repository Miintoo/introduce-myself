import React, { forwardRef } from 'react';
import TypeIt from 'typeit-react';
import styles from './Home.module.scss';

export default forwardRef(function Home(props, ref) {
  return (
    <main className={styles.main_container} ref={ref}>
      <div className={styles.content}>
        <p>안녕하세요 :) </p>
        <TypeIt
          options={{
            loop: true
          }}
          className="title"
        >
          팀워크를 중요시하는 FrontEnd Engineer, 김민혁 입니다.
        </TypeIt>
      </div>
    </main>
  );
});
