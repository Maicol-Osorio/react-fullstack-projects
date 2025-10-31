export const formatCurrency = (cantidad: number)=>{
    return new Intl.NumberFormat("en-US", {style: "currency", currency: "usd" } ).format(cantidad)
}

export const formatDate = (date: string) : string=>{
    const newDate = new Date(date)
    return new Intl.DateTimeFormat("es-Es", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(newDate)
}