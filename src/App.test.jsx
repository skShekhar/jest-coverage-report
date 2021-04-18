import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render increment button', () => {
    const { getByText } = render(<App />);
    getByText('Increment');
  });
});
