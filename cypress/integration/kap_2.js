describe('Test single form', ()=>{
    it('Visits localhost', ()=>{
        cy.visit('/');
    });
    it('Finds Heading', ()=>{
        cy.get('h1').should('be.visible');
    });
    it('Form exists', ()=>{
        cy.get('[data-cy=player-1-name]').should('be.visible');
        cy.get('[data-cy=player-1-hp]').should('be.visible');
    });
    it('Can not fill wrong inputs', ()=>{
        cy.get('[data-cy=player-1-hp]')
            .clear()
            .type("adsf12a")
            .should('have.value', '12');
    });
});
