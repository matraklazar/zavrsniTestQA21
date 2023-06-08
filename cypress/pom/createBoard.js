import {faker} from '@faker-js/faker';

class CreateBoard{
    boardName = faker.company.name();
    get myOrganizationCard(){
       return cy.get('.vs-c-my-organization__body');
    }

    get modalOkBtn(){
        return cy.get('.vs-c-modal--features-button > .vs-c-btn');
    }

    get addNewBoardBtn(){
        return cy.get('.vs-c-organization-boards__item--add-new');
    }

    get boardTitleInputField(){
        return cy.get('[placeholder="Enter title..."]');
    }
    
    get nextBtn(){
        return cy.get('[name="next_btn"]');
    }

    get kanbanRadioBtn(){
        return cy.get('[name="type_kanban"]');
    }


    createBoard(){
        this.myOrganizationCard.click();
        this.modalOkBtn.click();
        this.addNewBoardBtn.click();
        this.boardTitleInputField.type(this.boardName);
        this.nextBtn.click();
        this.kanbanRadioBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
        this.nextBtn.click();
    }
}

export default CreateBoard