import { formatCurrency } from "../helpers/helpers"

type AmountDisplayProps = {
    nombre: string,
    cantidad: number
}

const AmountDisplay = ({nombre, cantidad}: AmountDisplayProps) => {
  return (
    <div>
        <p className="capitalize font-bold text-xl">{nombre}: <span className="text-blue-700 font-black underline ">{formatCurrency(cantidad)}</span></p>
    </div>
  )
}

export default AmountDisplay
