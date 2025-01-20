import { Controller, FieldValues } from "react-hook-form";
import { IInputProps } from "../input/type";

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { IOptionType } from "@/types";
import { ListCollection } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

type Props<T extends FieldValues> = {
  options: IOptionType[];
  collection: ListCollection<IOptionType>;
} & IInputProps<T>;
export const ControlledSelect = <T extends FieldValues>({
  control,
  placeholder,
  size,
  variant,
  label,
  options,
  name,
  errors,
  helperText,
  collection,
}: Props<T>) => {
  return (
    <Field
      label={label}
      invalid={!!errors?.name}
      errorText={errors?.name?.message as string}
      helperText={helperText}
    >
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur } }) => (
          <SelectRoot
            bg={"white"}
            _placeholder={{ fontSize: "12px" }}
            className=" !border-[#AAAAAA] min-w-[352px] px-2 rounded-[10px]  !border !bg-white-900"
            variant={variant}
            value={value}
            onValueChange={onChange}
            collection={collection}
            size={size}
            onInteractOutside={() => onBlur()}
          >
            {/* <SelectLabel>{label}</SelectLabel> */}
            <SelectTrigger>
              <SelectValueText fontSize={12} placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent bg={"white"} shadow={"sm"} shadowColor={"#ffffff"} color={"black"}>
              {options.map((option) => (
                <SelectItem bg={"white"}  item={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        )}
      />
    </Field>
  );
};
