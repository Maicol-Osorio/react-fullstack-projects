export type TData = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type TCart = Pick<TData, 'id' | 'name' | 'image' | 'description' | 'price'> & {
    quantity: number
} 