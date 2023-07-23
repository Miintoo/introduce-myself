import React, { forwardRef } from 'react';
import styles from './Skill.module.scss';
import SkillCarousel from '../carousel/SkillCarousel';

export default forwardRef(function Skill(props, ref) {
  return (
    <div className={styles.container} ref={ref}>
      <h2 className={styles.title}>Skills</h2>
      <SkillCarousel />
    </div>
  );
});
