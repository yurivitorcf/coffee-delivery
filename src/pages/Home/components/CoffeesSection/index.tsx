import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeesContainer, CoffeesList } from "./styles";

export function CoffeesSection() {
    return (
        <CoffeesContainer className="container">
            <TitleText size="l" weight={"700"} color="subtitle">
                Nossos cafés
            </TitleText>
            <CoffeesList>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee}/>
                ))}
            </CoffeesList>
        </CoffeesContainer>
    )
}