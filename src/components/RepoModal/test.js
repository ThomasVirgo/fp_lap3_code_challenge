import { screen } from '@testing-library/react';
import RepoModal from './';

describe('App', () => {

    beforeEach(() => {
        let testRepo = {
            name:'this_app',
            owner:{
                login:'msvalen'
            },
            description:'this is a test',
            language:'javascript',
            html_url:'https://pepe.pe/'
        }
        render(<RepoModal repo={testRepo} />);
    });
    
    
    test("The description apears as text", () => {
        const description = screen.getByRole('Description')
        expect(description.textContent).toBe("this is a test");
    });
    test("Has a title", () => {
        const title = screen.getByRole('Title')
        expect(title.textContent).toBe("this app");
    });
    test("The link is related to the repo", () => {
        const link = screen.getByRole('link')
        expect(link.href).toBe("https://pepe.pe/");
    });

});