describe('Проверка авторизации', function () {

     it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала на кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Вижу текст успешной авторизаии
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // На странице есть креститк и он виден пользователю
 
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();

        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
             })     
     
     it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio56');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 })
 
     it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnik.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

     it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
         })

     it('Логин состоящий из строчных букв и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
    
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

     })