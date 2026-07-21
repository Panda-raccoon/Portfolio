import { css } from "@emotion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import pandaCloud from "../assets/panda_cloud.png";
import { colors, media } from "../styles/theme";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header css={headerStyle}>
      <div css={headerContentStyle}>
        <div css={logoContainerStyle}>
          <img src={pandaCloud} alt="logo" css={logoImageStyle} />
          <div css={logoTextStyle}>Frontiyeon Portfolio</div>
        </div>

        <button
          css={menuButtonStyle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav css={[navbarStyle, menuOpen && navbarOpenStyle]}>
          <NavLink to="/" css={navLinkStyle} onClick={() => setMenuOpen(false)}>
            About Me
          </NavLink>
          <NavLink to="/projects" css={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Project
          </NavLink>
          <NavLink to="/contact" css={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

const headerStyle = css`
  width: 100%;
  background-color: ${colors.background};
  border-bottom: 1px solid ${colors.border};

  @media print {
    display: none;
  }
`;

const headerContentStyle = css`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  position: relative;
`;

const logoContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const logoImageStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const logoTextStyle = css`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 18px;
  }
`;

const menuButtonStyle = css`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${colors.text};

  ${media.tablet} {
    display: block;
  }
`;

const navbarStyle = css`
  display: flex;
  font-size: 18px;
  gap: 20px;

  ${media.tablet} {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: ${colors.background};
    border-bottom: 1px solid ${colors.border};
    flex-direction: column;
    gap: 0;
    padding: 10px 20px;
  }
`;

const navbarOpenStyle = css`
  ${media.tablet} {
    display: flex;
  }
`;

const navLinkStyle = css`
  color: ${colors.text};
  text-decoration: none;
  padding: 8px 0;

  &.active {
    font-weight: bold;
    color: ${colors.accent};
  }
`;

export default Header;
