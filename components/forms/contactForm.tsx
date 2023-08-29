import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Title } from "../ui/title";
import { cn } from "@/lib/utils";
import { Subscribe } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  initialData?: Subscribe | null;
}

const formSchema = z.object({
  email: z.string().min(1).email({ message: "Invalid email address" }),
  name: z.string().min(1).max(5),
  text: z.string().min(1),
});

export const ContactForm: React.FC<ContactFormProps> = ({ initialData }) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      email: "",
      name: "",
      text: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
  };
  return (
    <div className="h-[294px] w-full max-w-[750px] bg-transparent text-white">
      <Container className=" flex-col justify-start items-start h-full gap-y-14">
        <div className="w-full">
          <Title className="w-full text-2xl font-SFPRegular leading-[33.6px] text-left">КОНТАКТНА ФОРМА</Title>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col justify-start items-start">
            <div className="mb-12 relative">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
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
                          ` bg-transparent text-lg font-SFPRegular tracking-wider leading-relaxed !border-b-[1px] border-t-[0px] border-l-[0px] border-r-[0px] rounded-none border-white w-[500px] h-[50px]`,
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
            </div>
            <div className="mb-12 relative">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
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
                          ` bg-transparent text-lg font-SFPRegular tracking-wider leading-relaxed !border-b-[1px] border-t-[0px] border-l-[0px] border-r-[0px] rounded-none border-white w-[500px] h-[50px]`,
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
            </div>
            <div className="mb-28 relative">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <label
                        className={cn(
                          `text-[16px] font-sansBold leading-[24px] tracking-[0.1px] mb-[4px] relative`,
                          form.formState.errors.text ? "text-error" : ""
                        )}
                      >
                        Повідомлення
                        <span className={cn(` absolute -top-[4px] -right-[13px] text-error text-[22px]`)}>*</span>
                      </label>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className={cn(
                          ` bg-transparent text-lg font-SFPRegular tracking-wider leading-relaxed !border-b-[1px] border-t-[0px] border-l-[0px] border-r-[0px] rounded-none border-white w-[600px] h-[50px]`,
                          form.formState.errors.text && "border-b-errorInput focus:border-b-errorInput focus-visible:border-b-errorInput"
                        )}
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-[21px] left-[18px] font-sansRegular text-sm text-error" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex justify-start items-center ml-auto">
              <Button
                disabled={loading}
                className={cn(`w-full max-w-[383px] h-[60px] text-[24px] uppercase font-SFPRegular leading-[33.6px]`)}
                type="submit"
              >
                Підписатися
              </Button>
            </div>
          </form>
        </Form>
      </Container>
    </div>
  );
};
