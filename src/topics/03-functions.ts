
function addNumbers(a: number, b: number): number {
    return a + b
}
const addNumbersArrow = (a: number, b: number): string => `${ a + b }`

function multiply(firstName: number, secondNumber?: number, base:number = 2): string {
    return firstName * base
}

interface Character {
    name: string,
    hp: number,
    showHP: () => void
}
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount
}

const strider: Character = {
    name: 'italo',
    hp: 50,
    showHP() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(strider, 50)

strider.showHP()

const result = addNumbers(1, 2)
const resultArrow = addNumbersArrow(1, 5)
const resultMultiplyResult = multiply(5)
console.log({result})
console.log({resultArrow})
// console.log({ resultMultiplyResult })


export {}