export default function NavBar() {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg theme-bg">
        <div className="container-fluid">
          <a className="navbar-brand color-white" href="/login">
            Push
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link color-white"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-white" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-white" href="profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link color-white disabled"
                  aria-disabled="true"
                >
                  Extras
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
