import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Loader from "../components/loader";
import Card from "../components/card";

function Items({ currentItems, isLoading }) {
  console.log(currentItems);
  return (
    <div className="all-templates">
      {isLoading ? (
        <Loader />
      ) : (
        currentItems.map((x) => <Card templateCard={x} />)
      )}
    </div>
  );
}

export function PaginatedItems({ itemsPerPage, data, isLoading }) {
  console.log(data);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentItems = data.slice(itemOffset, endOffset);
  console.log(currentItems);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} isLoading={isLoading} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
