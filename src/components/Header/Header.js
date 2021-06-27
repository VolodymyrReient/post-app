import React from "react";

import "./header.css";

const Header = ({ allPost, liked }) => {
  return (
    <div className="app-header d-flex">
      <h1>Volodymyr Reient</h1>
      <h2>
        {allPost} records, like {liked}
      </h2>
    </div>
  );
};

export default Header;
