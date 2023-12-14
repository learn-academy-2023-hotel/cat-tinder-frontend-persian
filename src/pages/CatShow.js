import React from "react"
import { useParams, NavLink } from "react-router-dom";


const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams ()
  let selectedCat = cats?.find((cat) => cat.id === +id)
  console.log(selectedCat)



  return (
    <div className="image-structure">
      {selectedCat && (
      <>
        <NavLink to={`/catedit/${selectedCat.id}`} className="nav-link">
        Edit Cat Profile
        </NavLink>
        <img alt={`${selectedCat.name}'s profile`} src={selectedCat.image} />
        <h3>{selectedCat.enjoys}</h3>
        <NavLink to="/catindex" className="nav-link">
            <button
              onClick={() => deleteCat(selectedCat.id)}
              className="button-show"
            >
              Delete Cat
            </button>
        </NavLink>
      </>
  )}
  </div>
  )
}

export default CatShow