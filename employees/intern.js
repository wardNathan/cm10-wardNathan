const Employee = require ('./employee');

class intern extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'intern'
    }
    getGithub(){
        this.github = this.github;
    };
};

module.exports = intern;