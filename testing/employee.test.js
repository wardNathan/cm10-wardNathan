const Employee = require("../employees/employee");

describe('employee', () => {
    describe('getName method', () => {
        it ("prints the Employees name" , () => {
            const employee = new Employee("Jane", "10", "jane@gmail.com");

            expect(employee.getName()).toEqual("Jane")
        })
    });
    describe('getId method', () => {
        it ("prints the Employees ID", () => {
            const employee = new Employee("Jane", "10", "jane@gmail.com");

            expect(employee.getId()).toEqual("10")
        })
    });
    describe('getEmail method', () => {
        it ("prints the Employees email", () => {
            const employee = new Employee("Jane", "10", "jane@gmail.com");

            expect(employee.getEmail()).toEqual("jane@gmail.com")
        })
    });
    describe('getRole method', () => {
        it ("prints the Employees role", () => {
            const employee = new Employee("Jane", "10", "jane@gmail.com");

            expect(employee.getRole()).toEqual("Employee")
        })
    })
})