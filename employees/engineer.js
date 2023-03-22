const Employee = require ('./employee');

class engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'engineer'
    }
    getGithub(){
        this.github = this.github;
    };
};

module.exports = engineer;