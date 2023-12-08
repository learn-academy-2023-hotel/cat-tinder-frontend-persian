import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound'


describe("<App />", () => {
test('renders learn react link', () => {
  render
 (<BrowserRouter>
  <App />
  <NotFound />
  </BrowserRouter>)

// screen.debug
screen.logTestingPlaygroundURL()
const homeElement = screen.getByText(/notfound/i)
expect(homeElement).toBeInTheDocument()
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument()
})
})