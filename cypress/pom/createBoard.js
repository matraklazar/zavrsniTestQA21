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
    
    get myOrganizationTitle(){
        return cy.get('.vs-l-organization__title');
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

    get lastCreatedBoard(){
        return cy.get('a').contains(`${this.boardName}`);
    }

    get configureBoard(){
        return cy.get('[data-cy="board-configuration"] > span > div > .vs-c-site-logo');
    }
    get deleteBoardBtn(){
        return cy.get(':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn');
    }
    get confirmDeleteBoardBtn(){
        return cy.get('.vs-u-text--right > .el-button--success');
    }
    deleteBoard(){
        this.lastCreatedBoard.click();
        this.configureBoard.click();
        this.deleteBoardBtn.click();
        this.confirmDeleteBoardBtn.click();
    }
}

export default CreateBoard