/// <reference types="cypress"/>

import Login from "../pom/login";
import CreateBoard from "../pom/createBoard";

const login = new Login();
const createBoard = new CreateBoard();
describe('Create Board test suite',()=>{

    it('Successfully create Board',()=>{
        login.login();
        createBoard.createBoard();

        //Assert that the newly created board is present
        cy.get('span').should('contain',`${createBoard.boardName}`);
    });

})