/// <reference types="cypress" />

describe('Property Pals My Location', function ()
{
	it('Verify aghalee comes up when i click my location', function() {
		cy.visit('https://www.propertypal.com/') //Visit propertyPals URL
		cy.url().should('include','propertypal') //gives current url, makes sure property pals website is open
		cy.title().should('eq','PropertyPal - Find Property For Sale & Rent In Ireland & Northern Ireland')

		cy.get('.search-ctrl > .search-form-ctrl > #query').type('bt1000')		
		cy.get('.search-btns > .btn-buy').click()

		//Validates that the results screen is now open
		cy.title().should('eq','bt1000 - PropertyPal')

		cy.get('.sr-top > .sr-bg').contains('Sorry, No properties found')
		cy.get('.noresults-intro').contains('We couldn')
		cy.get('.noresults-intro').contains('t find any results for the search')
		cy.get('.noresults-intro').contains('"bt1000" in Property For Sale')

	}

)
}
)