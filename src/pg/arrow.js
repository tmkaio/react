/*const person = {
    name: 'Thomas',
    age: 27,
    skills: ['php','mysql','javascript'],
    printPerson() {
        console.log(this.name);
        console.log(this.age);
        const newvar = this.skills.map((skill) => skill + "!");
        this.skills.forEach((skill) => {
            console.log(skill);
        });
        return newvar;
    }
};

console.log(person.skills);

*/
const multiplier = {
    ar: [3,4,6],
    ar2: 5,
    mutiply() {
        return this.ar.map((newar) => newar * this.ar2);
    }
}


console.log(multiplier.mutiply());