// import { Employee } from './hr/employee';
// import { Department } from './hr/department';
// import * as stuff from './hr';
import { Employee, Department } from './hr';

describe('classes', () => {
    // good for muteable data ... most deal with objects / interface / models
    // component / redux ...

    it('using a class', () => {
        const bob = new Employee('Bob', 'Smith', 82_000);
        expect(bob.firstName).toBe('Bob');
        expect(bob.lastName).toBe('Smith');

        bob.giveRaise(100_000);
        expect(bob.currentSalary).toBe(182_000);
        console.log(`----------- result ---------- ${bob.currentSalary}`);

        const dev = new Department();
        dev.name = 'Developers! Developers!';
        dev.manager = bob;

    });
    describe('miscellaneous...', () => {
        const numbers = [1, 2, 3, 4, 5];
        it('immutably add element to array', () => {
            const newNumbers = [0, ...numbers, 6];
            expect(newNumbers).toContain(0);
            expect(newNumbers).toContain(6);
        });
        it('immutably removing an element from an array', () => {
            const newNumbers = numbers.filter(n => n !== 3);
            expect(newNumbers).toEqual([1, 2, 4, 5]);
        });
        it('changing a property of an object immutably', () => {
            const movie = { title: 'Episode IV: A New Hope', yearReleased: 1978 };
            const newMovie = { ...movie, yearReleased: 1977 };

            expect(newMovie.yearReleased).toBe(1977);


        });
    });

});
