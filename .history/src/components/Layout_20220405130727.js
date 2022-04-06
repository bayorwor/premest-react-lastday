import React from "react";

function Layout({ children }) {
  const layoutStyle = () => (
    <div>
      <header>
        <h1>
          <a href="/">
            <img src="/static/images/logo.png" alt="logo" />
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
  return layoutStyle();
}

export default Layout;
