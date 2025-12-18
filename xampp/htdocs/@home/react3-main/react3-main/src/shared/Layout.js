// src/shared/Layout.js

import React from "react";

//스타일 객체 생략

const HeaderStyles = {
  width: "100%",
  background: "black",
  display: "grid",
  paddingLeft: "0.5rem",
  color: "#fff",
  fontWeight: "bold",
};

const FooterStyles = {
  width: "100%",
  height: "50px",
  display: "flex",
  background: "black",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
};

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
};

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <span>HOMEㅣSODA MediaㅣSODA SHOP</span>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ ...FooterStyles }}>
      <span>HOMEㅣSODA MEDIA Inside</span>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
