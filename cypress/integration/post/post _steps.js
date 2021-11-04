const { Given,When, Then } = require("cypress-cucumber-preprocessor/steps")
const { Page } = require("../page_model/main_page")

Given('page is loaded', ()=>{
    Page.postRequest().as('post')
})
When('I add a new user',(dataTabel)=>{
let user = Page.getValuesFromTabel(dataTabel)
cy.request("POST", "@post",user)
// .then((response)=>{
//     expect(response.status).to.eq(201)
//     // expect(response.body).to.have.property(
//     //     'sebi', 'tester'
//     // )
// })
})
Then('the response cod is {int}',(statusCode)=>{
    const item  = {
        "name": "sebi",
        "job": "tester"
    }
    cy.request("POST", "@post",item)
    .then((response)=>{
        expect(response.status).to.eq(statusCode)
        // expect(response.body).to.have.property(
        //     'sebi', 'tester'
        // )
    })
    .its('body')
    .should('include', {name:'sebi', job:"tester"}) 

})