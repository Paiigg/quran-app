import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Surat from "./components/Surat";
import { useDispatch, useSelector } from "react-redux";
import { quranFetch } from "./redux/QuranSlice/quranSlice";
import Like from "./components/Like";

function App() {
  const [filter, setFilter] = useState("");
  const surat = useSelector((state) => state.quran.data);

  const dispatch = useDispatch();

  // const url = `https://equran.id/api/surat`;

  // const getSurat = async () => {
  //   const res = await axios.get(url);
  //   console.log(res);
  //   setSurat(res.data);
  // };

  useEffect(() => {
    dispatch(quranFetch());
  }, [dispatch]);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredSurat = surat.filter((surat) =>
    surat.nama_latin.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar data={surat} handleChange={handleChange} filter={filter} />
      <Routes>
        <Route path="/" element={<Home data={filteredSurat} />} />
        <Route path="/surat/:nomor" element={<Surat />} />
        <Route path="/like" element={<Like />} />
      </Routes>
    </div>
  );
}

export default App;
