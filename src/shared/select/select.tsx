import { Controller } from "react-hook-form";
import { IInputProps } from "../input/type";

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectLabel,
  SelectValueText,
} from "@/components/ui/select";
import { IOptionType } from "@/types";
import { ListCollection } from "@chakra-ui/react";

type Props = {
  options: IOptionType[];
  collection: ListCollection<IOptionType>;
} & IInputProps;
export const ControlledSelect = ({
  control,
  placeholder,
  size,
  variant,
  label,
  options,
  name,
  helperText,
  collection,
}: Props) => {
  return (
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
          <SelectLabel>{label}</SelectLabel>
          <SelectTrigger>
            <SelectValueText placeholder={helperText || placeholder} />
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
  );
};
