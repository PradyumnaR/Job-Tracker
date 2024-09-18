import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl, FormField } from "../ui/form";
import { Control } from "react-hook-form";
import { FormItem, FormLabel } from "../ui/form";

type SelectProps = {
  name: string;
  control: Control<any>;
  items: string[];
  labelTxt?: string;
};

export default function Select({
  name,
  control,
  items,
  labelTxt,
}: SelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className='capitalize'>{labelTxt || name}</FormLabel>
            <ShadcnSelect
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {items.map((item) => {
                  return (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </ShadcnSelect>
          </FormItem>
        );
      }}
    />
  );
}
