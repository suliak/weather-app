import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import CurrentWX from './CurrentWX';
import weatherAPIJSON from '../../../__stubs__/openWeatherAPI.json';

describe('CurrentWX', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });

  it('contains the expected components', async() => {
    fetch.mockResponseOnce(JSON.stringify(weatherAPIJSON))
    render(<CurrentWX />);
    
    expect(screen.getByTestId('addlocationcard')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTestId('currentwx-content-Honolulu')).toBeInTheDocument());
  });

  it('can open the modal', async() => {
    fetch.mockResponseOnce(JSON.stringify(weatherAPIJSON))
    render(<CurrentWX />);
    
    await waitFor(() => expect(screen.getByTestId('currentwx-content-Honolulu')).toBeInTheDocument());

    expect(screen.queryAllByTestId('newlocationmodal')).toHaveLength(0);
    screen.getByTestId('addlocationcard').click();
    expect(screen.getByTestId('newlocationmodal')).toBeInTheDocument();
  });

  it('wont add duplicate zip', async() => {
    fetch.mockResponseOnce(JSON.stringify(weatherAPIJSON))
    render(<CurrentWX />);
    
    await waitFor(() => expect(screen.getByTestId('currentwx-content-Honolulu')).toBeInTheDocument());
    expect(screen.queryAllByTestId('card-', { exact: false })).toHaveLength(1);

    screen.getByTestId('addlocationcard').click();
    
    const input = screen.getByTestId('uszipcode-input');
    const addBtn = screen.getByTestId('addlocation');

    // Add the default zip
    fireEvent.change(input, { target: { value: '96813' } });
    addBtn.click();

    expect(screen.queryAllByTestId('card-', { exact: false })).toHaveLength(1);
  });

  it('will add a unique zip', async() => {
    fetch.mockResponse(JSON.stringify(weatherAPIJSON))
    render(<CurrentWX />);
    
    await waitFor(() => expect(screen.getByTestId('currentwx-content-Honolulu')).toBeInTheDocument());
    expect(screen.queryAllByTestId('card-', { exact: false })).toHaveLength(1);

    screen.getByTestId('addlocationcard').click();
    
    const input = screen.getByTestId('uszipcode-input');
    const addBtn = screen.getByTestId('addlocation');

    // Add the default zip
    fireEvent.change(input, { target: { value: '96810' } });
    addBtn.click();

    await waitFor(() => expect(screen.queryAllByTestId('card-', { exact: false })).toHaveLength(2));
  });
});
