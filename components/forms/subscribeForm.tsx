import React, { useState } from 'react'
import { Title } from '../ui/title'
import { Container } from '../ui/container'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Subscribe } from '@/types'
import * as z from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from '@/lib/utils'



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
      name: '',
    },
  });


  const onSubmit = (data: SubscribeFormValues) => {
    console.log(data);
  };
  return (
    <section className='h-[294px] w-full'>
      <Container className=' justify-between items-center h-full gap-x-24'>
        <div className='w-[320px]'>
          <Title className='w-full text-2xl font-SFPRegular leading-[33.6px] text-left' >Підпишіться, щоб залишатися<br /> в курсі подій:</Title>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex justify-between items-center">
            <div className="mr-6 relative">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <label
                        className={cn(
                          `text-[16px] font-sansBold leading-[24px] tracking-[0.1px] mb-[4px]`,
                          form.formState.errors.name ? "text-error" : ""
                        )}
                      >
                        Імя
                      </label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={cn(` bg-transparent focus:outline-none focus:border-none !border-b-[1px] border-t-[0px] border-l-[0px] border-r-[0px] rounded-none border-white w-[400px] h-[50px]`, form.formState.errors.name && "border-b-errorInput focus:border-b-errorInput")}
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-[21px] left-[18px] font-sansRegular text-sm text-error" />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <label
                        className={cn(
                          `text-[16px] font-sansBold leading-[24px] tracking-[0.1px] mb-[4px]`,
                          form.formState.errors.email ? "text-error" : ""
                        )}
                      >
                        Пошта
                      </label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={cn(` bg-transparent focus:outline-none focus:border-none !border-b-[1px] border-t-[0px] border-l-[0px] border-r-[0px] rounded-none border-white w-[400px] h-[50px]`, form.formState.errors.email && "border-b-errorInput focus:border-b-errorInput")}
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-[21px] left-[18px] font-sansRegular text-sm text-error" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex justify-end items-center ml-auto">
              <Button disabled={loading} className={cn(`w-full max-w-[283px] h-[90px] text-[24px] uppercase font-SFPRegular leading-[33.6px]`)} type="submit">
                Підписатися
              </Button>
            </div>
          </form>
        </Form>
      </Container>
    </section >
  )
}