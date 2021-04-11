import { render, screen } from '@testing-library/react';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
  it('contains the expected components', async() => {
    render(<AppHeader />);
    expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
  });
});
