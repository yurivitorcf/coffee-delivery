import { Minus , Plus} from "phosphor-react";
import { IconWrapper, QtyInputContainer } from "./styles";

interface QuantityInputProps {
    size?: 'small' | 'medium' 
    onDecrease: () => void
    onIncrease: () => void
    quantity: number
}

export function QtyInput({size = 'medium', onDecrease, onIncrease, quantity}: QuantityInputProps) {
    return (
        <QtyInputContainer size={size}>
            <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
                <Minus size={14} weight="fill" />
            </IconWrapper>
            <input type="number" readOnly value={quantity}/>
            <IconWrapper onClick={onIncrease}>
                <Plus size={14} weight="fill" />
            </IconWrapper>
        </QtyInputContainer>
    )
}