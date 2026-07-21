import { css } from "@emotion/react";
import { colors } from "../styles/theme";

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
  background-color: ${colors.textMuted};
  text-align: center;
  color: ${colors.background};
  padding: 15px 0;

  @media print {
    display: none;
  }
`;

const footerContentStyle = css`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

export default Footer;
