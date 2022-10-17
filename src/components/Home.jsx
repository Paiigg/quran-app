import React, { useState, useEffect } from "react";
import LeftBar from "./LeftBar";
import ReactPaginate from "react-paginate";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import RightBar from "./RightBar";

const Home = ({ data }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 16;
  const [heart, setHeart] = useState(false);
  const navigate = useNavigate();

  const handleHeart = () => {
    setHeart(!heart);
  };

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

  return (
    <div className="container mx-auto px-4 md:flex justify-between mt-5">
      <LeftBar />
      <div className="bg-secondary rounded-3xl md:w-[70%] w-full p-4">
        <div className="grid md:grid-cols-4 gap-5">
          {currentItems?.map((item) => (
            <div className="bg-[#fefefe] rounded-lg p-4">
              <div className="flex gap-3 flex-col">
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-secondary flex justify-center items-center w-[40px] h-[40px] text-primary">
                    <p>{item.nomor}</p>
                  </div>
                  <div onClick={handleHeart}>
                    {heart ? (
                      <AiFillHeart size={20} style={{ color: "#00ad68" }} />
                    ) : (
                      <AiOutlineHeart size={20} />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link to={`/surat/${item.nomor}`}>
                        <p className="font-semibold">{item.nama_latin}</p>
                      </Link>
                      <p className="text-sub text-sm">{item.arti}</p>
                    </div>
                    <p className="font-semibold">{item.nama}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/surat/${item.nomor}`)}
                    className="text-white bg-primary py-2 w-full rounded-lg hover:opacity-80"
                  >
                    Baca
                  </button>
                </div>
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
      <RightBar />
    </div>
  );
};

export default Home;
