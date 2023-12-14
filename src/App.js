import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";




const App = () => {
  const [cats, setCats] = useState([])

  useEffect( () => {
    readCats()
  }, [])

const readCats = () => {
  fetch("http://localhost:3000/cats")
  .then((response) => response.json())
  .then((payload) => setCats(payload))
  .catch((error) => console.log(error))
}

  const createCat = (createdCat) => {
  fetch("http://localhost:3000/cats", {
    body: JSON.stringify(createdCat),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then(() => readCats())
    .catch((errors) => console.log("Cat create errors:", errors))
}
  

  const updateCat = (selectedCat , id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(selectedCat),
      headers: {
        "Content-Type": "application/json",
      },
        method: "PATCH",
      })
      .then((response) => response.json())
      .then(() => readCats())
      .catch((error)=> console.log("Update cat errors: ", error))
    }
    

    const deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`,{
      headers: {
        "Content-Type": "application/json"},
        method: "DELETE"})
      .then((response) => response.json())
      .then(() => readCats())
      .catch((errors) => console.log("delete errors:", errors))
    }
    

    return (
    <>
    <Header />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
      <Route path="/catindex" element={<CatIndex cats={cats} />} />
      <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
      <Route path="/catshow/:id" element={<CatShow cats={cats} deleteCat={deleteCat}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
