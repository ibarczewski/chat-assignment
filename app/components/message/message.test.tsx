import Message from "./message";
import { render, screen } from '@testing-library/react';
import { format } from 'date-fns';
// import {expect, jest, test} from '@jest/globals';
import '@testing-library/jest-dom'; 

jest.mock('date-fns', () => ({format: jest.fn()}));

describe('message component', () => {
    test('renders a formatted date in the header', () => {
        format.mockReturnValueOnce('3:32 PM');
    
        render(<Message />);
    
        expect(screen.getByText('3:32 PM')).toHaveTextContent('3:32 PM');
    })

    test('renders a username in the header', () => {
        render(<Message />);
    
        expect(screen.getByText('Peter')).toHaveTextContent('Peter');
    })

    test('renders multiple messages', () => {
        render(<Message />);
    
        expect(screen.getAllByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod').length).toBe(2);
    })
});