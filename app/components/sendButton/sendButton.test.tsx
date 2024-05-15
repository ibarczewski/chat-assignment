import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import SendButton from "./sendButton";

describe('SendButton', () => {
    test('fires the handler when the button is enabled and clicked', () => {
        const mockFunction = jest.fn();

        render(<SendButton handleTap={mockFunction} disableSending={false} />);
    
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockFunction).toHaveBeenCalled();
    })

    test('fires the handler when the button is disabled and clicked', () => {
        const mockFunction = jest.fn();

        render(<SendButton handleTap={mockFunction} disableSending={true} />);
    
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockFunction).not.toHaveBeenCalled();
    })
});