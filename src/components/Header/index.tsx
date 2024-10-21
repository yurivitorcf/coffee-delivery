import { NavLink } from "react-router-dom";
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles.ts";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart.ts";

export function Header() {
    const {totalCartItems} = useCart()

    return (
        <HeaderContainer>
            <div className="container">

                <NavLink to={"/home"}>
                    <img src="/src/assets/logo.svg" alt="" />
                </NavLink>

                {/* criado um container para separar e organizar os botoes 
                    importado o phosphor para utilizar os icones necessarios
                    atraves do styled components foi criado uma interface para definir o tipo de propriedade que o botão vai receber
                    para que o codigo saiba qual, foi adicionado a propriedade variant no botão.
                */}
                <HeaderButtonContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Belo Horizonte, MG
                    </HeaderButton>
                    <NavLink to={"/completeOrder"}>
                        <HeaderButton variant="yellow">
                            {totalCartItems >= 1 && <span>{totalCartItems}</span>}
                            <ShoppingCart size={22} />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
    )
}