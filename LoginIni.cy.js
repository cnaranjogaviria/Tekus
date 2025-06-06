export function login() {
  cy.visit('https://qalab.invertebrado.co');

  cy.xpath('//mat-form-field[1]//input', { timeout: 10000 }) 
    .should('be.visible')
    .type('qatester', { force: true });

  cy.xpath('//mat-form-field[2]//input', { timeout: 10000 })
    .should('be.visible')
    .type('N9j^u9&Hm@dz2Kcs', { force: true });

  cy.xpath('/html/body/app-root/app-login/section/div/div/div/div/div[1]/div/app-default-login/div/div/div[2]/div/form/div/div[4]/button[1]')
    .should('exist')
    .should('be.visible')
    .click({ force: true });

  // Validamos que la sesión quedó activa y redirecciona
  cy.url({ timeout: 20000 }).should('include', '/screens');
}