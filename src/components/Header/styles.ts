import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${({theme}) => theme.colors["base-background"]};
    display: flex;
    align-items: center; 
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    > div{
        display: flex; 
        align-items: center;
        justify-content: space-between;       
    }
`;

// criado um container para separar e organizar os botoes
export const HeaderButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

// criado um interface para informar o tipo de propriedade que o botão vai receber pq temos 2 botoes de cores diferentes no header
interface HeaderButtonProps {
    variant?: "purple" | "yellow"
}

//<HeaderButtonProps> serve para informar o tipo de propriedade que o botão vai receber

//a funcao css serve para informar o css que vai ser aplicado no botão
//no componente header passamos a propriedade variant para informar qual botão vai receber o css

//a segunda funcao serve para aplicar somente na onde a propriedade variant for purple
//pq a primeira funcao deixa os dois elementos escuros e queremos o icone mais claro
export const HeaderButton = styled.button<HeaderButtonProps>` 
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    cursor: inherit;

    span {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: -0.5rem;
        right: -0.5rem;
        color: ${({theme}) => theme.colors["base-white"]};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;

    }

    ${({theme, variant}) => css`
        background: ${theme.colors[`brand-${variant}-light`]};
        color: ${theme.colors[`brand-${variant}-dark`]};

        span {
            background: ${theme.colors[`brand-${variant}`]};
        }
    `}

    ${({variant}) => variant === "purple" && css`
        svg {
            color: ${props => props.theme.colors["brand-purple"]};
        }
    `}
`