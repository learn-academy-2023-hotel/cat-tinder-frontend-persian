import React from "react"
import { useParams} from "react-router-dom";

const CatShow = ({ cats }) => {
  const { id } = useParams ()
  let selectedCat = cats?.find((cat) => cat.id === +id)
  console.log(selectedCat)

  return (
    <>
      {selectedCat && (
        <>
        <img alt={`${selectedCat.name}'s profile`} src={selectedCat.image} />
        <h3>{selectedCat.enjoys}</h3>
    </>
  )}
  </>
  )
}

export default CatShow