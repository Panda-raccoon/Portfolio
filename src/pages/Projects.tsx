import { css } from "@emotion/react";
import { useState } from "react";

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
  }[] = [
    {
      id: 1,
      title: "투자 매매전략을 공유하고 중개하는 소셜 플랫폼, 트레들리",
      image:
        "https://private-user-images.githubusercontent.com/89791868/394660639-7e788c67-cc37-4206-b4b6-a4db7a4e500e.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYzMjEzMTksIm5iZiI6MTczNjMyMTAxOSwicGF0aCI6Ii84OTc5MTg2OC8zOTQ2NjA2MzktN2U3ODhjNjctY2MzNy00MjA2LWI0YjYtYTRkYjdhNGU1MDBlLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTA4VDA3MjMzOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThlNWYyZTZlMjlkNDM1MWI1ODk5YjYzYTBhM2U5ZDcxMzY5OGFjMWE4YWUwZWEwYmY0M2U2MjVjNTZlMGQ0MjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.KbqZfC6pen8gq8zckUxBCQojS0d9PRRy1G1hyCVxtzg",
      githubLink: "https://github.com/Panda-raccoon/FinalProject_2VEN_FE",
      media: [{ type: "video", src: "src/assets/(2ven)Tradely_Video.mp4" }],
    },
    {
      id: 2,
      title: "운동 영상 공유 SNS 플랫폼, MAZI",
      image:
        "https://private-user-images.githubusercontent.com/170427166/371165258-9939cb73-b2d7-4806-9617-574aeb795c15.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYzMjE3MDgsIm5iZiI6MTczNjMyMTQwOCwicGF0aCI6Ii8xNzA0MjcxNjYvMzcxMTY1MjU4LTk5MzljYjczLWIyZDctNDgwNi05NjE3LTU3NGFlYjc5NWMxNS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDEwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAxMDhUMDczMDA4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NmJhNzJhYTE5YjJhODZmZDQwNzk3MTEyNTFlZjNjYjIzNDkwZTVhNWJmZGY4YzAwZjFhMDYzNjU4NTZiZjc3ZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.CT3aHTnyXH8Y2LSSFkJrLnwkekWrjRwM3rqopnHKeV0",
      githubLink:
        "https://github.com/Panda-raccoon/Toy_Project_3_BeginAgain?tab=readme-ov-file/",
      media: [
        { type: "gif", src: "src/assets/MAZI_home.gif" },
        { type: "gif", src: "src/assets/MAZI_bookmark.gif" },
      ],
    },
    {
      id: 3,
      title: "스타벅스",
      image: "src/assets/starbucks.png",
      githubLink: "https://github.com/Panda-raccoon/starbucks",
      // media가 정의되지 않음
    },
  ];

  const openFullScreen = (media: Media[] | undefined) => {
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
                  onClick={() => openFullScreen(project.media)}
                  css={liveButton}
                  disabled={!project.media} // media가 없을 경우 버튼 비활성화
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

// const demoButton = css`
//   background-color: #85637f;
//   color: #fff;
//   padding: 10px 15px;
//   border-radius: 5px;
//   text-decoration: none;
//   font-size: 14px;

//   &:hover {
//     background-color: #7f5069;
//   }
// `;

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
  gap: 20px; /* 요소 간 간격 */
  justify-content: center;
  align-items: center;
`;

const sideBySideMedia = css`
  max-width: 45%; /* 좌우로 배치할 때의 너비 */
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
