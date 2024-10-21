import { BenefitsContainer, HeroContainer, HeroContent, HeroTitle } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { InfoIcon } from "../../../../components/InfoIcons";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Hero() {
    const {colors} = useTheme()
    return (
        <HeroContainer>
            {/*  */}
            <HeroContent className="container">
                <div>
                    <section>
                        <HeroTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </HeroTitle>
                        <RegularText color="subtitle" size="l">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                        <BenefitsContainer>
                            <InfoIcon 
                                icon={<ShoppingCart weight="fill"/>} 
                                text="Compra simples e segura" 
                                iconBg={colors["brand-yellow-dark"]} 
                            />
                            <InfoIcon 
                                icon={<Package weight="fill"/>} 
                                text="Embalagem mantém o café intacto" 
                                iconBg={colors["base-text"]} 
                            />
                            <InfoIcon 
                                icon={<Timer weight="fill"/>} 
                                text="Entrega rápida e rastreada" 
                                iconBg={colors["brand-yellow"]} 
                            />
                            <InfoIcon 
                                icon={<Coffee weight="fill"/>} 
                                text="O café chega fresquinho até você" 
                                iconBg={colors["brand-purple"]} 
                            />
                        </BenefitsContainer>
                </div>
                <div>
                    <img src="src/assets/coffee-image.svg" alt="" />    
                </div>    
            </HeroContent>
        </HeroContainer>
    )
}