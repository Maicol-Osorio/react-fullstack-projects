export type TMenuData = {
    id: number
    name: string
    price: number
}

export type TMenu = TMenuData & {
    quantity: number
}