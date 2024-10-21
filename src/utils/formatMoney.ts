export function formatMoney(amount: number) {
    return amount.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
    })
}