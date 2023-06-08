/// <reference types="cypress" />

describe('API test suite - delete board',()=>{

    beforeEach(()=>{
        cy.loginViaApi();
    })
    it('Delete board via backend',()=>{
        let token = window.localStorage.getItem('token');
        cy.visit('');
        cy.request({
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/17502',
            method:'DELETE',
            headers:{
                Authorization: `Bearer ${token}`
            }
            
        }).then(response=>{
            console.log(response);
        })
    })
    
})