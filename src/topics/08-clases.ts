
export class Person {
    // public name: string
    // public address: string

    constructor(
        public name: string,
        public address: string
    ) {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'New york');
//     }
// }
export class Hero {

    // public person: Person
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName)
    }
}

const tony = new Person('italo', 'New york')

// const ironman  = new Person('italo', 'New york york')
const ironman  = new Hero('ironman', 45, 'Tony', tony)

console.log(ironman)