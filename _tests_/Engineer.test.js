const Employee = require("../lib/Employee");
const Engineer = require ("../lib/Employee");

describe("Engineer Class", () => {
    it ("Initiates a new engineer input", () => {
        const engineer = new Engineer();
        expect(new Engineer(engineer)).toBe("object");
    });

    describe("const github", () => {
        it("Can enter github throught the constructor argument", () => {
            const testGithub = "GithubUsername";
            const engineer = new Engineer(testGithub);
            expect(engineer.github).toBe(testGithub);
        });
    });

    describe("getGithub", () => {
        it("Can get github through getGithub()", () => {
            const testGithub = "GithubUsername";
            const engineer = new Engineer(testGithub);
            expect(engineer.getGithub()).toBe(testGithub); 
        });
    });

    describe("getRole", () => {
        it("Returns Engineer through getRole()", () => {
            const testRole = "Engineer";
            const engineer = new Engineer("Charles", 81, "email@testRole.com", testGithub);
            expect(engineer.getRole()).toBe(testRole);
        });
    });
});