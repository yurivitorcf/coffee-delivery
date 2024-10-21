import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export function useCart(){
    const context = useContext(CartContext)
    return context
}

//atraves desse hook eu consigo acessar tudo que esta em value no provider do meu contexto atraves de destruturação
//const { cartItems } = useCart() ---> um exemplo