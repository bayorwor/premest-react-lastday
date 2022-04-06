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
      <main>{children}</main>
      <footer>
        <p>
          &copy; {new Date().getFullYear} - <a href="bayes.io">Bayes.io</a>
        </p>
      </footer>
    </div>
  );
  return layoutStyle;
}

export default Layout;
