import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

import CatEdit from "../pages/CatEdit"

import mockCats from "../mockCats"

describe("<CatEdit />", () => {
  const renderEdit = () => {
    render(
        <MemoryRouter initialEntries={["/catedit/1"]}>
        <Routes>
          <Route path="/catedit/:id" element={<CatEdit cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("renders without crashing", () =>{
    renderEdit();
  })

  it("renders a edited cat", () => {
    renderEdit()
    screen.logTestingPlaygroundURL()

    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    })
    expect(nameInput).toBeInTheDocument()

    const enjoysInput = screen.getByRole("textbox", {
      name: /enjoys/i,
    })
    expect(enjoysInput).toBeInTheDocument()
  })

  it("contains a form with entries for name, age, enjoys, image", () => {
    renderEdit()
    const formName = screen.getByText(/name/i)
    expect(formName.getAttribute("For")).toEqual("name")
  })
})