import { css } from "@emotion/react";

function Footer() {
  return (
    <footer css={footerStyle}>
      <div css={footerContentStyle}>
        &copy; {new Date().getFullYear()} Frontiyeon. All rights reserved.
      </div>
    </footer>
  );
}

const footerStyle = css`
  text-align: center;
  background-color: #a6aebf;
  width: 100vw; /* 브라우저 전체 너비로 설정 */
  color: white;
  padding: 15px 0;
`;

const footerContentStyle = css`
  max-width: 1140px; /* 콘텐츠 폭 제한 */
  margin: 0 auto;
`;

export default Footer;
