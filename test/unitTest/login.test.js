const request = require('supertest');
const app = require('../../index');
const bcrypt = require('bcrypt');
const db = require("../../connectors/db.mysql");


// define reusable password value
const password = '12345678';
const teacherEmail = 'teacher@login.com';
const studentEmail = 'student@login.com';


describe("Test route for login", () => {


    beforeEach(async () => {
        // encrypt reusable password
        const hashed_password = await bcrypt.hash(password, 10);
        // create teacher
        await db.sequelize.models.teachers.create({
            first_name: "Test",
            last_name: "Teacher",
            email: teacherEmail,
            password: hashed_password,
            department_id: 1
        });
        // create student
        await db.sequelize.models.students.create({
            first_name: "Test",
            last_name: "student",
            user_name: studentEmail,
            password: hashed_password,
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

    test("Login: Test for valid inputs should redirect", done => {
        request(app)
            .post('/sql/login')
            .send({
                email: teacherEmail,
                password: password,
            }).then((response) => {
                expect(response.statusCode).toBe(302);
                done();
            });
    });


    test("Login: Test for invalid email", done => {
        request(app)
            .post('/sql/login')
            .send({
                email: "invalid@test.com",
                password: password
            }).then((response) => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });


    test("Login: Test for invalid password", done => {
        request(app)
            .post('/sql/login')
            .send({
                email: teacherEmail,
                password: "wrongPassword123"
            }).then((response) => {
                expect(response.statusCode).toBe(400);
                done();
            });
    });
});