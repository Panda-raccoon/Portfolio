import { css, Global } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <div css={appStyle}>
        {/* 헤더 */}
        <Header />

        {/* 메인 콘텐츠 */}
        <main css={mainContentStyle}>
          <div css={contentContainerStyle}>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        {/* 푸터 */}
        <Footer />
      </div>
    </>
  );
}

const globalStyles = css`
  /* body와 #root 스타일 */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

const appStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  overflow-x: auto; /* 전체 페이지 좌우 스크롤 가능 */
  // width: 100%; /* 페이지 전체 너비 */
`;

const mainContentStyle = css`
  flex: 1;
  margin-top: 60px; /* 헤더 높이에 맞춘 여백 */
  padding: 20px;
`;

const contentContainerStyle = css`
  width: 1140px;
  margin: 0 auto;
  padding: 20px;
  // background-color: white;
  // border: 1px solid #d3d3d3;
`;

export default App;
