type Product = {
    title:string,
    price:number
}

const data: Product[] = [
    {title:'Camisa', price: 75},
    {title:'Calça', price: 150},
    {title:'Bermuda', price: 45},
    {title:'Cueca', price: 55}
]

export const Product = {
    getAll: (): Product[] => {
        return data
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item=>item.price >= price)
    }
}