"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UpcomingEvent } from '@/types'
import { useState } from 'react'

const FormSchema = z.object({
  time: z
    .string({
      required_error: "Please select a time to display.",
    })
})

interface SelectFormProps {
  event: UpcomingEvent;
}
export function SelectForm({ event }: SelectFormProps) {

  const [selectedItem, setSelectedItem] = useState('')
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setSelectedItem(data.time)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className=' w-[310px] border-none'>
              <FormLabel className='text-2xl font-oswaldBold mb-1'>Виберіть зручний час:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={selectedItem} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='border-none'>
                  {event?.time.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
