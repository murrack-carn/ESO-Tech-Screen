/// <reference types="cypress" />

describe('Property Pals My Location', function ()
{
	it('Verify aghalee comes up when i click my location', function() {
		cy.visit('https://www.propertypal.com/') //Visit propertyPals URL
		cy.url().should('include','propertypal') //gives current url, makes sure property pals website is open
		cy.title().should('eq','PropertyPal - Find Property For Sale & Rent In Ireland & Northern Ireland')

		cy.get('.search-ctrl > .search-form-ctrl > #query').click()	
		//When you click my location, chrome asks for permission
		cy.get('.suggestions-location').click()
		cy.get('.search-btns > .btn-buy').click()
		
		//Validates that the results screen is now open
		cy.title().should('eq','My Location - PropertyPal')
		cy.scrollTo(0,500)

		//Current top 2 results for my location
		cy.get('.sr-widecol > .boxlist > :nth-child(1)').contains('2 Ballinderry Road,')
		cy.get('.sr-widecol > .boxlist > :nth-child(2)').contains('52 Harlow Green,')


	}

)
}
)

