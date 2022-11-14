import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ templateCard }) {
  const navigate = useNavigate();
  // console.log(templateCard);

  return (
    <>
      <div className="template-card">
        {/* <div className="top-line"></div> */}
        <div className="img-box">
          {/* <img src={require(templateCard.image)} alt="template" /> */}
          <img src={require("../assets/images/stride.png")} alt="template" />
          <div className="edit-temp-btn">
            <button
              onClick={() => navigate("template-form", { replace: true })}
              className="use-template-btn"
            >
              Use Template
            </button>
          </div>
        </div>
        <div className="template-name">{templateCard.template_name}</div>
      </div>
    </>
  );
}

export default Card;
