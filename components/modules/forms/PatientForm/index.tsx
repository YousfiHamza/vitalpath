"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CustomFormField from "@/components/ui/CustomFormField";
import SubmitButton from "@/components/ui/SubmitButton";
import { FormFieldType } from "@/components/ui/CustomFormField/types";
import { Form } from "@/components/ui/form";

import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";
import "react-phone-number-input/style.css";

const getIsValidMobilePhone = (phone: string) => /^\+\d{10,15}$/.test(phone);
const getIsValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginByPhone, setIsLoginByPhone] = useState(true);

  const handleToggleLoginMethod = () => {
    if (isLoginByPhone) {
      form.setValue("phone", ""); // Clear phone field when switching to email
    } else {
      form.setValue("email", ""); // Clear email field when switching to phone
    }
    setIsLoginByPhone(prev => !prev);
  };

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(
      z
        .object({
          name: z
            .string()
            .min(2, "Name must be at least 2 characters")
            .max(50, "Name must be at most 50 characters"),
          email: z.string().optional(), // Initially optional
          phone: z.string().optional(), // Initially optional
        })
        .superRefine((data, refinementContext) => {
          if (isLoginByPhone) {
            // When logging in by phone
            if (!data.phone || !getIsValidMobilePhone(data.phone)) {
              refinementContext.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid phone number",
                path: ["phone"],
              });
            }
            if (data.email) {
              refinementContext.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Email should be empty when logging in with phone",
                path: ["email"],
              });
            }
          } else {
            // When logging in by email
            if (!data.email || !getIsValidEmail(data.email)) {
              refinementContext.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid email address",
                path: ["email"],
              });
            }
            if (data.phone) {
              refinementContext.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Phone should be empty when logging in with email",
                path: ["phone"],
              });
            }
          }
        }),
    ),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email !== "" ? values.email : undefined,
        phone: values.phone !== "" ? values.phone : undefined,
      };

      console.log("user", user);

      const newUser = await createUser(user);

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-auto h-fit space-y-4"
      >
        <div className="my-8 space-y-1 md:space-y-2">
          <h1 className="header">Hi There 👋</h1>
          <p className="text-theme italic opacity-75">
            You are one step away from scheduling your appointment!
          </p>
        </div>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Tyler Durden"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        {isLoginByPhone ? (
          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="(555) 123-4567"
          />
        ) : (
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="tyler-durden@fc.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />
        )}

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>

        <p className="text-center font-mono text-sm font-light">
          login with{" "}
          <button
            type="button"
            onClick={handleToggleLoginMethod}
            className="cursor-pointer text-lg text-green-500 hover:font-bold hover:underline"
          >
            {isLoginByPhone ? "Email" : "Phone"}
          </button>
        </p>
      </form>
    </Form>
  );
};
