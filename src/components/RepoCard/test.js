import { screen } from '@testing-library/react';
import RepoCard from './';

describe('App', () => {

    beforeEach(() => {
        let testRepo = {
            name:'this_app',
            owner:{
                login:'msvalen'
            },
            language:'javascript',
        }
        render(<RepoCard repo={testRepo} />);
    });
    
    test("The username apears as text", () => {
        const user = screen.getByRole('Username')
        expect(user.textContent).toBe("msvalen");
    });
    test("The main Tecnology apears as text", () => {
        const tecnology = screen.getByRole('MainTecnology')
        expect(tecnology.textContent).toBe("javascript");
    });
    test("Has a title", () => {
        const title = screen.getByRole('Title')
        expect(title.textContent).toBe("this app");
    });

});