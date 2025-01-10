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
  width: 100%;
  min-width: 1140px; /* 스크롤에 맞춰 최소 너비 설정 */
  background-color: #a6aebf;
  text-align: center;
  color: white;
  padding: 15px 0;
`;

const footerContentStyle = css`
  max-width: 1140px;
  margin: 0 auto;
`;

export default Footer;
