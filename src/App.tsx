import { css, Global } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { colors, media } from "./styles/theme";

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
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  @media print {
    body {
      background: #ffffff;
    }
  }
`;

const appStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.background};
`;

const mainContentStyle = css`
  flex: 1;
  margin-top: 60px;
  padding: 20px;

  @media print {
    margin-top: 0;
  }
`;

const contentContainerStyle = css`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  ${media.mobile} {
    padding: 12px;
  }
`;

export default App;
