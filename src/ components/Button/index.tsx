
import { ButtonContainer, ButtonVariant } from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}