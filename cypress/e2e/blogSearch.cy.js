import BlogHomePage from '../pages/BlogHomePage'
import SearchResultsPage from '../pages/SearchResultsPage'

describe('Blog Search Test', () => {
  const homePage = new BlogHomePage()
  const resultsPage = new SearchResultsPage()

  it('should search for articles and display results', () => {
    homePage.visit()
    homePage.search('finanças')

    resultsPage.getFirstArticleTitles().should('have.length.greaterThan', 0)
    resultsPage.getFirstArticleTitles().each(($el) => {
      cy.wrap($el).should('contain.text', 'finanças')
    })
  })

  it('should navigate to the first article from the search results', () => {
    homePage.visit()
    homePage.search('finanças')

    resultsPage.clickFirstArticle()

    resultsPage.getArticleTitles().each(($el) => {
      cy.wrap($el).should('contain.text', 'finanças')
    })
  })
  
})
