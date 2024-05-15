import Message from "./message";
import { render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import '@testing-library/jest-dom'; 

jest.mock('date-fns', () => ({format: jest.fn()}));

describe('Message', () => {
    test('renders a formatted date in the header', () => {
        format.mockReturnValue('3:32 PM');
        const mockDate = new Date();
    
        const mockMessageGroups: MessageGroup = {userId: 1, date: mockDate, messages: [
            { message: 'Mock Message', isGif: false },
            { message: 'Mock Message', isGif: false },
            { message: 'Mock Message', isGif: false },
        ]};

        render(<Message messageGroup={mockMessageGroups} />);
    
        expect(format).toHaveBeenCalledWith(mockDate, "p");
        expect(screen.getByText('3:32 PM')).toHaveTextContent('3:32 PM');
    })

    test('renders a username in the header', () => {
        const mockMessageGroups: MessageGroup = {userId: 1, messages: [
            { message: 'Mock Message', isGif: false },
            { message: 'Mock Message', isGif: false },
            { message: 'Mock Message', isGif: false },
        ]};

        render(<Message messageGroup={mockMessageGroups} />);
    
        expect(screen.queryAllByText('Peter').length).toBe(1);
    })

    test('renders multiple messages', () => {
        const mockMessageGroups: MessageGroup = {userId: 1, messages: [
            { message: 'Mock Message', isGif: false },
            { message: 'Mock Message', isGif: false },
            { message: 'Mock Message', isGif: false },
        ]};

        render(<Message messageGroup={mockMessageGroups} />);
    
        const images = screen.queryAllByTestId('test-image');

        expect(screen.getAllByTestId('test-paragraph').length).toBe(3);
        expect(images.length).toBe(0);
    })

    test('renders images', () => {
        const mockMessageGroups: MessageGroup = {userId: 1, messages: [
            { message: 'Mock Link', isGif: true },
            { message: 'Mock Link', isGif: true },
            { message: 'Mock Link', isGif: true },
        ]};

        render(<Message messageGroup={mockMessageGroups} />);

        expect(screen.getAllByTestId('test-image').length).toBe(3);
    })
});