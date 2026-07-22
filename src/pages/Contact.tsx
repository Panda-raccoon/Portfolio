import { css } from "@emotion/react";
import { FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import { colors, media } from "../styles/theme";

function Contact() {
  return (
    <div>
      <h1 css={pageTitle}>
        Contact
        <div css={contactPage}>
          <ul css={contactList}>
            <li css={contactItem}>
              <FaEnvelope css={iconStyle} />
              <span>frontiyeon@gmail.com</span>
            </li>
            <div css={divider} />
            <li css={contactItem}>
              <FaPhoneAlt css={iconStyle} />
              <span>010-6242-3519</span>
            </li>
            <div css={divider} />
            <li css={contactItem}>
              <FaGithub css={iconStyle} />
              <a
                href="https://github.com/Panda-raccoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Panda-raccoon
              </a>
            </li>
            <div css={divider} />
            <li css={contactItem}>
              <SiTistory css={iconStyle} />
              <a
                href="https://gonjidev.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://gonjidev.tistory.com/
              </a>
            </li>
          </ul>
        </div>
      </h1>
    </div>
  );
}

const pageTitle = css`
  text-align: start;
  font-size: 32px;
  font-weight: bold;
  margin: 20px;
  color: ${colors.textMuted};

  ${media.mobile} {
    font-size: 24px;
    margin: 12px;
  }
`;

const contactPage = css`
  background-color: ${colors.background};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  margin: 100px auto;

  ${media.tablet} {
    margin: 40px auto;
    padding: 20px;
  }

  @media print {
    box-shadow: none;
    border: 1px solid ${colors.border};
    margin: 20px auto;
  }
`;

const contactList = css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const contactItem = css`
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 18px;
  color: ${colors.text};

  ${media.mobile} {
    gap: 20px;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: ${colors.textMuted};
    word-break: break-word;

    &:hover {
      color: ${colors.accent};
    }
  }
`;

const iconStyle = css`
  font-size: 28px;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 22px;
  }
`;

const divider = css`
  height: 1px;
  background-color: #e0e0e0;
  width: 100%;
  margin: 10px 0;
`;

export default Contact;
