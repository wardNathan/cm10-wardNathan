const Engineer = require("../employees/engineer");

describe('engineer', () => {
    describe('getGithub method', () => {
        it('prints out the Employees Github', () => {
            const engineer = new Engineer("Bob", "13", "bob@gmail.com", "bobGitHub");

            expect(engineer.getGitHub()).toEqual("bobGitHub")
        })
    })
})