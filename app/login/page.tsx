"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import LoginButton from "@/app/_components/AuthButtons/LoginButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  LOGIN_HEADING,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER,
  INVALID_EMAIL,
  PASSWORD_MIN_CHARS,
} from "@/content";

const formSchema = z.object({
  email: z.email({ message: INVALID_EMAIL }),
  password: z.string().min(6, { message: PASSWORD_MIN_CHARS }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Handle login here, e.g., call API
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[300px] min-h-[350px] p-6 drop-shadow-white border-2 rounded-[2px]">
        <h1 className="text-2xl font-bold mb-8 text-center">{LOGIN_HEADING}</h1>
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{EMAIL_LABEL}</FormLabel>
                  <FormControl>
                    <Input placeholder={EMAIL_PLACEHOLDER} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{PASSWORD_LABEL}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={PASSWORD_PLACEHOLDER}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LoginButton formSubmit={form.handleSubmit(onSubmit)} />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
