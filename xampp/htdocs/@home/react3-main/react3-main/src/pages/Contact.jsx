import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/Works");
        }}
      >
        Works이동
      </button>
      <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
      <Link to="/Works">Works 페이지로 이동하기</Link>

      <img
        src="https://cdn-saas-web-217-134.cdn-nhncommerce.com/soda0041079_godomall_com/data/img/sl/720-exu.png"
        width="100%"
        alt="Contact Us"
      />
    </div>
  );
};

export default Contact;
// 위 코드는 React Router를 사용하여 홈 페이지를 구현한 예시입니다.
// useNavigate 훅을 사용하여 버튼 클릭 시 "/works" 경로로 이동하고,
// useLocation 훅을 사용하여 현재 페이지의 경로를 표시합니다.
// Link 컴포넌트를 사용하여 "/works" 경로로 이동할 수 있는 링크를 제공합니다.
