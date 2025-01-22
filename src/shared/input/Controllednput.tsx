import { Controller, FieldValues } from "react-hook-form";
import { IInputProps } from "./type";

import { Field } from "@/components/ui/field";
import { Input } from "@chakra-ui/react";

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
            label={label}
            helperText={error?.message || helperText}
            className="*:text-black"
          >
            <Input
              bg={"white"}
              _placeholder={{ fontSize: "12px" }}
              type={type}
              className=" !border-[#AAAAAA] min-w-[352px] px-2 py-4 rounded-[10px]  !border !bg-white-900"
              onChange={onChange}
              variant={variant}
              size={size}
              placeholder={placeholder}
            />
          </Field>
        );
      }}
    />
  );
};
