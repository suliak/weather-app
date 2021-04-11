import { render, screen, fireEvent } from '@testing-library/react';
import NewLocationModal from './NewLocationModal';

const addLocation = jest.fn();
const handleClose = jest.fn();

describe('NewLocationModal', () => {
  it('should be closed', async() => {
    render(
      <NewLocationModal open={false} addLocation={addLocation} handleClose={handleClose} />
    );
    expect(screen.queryAllByTestId('newlocationmodal')).toHaveLength(0);
  });

  it('validates zip codes', () => {
    render(
      <NewLocationModal open={true} addLocation={addLocation} handleClose={handleClose} />
    );

    const input = screen.getByTestId('uszipcode-input');
    const addBtn = screen.getByTestId('addlocation');

    expect(addBtn).toBeDisabled();

    // Too short
    fireEvent.change(input, { target: { value: '0' } });
    expect(addBtn).toBeDisabled();

    // Too long
    fireEvent.change(input, { target: { value: '012345' } });
    expect(addBtn).toBeDisabled();

    // Contains a non number
    fireEvent.change(input, { target: { value: '0123A' } });
    expect(addBtn).toBeDisabled();

    // Exactly 5 numbers works
    fireEvent.change(input, { target: { value: '01234' } });
    expect(addBtn).not.toBeDisabled();
  });

  it('adds a location and closes for a valid zip', () => {
    render(
      <NewLocationModal open={true} addLocation={addLocation} handleClose={handleClose} />
    );

    const input = screen.getByTestId('uszipcode-input');
    const addBtn = screen.getByTestId('addlocation');

    expect(addLocation).not.toHaveBeenCalled();
    expect(handleClose).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: '12345' } });
    fireEvent.click(addBtn);
    expect(addLocation).toHaveBeenLastCalledWith(12345);
    expect(handleClose).toHaveBeenCalled();
  })
});