import React from "react";

function logo() {
  return (
    <>
      <label className="title">Logo</label>
      <div className="logo">
        <input
          type="file"
          id="myFile"
          name="filename"
          className="details"
        />
        <input type="submit" className="details" />
      </div>
    </>
  );
}

export default logo;
