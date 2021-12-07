
const request = require('supertest');
const app = require('../../index');


// test precondition (User must have access to the registration page.)

describe("Test for registration", () => {

    test("It should lounch the register page", done => {
        request(app)
            .get('/register')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

// -----all valid inputs------

    test("Test for valid input", done => {
        request(app)
            .post('/sql/register')
            .send({
                email: "ASBC@kea.dk",
                activation_code: "ASBC",
                password: "ASBCASBC",
                repeat_password: "ASBCASBC"
            }).then((response) => {  
                expect(response.statusCode).toBe(400) // change this later to 200
                done();
            })
    })


    // ------invalid email input -----

    test("Test for invalid email", done => {
        request(app)
            .post('/sql/register')
            .send({
                email: "NOTJART@kea.dk",
                activation_code: "JART",  
                password: "jartjart",
                repeat_password: "jartjart"
            }).then((response) => {  
                expect(response.statusCode).toBe(400) 
                done();
            })
    })


      // ------invalid activation_code input -----

    test("Test for invalid activation_code", done => {
        request(app)
            .post('/sql/register')
            .send({
                email: "JART@kea.dk",
                activation_code: "Axyz", 
                password: "jartjart",
                repeat_password: "jartjart"
            }).then((response) => {  
                expect(response.statusCode).toBe(400) 
                done();
            })
    })


  // ------invalid password input -----

    test("Test for invalid password", done => {
        request(app)
            .post('/sql/register')
            .send({
                email: "JART@kea.dk",
                activation_code: "JART", 
                password: "jartAscb",
                repeat_password: "jartjart"
            }).then((response) => {  
                expect(response.statusCode).toBe(400) 
                done();
            })
    })


  // ------invalid repeat password input -----

    test("Test for invalid repeat_password", done => {
        request(app)
            .post('/sql/register')
            .send({
                email: "JART@kea.dk",
                activation_code: "JART", 
                password: "jartjart",
                repeat_password: "jartasbc"
            }).then((response) => {  
                expect(response.statusCode).toBe(400) 
                done();
            })
    })

    



})



