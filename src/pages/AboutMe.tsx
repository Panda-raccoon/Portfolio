import { css } from "@emotion/react";
import ProfileImage from "../assets/panda_cloud.png";

function AboutMe() {
  return (
    <div css={container}>
      <div css={headerSection}>
        <div css={contentWrapper}>
          <div css={titleSection}>
            <h1 css={nameTitle}>Lee Yeonji</h1>
            <p css={jobTitle}>Front-End Developer</p>
            <hr css={divider} />
          </div>

          <div css={aboutSection}>
            <h2 css={aboutTitle}>About Me</h2>
            <p css={aboutText}>
              안녕하세요, 프론트엔드 개발자 이연지입니다.
              <br />
              끊임없는 배움을 즐기며, 성장하고 발전하고 있는 개발자입니다.
              <br />
            </p>
          </div>
        </div>
        <div css={imageWrapper}>
          <img src={ProfileImage} alt="Profile" css={profileImg} />
        </div>
      </div>

      <div css={skillsSection}>
        <h2 css={skillsTitle}>My Skills</h2>
        <div css={skillsGrid}>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
            />
            <span className="skill-name">HTML</span>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
            />
            <span className="skill-name">CSS</span>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <span className="skill-name">JavaScript</span>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            <span className="skill-name">React</span>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VSCode"
            />
            <span className="skill-name">VSCode</span>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
            <span className="skill-name">Git</span>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
            <span className="skill-name">GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const container = css`
  max-width: 1140px;
  margin: 0 auto;
`;

const headerSection = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff8de;
  padding: 32px;
  border-radius: 20px;
`;

const contentWrapper = css`
  flex: 1;
  padding: 32px;
  // border: 1px solid green; /* 박스 */
`;

const titleSection = css`
  text-align: end;
  margin-bottom: 32px;
  // border: 1px solid orange; /* 박스 */
`;

const nameTitle = css`
  font-size: 40px;
  color: #3f4756;
  margin: 0;
  // border: 1px solid orange; /* 박스 */
`;

const jobTitle = css`
  font-size: 19px;
  color: #333;
  margin: 8px 0;
  // border: 1px solid blue; /* 박스 */
`;

const divider = css`
  border: none;
  border-top: 2px solid #4834d4;
  width: 700px;
  margin: 16px auto;
`;

const aboutSection = css`
  margin-top: 32px;
  // border: 1px solid blue; /* 박스 */
`;

const aboutTitle = css`
  font-size: 32px;
  color: #3f4756;
  margin-bottom: 16px;
  // border: 1px solid blue; /* 박스 */
`;

const aboutText = css`
  font-size: 16px;
  line-height: 24px;
  color: #333;
`;

const imageWrapper = css`
  flex: 1;
  max-width: 300px;
  // border: 3px solid orange; /* 박스 */
`;

const profileImg = css`
  width: 100%;
  height: auto;
  object-fit: cover;
  // border: 1px solid blue; /* 박스 */
`;

const skillsSection = css`
  text-align: center;
  padding: 32px;
`;

const skillsTitle = css`
  font-size: 32px;
  color: #3f4756;
  margin-bottom: 32px;
`;

const skillsGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;

  img {
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default AboutMe;
