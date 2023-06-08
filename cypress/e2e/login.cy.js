/// <reference types = "cypress" />

import Login from "../pom/login";
import {faker} from '@faker-js/faker';

const login = new Login();
const randomPassword = faker.internet.password();
const randomEmail = faker.internet.email();


describe('Login form test suite',()=>{

    context('Positive test case - valid login',()=>{
        
        // Assert that the login page has been reached
        it('Visit login page',()=>{
            cy.visit(Cypress.config('baseUrl'));
            cy.url().should('eq',Cypress.config('baseUrl'));
        });    
        
        it.only('Successful login',()=>{
            login.login();
        });
    });

    context('Negative test cases - invalid login',()=>{

        it('Invalid email - unsuccessful log in',()=>{
            cy.visit('')
            login.emailInputField.type('lazar@mail.com');
            login.passwordInputField.type(login.password);
            login.submitBtn.click();

            // Verify error message appeared
            cy.get('span').should('exist');
            cy.get('span').should('contain','Oops! Your email/password combination is incorrect');
        });

        it('Invalid password - unsuccessful log in',()=>{
            cy.visit('')
            login.emailInputField.type(login.email)
            login.passwordInputField.type(randomPassword);
            login.submitBtn.click();

            // Verify error message appeared
            cy.get('span').should('exist');
            cy.get('span').should('contain','Oops! Your email/password combination is incorrect');
        });

        it('Invalid email and password',()=>{
            cy.visit('')
            login.emailInputField.type(randomEmail);
            login.passwordInputField.type(randomPassword);
            login.submitBtn.click();

            // Verify error message appeared
            cy.get('span').should('exist');
            cy.get('span').should('contain','Oops! Your email/password combination is incorrect');
        })
    })
})