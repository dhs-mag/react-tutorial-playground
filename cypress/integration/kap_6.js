describe('Test multi-components', ()=>{
    it('Visits localhost', ()=>{
        cy.visit('/');
    });
    it('Fill out form', ()=>{
        cy.get('[data-cy=player_1_name]').type("Brett Broďák");
        cy.get('[data-cy=player_1_hp]').clear().type("15");
        cy.get('[data-cy=player_2_name]').type("Riviera Kid");
        cy.get('[data-cy=player_2_hp]').clear().type("12");
        cy.contains('Start').click();
    });
    it('Show counters', () => {
        cy.get('[data-cy=val_1]').should('be.visible');
        cy.get('[data-cy=val_2]').should('be.visible');
    });
    it('Show inverted player', () => {
        cy.get('[data-cy=player-2]').should('not.have.css', 'transform')
    });
});
