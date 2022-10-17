import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Like from "./components/Like";
import axios from "axios";
import Surat from "./components/Surat";

function App() {
  const [surat, setSurat] = useState([]);
  const [filter, setFilter] = useState("");

  const url = `https://equran.id/api/surat`;

  const getSurat = async () => {
    const res = await axios.get(url);
    console.log(res);
    setSurat(res.data);
  };

  useEffect(() => {
    getSurat();
  }, [url]);

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
        <Route path="/like" element={<Like />} />
        <Route path="/surat/:nomor" element={<Surat />} />
      </Routes>
    </div>
  );
}

export default App;
