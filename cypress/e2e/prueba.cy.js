describe('Prueba googleE', () => {
    it('Entra a GOOGLE y busca gatitos', () => {
        cy.visit("https://www.google.com.mx/?hl=es")
        cy.get("#APjFqb").type("Gatitos bonitos{enter}")
    });
});