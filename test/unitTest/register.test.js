
const request = require('supertest');
require('dotenv').config();
const db = require("../../connectors/db.mysql");
const app = require('../../index');

const teacherEmail = 'teacher@test.com';
const studentEmail = 'student@test.com';
const password = '12345678';

describe("Test route for register", () => {

    beforeEach(async () => {
        // create teacher
        await db.sequelize.models.teachers.create({
            first_name: "Test",
            last_name: "Teacher",
            email: teacherEmail,
            password: password,
            department_id: 1
        });
        // create student
        await db.sequelize.models.students.create({
            first_name: "Test",
            last_name: "student",
            user_name: studentEmail,
            password: password,
            program_id: 1
        });
    });

    afterEach(async () => {
        await db.sequelize.models.teachers.destroy({ where: { email: teacherEmail } });
        await db.sequelize.models.students.destroy({ where: { user_name: studentEmail } });
    });

    afterAll(async () => {
        try {
            await db.sequelize.models.teachers.destroy({ where: { email: teacherEmail } });
            await db.sequelize.models.students.destroy({ where: { user_name: studentEmail } });
        }
        catch (e) {

        }
    });

    // test precondition (User must have access to the registration page.)

    test("It should response the GET method", done => {
        request(app)
            .get('/register')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    // -----all valid inputs------

    test("Test for valid input should redirect", done => {
        request(app)
            .post('/sql/register')
            .send({
                email: teacherEmail,
                activation_code: password,
                password: "ASBCASBC",
                repeat_password: "ASBCASBC"
            }).then((response) => {
                expect(response.statusCode).toBe(302)
                done();
            })
    })

    // ------invalid email input -----

    test("Test for invalid email", done => {
        request(app)
            .post('/sql/register')
            .send({
                email: "NOTJART@kea.dk",
                activation_code: password,
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
                email: teacherEmail,
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
                email: teacherEmail,
                activation_code: password,
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
                email: teacherEmail,
                activation_code: password,
                password: "jartjart",
                repeat_password: "jartasbc"
            }).then((response) => {
                expect(response.statusCode).toBe(400)
                done();
            })
    })
})



