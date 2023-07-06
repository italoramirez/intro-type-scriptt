// function classDecorator(
function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property'
        hello = 'override'
    }
}

@classDecorator
export class SuperClass {
    public property: string = 'Abc123'

    print () {
        console.log('Hola mundo')
    }
}

console.log(SuperClass)

const myClass = new SuperClass()

console.log(myClass)