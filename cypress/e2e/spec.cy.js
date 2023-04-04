describe('Test - mercadolibre', () => {

  it('Select products', () => {
    cy.visit('https://www.mercadolibre.com')
    cy.wait(500)
    //Selecting México as country
    cy.contains('México').scrollIntoView()
    cy.get('#MX').click()
    cy.wait(500)

    cy.origin('https://www.mercadolibre.com.mx', () => {
      cy.get('.andes-button--transparent > .andes-button__content').click()
      cy.get('[data-testid="action:understood-button"]').click()
      
      //Searching playstation4
      cy.get('.nav-search-input').type('playstation4')
      cy.get('.nav-search-btn').click()
      cy.wait(500)
    })
    
    cy.origin('https://listado.mercadolibre.com.mx', () => {
      //Filter by condition
      cy.get(':nth-child(7) > ul > :nth-child(1) > .ui-search-link > .ui-search-filter-name').scrollIntoView()
      cy.get(':nth-child(7) > ul > :nth-child(1) > .ui-search-link > .ui-search-filter-name').click()
      //Filter by location
      cy.get(':nth-child(14) > ul > :nth-child(1) > .ui-search-link > .ui-search-filter-name').scrollIntoView()
      cy.get(':nth-child(14) > ul > :nth-child(1) > .ui-search-link > .ui-search-filter-name').click()
      cy.wait(4000)

      //Order by Mayor a menor
      cy.get('.andes-dropdown__standalone-arrow').click()
      cy.wait(1000)
      cy.get('#andes-dropdown-más-relevantes-list-option-price_desc > .andes-list__item-first-column > .andes-list__item-text > .andes-list__item-primary').click()
      cy.wait(3000)

      //Name and price of first five products.
      cy.get(':nth-child(1) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-item__group--title > .ui-search-link > .ui-search-item__title').then(function(text1){
        cy.log(text1.text())
      })
      cy.get(':nth-child(1) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-result__content-columns > .ui-search-result__content-column--left > .ui-search-item__group--price > .ui-search-item__group__element > .ui-search-price > .ui-search-price__second-line > .price-tag > .price-tag-amount > .price-tag-fraction').then(function(text2){
        cy.log(text2.text())
      })

      cy.get(':nth-child(2) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-item__group--title > .ui-search-link > .ui-search-item__title').then(function(text3){
        cy.log(text3.text())
      })
      cy.get(':nth-child(2) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-result__content-columns > .ui-search-result__content-column--left > .ui-search-item__group--price > .ui-search-item__group__element > .ui-search-price > .ui-search-price__second-line > .price-tag > .price-tag-amount > .price-tag-fraction').then(function(text4){
        cy.log(text4.text())
      })

      cy.get(':nth-child(3) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-item__group--title > .ui-search-link > .ui-search-item__title').then(function(text5){
        cy.log(text5.text())
      })
      cy.get(':nth-child(3) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-result__content-columns > .ui-search-result__content-column--left > .ui-search-item__group--price > div.ui-search-item__group__element > .ui-search-price > .ui-search-price__second-line > .price-tag > .price-tag-amount > .price-tag-fraction').then(function(text6){
        cy.log(text6.text())
      })

      cy.get(':nth-child(4) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-item__group--title > .ui-search-link > .ui-search-item__title').then(function(text7){
        cy.log(text7.text())
      })
      cy.get(':nth-child(4) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-result__content-columns > .ui-search-result__content-column--left > .ui-search-item__group--price > .ui-search-price__part-without-link > .ui-search-price > .ui-search-price__second-line > .price-tag > .price-tag-amount > .price-tag-fraction').then(function(text8){
        cy.log(text8.text())
      })

      cy.get(':nth-child(5) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-item__group--title > .ui-search-link > .ui-search-item__title').then(function(text9){
        cy.log(text9.text())
      })
      cy.get(':nth-child(5) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-result__content-columns > .ui-search-result__content-column--left > .ui-search-item__group--price > .ui-search-price__part-without-link > .ui-search-price > .ui-search-price__second-line > .price-tag > .price-tag-amount > .price-tag-fraction').then(function(text10){
        cy.log(text10.text())
      })
      
      
    })
  
  })

})