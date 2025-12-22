/* eslint-disable @typescript-eslint/no-unused-vars */
// import { ConditionalValue } from "@chakra-ui/react";
import { FieldErrors, FieldValues, UseControllerProps } from "react-hook-form";

export type IInputProps<T extends FieldValues> = {
  variant?: "outline" | "subtle";
  size: "lg" | "md" | "sm" | "xs";
  label: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  errors?: FieldErrors<T>;
} & UseControllerProps<T>;
