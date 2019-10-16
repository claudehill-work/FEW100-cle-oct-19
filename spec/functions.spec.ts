describe('functions', () => {
    it('how to declare them...', () => {
        // named functions

        // anonymous

        // named function ...
        function add(a: number, b: number): number {
            return a + b;
        }
        expect(add(2, 2)).toBe(4);

        // 2. anonymous function ...

        // way 1 - with function keyword
        const subtract = (a: number, b: number) => a - b;
        const multiply = (a: number, b: number) => a * b;

        expect(subtract(10, 2)).toBe(8);
        expect(multiply(10, 2)).toBe(20);

        // way 2 -
    });
    it('arrow functions...', () => {
        // if entire body of function is expression, that is the return type, dont use return type ...

        const formatName = (first: string, last: string) => `${last}, ${first}`;
        expect(formatName('Han', 'Solo')).toBe('Solo, Han');


        // expect(() => formatName('Luke', 'Skywalkerrrrr')).toThrowError();
    });

    describe('paramters to functions', () => {

        it('an example...overloading', () => {


            // expect(nameFormatter('Han', 'Solo')).toBe('Solo', 'Han');

            function nameFormatter(first: string, last: string, mi?: string) {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }

            expect(nameFormatter('Han', 'Solo')).toBe('Solo, Han');
            expect(nameFormatter('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });
        it('default values for parameters', () => {
            function add(a: number = 10, b: number = 15) {
                return a + b;
            }
            expect(add()).toBe(25);
            expect(add(15)).toBe(30);
            expect(add(undefined, 5)).toBe(15); // ok, but only for undefined

        });
        it('rest arguments', () => {
            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((x, y) => x + y, firstTwo);
            }

            expect(add(1, 2)).toBe(3);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);

        });

    });

    describe('higher order functions...', () => {
        it('an example function that takes a function...', () => {



            function identity(n: string) { return n; }

            type StringModifer = (msg: string) => string;
            function printItOut(message: string, fn: StringModifer = identity): void {
                console.log(`At ${new Date().toISOString()}:`, fn(message));
            }

            printItOut('Tacos!', (n) => n.toUpperCase());
            printItOut('Tacos2', (n) => '***' + n + '***');
            printItOut('Tortilla!');
            printItOut('HOF Rawk!', makeUpper);

            function makeUpper(x: string) {
                return x.toUpperCase();
            }

        });
        describe('a function that returns a function - eventually two other ways first', () => {
            it('not a HOF, doing it a "sane" way', () => {
                // <element>content</element>
                // <h1>Hello</h1>

                function tagMaker(element: string, content: string) {
                    return `<${element}>${content}</${element}>`;
                }

                expect(tagMaker('h1', 'Tacos')).toBe('<h1>Tacos</h1>');
                expect(tagMaker('h1', 'Chips')).toBe('<h1>Chips</h1>');
                expect(tagMaker('h1', 'Salsa')).toBe('<h1>Salsa</h1>');
                expect(tagMaker('p', 'coolio')).toBe('<p>coolio</p>');
            });

            it('using an object', () => {


                class TagMaker {

                    private element: string;
                    constructor(element: string) {
                        this.element = element;
                    }

                    make(content: string) {
                        return `<${this.element}>${content}</${this.element}>`;
                    }
                }

                const h1Maker = new TagMaker('h1');
                expect(h1Maker.make('Tacos')).toBe('<h1>Tacos</h1>');
                expect(h1Maker.make('Chips')).toBe('<h1>Chips</h1>');

                const pMaker = new TagMaker('p');
                expect(pMaker.make('coolio')).toBe('<p>coolio</p>');
            });

            //
            it('with a higher order function', () => {

                function tagMaker(element: string): (content: string) => string {
                    return (content) => `<${element}>${content}</${element}>`;
                }

                const h1Maker = tagMaker('h1');

                expect(h1Maker('Tacos')).toBe('<h1>Tacos</h1>');
                expect(h1Maker('Chips')).toBe('<h1>Chips</h1>');
                const pMaker = tagMaker('p');
                expect(pMaker('coolio')).toBe('<p>coolio</p>');

                expect(tagMaker('h2')('kidding me?')).toBe('<h2>kidding me?</h2>');
            });
        });

    });

