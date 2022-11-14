import React from "react";

function header() {
  return (
    <>
      <div className="top-bar">
        <h1>Pick the Website Template You Love</h1>
        <div className="search-bar">
          <input placeholder="Search all templates" />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default header;
