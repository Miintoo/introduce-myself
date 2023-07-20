import React, { forwardRef } from 'react';
import './Home.scss';
import TypeIt from 'typeit-react';

export default forwardRef(function Home(props, ref) {
  return (
    <main className="main_container" ref={ref}>
      <div className="content">
        <TypeIt
          options={{
            loop: true
          }}
          className="title"
        >
          FrontEnd Engineer, 김민혁 입니다.
        </TypeIt>
        <p>
          주도적으로 서비스를 만들고 이를 결과물로 UI 상에서 바로 확인할 수 있는 프론트엔드 개발자에 흥미를 느껴
          공부하고 있습니다. HTML, CSS, React, TypeScript를 공부했고 JavaScript에 Deep Dive 하고 있습니다.
        </p>
        <p>
          팀 프로젝트 경험이 필요했기 때문에 엘리스 웹 과정에 참여했고 전체적인 웹 환경에서 사용되는 HTML, CSS, JS,
          React, Nodejs, SQL, MongoDB, AWS에 대해서 배웠습니다. 주체적으로 공부하고 일하는 걸 좋아하기 때문에 엘리스
          과정 중 모든 팀 프로젝트와 스터디에서 팀장을 맡아서 진행한 경험이 있습니다.
        </p>
      </div>
      <img src="/assets/profile.gif" alt="프로필 이미지 입니다." />
    </main>
  );
});
