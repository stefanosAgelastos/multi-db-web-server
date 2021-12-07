
const request = require('supertest');
require('dotenv').config();
const db = require("../../connectors/db.mysql");
const app = require('../../index');


// test precondition (User must have access to the registration page.)

describe("Test route for register", () => {


    beforeEach(() => {
        // create teacher
        db.sequelize.models.teachers.create({
            first_name: "Test",
            last_name: "Teacher",
            email: "teacher@test.com",
            password: "12345678",
            department_id: 1
        });
        // create student
        db.sequelize.models.students.create({
            first_name: "Test",
            last_name: "student",
            user_name: "student@test.com",
            password: "12345678",
            program_id: 1
        });
    });

    afterEach(() => {
        db.sequelize.models.teachers.destroy({ where: { email: "teacher@test.com" } });
        db.sequelize.models.students.destroy({ where: { user_name: "student@test.com" } });
    });

    test("It should response the GET method", done => {
        request(app)
            .get('/register')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("Test for valid input", done => {
        request(app)
            .post('/sql/register')
            .send({
                email: "ASBC@kea.dk",
                activation_code: "ASBC",
                password: "weqweqwe",
                repeat_password: "weqweqwe"
            }).then((response) => {
                expect(response.statusCode).toBe(400)
                done();
            })
    })

})
