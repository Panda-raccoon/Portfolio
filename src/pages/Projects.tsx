import { css } from "@emotion/react";
import { useState } from "react";

// 파일 import
import tradelyVideo from "../assets/(2ven)Tradely_Video.mp4";
import tradelyImage from "../assets/tradely_img.jpg";
import maziHomeGif from "../assets/MAZI_home.gif";
import maziDetailGif from "../assets/MAZI_detail.gif";
import maziBookmarkGif from "../assets/MAZI_bookmark.gif";
import maziProfileGif from "../assets/MAZI_profile.gif";
import maziImage from "../assets/MAZI_img.jpeg";
import starbucksImage from "../assets/starbucks.png";

// Media 타입 정의
interface Media {
  type: "video" | "gif";
  src: string;
}

function Projects() {
  const [selectedMedia, setSelectedMedia] = useState<Media[] | null>(null);

  const projectData: {
    id: number;
    title: string;
    image: string;
    githubLink: string;
    media?: Media[]; // media를 선택적으로 정의
    site?: string;
  }[] = [
    {
      id: 1,
      title: "투자 매매전략을 공유하고 중개하는 소셜 플랫폼, 트레들리(TEAM)",
      image: tradelyImage, // import한 파일 사용
      githubLink: "https://github.com/Panda-raccoon/FinalProject_2VEN_FE",
      media: [{ type: "video", src: tradelyVideo }],
    },
    {
      id: 2,
      title: "운동 영상 공유 SNS 플랫폼, MAZI(TEAM)",
      image: maziImage, // import한 파일 사용
      githubLink:
        "https://github.com/Panda-raccoon/Toy_Project_3_BeginAgain?tab=readme-ov-file/",
      media: [
        { type: "gif", src: maziHomeGif },
        { type: "gif", src: maziBookmarkGif },
        { type: "gif", src: maziDetailGif },
        { type: "gif", src: maziProfileGif },
      ],
    },
    {
      id: 3,
      title: "스타벅스",
      image: starbucksImage, // import한 파일 사용
      githubLink: "https://github.com/Panda-raccoon/starbucks",
      site: "https://classy-faloodeh-9fc243.netlify.app/", // site URL 추가
    },
  ];

  // const openFullScreen = (media: Media[] | undefined) => {
  //   if (media) {
  //     setSelectedMedia(media);
  //     document.body.style.overflow = "hidden"; // 스크롤 방지
  //   }
  // };

  // const closeFullScreen = () => {
  //   setSelectedMedia(null);
  //   document.body.style.overflow = "auto"; // 스크롤 복원
  // };

  const openFullScreen = (media: Media[] | undefined, site?: string) => {
    if (site) {
      window.open(site, "_blank"); // site URL 새 창에서 열기
      return;
    }

    if (media) {
      setSelectedMedia(media);
      document.body.style.overflow = "hidden"; // 스크롤 방지
    }
  };

  const closeFullScreen = () => {
    setSelectedMedia(null);
    document.body.style.overflow = "auto"; // 스크롤 복원
  };

  return (
    <div>
      <h1 css={pageTitle}>Projects</h1>
      <div css={projectsContainer}>
        {projectData.map((project) => (
          <div key={project.id} css={projectCard}>
            <div css={imageWrapper}>
              <img src={project.image} alt={project.title} css={projectImage} />
              <div css={buttonWrapper}>
                <button
                  onClick={() => openFullScreen(project.media, project.site)} // site URL도 전달
                  css={liveButton}
                  disabled={!project.media && !project.site} // media와 site가 없으면 버튼 비활성화
                >
                  More
                </button>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={githubButton}
                >
                  GitHub
                </a>
              </div>
            </div>
            <h3 css={projectTitle}>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div css={fullScreenContainer}>
          <div css={fullScreenContent}>
            <div css={mediaRow}>
              {selectedMedia.map((media: Media, index: number) =>
                media.type === "video" ? (
                  <video key={index} controls autoPlay css={fullScreenMedia}>
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    key={index}
                    src={media.src}
                    alt={`Media ${index + 1}`}
                    css={sideBySideMedia}
                  />
                )
              )}
            </div>
            <button css={closeButton} onClick={closeFullScreen}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const pageTitle = css`
  text-align: start;
  font-size: 32px;
  font-weight: bold;
  margin: 20px;
  color: #3f4756;
`;

const projectsContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;

const projectCard = css`
  background-color: #727a8a;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const imageWrapper = css`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  &:hover div {
    opacity: 1;
  }
`;

const projectImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const buttonWrapper = css`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const liveButton = css`
  background-color: #85637f;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #7f5069;
  }
`;

const githubButton = css`
  background-color: #9a9cb2;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background-color: #9189a4;
  }
`;

const projectTitle = css`
  margin: 0;
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
`;

const fullScreenContainer = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const fullScreenContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  height: 90%;
`;

const mediaRow = css`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const sideBySideMedia = css`
  max-width: 45%;
  max-height: 80%;
  border-radius: 10px;
`;

const fullScreenMedia = css`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 20px;
`;

const closeButton = css`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #85637f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #7f5069;
  }
`;

export default Projects;
