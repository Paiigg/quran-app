import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addLike } from "../redux/QuranSlice/likeSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const RightBar = () => {
  const latest = useSelector((state) => state.latest.latest);
  console.log(latest);
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLike = (item) => {
    setHeart(!heart);
    dispatch(addLike(item));
  };

  return (
    <div className="md:w-[20%]  my-5 lg:my-0 w-full" id="latest">
      <h2 className="text-3xl font-semibold text-center mb-5">
        Assalamualaikum
      </h2>
      <p>Baru Dibaca</p>
      {latest?.map((item) => (
        <div className=" rounded-lg p-4 " key={item.nomor}>
          <div className="flex gap-3 flex-col ">
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-secondary flex justify-center items-center w-[40px] h-[40px] text-primary">
                <p>{item.nomor}</p>
              </div>

              <button onClick={() => handleLike(item)}>
                {heart ? (
                  <AiFillHeart size={20} style={{ color: "#00ad68" }} />
                ) : (
                  <AiOutlineHeart size={20} />
                )}
              </button>
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
  );
};

export default RightBar;
