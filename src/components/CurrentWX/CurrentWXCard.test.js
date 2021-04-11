import { render, screen, waitFor } from '@testing-library/react';
import CurrentWXCard from './CurrentWXCard';
import weatherAPIJSON from '../../../__stubs__/openWeatherAPI.json';

describe('App', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });

  it('fetches the data', async() => {
    fetch.mockResponseOnce(JSON.stringify(weatherAPIJSON))
    render(<CurrentWXCard usZipCode={96813} />);

    // Shows loading
    await waitFor(() => expect(screen.getByTestId('cardloading-96813')).toBeInTheDocument());
    
    // Shows the the card after fetch completes
    await waitFor(() => expect(screen.getByTestId('currentwx-content-Honolulu')).toBeInTheDocument());
  });

  it('shows an error if the fetch fails', async() => {
    fetch.mockReject(new Error('fake error message'));
    console.error = jest.fn();

    render(<CurrentWXCard usZipCode={96813} />);
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
    expect(console.error).toHaveBeenCalled();
  });
});
