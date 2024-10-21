import { styled } from "styled-components";
import heroBackgroundImg from '../../../../assets/hero-image.svg'
import { rgba } from "polished";
import { TitleText } from "../../../../components/Typography";


// fazendo uma transicao de gradiente na imagem para parecer melhor

//no-repeat serve para a imagem nao repetir
//center ta centralizando a imagem
//0deg significa q o gradiente ta sendo aplicado de cima para baixo
//se inicia em 0% e vai para 50.52% e depois para 100%
//base-white e base-background sao as cores do gradiente
//0.2 com auxilio do 'polished' foi adicionado opacidade q seria o atributo de transparencia


export const HeroContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${({theme}) => `url(${heroBackgroundImg}) no-repeat center, 
        linear-gradient(
            0deg,
            ${theme.colors["base-white"]} 0%,
            ${rgba(theme.colors["base-background"], 0.2)} 50.52%,
            ${theme.colors["base-background"]} 100%
        )`};
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

// criado um container para separar e organizar os elementos de introducao 
export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`

export const HeroTitle = styled(TitleText)`
    margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`