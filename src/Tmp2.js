import React from "react";
export default function Tmp2(props) {
  return (
    <div className="wpp22">
      <div className="container is-fluid">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="https://bulma.io/images/bulma-logo.png" width="112"
            height="28"/>
            </a>
            <a
              className="navbar-burger burger"
              aria_label="menu"
              role="button"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>
              <a className="navbar-item" href="/about">
                About
              </a>
              <a className="navbar-item" href="/users">
                Users
              </a>
              <a className="navbar-item" href="/reports">
                Reports
              </a>
            </div>
            <div className="navbar-end">
              <a className="navbar-item" href="/notify">
                Notifications
              </a>
              <a className="navbar-item" href="/logout">
                Logout
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
