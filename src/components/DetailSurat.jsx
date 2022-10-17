import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const DetailSurat = ({ data }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  console.log(data);
  return (
    <div>
      <div className="bg-[#fefefe] rounded-lg p-4 text-right  mt-5">
        {currentItems?.map((item) => (
          <div
            key={item.nomor}
            className="flex gap-5 items-center justify-between mb-5  "
          >
            <div className="rounded-full bg-secondary flex justify-center items-center w-[40px] h-[40px] text-primary">
              <p>{item.nomor}</p>
            </div>
            <div className=" w-[95%] border-b-2 py-3">
              <p className="text-2xl font-semibold ">{item.ar} </p>
              <p className="text-sub text-left mt-3">{item.idn}</p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="flex gap-5 items-center justify-center mt-5"
      />
    </div>
  );
};

export default DetailSurat;
