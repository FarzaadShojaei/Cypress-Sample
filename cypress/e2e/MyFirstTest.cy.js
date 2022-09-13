const cypress = require("cypress");
const { describe,it } = require("mocha");


describe('verify title-positive',()=>{
    it('test1',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        

        cy.title().should('eq','OrangeHRM')


    })

    it('verify title-negative test',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        

        cy.title().should('eq','OrangeHRM132')


    })

})



/*

describe('My First Test ',function(){

    it('Does Not do much!',function(){
        expect(true).to.equal(true); 
    })
    
    
    })
    */