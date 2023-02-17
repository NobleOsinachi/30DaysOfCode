class Person {
    constructor(initialAge: number) {
        if (initialAge > 0) {
            this.age = initialAge;
        } else {
            console.log("Age is not valid, setting age to 0");
            this.age = 0;
        }
    }

    /**
     * This is a variable that represents the age of a person.
     * @type {number}
     * @description This variable is used to store the age of a person in years.
     */
    age: number;


    yearPasses = () => {
        this.age++;
    }

    amIOld = () => {
        if (this.age < 13) {
            console.log("You are young.");
        } else if (this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    }
}

for (let i = -2; i < 19; i++) {
    console.log("Age:", i);

    let noble = new Person(i);
    noble.amIOld();
}
