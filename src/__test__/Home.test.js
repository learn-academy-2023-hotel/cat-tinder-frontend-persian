import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
test('renders learn react link', () => {
  render
 (<BrowserRouter>
  <App />
  </BrowserRouter>)

// screen.debug
screen.logTestingPlaygroundURL()
const homeElement = screen.getByText(/home/i)
expect(homeElement).toBeInTheDocument()
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument()
})
})
