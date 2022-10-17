import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import axios from "axios";
import ReactPaginate from "react-paginate";
import DetailSurat from "./DetailSurat";

const Surat = () => {
  const { nomor } = useParams();
  const [detail, setDetail] = useState([]);
  const url = `https://equran.id/api/surat/${nomor}`;

  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = async () => {
    const res = await axios.get(url);
    console.log(res.data.ayat);
    setDetail(res.data);
  };

  return (
    <section>
      <div className="container mx-auto px-4 mt-5 md:flex justify-between">
        <LeftBar />
        <div className="bg-secondary rounded-3xl md:w-[70%] w-full p-4 ">
          <div className="bg-[#fefefe] rounded-lg p-4 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">{detail.nama_latin}</h1>
              <p className="text-sm text-sub">
                {detail.arti} / {detail.nomor}
              </p>
            </div>
            <p className="text-3xl font-bold">{detail.nama}</p>
          </div>

          <DetailSurat data={detail.ayat} />
        </div>
        <RightBar />
      </div>
    </section>
  );
};

export default Surat;
