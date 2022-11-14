import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header";
import { PaginatedItems } from "../../components/pagination";
import Loader from "../../components/loader";
import Card from "../../components/card";

function Homepage() {
  const [templateCard, setTemplateCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/templates")
      .then((res) => {
        setTemplateCard(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="Home-container">
        <Header />
        {isLoading ? (
          <Loader />
        ) : (
          <PaginatedItems
            itemsPerPage={1}
            data={templateCard}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
}

export default Homepage;
