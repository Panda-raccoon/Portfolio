import { css } from "@emotion/react";
import ProfileImage from "../assets/Character.jpg";
import { colors, media } from "../styles/theme";

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
              안녕하세요, 끝없이 배우고 성장하는 프론트엔드 개발자 이연지입니다.
              <br />
              새로운 기술을 스스로 학습하고 실제 서비스에 적용해보며 조금씩 실력을 쌓아온
              개발자입니다.
              <br />
              하나의 프로젝트마다 깊이 있게 이해하고 코드로 남기는 것을 중요하게 생각합니다.
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
            <p className="skill-name">HTML</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
            />
            <p className="skill-name">CSS</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            <p className="skill-name">React</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
            />
            <p className="skill-name">TypeScript</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg"
              alt="styled-components"
            />
            <p className="skill-name">styled-components</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
              alt="Supabase"
            />
            <p className="skill-name">Supabase</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
            <p className="skill-name">Git</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
            <p className="skill-name">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const container = css`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const headerSection = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundAlt};
  padding: 32px;
  border-radius: 20px;

  ${media.tablet} {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const contentWrapper = css`
  flex: 1;
  padding: 0 40px;

  ${media.tablet} {
    padding: 24px 0 0;
  }
`;

const titleSection = css`
  text-align: end;
  margin-bottom: 32px;

  ${media.tablet} {
    text-align: center;
  }
`;

const nameTitle = css`
  font-size: 40px;
  color: ${colors.textMuted};
  margin: 0;

  ${media.mobile} {
    font-size: 28px;
  }
`;

const jobTitle = css`
  font-size: 19px;
  color: ${colors.text};
  margin: 8px 0;
`;

const divider = css`
  border: none;
  border-top: 2px solid ${colors.accent};
  width: 100%;
  max-width: 700px;
  margin: 16px auto;
`;

const aboutSection = css`
  margin-top: 32px;
`;

const aboutTitle = css`
  font-size: 32px;
  color: ${colors.textMuted};
  margin-bottom: 16px;

  ${media.mobile} {
    font-size: 24px;
  }
`;

const aboutText = css`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
`;

const imageWrapper = css`
  flex: 1;
  max-width: 300px;

  ${media.tablet} {
    max-width: 200px;
  }
`;

const profileImg = css`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const skillsSection = css`
  text-align: center;
  padding: 32px;
`;

const skillsTitle = css`
  font-size: 32px;
  color: ${colors.textMuted};
  margin: 0 0 32px;

  ${media.mobile} {
    font-size: 24px;
  }
`;

const skillsGrid = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 32px;
  margin: 0 auto;

  ${media.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  ${media.mobile} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  img {
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    ${media.mobile} {
      width: 44px;
      height: 44px;
    }
  }

  .skill-name {
    font-size: 14px;
    color: ${colors.text};
  }
`;

export default AboutMe;
