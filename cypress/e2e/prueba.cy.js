describe('Prueba google', () => {
    it('Entra a GOOGLE y busca gatitos', () => {
        cy.visit("https://www.google.com.mx/?hl=es")
        cy.get("#APjFqb").type("Gatitos bonitos{enter}")
    });

    it('Deberia mostrar prueba erronea', () => {
        cy.visit("https://www.google.com.mx/?hl=es")
        cy.get("#APjFqb").should('not.be.visible')

    });
});