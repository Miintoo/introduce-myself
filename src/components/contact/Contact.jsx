import React, { forwardRef } from 'react';
import styles from './Contact.module.scss';
import Github from '../../assets/github.png';
import Blog from '../../assets/velog.png';
import Email from '../../assets/mail.png';

export default forwardRef(function Contact(props, ref) {
  return (
    <div className={styles.container} ref={ref}>
      <div>
        <h2 className={styles.title}>Contact Me</h2>
        <ul className={styles.contact_logo_container}>
          <li>
            <a href="https://github.com/Miintoo">
              <img src={Github} alt="깃헙 로고 이미지" />
            </a>
            <span>Github</span>
          </li>
          <li>
            <a href="https://velog.io/@xpeed96">
              <img src={Blog} alt="블로그 로고 이미지" />
            </a>
            <span>Blog</span>
          </li>
          <li>
            <a href="mailto:xpeed96@gmail.com">
              <img src={Email} alt="메일 로고 이미지" />
            </a>
            <span>Email</span>
          </li>
        </ul>
      </div>
    </div>
  );
});
