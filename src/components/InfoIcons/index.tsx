import React from "react";
import { IconContainer, InfoIconContainer } from "./styles";

interface InfoIconProps {
    icon: React.ReactNode;
    text: string | React.ReactNode;
    iconBg: string
}
export function InfoIcon({icon, text, iconBg}: InfoIconProps) {

    return (
     <InfoIconContainer>
        <IconContainer iconBg={iconBg}>
            {icon}
        </IconContainer>
        {typeof text ==="string" ? <p>{text}</p> : text}
     </InfoIconContainer>
    )
}