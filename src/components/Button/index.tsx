import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | number
}
export function Button({text, ...props}: ButtonProps) {

    return (
        <ButtonContainer {...props}>
            {text}
        </ButtonContainer>
    )
}