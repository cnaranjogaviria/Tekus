import { login } from '../Tests/LoginIni.cy.js';

describe('Validación de campos en la sección de Multimedia', () => {
  beforeEach(() => {
    login(); // Iniciar sesión correctamente

    // Validar que estamos autenticados antes de continuar
    cy.url({ timeout: 10000 }).should('include', '/screens');

    // Navegar directamente al módulo Multimedia
    cy.visit('https://qalab.invertebrado.co/screens/multimedia');

    // Interceptar la llamada real de API si está disponible
    cy.intercept('GET', '**/api/multimedia**').as('loadMultimedia'); // Ajustar ruta real

    // Validar que el módulo carga (no usamos texto, sino un selector)
    cy.get('.file-card', { timeout: 30000 }).should('exist').and('be.visible');
  });

  it('Valida los campos de cada tarjeta de archivo multimedia', () => {
    cy.get('.file-card').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('.file-size').should('exist').and('not.be.empty');
        cy.get('.file-id').should('exist').and('not.be.empty');
        cy.get('.file-description').should('exist');
        cy.get('.file-preview').should('exist');
      });
    });
  });
});


