import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"





const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  })
  const handleChange = (e) => {
    setNewCat({...newCat, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }
  
  return (
    <Form>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input id="name" name="name" type="text" onChange={handleChange} value={newCat.name}/>
    </FormGroup>
    <FormGroup>
      <Label for="age">Age</Label>
      <Input id="age" name="age" type="text" onChange={handleChange} value={newCat.age}/>
    </FormGroup>
    <FormGroup>
      <Label for="enjoys">Enjoys</Label>
      <Input id="enjoys" name="enjoys" type="text" onChange={handleChange} value={newCat.enjoys}/>
    </FormGroup>
    <FormGroup>
      <Label for="image">Image</Label>
      <Input id="image" name="image" type="text" onChange={handleChange} value={newCat.image}/>
    </FormGroup>
    <Button onClick={handleSubmit}>
    Submit Cat
    </Button>
  </Form>   
  
  )
}


export default CatNew