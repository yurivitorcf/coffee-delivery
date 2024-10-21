import { createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";

//CartItem é uma tipagem criada para receber as informacoes de todas as tipagens do Coffe criado no CoffeeCard  
//adicionando quantity pq vai ser a quantidade de cada item
interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextProps {
    cartItems: CartItem[];
    addCoffeeToCart: (coffee: CartItem) => void;
    totalCartItems: number;
    changeQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
    removeCartItem: (cartItemId: number) => void;
    totalPrice: number;
    clearCart: () => void;
};

//children precisa ser tipado como um ReactNode pois eh um componente react que usa o contexto
interface CartContextProviderProps {
    children: React.ReactNode;
};

//variavel que vai armazenar a chave do localStorage
const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

//criando um contexto primeiro chamamos o createContext
// a tipagem foi criada logo acima

export const CartContext = createContext({} as CartContextProps);

//criando um provider para o contexto

export function CartContextProvider({children}: CartContextProviderProps) {
    //usando agora da tipagem criada, damos um significado para o cartItems que sera um estado
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storageCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);

        if(storageCartItems) {
            return JSON.parse(storageCartItems);
        } else {
            return [];
        }
    });

    const totalCartItems = cartItems.length;

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    //function para adicionar items no carrinho
    //com um findIndex vamos verificar se o item ja existe no carrinho checnado seu id
    function addCoffeeToCart(coffee: CartItem){
        const coffeeAlreadyInCart = cartItems.findIndex((item) => item.id === coffee.id);

        //se o item ja existe no carrinho vamos usar o immer para alterar o estado e adicionar a quantidade
        const newCart = produce(cartItems, (draft) => {
            //caso o resultado do findIndex seja menor que 0 somente vamos adicionar o item
            if(coffeeAlreadyInCart < 0){
                draft.push(coffee);
            } else {
                //caso o resultado do findIndex seja maior que 0 somente vamos adicionar a quantidade
                draft[coffeeAlreadyInCart].quantity += coffee.quantity;
            }
        })

        setCartItems(newCart);
    }

    function changeQuantity(cartItemId: number, type: 'increase' | 'decrease'){
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex((item) => item.id === cartItemId);

            if(coffeeExistsInCart >= 0){
                const item = draft[coffeeExistsInCart];
                item.quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
            }
        })

        setCartItems(newCart);
    } 

    function removeCartItem(cartItemId: number){
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex((item) => item.id === cartItemId);

            if(coffeeExistsInCart >= 0){
                draft.splice(coffeeExistsInCart, 1);
            }})

        setCartItems(newCart);
    }

    function clearCart() {
        setCartItems([]);
    }

    //armazenando os itens no localStorage, toda vez que o estado do cartItems muda, vai ser armazenado no localStorage
    useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems]);


    return (
        <CartContext.Provider value={{ cartItems , addCoffeeToCart, totalCartItems, changeQuantity, removeCartItem, totalPrice, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}