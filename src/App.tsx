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
    display: flex;
    justify-content: center; /* 화면 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    min-width: 320px;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    background-color: white;
  }

  #root {
    /* 전체 레이아웃 중앙 정렬 */
    margin: 0 auto;
  }
`;

const appStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
`;

const mainContentStyle = css`
  flex: 1;
  margin-top: 50px; /* 헤더 높이만큼 여백 추가 */
`;

const contentContainerStyle = css`
  width: 1140px;
  margin: 0 auto;
  padding: 20px;
  // background-color: white;
  // border: 1px solid #d3d3d3;
`;

export default App;
