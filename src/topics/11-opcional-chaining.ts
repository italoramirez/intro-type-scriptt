export interface Passenger {
    name: string,
    children?: string[]
}

const passenger1: Passenger = {
    name: 'italo'
}

const passenger2: Passenger = {
    name: 'Marcela',
    children: ['Felipe']
}

const  printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0
    // const howManyChildren = passenger.children!.length || ! cuando se está seguro de que el dato llega not null asertion aperator
    console.log(howManyChildren)
}

printChildren(passenger2)
printChildren(passenger1)