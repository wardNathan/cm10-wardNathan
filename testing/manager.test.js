const Manager = require('../employees/manager');

describe('manager', () => {
    describe('getOfficeNumber method', () => {
        it('prints out the employees office number', () => {
            const manager = new Manager("Jack", "12", "jack@gmail.com", "14");

            expect(manager.getOfficeNumber()).toEqual("14")
        })
    })
})