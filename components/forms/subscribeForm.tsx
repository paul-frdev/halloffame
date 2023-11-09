import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Title } from "../ui/title";
import { fadeIn } from "@/constants";
import { cn } from "@/lib/utils";
import { Subscribe } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type SubscribeFormValues = z.infer<typeof formSchema>;

interface SubscribeFormProps {
  initialData?: Subscribe | null;
}

const formSchema = z.object({
  email: z.string().min(1).email({ message: "Invalid email address" }),
  name: z.string().min(1).max(5),
});

export const SubscribeForm: React.FC<SubscribeFormProps> = ({ initialData }) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<SubscribeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      email: "",
      name: "",
    },
  });

  const onSubmit = (data: SubscribeFormValues) => {
    console.log(data);
  };
  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="h-[294px] [@media(max-width:822px)]:pb-12 [@media(max-width:822px)]:h-full w-full bg-black text-white">
      <Container className=" [@media(max-width:822px)]:flex-col justify-between items-center h-full [@media(max-width:822px)]:gap-y-12 gap-x-8 desktop:gap-x-24">
        <div className=" w-full max-w-[250px] [@media(max-width:822px)]:max-w-full">
          <Title className="w-full !text-4xl font-SFPRegular leading-[33.6px] text-left">Залишайтеся в курсі подій:</Title>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex-col flex mobileMap:flex-row justify-between items-center">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className='mobileMap:mr-4 relative w-full mb-4 mobileMap:mb-0'>
                  <FormLabel>
                    <label
                      className={cn(
                        `text-[16px] font-sansBold leading-[24px] tracking-[0.1px] mb-[4px] relative`,
                        form.formState.errors.name ? "text-error" : ""
                      )}
                    >
                      Імя
                      <span className={cn(` absolute -top-[4px] -right-[13px] text-error text-[22px]`)}>*</span>
                    </label>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        ` bg-transparent text-lg font-SFPRegular tracking-wider leading-relaxed !border-b-[1px] border-t-[0px] border-l-[0px] border-r-[0px] rounded-none border-white w-ful max-w-[400px] h-[50px]`,
                        form.formState.errors.name && "border-b-errorInput focus:border-b-errorInput "
                      )}
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute -bottom-[21px] left-[18px] font-sansRegular text-sm text-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='w-full mb-4 mobileMap:mb-0'>
                  <FormLabel>
                    <label
                      className={cn(
                        `text-[16px] font-sansBold leading-[24px] tracking-[0.1px] mb-[4px] relative`,
                        form.formState.errors.email ? "text-error" : ""
                      )}
                    >
                      Пошта
                      <span className={cn(` absolute -top-[4px] -right-[13px] text-error text-[22px]`)}>*</span>
                    </label>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        ` bg-transparent text-lg font-SFPRegular tracking-wider leading-relaxed !border-b-[1px] border-t-[0px] border-l-[0px] border-r-[0px] rounded-none border-white w-ful max-w-[400px] h-[50px]`,
                        form.formState.errors.email && "border-b-errorInput focus:border-b-errorInput focus-visible:border-b-errorInput"
                      )}
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute -bottom-[21px] left-[18px] font-sansRegular text-sm text-error" />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end items-center ml-0 mobileMap:ml-2 isShowAllElems:ml-auto">
              <Button
                disabled={loading}
                className={cn(`w-full text-[16px] isShowAllElems:text-[24px] uppercase font-SFPRegular leading-[33.6px]`)}
                type="submit"
                size="lg"
              >
                Підписатися
              </Button>
            </div>
          </form>
        </Form>
      </Container>
    </motion.section>
  );
};


