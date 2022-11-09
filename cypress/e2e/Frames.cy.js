const {it} = require("mocha")
import 'cypress-iframe'
describe("handling frames",()=>{

it('approach1',()=>{

cy.visit("http://the-internet.herokuapp.com/iframe");

    const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("welcome {ctrl+v}",);
        cy.get("[aria-label='Bold'").click();
})


it.skip('approach2 - by using custom command',()=>{

    cy.visit("http://the-internet.herokuapp.com/iframe");
    
        cy.getIframe('mce_0_ifr').clear().type("Welcome {ctrl+V}")
        cy.get("[aria-label='Bold'").click();
    })


it.only('approach3 - by using cypress-iframe plugin',()=>{

        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr'); //Load The frame
        cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+V}"); 
        
        cy.get("[aria-label='Bold']").click();
        })    
    




})