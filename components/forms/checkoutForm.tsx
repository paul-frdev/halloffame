'use client'

import { useRouter } from 'next/navigation';
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { CustomCheckbox } from '../ui/customCheckbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { PhoneNumberInput } from '../ui/phoneNumberInput';
import { Title } from "../ui/title";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type UserProps = {
  surname: string;
  userName: string;
  phoneNumber: string;
  email: string;
};

interface CheckoutFormProps {
  initialData?: UserProps | null;
}

const formSchema = z.object({
  surname: z.string().optional(),
  userName: z.string().min(1),
  phoneNumber: z.string().min(5),
  email: z.string().min(1).email(),
  cartPayment: z.boolean().optional().refine(val => val !== false, {
    message: 'Cart payment must be selected.',
    path: ['cartPayment'],
  }),
  cashPayment: z.boolean(),
});

type CheckoutFormValues = z.infer<typeof formSchema>;

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ initialData }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      email: "",
      userName: "",
      phoneNumber: "",
      surname: "",
      cartPayment: false,
      cashPayment: false
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
    router.push('/checkout/confirmation')
  };

  const selectedTypePayment = (e: any) => {
    form.setValue('cartPayment', e.target.checked)
  }

  console.log('form', form.formState.errors);


  return (
    <div className="h-full py-16 px-4 w-full bg-white text-white">
      <Container className=" flex-col justify-start items-start h-full gap-y-14">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className=' flex justify-between items-start pb-3 border-b border-b-[#999999]'>
              <div className=' flex-col justify-start items-start'>
                <Title className="w-full text-2xl text-black font-SFPRegular leading-[33.6px] text-left">Оформлення замовлення:</Title>
                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem className='mb-4'>
                      <FormLabel>
                        <label
                          className={cn(
                            `text-[16px] text-black font-sansBold leading-[24px] tracking-[0.1px] mb-[4px]`
                          )}
                        >
                          Призвище
                        </label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={cn(
                            ` bg-transparent text-lg text-black font-SFPRegular tracking-wider leading-relaxed !border  rounded-md border-[#999999] w-[500px] h-[50px]`
                          )}
                          disabled={loading}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem className='mb-4 relative'>
                      <FormLabel>
                        <label
                          className={cn(
                            `text-[16px] text-black  font-sansBold leading-[24px] tracking-[0.1px] mb-[4px] relative`,
                            form.formState.errors.userName ? "text-error" : ""
                          )}
                        >
                          Імя
                          <span className={cn(` absolute -top-[4px] -right-[13px] text-error text-[22px]`)}>*</span>
                        </label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={cn(
                            ` bg-transparent text-lg text-black font-SFPRegular tracking-wider leading-relaxed !border  rounded-md border-[#999999] w-full max-w-[500px] h-[50px]`,
                            form.formState.errors.userName && "border-errorInput focus:border-errorInput "
                          )}
                          disabled={loading}
                          {...field}
                          name='phoneNumber'
                        />
                      </FormControl>
                      <FormMessage className="absolute -bottom-[21px] left-[18px] font-sansRegular text-sm text-error" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phoneNumber'
                  render={({ field }) => (
                    <FormItem className='mb-6 relative'>
                      <FormLabel>
                        <label
                          className={cn(
                            `text-[16px] text-black font-sansBold leading-[24px] tracking-[0.1px] mb-[4px] relative`,
                            form.formState.errors.phoneNumber ? "text-error" : ""
                          )}
                        >
                          Номер телефону
                          <span className={cn(` absolute -top-[4px] -right-[13px] text-error text-[22px]`)}>*</span>
                        </label>
                      </FormLabel>
                      <FormControl>
                        <PhoneNumberInput
                          name='phoneNumber'
                          className={cn(`bg-transparent font-SFPRegular tracking-wider leading-relaxed  !border rounded-md border-[#999999]`, form.formState.errors.phoneNumber && "border-errorInput focus:border-errorInput ")}
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
                    <FormItem className='mb-10 relative'>
                      <FormLabel>
                        <label
                          className={cn(
                            `text-[16px] text-black font-sansBold leading-[24px] tracking-[0.1px] mb-[4px] relative`,
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
                            ` bg-transparent text-lg text-black font-SFPRegular tracking-wider leading-relaxed !border  rounded-md border-[#999999] w-[500px] h-[50px]`,
                            form.formState.errors.email && "border-errorInput focus:border-errorInput "
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
              <div className='w-full max-w-[420px]'>
                <Title className="w-full text-2xl text-black font-SFPRegular leading-[33.6px] text-left mb-4">Спосіб оплати замовлення:</Title>
                <div className='text-black flex-col justify-start items-start checkbox'>
                  <CustomCheckbox onChange={selectedTypePayment} loading={loading} >Сплата картою <span className='text-[#4ea624]'>Privat</span></CustomCheckbox>
                  {/* TODO add second type of payment in case if user ordered some product */}
                  {/* <CustomCheckbox onChange={selectedTypePayment} loading={loading} >Оплатити готівкою </CustomCheckbox> */}
                </div>
              </div>
            </div>
            <div className='mt-6 flex justify-end items-center'>
              <Button
                disabled={loading}
                className={cn(`w-full max-w-[250px] h-[60px] text-[24px] uppercase font-SFPRegular leading-[33.6px] border-transparent hover:border hover:border-[#999999]`)}
                type="submit"
              >
                Продовжити замовлення
              </Button>
            </div>
          </form>
        </Form>
      </Container>
    </div>
  );
};
