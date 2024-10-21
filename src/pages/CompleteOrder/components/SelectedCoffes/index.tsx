import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";

import { SelectedCoffesContainer, SelectedCoffesDetails } from "./styles";

export function SelectedCoffes() {
    const { cartItems } = useCart()

    return (
        <SelectedCoffesContainer>
            <TitleText size="xs" color="subtitle" >Cafés selecionados</TitleText>
            <SelectedCoffesDetails>
                {cartItems.map((item) => (
                    <CoffeeCartCard key={item.id} coffee={item} />
                ))}
                <ConfirmationSection />
            </SelectedCoffesDetails>
        </SelectedCoffesContainer>
    )
}