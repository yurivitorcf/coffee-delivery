import { CoffeesSection } from "./components/CoffeesSection"
import { Hero } from "./components/Hero"
import { HomeContainer } from "./styles"

export function HomePage() {    
    return (
        <HomeContainer>
            <Hero/>
            <CoffeesSection/>
        </HomeContainer>
    )
}