import { ReactNode } from "react";
import { SectionTittleContainer } from "./styles";
import { RegularText } from "../../../../components/Typography";

interface SectionTittleProps {
    title: string;
    subtitle: string;
    icon: ReactNode;
}

export function SectionTittle({ title, subtitle, icon }: SectionTittleProps) {
    return (
        <SectionTittleContainer>
            {icon}
            <div>
                <RegularText color="subtitle">{title}</RegularText>
                <RegularText size="s" color="label">{subtitle}</RegularText>
            </div>
        </SectionTittleContainer>
    )
}