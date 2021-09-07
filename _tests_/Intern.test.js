const Intern = require ("../lib/Intern");

describe("const school", () => {
    it("Can enter school through the constructor argument", () => {
        const testSchool = "College";
        const intern = new Intern("Charles", 81, "email@test.com", testSchool);
        expect(intern.school).toBe(testSchool);
    });
});

describe("getSchool", () => {
    it("Can get school through getSchool()", () => {
        const testSchool = "College";
        const intern = new Intern("Charles", 81, "email@test.com", testSchool);
        expect(intern.getSchool()).toBe(testSchool);
    });
});

describe("getRole", () => {
    it("Returns Intern through getRole()", () => {
        const testRole = "Intern";
        const intern = new Intern("Charles", 81, "email@test.com", "College");
        expect(intern.getRole()).toBe(testRole);
    });
});