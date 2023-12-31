"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Event } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  time: z.string({
    required_error: "Please select a time to display.",
  }),
});

interface SelectFormProps {
  event?: Event;
  productColors?: string[] | undefined;
  productSizes?: string[] | undefined;
  color?: string;
  size?: string;
  selectedValue?: string;
  onSelectedValue?: (data?: string, color?: string, size?: string) => void;
  setTrigger?: (data: any) => void;
  setColor?: (color: string) => void;
  setSize?: (size: string) => void;
}
export function SelectForm({
  event,
  onSelectedValue,
  selectedValue,
  setTrigger,
  productColors,
  productSizes,
  color,
  size,
  setColor,
  setSize,
}: SelectFormProps) {


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { trigger, setValue } = form;

  useEffect(() => {
    setTrigger?.(() => trigger);
  }, [trigger, setTrigger]);



  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    onSelectedValue?.(data.time);
  };

  const handleValueChange = async (selected: string) => {

    setValue("time", selected);
    await trigger("time");
    onSubmit({ time: selected });
    setColor?.(selected);
    setSize?.(selected);
  };

  const label = event ? `Виберіть зручний час:` : productColors ? `Колір` : productSizes ? "Розмір" : "";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full w-2/3 space-y-6 transition-all duration-300">
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className={cn(`border-none`, event ? " w-full max-w-[650px]" : "w-[600px]")}>
              <FormLabel className={cn(`text-2xl font-oswaldBold inline-block `, event ? "mb-1 w-full" : "mb-4 text-[#acacac] uppercase")}>
                {label}
              </FormLabel>
              {event ? (
                <Select onValueChange={handleValueChange}>
                  <FormControl className={form.formState.errors.time && " w-full border-b-2 border-error"}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedValue} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={cn(`w-full border-none focus:ring-0 transition-all duration-300`)} position='popper'>
                    {event?.options.map(item => (
                      <SelectItem key={item} value={item} className='text-[20px] cursor-pointer'>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : productColors ? (
                <Select onValueChange={handleValueChange} defaultValue={color || ""}>
                  <FormControl className={form.formState.errors.time && "border-b-2 border-error"}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedValue} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={cn(`border-none focus:ring-0`)} position='popper'>
                    {productColors?.map(item => (
                      <SelectItem key={item} value={item} className='text-[20px] cursor-pointer'>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Select onValueChange={handleValueChange} defaultValue={size || ""}>
                  <FormControl className={form.formState.errors.time && "border-b-2 border-error"}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedValue} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={cn(`border-none focus:ring-0`)}>
                    {productSizes?.map(item => (
                      <SelectItem key={item} value={item} className='text-[20px] cursor-pointer'>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
