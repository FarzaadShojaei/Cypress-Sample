const cypress = require("cypress")
const {it} = require("mocha")

describe('Alerts',()=>{


it.skip('Js Alert',()=>{

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
cy.on('window:alert',(t)=>{

expect(t).to.contains('I am a JS ALert')

//alert window automatically closed by cypress

cy.get("#result").should("have.text",'You successfully clicked an alert')



})

})

//2) Js Confirm Alert : It will have some text with 'OK' and 'Cancel' 

it('Js Confirm Alert - OK',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm')
    })
    //cypress  automatically closed alert window by using ok button-default
    cy.get('#result').should('have.text','You Clicked : OK')
    
    })


    it.only('Js Confirm Alert - Cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
    
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        
        cy.on('window:confirm', ()=> false)

        cy.get('#result').should('have.text','You Clicked : Cancel') //cypress closes alert window using Cancel alert
        
        })

    //3 Javascript Prompt Alert : It Will have some Text with a text box for user input along with 'OK'
    it.only('Js prompt Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
    
        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome');

        })
        cy.get("button[onclick='jsPrompt()']").click();

        //cypress will automatically close prompted alert - it will use OK Button - by default

        //cy.on('window:prompt',()=>false);

        cy.get("#result").should('have.text','You Entered : welcome');

        //4) Authenticated Alert

        it('Authenticated alert',()=>{

            //approach 1
            /*
            cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: {username: "admin",password:"admin"}});

            cy.get("div[class='example'] p").should('have.contain',"Congratulations")
            */

            cy.visit("https:/admin:admin@the-internet.herokuapp.com/basic_auth")
            cy.get("div[class='example'] p").should('have.contain',"Congratulations")

        })
        
        })


})