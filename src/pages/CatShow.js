import React from "react";
import { useParams, NavLink } from "react-router-dom";

const CatShow = ({ cats, deleteCat }) => {
  const { id, name, age } = useParams();
  let selectedCat = cats?.find((cat) => cat.id === +id);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this cat?"
    );
    if (confirmDelete) {
      deleteCat(selectedCat.id);
    }
  };

  return (
    <>
      <div className="image-structure">
        {selectedCat && (
          <>
            <img alt={`${selectedCat.name}'s profile`} src={selectedCat.image} />
            <div>
              <div className="name-age">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
              </div>
                <h3 className="cat-info">{selectedCat.enjoys}</h3>
              </div>
          </>
        )}
      </div>
      {selectedCat && (
          <>
            <NavLink to="/catindex">
              <button onClick={handleDelete} className="delete-button">
              Delete Cat
              </button>
            </NavLink>
            <NavLink to={`/catedit/${selectedCat.id}`} className="edit-button">
              Edit Cat
            </NavLink>
          </>
        )}
    </>
  )
};

export default CatShow;
