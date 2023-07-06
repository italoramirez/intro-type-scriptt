export interface Product {
    description: string,
    price: number,

}

const phone: Product = {
    description: 'Nokia',
    price: 150.0
}

export const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationsOptions {
    tax: number,
    products: Product[]
}

// function taxCalculation(options: TaxCalculationsOptions): [number, number] {
// function taxCalculation({ tax, products }: TaxCalculationsOptions): [number, number] {
export function taxCalculation(options: TaxCalculationsOptions): [number, number] {

    const { tax, products } = options
    let total = 0
    products.forEach(({price}) => total += price)
    return [total, total * tax]
}

const shoppingCart = [phone, tablet]
const tax = 0.15

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax
})

console.log('total', total)
console.log('tax', taxTotal)