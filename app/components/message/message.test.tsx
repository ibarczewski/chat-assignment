import Message from "./message";
import { render, screen } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals';
import '@testing-library/jest-dom'; 

test('starter test for setup', async () => {
    render(<Message />);

    await screen.findByRole('paragraph');

    expect(screen.getByRole('paragraph')).toHaveTextContent('Message');
});