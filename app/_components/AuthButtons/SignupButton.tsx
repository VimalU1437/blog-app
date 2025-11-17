import { SIGNUP_BUTTON } from "@/content";
import BaseAuthButton from "./BaseAuthButton";
import React from "react";

interface SignupButtonProps {
  formSubmit?: (() => void) | null;
}

const SignupButton: React.FC<SignupButtonProps> = ({ formSubmit }) => {
  return <BaseAuthButton button={SIGNUP_BUTTON} formSubmit={formSubmit} className="bg-violet-600! text-white!" />;
};


export default SignupButton;
