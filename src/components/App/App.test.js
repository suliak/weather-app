import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import weatherAPIJSON from '../../../__stubs__/openWeatherAPI.json';

describe('App', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });

  it('contains the expected components', async() => {
    fetch.mockResponseOnce(JSON.stringify(weatherAPIJSON))
    render(<App />);
    
    expect(screen.getByText(/weather app/i)).toBeInTheDocument();
    expect(screen.getByTestId('AppHeader')).toBeInTheDocument();
    expect(screen.getByTestId('currentwx-container')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByTestId('currentwx-content-Honolulu')).toBeInTheDocument());
  });
});
