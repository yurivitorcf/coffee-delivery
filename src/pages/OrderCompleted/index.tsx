import { RegularText, TitleText } from "../../components/Typography";
import { OrderCompletedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderImg from "../../assets/confirmedOrder.svg";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { InfoIcon } from "../../components/InfoIcons";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentOptions";
import { useEffect } from "react";

interface LocationType{
    state: OrderData;
}

export function OrderConfirmedPage() {

    const {colors} = useTheme()

    const {state} = useLocation() as unknown as LocationType;

    const navigate = useNavigate()

    useEffect(() => {
        if(!state) {
            return navigate("/home");
        }
    }, [state])

    if(!state) {
        return <></>;
    }

    return (       
        <OrderCompletedContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguardar que o café logo chegará até você
                </RegularText>
            </div>

            <section>
                <OrderDetailsContainer>
                    <InfoIcon
                        icon={<MapPin weight="fill"/>} 
                        text={<RegularText>Entrega em <strong>{state.street}, {state.number}</strong><br/>{state.district} - {state.city}, {state.uf}</RegularText>} 
                        iconBg={colors["brand-purple"]}
                    />

                    <InfoIcon
                        icon={<Clock weight="fill"/>}
                        text={<RegularText>Previsão de entrega<br/><strong>20 min - 30 min</strong></RegularText>}
                        iconBg={colors["brand-yellow"]}
                    />

                    <InfoIcon
                        icon={<CurrencyDollar weight="fill"/>}
                        text={<RegularText>Pagamento na entrega<br/><strong>{paymentMethods[state.paymentMethod].label}</strong></RegularText>}
                        iconBg={colors["brand-yellow-dark"]}
                    />
                    
                </OrderDetailsContainer>

                <img src={confirmedOrderImg} alt=""/>
            </section>
        </OrderCompletedContainer>      
    )
}