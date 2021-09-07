const Engineer = require ("../lib/Engineer");
const Employee = require("../lib/Employee");

describe("const github", () => {
    it("Can enter github throught the constructor argument", () => {
        const testGithub = "GithubUsername";
        const engineer = new Engineer("Charles", 81, "email@test.com", testGithub);
        expect(engineer.github).toBe(testGithub);
    });
});

describe("getGithub", () => {
    it("Can get github through getGithub()", () => {
        const testGithub = "GithubUsername";
        const engineer = new Engineer("Charles", 81, "email@test.com", testGithub);
        expect(engineer.getGithub()).toBe(testGithub); 
    });
});

describe("getRole", () => {
    it("Returns Engineer through getRole()", () => {
        const testRole = "Engineer";
        const engineer = new Engineer("Charles", 81, "email@test.com", testRole);
        expect(engineer.getRole()).toBe(testRole);
    });
});