import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffes } from "./components/SelectedCoffes";
import { CompleteOrderContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm, FormProvider} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
    credit = 'credit',
    debit = 'debit',
    money = 'money'
}

const confirmOrderValidationSchema = zod.object({
    cep: zod.string().min(1, 'CEP obrigatório').max(9, 'CEP inválido'),
    street: zod.string().min(1, 'Rua obrigatória'),
    number: zod.string().min(1, 'Número obrigatório'),
    complement: zod.string(),
    district: zod.string().min(1, 'Bairro obrigatório'),
    city: zod.string().min(1, 'Cidade obrigatória'),
    uf: zod.string().min(1, 'UF obrigatória'),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return {message: 'Selecione uma forma de pagamento'}
        },
    }),
});

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>;
type ConfirmOrderFormData = OrderData;
export function CompleteOrderPage() {

    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderValidationSchema)
    })

    const {handleSubmit} = confirmOrderForm;

    const navigate = useNavigate()
    const {clearCart} = useCart()

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/orderConfirmed", {
            state: data
        })
        clearCart();
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}> 
                <CompleteOrderForm />
                <SelectedCoffes />
            </CompleteOrderContainer>
        </FormProvider>
    )
}