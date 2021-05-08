/// <reference types="cypress" />

describe('Property Pals My Location', function ()
{
	it('Verify aghalee comes up when i click my location', function() {
		cy.visit('https://www.propertypal.com/') //Visit propertyPals URL
		cy.url().should('include','propertypal') //gives current url, makes sure property pals website is open
		cy.title().should('eq','PropertyPal - Find Property For Sale & Rent In Ireland & Northern Ireland')

		cy.get('.search-ctrl > .search-form-ctrl > #query').type('bt6')		
		cy.get('.search-btns > .btn-buy').click()

		//Validates that the results screen is now open
		cy.title().should('eq','Property For Sale in BT6 - PropertyPal')

		cy.scrollTo(0,500)


		//Current top 2 results for postcode BT6
		cy.get('.sr-widecol > .boxlist > :nth-child(1)').contains('5 Ranelagh St,')
		cy.get('.sr-widecol > .boxlist > :nth-child(2)').contains('11 Carncaver Road,')


	}

)
}
)

