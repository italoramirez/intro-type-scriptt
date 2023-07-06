import {Product, taxCalculation} from './06-function-destructuring.ts'


const shoppingCart: Product[] = [
    {
        description: 'tablet',
        price: 2000
    },
    {
        description: 'iPhone',
        price: 4000
    }
]

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.25
})

console.log('total', total)
console.log('tax', tax)