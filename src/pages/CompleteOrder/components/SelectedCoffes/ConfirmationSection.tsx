import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
    const {totalPrice, totalCartItems} = useCart()

    const finalPrice = totalPrice + DELIVERY_PRICE;

    const formattedTotalPrice = formatMoney(totalPrice);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
    const formattedFinalPrice = formatMoney(finalPrice); 

    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s" color="subtitle">Total de itens</RegularText>
                <RegularText>R$ {formattedTotalPrice}</RegularText>
            </div>
            <div>
                <RegularText size="s" color="subtitle">Entrega</RegularText>
                <RegularText>R$ {totalCartItems === 0 ? "0,00" : formattedDeliveryPrice}</RegularText>
            </div>
            <div>
                <RegularText size="l" color="subtitle" weight="700">Total</RegularText>
                <RegularText size="l" color="subtitle" weight="700">R$ {totalCartItems === 0 ? "0,00" : formattedFinalPrice}</RegularText>
            </div>
            <Button text={"Confirmar pedido"} disabled={totalCartItems <= 0} type="submit"></Button>
        </ConfirmationSectionContainer>
    )
}