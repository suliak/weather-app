import { render, screen } from '@testing-library/react';
import CurrentWXContent from './CurrentWXContent';
import weatherAPIJSON from '../../../__stubs__/openWeatherAPI.json';

describe('AppHeader', () => {
  it('contains the expected components', async() => {
    render(<CurrentWXContent data={weatherAPIJSON} />);
    expect(screen.getByTestId('currentwx-content-Honolulu')).toBeInTheDocument();

    // Keys
    expect(screen.getByText(/temperature/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like/i)).toBeInTheDocument();
    expect(screen.getByText(/wind speed/i)).toBeInTheDocument();
    expect(screen.getByText(/direction/i)).toBeInTheDocument();
    expect(screen.getByText(/humidity/i)).toBeInTheDocument();
    expect(screen.getByText(/pressure/i)).toBeInTheDocument();

    // Values in order of above
    expect(screen.getByText(/70/i)).toBeInTheDocument();
    expect(screen.getByText(/75/i)).toBeInTheDocument();
    expect(screen.getByText(/10.01/i)).toBeInTheDocument();
    expect(screen.getByText(/340/i)).toBeInTheDocument();
    expect(screen.getByText(/80/i)).toBeInTheDocument();
    expect(screen.getByText(/1000/i)).toBeInTheDocument();
  });
});