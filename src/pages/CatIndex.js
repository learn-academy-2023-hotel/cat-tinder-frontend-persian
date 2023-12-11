import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const CatIndex = ({ cats }) => {
  return (
    <div className="cards-index">
      {cats.map((cat, index) => {
        return (
          <Card
            style={{
              width: "14rem"
            }}
            key={index}
          >
            <img alt={`Welcome to ${cat.name}'s Profile`} 
            src={cat.image} 
            />
            <CardBody>
              <CardTitle tag="h5">
                {cat.name}
                </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {cat.age}
              </CardSubtitle>
              <NavLink to={`/catshow/${cat.id}`}>
                {cat.name}'s' profile
                </NavLink>
            </CardBody>
          </Card>
        )
      })}
      </div>
  )
  }

export default CatIndex