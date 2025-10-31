export type TCategory = {
    id: string,
    name: string,
    icon: string,
    color: string
}

export type TExpense = {
    id: string
    expense: string,
    amount: number,
    category: string,
    expenseDate: Value
}

export type TDraftExpense = Omit<TExpense, "id">

export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];