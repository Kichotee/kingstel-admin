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
            variant={variant}
            value={value}
            onValueChange={onChange}
            collection={collection}
            size={size}
            onInteractOutside={() => onBlur()}
          >
            {/* <SelectLabel>{label}</SelectLabel> */}
            <SelectTrigger>
              <SelectValueText placeholder={placeholder} />
              <SelectContent>
                {options.map((option) => (
                  <SelectItem item={option.value} key={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectTrigger>
          </SelectRoot>
        )}
      />
    </Field>
  );
};
