describe('Login en QAlab', () => {
  it('Iniciar sesión con credenciales válidas', () => {
    cy.visit('https://qalab.invertebrado.co');

    // Usuario
    cy.xpath('//mat-form-field[1]//input', { timeout: 10000 })
      .should('be.visible')
      .type('qatester', { force: true });

    // Contraseña
    cy.xpath('//mat-form-field[2]//input', { timeout: 10000 })
      .should('be.visible')
      .type('N9j^u9&Hm@dz2Kcs', { force: true });

    // Clic en el botón de iniciar sesión
    cy.xpath('/html/body/app-root/app-login/section/div/div/div/div/div[1]/div/app-default-login/div/div/div[2]/div/form/div/div[4]/button[1]')
    .should('exist')
    .should('be.visible')  
    .click({ force: true });

    // Esperar 10 segundos para visualizar la página
    cy.wait(10000); // 10000 milisegundos = 10 segundos
    cy.pause();

  });
});
