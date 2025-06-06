import { login } from '../Tests/LoginIni.cy.js'; // Verifica que la ruta sea correcta

describe('Verificar campos en la sección de Multimedia', () => {
  beforeEach(() => {
    login(); // Iniciar sesión

    cy.visit('https://qalab.invertebrado.co/screens/multimedia');

    // Esperar que la página cargue completamente
    cy.wait(20000); 

    // Asegurar que el módulo Multimedia está presente antes de hacer clic
    cy.contains('Multimedia', { timeout: 20000 }).should('be.visible').click();

    // Opcional: Si la API realmente existe, usa cy.intercept()
    cy.intercept('GET', '**/ruta-correcta-api-multimedia**').as('loadMultimedia');
    cy.wait('@loadMultimedia'); // Solo si el endpoint es correcto

    // Si la API no es necesaria, prueba esperar que el elemento aparezca
    cy.get('.file-card', { timeout: 20000 }).should('exist').and('be.visible');
  });

  it('Seleccionar el módulo Multimedia y validar campos', () => {
    cy.get('.file-card').each(($el) => {
      cy.wrap($el).find('.file-size').should('exist');
      cy.wrap($el).find('.file-id').should('exist');
      cy.wrap($el).find('.file-description').should('exist');
      cy.wrap($el).find('.file-preview').should('exist');
      cy.pause();
    });
  });
});

