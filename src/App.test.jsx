import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('on click increment button should increment the count', () => {
    const { getByText } = render(<App />);
    getByText('Count 0');
    getByText('Increment').click();
    getByText('Count 1');
  });
});
