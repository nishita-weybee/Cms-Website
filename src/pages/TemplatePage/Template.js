import React from "react";
import Form from "../../components/form";

function Template() {
  return (
    <>
      <div className="template-container">
        <div className="details-form">
          <Form />
        </div>

        <div className="static-template">
          <img
            src={require("../../assets/images/stride2.png")}
            alt="template-img"
          />
        </div>
      </div>
    </>
  );
}

export default Template;
