import React from 'react';
import './Skill.scss';

export default function Skill() {
  return (
    <div className="container">
      <h2 className="title">Skills</h2>
      <div className="skills_container">
        <div>
          <h3>React</h3>
          <ul>
            <li>선언형 프로그래밍에 대한 장점을 이해하고 있고 Functional Component 사용에 익숙합니다.</li>
            <li>CSR의 단점인 SEO와 TTV이슈에 대해서 이해하고 있고 해결했던 경험이 있습니다.</li>
          </ul>
        </div>
        <div>
          <h3>JavaScript(es6+)</h3>
          <ul>
            <li>Promise, Async Await에 익숙하고 비동기 처리에 대해서 이해하고 있습니다.</li>
            <li>DOM API를 이용해 DOM요소의 제어를 할 수 있습니다.</li>
            <li>JS 동작원리인 이벤트 루프에 대해서 이해하고 있습니다.</li>
          </ul>
        </div>
        <div>
          <h3>TypeScript</h3>
          <ul>
            <li>정적타입과 동적타입 장단점에 대해서 이해하고 있습니다.</li>
            <li>
              비동기로 받아온 데이터에 타입을 명시합으로서 문서화 효과와 개발 과정중 생기는 실수를 방지하고자 사용하는걸
              선호합니다.
            </li>
            <li>generic, type alias, interface를 이해하고 있고 사용할 수 있습니다.</li>
          </ul>
        </div>
        <div>
          <h3>Redux</h3>
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
          <h3>Styled-Component / Emotion / SASS</h3>
          <ul>
            <li>
              CSS 라이브러리중 팀원과의 협업을 위해 컴포넌트 단위로 스타일링이 가능한 Styled-Component, Emotion을 사용한
              경험이 있습니다.
            </li>
          </ul>
        </div>
        <div>
          <h3>HTML5 / CSS3</h3>
          <ul>
            <li>HTML에 Semantic 태그에 대해서 이해하고 있습니다.</li>
            <li>CSS Style 속성중 Flex와 Grid 사용에 익숙합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
