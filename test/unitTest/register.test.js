
const request = require('supertest');
const app = require('../../index');


// test precondition (User must have access to the registration page.)

describe("Test route for register", () => {
    test("It should response the GET method", done => {
        request(app)
            .get('/register')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });


    //   1. Launch registration page,
    //  2.  Enter valid email,       
    //   3 . Enter valid activation,                    
    //   4. Enter valid password,  
    //      5.Confirm  correct password



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
                // .set({authorization: 'ASBC@kea.dk'},
                // {authorization: 'a_valid_value_goes_here'},
                // {authorization: 'a_valid_value_goes_here'},
                // {authorization: 'a_valid_value_goes_here'} )


                done();
            })



    })






})

















// 

// describe('user registration', () => {

//     let cellphone;

//     beforeEach(() => {
//         cellphone = new Cellphone;
//     });

//     test('when a user is created, the user has an empty list of phones', () => {
//         expect(cellphone.selected_phones).toEqual([]);
//         expect(cellphone.getPrice()).toBe(0);
//     });

//     test('user adds phone to list', () => {
//         cellphone.addPhone('Motorola G99');
//         cellphone.addPhone('iPhone 99');
//         expect(cellphone.getPrice()).toBe(6800);


//     });

//     test('User removes selected phone from list', () => {
//         cellphone.addPhone('Motorola G99');
//         cellphone.addPhone('iPhone 99');

//         cellphone.removePhoneFromList('Motorola G99');
//         expect(cellphone.getPrice()).toBe(6000);

//     });

// });
// 