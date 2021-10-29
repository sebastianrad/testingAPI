describe('API Testing', ()=>{

    //Cypress.config('baseUrl','https://reqres.in/api')
    
    it('GET - read',()=>{
        cy.request("/users?page=2")
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.per_page).to.eq(response.body.data.length)
            expect(response.body.data[1].first_name).to.eq("Lindsay")
            //check if all the objects from 'data' have all the keys
            Cypress._.each(response.body.data,(datas)=>{
                expect(datas).to.have.all.keys('id', 'email', 'first_name','last_name','avatar')
            })
        })
    })
    it('POST - Create',()=>{
        const item  = {
            "name": "sebi",
            "job": "tester"
        }
        cy.request("POST", "api/users",item)
        .then((response)=>{
            expect(response.status).to.eq(201)
            // expect(response.body).to.have.property(
            //     'sebi', 'tester'
            // )
        })
        .its('body')
        .should('include', {name:'sebi', job:"tester"}) 
    })
})