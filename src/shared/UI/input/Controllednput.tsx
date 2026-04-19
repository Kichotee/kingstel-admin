/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, FieldValues } from "react-hook-form";
import { IInputProps } from "./type";

import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


type Props<T extends FieldValues> = {} & IInputProps<T>;
export const ControlledInput = <T extends FieldValues>({
  control,
  placeholder,
  size,
  variant,
  label,
  name,
  type,
  helperText,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Field
            
            // helperText={error?.message || helperText}
            className="*:text-black space-y-0 gap-1"
          >
            <Label className="text-xs sm:text-sm text-gray-600">{label}</Label>
            <Input
           
              
              type={type}
              className=" !border-[#AAAAAA] text-xs sm:text-sm placeholder:text-xs focus:outline-none focus:border-none w-full px-2  rounded-[10px]  !border !bg-white-900"
              onChange={onChange}
              value={value ?? ""}
              // size={size}
              placeholder={placeholder}
            />
            {error?.message && (
              <p className="text-sm mt-1 text-red-500">{error.message}</p>
            )}
            {!error && helperText && (
              <p className="text-sm mt-1 text-gray-600">{helperText}</p>
            )}
          </Field>
        );
      }}
    />
  );
};
