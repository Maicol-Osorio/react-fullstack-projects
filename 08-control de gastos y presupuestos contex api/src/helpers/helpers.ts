export const formatCurrency = (cantidad: number)=>{
    return new Intl.NumberFormat("en-US", {style: "currency", currency: "usd" } ).format(cantidad)
}