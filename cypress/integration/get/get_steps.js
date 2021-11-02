const { Given, Then } = require("cypress-cucumber-preprocessor/steps")
const { Page } = require("../page_model/main_page")

Given('page is loaded', () => {
    const url = Page.getRequest().as('page')
})
Then('the status is {int}', (status) => {
    cy.get('@page').should((response) => {
        expect(response.status).to.eq(status)
    })
})
Then('the keys from body are', (dataTable) => {
    let bodyValues = Page.getVal(dataTable)
    cy.get('@page')
        .should((response) => {
            expect(response.body).to.have.keys(bodyValues)
        })
})
Then('the keys are avaible', (dataTable) => {
    let dataValues = Page.getVal(dataTable)
    cy.get('@page')
        .then((response) => {
            Cypress._.each(response.body.data, (datas) => {
                expect(datas).to.have.all.keys(dataValues)
            })
        })
})
Then('email file is not empty', () => {
    cy.get('@page')
        .should((response) => {
            Cypress._.each(response.body.data, (datas) => {
                expect(datas.email).to.not.be.null
            })
        })
})
Then('list of emails', (dataTable) => {
    let bodyValues = Page.getVal(dataTable)
    cy.get('@page')
        .should((response) => {
            for (let i = 0; i < response.body.data.length; i++) {
                expect(response.body.data[i].email).to.eq(bodyValues[i])
            }
        })
})
Then('per page is eqal with the lenght of data',()=>{
  cy.get('@page')
  .should((response)=>{
      expect(response.body.per_page).to.eq(response.body.data.length)
  })  
})
Then('first id should be {int}',(int)=>{
    cy.get('@page')
    .should((response)=>{
        expect(response.body.data[0].id).to.eq(int)
    })
})
Then('check to see if we have duplicates',()=>{
    let el= []
    cy.get('@page')
        .should((response) => {
            for (let i = 0; i < response.body.data.length; i++) {
                el.push(response.body.data[i].id)
              //  expect(response.body.data[i].email).to.eq(bodyValues[i])
            }
        })
        cy.log(Page.checkDuplicates(el))
        cy.log( expect(Page.checkDuplicates(el)).to.eq(false))
})


