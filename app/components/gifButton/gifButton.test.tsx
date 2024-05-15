import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import GifButton from './gifButton';

describe('GifButton', () => {
    test('calls the handler sent through props when clicked', () => {
        const mockFunction = jest.fn();
        
        render(<GifButton handleTap={mockFunction} />);
    
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockFunction).toHaveBeenCalled();
    })
});