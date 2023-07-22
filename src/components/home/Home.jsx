import React, { forwardRef } from 'react';
import TypeIt from 'typeit-react';
import styles from './Home.module.scss';

export default forwardRef(function Home(props, ref) {
  return (
    <main className={styles.main_container} ref={ref}>
      <div className={styles.content}>
        <p className={styles.comment}>팀워크를 중요하게 생각하는</p>
        <p>FrontEnd Engineer</p>
        <TypeIt
          options={{
            loop: true
          }}
          className="title"
        >
          김민혁 입니다.
        </TypeIt>
      </div>
    </main>
  );
});
