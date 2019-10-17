class Person {
    constructor(public firstName: string, public lastName: string) { }
}

export interface Raisable {
    giveRaise: (amount: number) => void;
}

// export class Employee extends Person ---> THIS IS VALID!!!
// export class Employee extends Person implements Raisable ---> THIS IS VALID!!!

export class Employee {
    // firstName: string;
    // lastName: string;
    // salary: number;

    // constructor(firstName: string, lastName: string, salary: number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.salary = salary;
    // }

    constructor(public firstName: string, public lastName: string, private salary: number) { }

    // methods

    giveRaise(amount: number) {
        this.salary += amount;
    }

    // props
    get currentSalary() {
        return this.salary;
    }

}
