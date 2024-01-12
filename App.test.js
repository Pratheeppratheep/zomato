import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



render() {
  const { location, } = this.state;

  <input type="text" placeholder='search for restaurant' className='search-box' onChange={this.handelSearch} />