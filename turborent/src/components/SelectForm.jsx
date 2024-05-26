"use client"
import React from 'react'
import { format } from "date-fns";
import {
    FormControl,
    FormField,
    FormItem,
  } from "@/components/ui/form"
import { Label } from './ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function SelectForm({control,id,label,placeholder,list}) {
  return (
   <div> 
   <Label htmlFor={id} className="font-semibold text-md">{label}</Label>
   <FormField
          control={control}
          name={id}
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {list?.map((item,index)=>(
                    <SelectItem key={index} value={`${item}`}>{item}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
         
  /></div>
  )
}

export default SelectForm