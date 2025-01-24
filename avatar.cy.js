describe('Покупака аватара', function () {

    it('Покупака аватара', function () {
       cy.visit('https://pokemonbattle.ru'); // Зашла на сайт
       cy.get('input[type="email"]').type('USER_LOGIN'); // Ввела верный логин
       cy.get('input[type="password"]').type('USER_PASSWORD'); // Ввела верный пароль
       cy.get('button[type="submit"]').click(); // Нажала кнопку войти
       cy.wait(2000);
       cy.get('.header__container > .header__id').click({ force: true }); // Нажала на своего аватара
       cy.get('[href="/shop"] > .history-info').click(); // Нажала на смену аватара
       cy.get('.available > button').first().click({ force: true });   // Выбрала купить доступного аватара
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // Ввела номер карты
       cy.get(':nth-child(1) > .pay_base-input-v2').type('0826'); // Ввела срок
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввела код
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('EKATERINA AVANESOVA'); // Ввела фамилию и  имя
       cy.get('.pay-btn').click(); // Нажала кнопку оплатить
       cy.get('#cardnumber').type('56456'); // Ввела код из пуша
       cy.get('.payment__submit-button').click(); // Нажала кнопку отправить
       cy.contains('Покупка прошла успешно').should('be.visible'); 

       
});
    })

