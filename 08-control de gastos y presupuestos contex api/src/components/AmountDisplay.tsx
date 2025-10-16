import { formatCurrency } from "../helpers/helpers"

type AmountDisplayProps = {
    nombre: string,
    cantidad: number
}

const AmountDisplay = ({nombre, cantidad}: AmountDisplayProps) => {
  return (
    <div>
        <p className="capitalize font-semibold text-xl">{nombre}: <span className="text-blue-700 font-bold">{formatCurrency(cantidad)}</span></p>
    </div>
  )
}

export default AmountDisplay
