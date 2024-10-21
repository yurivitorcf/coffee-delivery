import { css, styled } from "styled-components";

export const PaymentOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    > p{
        grid-column: span 3;
        color: ${({theme}) => theme.colors["base-error"]};
    }
`

export const PaymentMethods = styled.div`
    input {
        visibility: hidden;
        appearance: none;
    }

    input:checked + label > div {
        ${({theme}) => css`
            background-color: ${theme.colors["brand-purple-light"]};
            border-color: ${theme.colors["brand-purple"]};
        `}
        &:hover {
            ${({theme}) => css`
                background-color: ${theme.colors["brand-purple-light"]};
                border-color: ${theme.colors["brand-purple"]};
            `}
        }
    }
`

export const ContentContainer = styled.div`
    padding: 0 1rem;
    background-color: ${({theme}) => theme.colors["base-button"]};
    color: ${({theme}) => theme.colors["base-text"]};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${({theme}) => theme.colors["base-button"]};
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        background-color: ${({theme}) => theme.colors["base-hover"]};
    }

    svg {
        color: ${(props) => props.theme.colors["brand-purple"]};
    }

    user-select: none;
`