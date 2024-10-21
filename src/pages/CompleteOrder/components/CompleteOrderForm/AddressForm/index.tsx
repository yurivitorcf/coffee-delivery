import { useFormContext } from "react-hook-form";
import { Input } from "../../../../../components/Input";
import { AddressFormContainer } from "./styles";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string
        }
    }
}
export function AddressForm() {
    const {register, formState} = useFormContext();

    const {errors} = formState as unknown as ErrorsType;

    return (
        <AddressFormContainer>
            <Input placeholder="CEP" type="number" className="cep" error={errors.cep?.message} {...register("cep")}/>
            <Input placeholder="Rua" className="street" error={errors.street?.message} {...register("street")}/>
            <Input placeholder="Número" type="number" className="streetNumber" error={errors.number?.message} {...register("number")}/>
            <Input placeholder="Complemento" className="complement" error={errors.complement?.message} rightText="Opcional" {...register("complement")}/>
            <Input placeholder="Bairro" className="district" error={errors.district?.message} {...register("district")}/>
            <Input placeholder="Cidade" className="city" error={errors.city?.message} {...register("city")}/>
            <Input placeholder="UF" className="uf" error={errors.uf?.message} {...register("uf")}/>
            
        </AddressFormContainer>
    )
}