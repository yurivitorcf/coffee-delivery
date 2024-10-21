import { styled } from "styled-components";
interface TitleTextProps {
    color?: 'title' | 'subtitle' | 'text'
    size?: 'l' | 'm' | 's' | 'xs' | 'xl'
    weight?: string | number
}

interface RegularTextProps {
    color?: 'text' | 'subtitle' | 'label'
    size?: 'l' | 'm' | 's'
    weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
    font-family: ${({theme}) => theme.fonts.title};
    font-weight: ${({weight}) => weight ?? 800};
    font-size: ${({theme, size}) => theme.textSizes[`title-title-${size ?? "m"}`]};
    line-height: 130%;
    color: ${({theme, color}) => theme.colors[`base-${color ?? "title"}`]};
`

export const RegularText = styled.p<RegularTextProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-weight: ${({weight}) => weight ?? 400};
    font-size: ${({theme, size}) => theme.textSizes[`text-regular-${size ?? "m"}`]};
    line-height: 130%;
    color: ${({theme, color}) => theme.colors[`base-${color ?? "title"}`]};
`