import { render } from '@testing-library/react';
import App, { subtract } from './App';

describe('App component', () => {
  it('should render increment button', () => {
    const { getByText } = render(<App />);
    getByText('Increment');
  });
});
