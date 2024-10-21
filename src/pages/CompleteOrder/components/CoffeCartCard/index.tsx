import { Trash } from "phosphor-react";
import { QtyInput } from "../../../../components/QtyInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { CartItem } from "../../../../contexts/CartContext";
interface CoffeeCartCardProps{
    coffee: CartItem
}
export function CoffeeCartCard({coffee}: CoffeeCartCardProps) {

    const {changeQuantity, removeCartItem} = useCart()

    function handleIncrease() {
        changeQuantity(coffee.id, 'increase')
    }

    function handleDecrease() {
        changeQuantity(coffee.id, 'decrease')
    }

    function handleRemove() {
        removeCartItem(coffee.id)
    }

    const Total = coffee.price * coffee.quantity;
    const formattedPrice = formatMoney(Total);

    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} />
                <div>
                    <RegularText color="subtitle" >{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QtyInput size="small" quantity={coffee.quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />
                        <RemoveButton onClick={handleRemove}>                
                            <Trash size={16} />
                            Remover
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ {formattedPrice}</p> 
        </CoffeeCartCardContainer>
    )

}