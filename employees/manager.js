const Employee = require ('./employee');

class manager extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'manager'
    }
    getGithub(){
        this.github = this.github;
    };
};

module.exports = manager;