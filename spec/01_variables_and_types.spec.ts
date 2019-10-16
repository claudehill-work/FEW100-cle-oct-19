describe('Name of the group', () => {
    it('any typing', () => {
        let x;

        x = 'dog';

        x = 3.14;
    });
    it('implicit typing', () => {
        const x = 'dog';

        // x = 3.14;
    });
    it('has union types...', () => {
        let x: number | string;

        x = 12;
        x = 'tacos';
    });

    it('const cannot be reassigned', () => {
        const PI = 3.1415;

        const movie = {
            title: 'Rise of skywalker',
            yearReleased: 2018
        };

        movie.yearReleased = 2019; // this is valid
        const favoriteNumbers = [9, 20, 65];
        favoriteNumbers[1] = 99; // this is ok too!
    });

    it('var is evil and you shouldnt use it', () => {

        const age = 22;
        if (age > 21) {
            const message = 'old enough'; // auto changes from var to const or let
        }
        // expect(message).toBe('old enough'); // this won't work ...
    });
});

describe('types', () => {
    // for more information see htp://www.typescriptlang.org/docs/handbook/basic-types.html
    it('has numbers', () => {
        const asInt = 12; //
        const asFloat = 12.333;
        const asEasyToRead = 135_233_802.42;
        const asHex = 0xff;
        const asBase8 = 0o33;
        const asBinary = 0b1010101;
    });
});

describe('string literals', () => {
    it('uses single quotes', () => {
        const message = 'Hello!';
        // tslint:disable-next-line: quotemark
        expect(message).toBe("Hello!");
    });

    it('using verbatim strings', () => {
        const story = `My Life Story.

        It was a dark and stormy night.

        <h1>The End</h1>`;
        console.log(story);
    });

    it('use them as template strings', () => {
        const name = 'bob';
        const pay = 32_000_00;

        const msg2 = `Employee ${name} makes ${pay} per year ...`;
    });
});

describe('array literals', () => {
    it('declaring an array...', () => {
        const things = [];

        things[0] = 12;
        things[1] = 'bread';
        things[300] = things;

        expect(things[300][1]).toBe('bread');

        const numbers = [1, 2, 3, 4];
        const friends: string[] = [];

        numbers[5] = 'tacos';
        friends[0] = 32;

        // array of strings or numbers
        let friendsAndNumbers: string | number[]; // type of array itself is string or number
        let friendsAndNumbers2: (string | number)[]; // type of array contents is string or number
        let friendsAndNumbers3: Array<string | number>; // type of array contents is string or number
        let meals1: Array<string>;
        // let meals2: Array<string>;
    });

    it('using typed arrays (tuples)', () => {
        // array whose elements are predefined as data type

        const quotemarkRule: [boolean, string] = [true, 'single']; // type aliases
        //  quotemarkRule[0] = 'tacos'; //nope! not a boolean
        //  quotemarkRule[1] = 99; // nope! not a string

        const doIt = quotemarkRule[1];

        type Thingy = string;
        const myName: Thingy = 'Claude';

    });
});

describe('enums and union constants', () => {
    describe('enums', () => {
        it('> has them', () => {


            enum SeatType { window, ailse, middle }
            let seatType: SeatType;
            seatType = (function() {
                return SeatType.window;
            })();
            let price = 100;
            switch (seatType) {
                case SeatType.window: {
                    price += 50;
                    break;
                }
                case SeatType.middle: {
                    price -= 25;
                    break;
                }
                case SeatType.ailse: {
                    price += 10;
                    break;
                }
                default: {
                    // optional - but if it isn't one of those
                }
            }
            expect(price).toBe(150);
        });

    });
    describe('union constants', () => {
        it('has them too...', () => {

            // enum SeatType { window, ailse, middle }
            type SeatType = 'window' | 'aisle' | 'middle';

            let seatType: SeatType;
            seatType = (function() {
                return 'window' as SeatType;
            })();
            let price = 100;
            switch (seatType) {
                case 'window': {
                    price += 50;
                    break;
                }
                case 'middle': {
                    price -= 25;
                    break;
                }
                case 'aisle': {
                    price += 10;
                    break;
                }
                default: {
                    // optional - but if it isn't one of those
                }
            }
            expect(price).toBe(150);
        });
    });

    describe('object literals', () => {
        it('has anonymous objects', () => {

            // add interface
            interface Movie {
                title: string;
                director: string;
                yearReleased: number;
                mainActor?: string; // this means optional
            }


            // const movie = {
            //     title: 'thor ragnarok',
            //     director: 'some dude',
            //     yearReleased: 2016
            // };

            const thor: Movie = {
                title: 'thor ragnarok',
                director: 'some dude',
                yearReleased: 2016
            };

            expect(thor.title).toBe('thor ragnarok');
            thor.yearReleased = 2015;
            expect(thor.yearReleased).toBe(2015);
        });
        it('duck typing', () => {
            // structural typing.
            interface IHaveAMessage { message: string; }
            function doIt(thingy: IHaveAMessage) {

                console.log(thingy.message);
            }

            doIt({ message: 'Hello!' });

            const phoneCall = {
                from: 'Mom',
                message: 'Call me, you slacker!'
            };

            doIt(phoneCall);
        });
    });

    describe('type assertions', () => {
        it('they are like type cassts but they dont do anything but tell compiler to calm down', () => {

            let x: any;

            x = (function() {
                return 'dog';
            })();

            // tslint:disable-next-line: no-angle-bracket-type-assertion
            const length: number = (<string> x).length;

            const length2: number = (x as string).length;

            expect(length).toBe(3);

            interface ValueAndString { value: number; display: string; }

            const numbers = [100, 89];
            const result = numbers.map(num => {
                return {
                    value: num,
                    display: num.toString()
                } as ValueAndString;
            });

            expect(result[0].value).toBe(100);
            expect(result[0].display).toBe('100');

        });
    });

});


