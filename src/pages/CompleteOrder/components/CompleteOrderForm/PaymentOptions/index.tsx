import { PaymentOptionsContainer } from "./styles";
import { PaymentMethodInput } from "./PaymentInput";
import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../../components/Typography";

export const paymentMethods = {
    credit: {
        label: "Cartão de Crédito",
        icon: <CreditCard size={16} />,
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank size={16} />,
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16} />,
    }
}

export function PaymentOptions() {
    const { register , formState: {errors}} = useFormContext()

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

    return (
        <PaymentOptionsContainer>
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                <PaymentMethodInput id={key} key={label} icon={icon} label={label} value={key} {...register("paymentMethod")} /> 
            ))}
            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
        </PaymentOptionsContainer>
    )
}