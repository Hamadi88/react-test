import React, { useState,useCallback} from "react";
import Pagination from "./pagination.js";
import Listcount from "./listcount.js";
import { data } from "./data";
const ListAvecPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  let NUM_OF_RECORDS = data.length;
  let LIMIT = 10;

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [currentPage]
  );
  const currentComments = data.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );
  return (
    <div className="pagination-wrapper">
      <Listcount listcount={currentComments} />
      <Pagination
        totalRecords={NUM_OF_RECORDS}
        pageLimit={LIMIT}
        pageNeighbours={1}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ListAvecPagination;
