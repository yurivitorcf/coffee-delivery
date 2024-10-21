import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import { SectionTittle } from "../SectionTittle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentOptions } from "./PaymentOptions";

export function CompleteOrderForm() {
    const {colors} = useTheme()

    return (
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle" >Complete seu pedido</TitleText>
            <FormSectionContainer>
                <SectionTittle
                    title="Endereço de entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22}/>}
                />
                <AddressForm />
            </FormSectionContainer>
            <FormSectionContainer>
                <SectionTittle
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar color={colors["brand-purple"]} size={22}/>}
                />
                <PaymentOptions />
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}