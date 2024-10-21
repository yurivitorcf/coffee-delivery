import { styled } from "styled-components";

export const CoffeesContainer = styled.section`
    width: 100%;
    margin-top: 2rem;
    
`;

export const CoffeesList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
    column-gap: 2rem;
    margin-top: 3.5rem;
`