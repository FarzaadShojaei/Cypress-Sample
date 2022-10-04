const { expect } = require("chai");
const {describe} = require("mocha");

describe("Assertions Demo",()=>{

    it("Impilcit Assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //should and


      //  cy.url().should('include','orangehrmlive.com')
       // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // cy.url().should('contain','orangehrm')

       cy.url().should('include','orangehrmlive.com')
       .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       .and('contain','orangehrm')
       .and('not.contain','greenhrm')

       cy.title().should('include','orange')
       .and('eq',"OrangeHRM")
       .and('contain',"HRM")

       cy.get('.orangehrm-login-branding > img').should('be.visible')
       .and('exist')

       cy.xpath("//a").should('have.length','5') //No of links

       cy.get("input[placeholder='Username']").type("Admin")  //provide a value into inputbox

       cy.get("input[placeholder='Username']").should('have.value','admin')
 
    })


    it("explicit assertions ",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expname="Paul Collins";
        //class in which the real username is located 
        cy.get(".oxd-userdropdown-name").then( (x) => {
                let actName=x.text()
                //BDD Style
                expect(actName).to.equal(expname)
                expect(actName).to.not.equal(expname)
                //TDD Style


        })




    })


})