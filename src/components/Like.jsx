import React from "react";
import { useSelector } from "react-redux";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import { Link, useNavigate } from "react-router-dom";

const Like = () => {
  const like = useSelector((state) => state.like.like);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 md:flex justify-between mt-5">
      <LeftBar />
      <div className="bg-secondary rounded-3xl md:w-[70%] w-full p-4">
        <div className="grid md:grid-cols-4 gap-5">
          {like?.map((item) => (
            <div className="bg-[#fefefe] rounded-lg p-4" key={item.nomor}>
              <div className="flex gap-3 flex-col">
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-secondary flex justify-center items-center w-[40px] h-[40px] text-primary">
                    <p>{item.nomor}</p>
                  </div>
                  {/* <div onClick={() => handleHeart(item)}>
                    {heart ? (
                      <AiFillHeart size={20} style={{ color: "#00ad68" }} />
                    ) : (
                      <AiOutlineHeart size={20} />
                    )}
                  
                  </div> */}
                  {/* <button onClick={() => handleHeart(item)}>Like</button> */}
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
      </div>
      <RightBar />
    </div>
  );
};

export default Like;
