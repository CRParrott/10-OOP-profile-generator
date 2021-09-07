const Manager = require ("../lib/Manager");
const Employee = require("../lib/Employee");

 describe("const office number", () => {
    it("Can enter office number through the constructor argument", () => {
        const testOfficeNumber = 81;
        const manager = new Manager("Charles", 81, "email@test.com", testOfficeNumber);
        expect(manager.officeNumber).toBe(testOfficeNumber);
    });
});

describe("getOfficeNumber", () => {
    it("Can get officenumber through getOfficeNumber()", () => {
        const testOfficeNumber = 81;
        const manager = new Manager("Charles", 81, "email@test.com", testOfficeNumber);
        expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
    });
});

describe("getRole", () => {
    it("Returns Manager through getRole()", () => {
        const testRole = "Manager";
        const manager = new Manager("Charles", 81, "email@test.com", 81);
        expect(manager.getRole()).toBe(testRole);
    });
});