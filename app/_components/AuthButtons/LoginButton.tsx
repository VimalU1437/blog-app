import { LOGIN_BUTTON } from "@/content";
import BaseAuthButton from "./BaseAuthButton";
import React from "react";

interface LoginButtonProps {
  formSubmit?: (() => void) | null;
}

const LoginButton: React.FC<LoginButtonProps> = ({ formSubmit }) => {
  return <BaseAuthButton button={LOGIN_BUTTON} formSubmit={formSubmit} />;
};

export default LoginButton;
