"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonData {
  text: string;
  route: string;
}

interface BaseAuthButtonProps {
  button: ButtonData;
  formSubmit?: (() => void) | null;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}

const BaseAuthButton: React.FC<BaseAuthButtonProps> = ({
  button,
  formSubmit = null,
  variant = "default",
  className,
}) => {
  const { text, route } = button;
  const router = useRouter();

  return (
    <Button
      type={formSubmit ? "button" : "submit"}
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
