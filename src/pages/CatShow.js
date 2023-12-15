import React from "react"
import { useParams, NavLink } from "react-router-dom";


const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams ()
  let selectedCat = cats?.find((cat) => cat.id === +id)
  console.log(selectedCat)
  

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this cat?");
    if (confirmDelete) {
      deleteCat(selectedCat.id);
    }
  }


  return (

<div className="image-structure">
      {selectedCat && (
      <>
        <NavLink to={`/catedit/${selectedCat.id}`} className="edit-button">
        Edit Cat
        </NavLink>
        <img alt={`${selectedCat.name}'s profile`} src={selectedCat.image} />
        <h3 className="cat-info">{selectedCat.enjoys}</h3>


      </>
      )}
        <NavLink to="/catindex">
        <button onClick={handleDelete} className="delete-button">
            Delete Cat
          </button>
        </NavLink>
</div>
  )
}



export default CatShow