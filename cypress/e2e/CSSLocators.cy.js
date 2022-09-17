

describe('CSSLocators',()=>{

it("csslocators",()=>{

cy.visit("http://automationpractice.com/index.php")

//cy.get("#search_query_top").type("T-Shirts") //id 


cy.get("input.search_query[name='search_query']").type("T-Shirts")

cy.get(".search_query").type("T-Shirts")

cy.get("[name='submit_search']").click()

cy.get(".lighter").contains("T-Shirts")





})


})