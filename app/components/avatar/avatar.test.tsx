import Avatar from "./avatar";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 

describe('Avatar', () => {
    test('renders a placeholder avatar if no src is passed in with props', () => {

        render(<Avatar />);
    
        const image = screen.getByRole('img');

        expect(image.src).toContain('/no-avatar.jpg');
    })

    test('renders the src if passed in with props', () => {
        const expectedSrc = "https://notreal.com/avatar.jpg";
        render(<Avatar src={expectedSrc}/>);
    
        const image = screen.getByRole('img');

        expect(image.src).toBe(expectedSrc);
    })
});