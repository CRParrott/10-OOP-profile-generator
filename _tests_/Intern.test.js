const Intern = require ("../lib/Intern");
const Employee = require("../lib/Employee");

describe("Intern Class", () => {
    it ("Initiates a new intern selection", () => {
        const intern = new Intern();
        expect(new Intern(intern)).toBe("object");
    });

    describe("const school", () => {
        it("Can enter school through the constructor argument", () => {
            const testSchool = "College";
            const intern = new Intern(testSchool);
            expect(intern.school).toBe(testSchool);
        });
    });

    describe("getSchool", () => {
        it("Can get school through getSchool()", () => {
            const testSchool = "College";
            const intern = new School(testSchool);
            expect(intern.getSchool()).toBe(testSchool);
        });
    });

    describe("getRole", () => {
        it("Returns Intern through getRole()", () => {
            const testRole = "Intern";
            const intern = new Intern("Charles", 81, "email@testRole.com", testSchool);
            expect(intern.getRole()).toBe(testRole);
        });
    });
});