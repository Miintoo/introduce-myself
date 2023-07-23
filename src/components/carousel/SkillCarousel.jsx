import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SkillCarousel.module.scss';
import HTMLCSSIcon from '../../assets/skill_icon/HTML&CSS.png';
import JSIcon from '../../assets/skill_icon/JavaScript.png';
import ReactIcon from '../../assets/skill_icon/React.png';
import ReduxIcon from '../../assets/skill_icon/redux.png';
import TSIcon from '../../assets/skill_icon/TypeScript.png';

export default function SkillCarousel() {
  const settings = {
    arrows: false,
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    // variableWidth: true
  };
  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.content}>
        <div className={styles.content_item}>
          <h4>HTML5/CSS3</h4>
          <img src={HTMLCSSIcon} alt="" />
          <ul>
            <li>HTML에 Semantic 태그에 대해서 이해하고 있습니다.</li>
            <li>CSS Style 속성중 Flex와 Grid 사용에 익숙합니다.</li>
            <li>Styled-Component, Emotion, SCSS를 사용했던 경험이 있습니다.</li>
          </ul>
        </div>
        <div>
          <h4>JavaScript(es6+)</h4>
          <img src={JSIcon} alt="" />
          <ul>
            <li>Promise, Async Await에 익숙하고 비동기 처리에 대해서 이해하고 있습니다.</li>
            <li>DOM API를 이용해 DOM요소의 제어를 할 수 있습니다.</li>
            <li>JS 동작원리인 이벤트 루프에 대해서 이해하고 있습니다.</li>
          </ul>
        </div>
        <div>
          <h4>React</h4>
          <img src={ReactIcon} alt="" />
          <ul>
            <li>선언형 프로그래밍에 대한 장점을 이해하고 있고 Functional Component 사용에 익숙합니다.</li>
            <li>CSR의 단점인 SEO와 TTV이슈에 대해서 이해하고 있고 해결했던 경험이 있습니다.</li>
          </ul>
        </div>
        <div>
          <h4>Redux</h4>
          <img src={ReduxIcon} alt="" />
          <ul>
            <li>
              프로젝트 규모가 커질수록 컴포넌트 내부에 상태를 종속시켜 개발할때의 위험성을 인지해 Redux 공부를 하고
              있습니다.
            </li>
            <li>
              전역 상태관리를 통해 props drilling에 대해 생기는 불편함과 리렌더링 이슈에 대해서 이해하고 있습니다.
            </li>
          </ul>
        </div>
        <div>
          <h4>TypeScript</h4>
          <img src={TSIcon} alt="" />
          <ul>
            <li>
              비동기로 받아온 데이터에 타입을 명시합으로서 문서화 효과와 개발 과정중 생기는 실수를 방지하고자 사용하는걸
              선호합니다.
            </li>
            <li>generic, type alias, interface를 이해하고 있고 사용할 수 있습니다.</li>
          </ul>
        </div>
      </Slider>
    </div>
  );
}
