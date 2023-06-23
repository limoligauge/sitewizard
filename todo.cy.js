describe('Navegar na pagina wizard.com.br', () => {
  const cursos = [


      'INGLES',
      'ESPANHOL',
      'FRANCES',
      'ALEMAO',
      'ITALIANO',
      'CHINES',
      'JAPONES',
      'PORTUGUES',
     
];

  beforeEach(() => {
    cy.visit('www.wizard.com.br'); // visita a página da wizard
    cy.wait(4000);
    cy.get('.base',{ timeout: 4000 }).click(cursos); // clica no botão continuar para aceitar os termos e condições
  });

  it('clicar na lista de cursos', () => {
    for (let i = 0; i < cursos.length; i++) {
      const cursos = cursos[i];

      cy.get('svg.w-6.h-6.fill-white', { timeout: 1000 }).click(); // clica na aba cursos
      cy.wait(2000);   // AQUI PRECISO COLOCAR O CODIGO QUE NÃO TENHO 
      cy.wait(2000);     // AQUI TAMBEM
      

      cy.get('.justify-start > :nth-child(2) > .overflow-hidden > .flex').click();
      cy.get('svg.w-6.h-6.fill-green').click();
      cy.get('.mb-4 > .relative > div > .w-full').type(cursos);
      cy.wait(1000);
      cy.contains(cursos).should('exist'); // verifica se a lista de cursos esta ok
      cy.contains(cursos).click(); // ao verificar clicar no curso
      cy.wait(1000);
  
      if (i !== cursos.length - 1) {
      cy.clearLocalStorage()
      cy.visit('https://www.wizard.com.br'); // visita a página da aplicação novamente
      cy.wait(3000);
      cy.get('.base').click(); // clica no botão continuar para aceitar os termos e condições
      }
    }
    cy.wait(1000);
    cy.get('.text-3xl').should('contain', 'Curso selecionado', { timeout: 2000 });
  });
});


