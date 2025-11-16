"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonData {
  text: string;
  route: string;
}

interface BaseAuthButtonProps {
  button: ButtonData;
  formSubmit?: Function | null;
  variant?: "text" | "outlined" | "contained";
  className?: string;
}

const BaseAuthButton: React.FC<BaseAuthButtonProps> = ({
  button,
  formSubmit = null,
  variant = "contained",
  className,
}) => {
  const { text, route } = button;
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        if (formSubmit) {
          formSubmit();
        } else {
          router.push(route);
        }
      }}
      variant={variant}
      className={className}
    >
      {text}
    </Button>
  );
};

export default BaseAuthButton;
