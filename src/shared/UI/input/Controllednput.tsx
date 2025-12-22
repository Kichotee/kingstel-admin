/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, FieldValues } from "react-hook-form";
import { IInputProps } from "./type";

import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";


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
      render={({ field: { onChange }, fieldState: { error } }) => {
        return (
          <Field
            
            // helperText={error?.message || helperText}
            className="*:text-black"
          >
            <Input
           
              
              type={type}
              className=" !border-[#AAAAAA] min-w-[352px] px-2 py-4 rounded-[10px]  !border !bg-white-900"
              onChange={onChange}
              // size={size}
              placeholder={placeholder}
            />
          </Field>
        );
      }}
    />
  );
};
