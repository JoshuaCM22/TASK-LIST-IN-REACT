import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <div className="titleContainer">
        <h1>
          <img src="logo.png" width="35" height="35" alt="logo" />
          Task List
        </h1>
      </div>
    </header>
  );
}

const headerStyle = {
  background: "#273746",
  color: "#F0F3F4",
  textAlign: "center",
  padding: "10px"
};
