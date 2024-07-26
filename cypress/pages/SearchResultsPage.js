class SearchResultsPage {
    getFirstArticleTitles() {
      return cy.get('#post-7615 > .ast-post-format- > .post-content > .entry-title > a')
    }
  
    clickFirstArticle() {
      this.getFirstArticleTitles().first().click()
    }

    getArticleTitles(){
      return cy.get('.entry-title')
    }
  }
  
  export default SearchResultsPage
  