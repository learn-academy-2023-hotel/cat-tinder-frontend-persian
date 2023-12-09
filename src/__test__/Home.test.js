import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
test('renders learn react link', () => {
  render
 (<BrowserRouter>
  <App />
  </BrowserRouter>)

screen.logTestingPlaygroundURL()
const homeElement = screen.getByText(/home/i)
expect(homeElement).toBeInTheDocument()
 
})
})
