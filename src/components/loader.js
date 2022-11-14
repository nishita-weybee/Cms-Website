import React from "react";
import { RevolvingDot } from "react-loader-spinner";

function Loader() {
  return (
    <div className="all-templates">
      <RevolvingDot
        height="200"
        width="200"
        // radius=""
        color="#bbada1"
        secondaryColor="#d2c1b3"
        ariaLabel="revolving-dot-loading"
        // radius="100"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
