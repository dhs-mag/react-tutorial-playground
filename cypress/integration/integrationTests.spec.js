describe('Test StartingScreen', ()=>{
    it('Visits localhost', ()=>{
        cy.visit('/');
    });
    it('Finds H1', ()=>{
        cy.get('h1');
    });
    it('can not fill wrong inputs', ()=>{
        cy.get('[data-cy=player_1_hp]')
            .clear()
            .type("12", {force: true})
            .should('have.value', '12');
        cy.get('[data-cy=player_2_hp]')
            .clear()
            .type("asdcxw", {force: true})
            .should('have.value', '');
        // cy.contains('Start').click();
    });
    it('fill out form', ()=>{
        cy.get('[data-cy=player_1_name]').type("Brett Broďák");
        cy.get('[data-cy=player_1_hp]').type("{selectall}{backspace}15");
        cy.get('[data-cy=player_2_name]').type("Riviera Kid");
        cy.get('[data-cy=player_2_hp]').type("{selectall}{backspace}12");
        cy.contains('Start').click();
    });
});

describe('Test Counter', ()=>{
    it('counts player hp correctly', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('[data-cy=inc_1]').click();
            cy.get('[data-cy=dec_2]').click();
        }
        for (let i = 0; i < 15; i++) {
            cy.get('[data-cy=inc_2]').click();
            cy.get('[data-cy=dec_1]').click();
        }
        cy.get('[data-cy=val_1]').should('have.text', '10');
        cy.get('[data-cy=val_2]').should('have.text', '17');
    });
});

describe('Test Board', ()=>{
    it('shows names correctly', () => {
        cy.get('[data-cy=name_1]').should('have.text', 'Brett Broďák');
        cy.get('[data-cy=name_2]').should('have.text', 'Riviera Kid');
    });
});

