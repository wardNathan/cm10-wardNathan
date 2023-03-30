const Intern = require("../employees/intern");

describe('intern', () => {
    describe('getSchool method', () => {
        it ('prints out the Employees school', () => {
            const intern = new Intern("Dylan", "11", "dylan@gmail.com", "UofU");

            expect(intern.getSchool()).toEqual("UofU")
        })
    })
})