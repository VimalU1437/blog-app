 import { LOGOUT_BUTTON } from "@/content";
 import BaseAuthButton from "./BaseAuthButton";
 import React from "react";

 interface LogoutButtonProps {
  formSubmit?: (() => void) | null;
 }

 const LogoutButton: React.FC<LogoutButtonProps> = ({ formSubmit }) => {
  return <BaseAuthButton button={LOGOUT_BUTTON} formSubmit={formSubmit} />;
 };
 
 export default LogoutButton
