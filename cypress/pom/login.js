class Login{

    email = Cypress.env('email');
    password = Cypress.env('password');

    get emailInputField(){
        return cy.get('[name = "email"]')
    }

    get passwordInputField(){
        return cy.get('[type="password"]')
    }

    get submitBtn(){
        return cy.get('[type="submit"]').click();
    }

    login(){
        cy.visit(Cypress.config('baseUrl'));
        this.emailInputField.type(this.email);
        this.passwordInputField.type(this.password);
        this.submitBtn;
    }
}

export default Login