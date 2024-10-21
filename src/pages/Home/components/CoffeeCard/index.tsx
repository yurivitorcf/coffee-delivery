import { ShoppingCart } from "phosphor-react";
import { QtyInput } from "../../../../components/QtyInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddToCartButton, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
    id: number;
    tags: string[];
    title: string;
    description: string;
    photo: string;
    price: number;
  }
  
  interface CoffeeProps {
    coffee: Coffee;
  }
export function CoffeeCard({ coffee }: CoffeeProps) {
    //adicionado um estado para armazenar a quantidade
    const [quantity, setQuantity] = useState(1);

    //function para incrementar e decrementar a quantidade
    function handleIncrease() {
        setQuantity(quantity + 1);
    }

    function handleDecrease() {
        setQuantity(quantity - 1);
    }

    const { addCoffeeToCart } = useCart();
    function handleAddToCart() {    
        const coffeeToAdd = {
            ...coffee,
            quantity: 1
        }
        addCoffeeToCart(coffeeToAdd);
    }

    const formattedPrice = formatMoney(coffee.price)

    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt="" />
            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>
            <Name>{coffee.title}</Name>
            <Description>{coffee.description}</Description>
            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>
                
                <AddToCartButton >
                    <QtyInput onDecrease={handleDecrease} onIncrease={handleIncrease} quantity={quantity}/>
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </AddToCartButton>
            </CardFooter>

        </CoffeeCardContainer>
    )
}

