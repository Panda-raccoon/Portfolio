import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import pandaCloud from "../assets/panda_cloud.png";

function Header() {
  return (
    <header css={headerStyle}>
      <div css={headerContentStyle}>
        <div css={logoContainerStyle}>
          <img src={pandaCloud} alt="logo" css={logoImageStyle} />
          <div css={logoTextStyle}>Frontiyeon Portfolio</div>
        </div>
        <nav css={navbarStyle}>
          <NavLink to="/" css={navLinkStyle}>
            About Me
          </NavLink>
          <NavLink to="/projects" css={navLinkStyle}>
            Project
          </NavLink>
          <NavLink to="/contact" css={navLinkStyle}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

// 스타일 정의 (파일 하단에 배치)
// const headerStyle = css`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 50px;
//   background-color: #fff8de;
//   border-bottom: 1px solid #a6aebf;
//   color: black;
//   padding: 10px 20px;
// `;

const headerStyle = css`
  width: 100%;
  min-width: 1140px; /* 스크롤에 맞춰 최소 너비 설정 */
  background-color: white;
  border-bottom: 1px solid #a6aebf;
`;

const headerContentStyle = css`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const logoContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 10px; /* 이미지와 텍스트 사이 간격 */
  // border: 1px solid red; /* 박스 */
`;

const logoImageStyle = css`
  width: 40px; /* 이미지 크기 */
  height: 40px; /* 이미지 크기 */
  border-radius: 50%; /* 이미지를 둥글게 만듦 */
  object-fit: cover; /* 이미지 비율 유지하며 크기 조정 */
`;

const logoTextStyle = css`
  font-size: 24px;
  font-weight: bold;
`;

const navbarStyle = css`
  display: flex;
  font-size: 20px;
  gap: 20px;
`;

const navLinkStyle = css`
  color: black;
  text-decoration: none;

  &.active {
    font-weight: bold;
    // text-decoration: underline;
  }
`;

export default Header;
