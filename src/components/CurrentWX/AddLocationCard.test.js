import { render, screen } from '@testing-library/react';
import AddLocationCard from './AddLocationCard';

const handleClick = jest.fn();

describe('AddLocationCard', () => {
  it('calls the callback when clicked', async() => {
    render(<AddLocationCard handleClick={handleClick} />);
    expect(handleClick).toHaveBeenCalledTimes(0);
    const addLocationCard = screen.getByTestId('addlocationcard');
    expect(addLocationCard).toBeInTheDocument();
    
    // Trigger callback
    addLocationCard.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
