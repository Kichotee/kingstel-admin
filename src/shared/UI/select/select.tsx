import { Controller, FieldValues } from "react-hook-form";
import { IInputProps } from "../input/type";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IOptionType } from "@/types";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type Props<T extends FieldValues> = {
  options: IOptionType[];
} & IInputProps<T>;

export const ControlledSelect = <T extends FieldValues>({
  control,
  placeholder,
  label,
  options,
  name,
  errors,
  helperText,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          {label && <label className="text-sm font-medium">{label}</label>}
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-[352px] rounded-[10px] border-[#AAAAAA]">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {helperText && <p className="text-sm text-gray-500 mt-1">{helperText}</p>}
          {errors?.[name] && (
            <p className="text-sm text-red-500 mt-1">{errors[name]?.message as string}</p>
          )}
        </div>
      )}
    />
  );
};
