import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import ConversationHeader from './conversationHeader';

describe('ConversationHeader', () => {
    test('renders a formatted date in the header', () => {
        render(<ConversationHeader />);
    
        const header = screen.getByRole('heading');

        expect(header.textContent).toContain('Peter')
    })
});