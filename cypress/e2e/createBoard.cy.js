/// <reference types="cypress"/>

import Login from "../pom/login";
import CreateBoard from "../pom/createBoard";

const login = new Login();
const createBoard = new CreateBoard();
describe('Create Board test suite',()=>{

    beforeEach(()=>{
        login.login();
    })
    it('Successfully create Board',()=>{
        // cy.intercept({

        // })
        createBoard.createBoard();

        //Assert that the newly created board is present
        cy.get('span').should('contain',`${createBoard.boardName}`);
    });

    it('Successfully delete last created board',()=>{
        createBoard.deleteBoard();

        // Assert that the last created board was not deleted
        // createBoard.myOrganizationCard.click();
        cy.get('.vs-c-modal__body > .el-button').click();
        cy.get('.vs-c-organization__body > :nth-child(1)').should('not.contain',`${createBoard.boardName}`);
        
    })

})