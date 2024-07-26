class BlogHomePage {
    visit() {
      cy.visit('https://blogdoagi.com.br/')
    }
  
    getSearchIcon() {
      return cy.get('.site-header-above-section-right > .ast-builder-layout-element')
    }
  
    getSearchInput() {
      return cy.get('#search-field')
    }
  
    search(term) {
      this.getSearchIcon().click()
      this.getSearchInput().type(`${term}{enter}`)
    }
  }
  
  export default BlogHomePage
  