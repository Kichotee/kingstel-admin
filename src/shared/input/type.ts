/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConditionalValue } from "@chakra-ui/react";
import { Control, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

export type IInputProps={
    variant?:ConditionalValue<"outline" | "flushed" | "subtle" | undefined>;
    size:'lg' | 'md' | 'sm' | 'xs';
    label:string;
    placeholder?:string;
    helperText?:string;
    type?:string;

    
} & UseControllerProps