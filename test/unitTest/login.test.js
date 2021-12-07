const request = require('supertest');
const app = require('../../index');


describe("Test route for login", () => {

    test("Login: Test for valid inputs", done => {
        request(app)
            .post('/sql/login')
            .send({
                email: "ASBC@kea.dk",
                password: "ASBCASBC"
            }).then((response) => {
                expect(response.statusCode).toBe(302); // found and redirecting 
                done();
            });
    });


    test("Login: Test for invalid email", done => {
        request(app)
            .post('/sql/login')
            .send({
                email: "NOT-ASBC@kea.dk",
                password: "ASBCASBC"
            }).then((response) => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });


    test("Login: Test for invalid email", done => {
        request(app)
            .post('/sql/login')
            .send({
                email: "ASBC@kea.dk",
                password: "wrongPassword123"
            }).then((response) => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });
 });