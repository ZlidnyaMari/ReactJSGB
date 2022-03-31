import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import MessageList from '../component/MessageList';

describe ('Test component', () => {
     it( 'test component messageList', () => {
        const view = render(<MessageList />);
        expect(view).toMatchSnapshot(); 
    });
})

describe( 'Test pages', () => {
    
    it( 'test pages home text', () => {
        render(<Home />);
        expect(screen.getByText(/for react/i)).toBeInTheDocument();
        expect(screen.queryByText('Search for react')).toBeNull();
        expect(screen.getByAltText('test img')).toBeInTheDocument();
    });
});
