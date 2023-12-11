import React, { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Header from "./components/Header"
import Footer from "./components/Footer";
import mockCats from './mockCats';

const App = () => {
  const [cats, setCats] = useState(mockCats)


  return (
    <>
    <Header />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="/catindex" element={<CatIndex cats={cats} />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catshow/:id" element={<CatShow cats={cats}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
