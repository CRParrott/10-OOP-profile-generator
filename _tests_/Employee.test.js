const Employee = require ("../lib/Employee");

describe("Employee class", () => {
    it("Initiates a new employee input", () => {
        const employee = new Employee();

        expect(new Employee(employee)).toBe("object");
    });

    describe("const name")
        it("Can enter name through the constructor argument", () => {
        const testName = "Charles";
        const employee = new Employee(testName);
        expect(employee.name).toBe(testName);
        });
    });

    describe("const id", () => {
        it("Can enter id through the constructor argument", () => {
            const testId = 81;
            const employee = new Employee(testId);
            expect(employee.id).toBe(testId);
        });
    });

    describe("const email", () => {
        it("Can enter email through the constructor argument", () => {
            const testEmail = "email@test.com";
            const employee = new Employee(testEmail);
            expect(employee.email).toBe(testEmail);
        });
    });

    describe("getName", () => {
        it("Can get name through getName()", () => {
            const testName = "Charles";
            const employee = new Employee(testName);
            expect(employee.getName()).toBe(testName);
        });
    });

    describe("getId", () => {
        it("Can enter id through getId()", () => {
            const testId = 81;
            const employee = new Employee(testId);
            expect(employee.getID()).toBe(testId);
        });
    });

    describe("getEmail", () => {
        it("Can enter email through getEmail()", () => {
            const testEmail = "email@test.com";
            const employee = new Employee(testEmail);
            expect(employee.getEmail()).toBe(testEmail);
        });
    });

    describe("getRole", () => {
        it("Returns Employee through getRole()", () => {
            const testRole = "Employee";
            const employee = new Employee("Charles", 81, "email@test.com");
            expect(employee.getRole()).toBe(testRole);
        });
    });