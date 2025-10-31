import { useMemo } from "react"
import { formatCurrency, formatDate } from "../helpers/helpers"
import { categories } from "../data/data"
import type { TExpense } from "../types"

import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list"
import 'react-swipeable-list/dist/styles.css';

type ExpenseDetailsProps = {
  expense: TExpense
}

const ExpenseDetails = ({ expense }: ExpenseDetailsProps) => {
  const expenseData = useMemo(
    () => categories.find(item => item.id === expense.category),
    [expense]
  )
  if (!expenseData) return null

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => (console.log("leadin"))}>
        modificar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.log("eliminar")}>
        
      
        eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (

    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
        maxSwipe={150}
      >
        <div className="cursor-pointer group relative mt-5 w-full rounded-2xl ring-1 ring-gray-400 bg-white p-5 shadow-md shadow-black/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-black m-2">
          {/* Etiqueta de categoría */}
          <span
            className={`absolute right-4 top-4 rounded-md px-3 py-1 text-xs font-semibold text-white ${expenseData.color}`}>
            {expenseData.name}
          </span>

          {/* Contenido principal */}
          <div className="flex items-center gap-5 justify-center ">
            {/* Icono */}
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 group-hover:bg-gray-200">
              <img
                src={`/icono_${expenseData.icon}.svg`}
                alt={expenseData.name}
                className="h-10 w-10 object-contain"
              />
            </div>

            {/* Detalles */}
            <div className="flex flex-1 flex-col">
              <h3 className="text-lg font-semibold text-gray-800 capitalize">
                {expense.expense}
              </h3>
              <p className="text-sm text-gray-500">
                {formatDate(expense.expenseDate!.toString())}
              </p>
            </div>

            {/* Monto */}
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">
                {formatCurrency(expense.amount)}
              </p>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default ExpenseDetails
