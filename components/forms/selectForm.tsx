"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { UpcomingEvent } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  time: z.string({
    required_error: "Please select a time to display.",
  }),
});

interface SelectFormProps {
  event: UpcomingEvent;
  selectedValue?: string;
  onSelectedValue?: (data: string) => void;
  setTrigger?: (data: any) => void;
}
export function SelectForm({ event, onSelectedValue, selectedValue, setTrigger }: SelectFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { trigger, setValue } = form;

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    onSelectedValue?.(data.time);
  };

  const handleValueChange = async (selected: string) => {
    setValue("time", selected);
    await trigger("time");
    onSubmit({ time: selected });
  };

  useEffect(() => {
    setTrigger?.(() => trigger);
  }, [trigger, setTrigger]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className=" w-[310px] border-none">
              <FormLabel className="text-2xl font-oswaldBold mb-1">Виберіть зручний час:</FormLabel>
              <Select onValueChange={handleValueChange} defaultValue={selectedValue}>
                <FormControl className={form.formState.errors.time && "border-b-2 border-error"}>
                  <SelectTrigger>
                    <SelectValue placeholder={selectedValue} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className={cn(`border-none focus:ring-0`)}>
                  {event?.time.map(item => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
