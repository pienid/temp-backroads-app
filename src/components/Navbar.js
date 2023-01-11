import { pageLinks, socialLinks } from "../data.js";

import logo from "../images/logo.svg";
// .. means we move to parent directory (src)
// later refer to it as {logo}

// Here we import info with links

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* left this comment on purpose */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <li>
                  <a
                    href={href}
                    className="nav-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
