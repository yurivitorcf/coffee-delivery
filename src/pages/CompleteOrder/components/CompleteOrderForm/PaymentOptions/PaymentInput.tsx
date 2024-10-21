import { ContentContainer, PaymentMethods } from "./styles";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type PaymentInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentInputProps>(({id, icon, label, ...props}, ref) => {
    return (
        <PaymentMethods>
            <input type="radio" id={id} {...props} name="paymentMethod" ref={ref}/>
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
        </PaymentMethods>
    )
})