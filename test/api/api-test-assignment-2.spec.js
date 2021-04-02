
const chai = require("chai");
const assert = require("chai").assert;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const BASE_URL = "https://reqres.in/";
const TIMEOUT = 10000;



describe("/users endpoint tests", function () {
    const agent = chai.request.agent("https://reqres.in/api");


    // Assignment 2: Hit the request URL https://reqres.in/api/users?page=2 & assert the below cases:
    // i. total_pages in response is always equal to 2
    // ii. status code 200
    // iii. check email contain "byron.fields@reqres.in

    it("response status code should be 200", done => {
        agent.get("/users?page=2").end((err, res) => {
            expect(res.status).toBe(200);
            done();
        });
    });

    it("total_pages property should equal 2", done => {
        agent.get("/users?page=2").end((err, res) => {
            expect(res.body.total_pages).toBe(2);
            done();
        });
    });

    it("user with email byron.fields@reqres.in should be returned", done => {
        agent.get("/users?page=2").end((err, res) => {
            const data = res.body.data;
            assert.isArray(data, "data property should be array");
            expect(data.map(user => user.email)).toContain("byron.fields@reqres.in");
            done();
        });
    });
});
