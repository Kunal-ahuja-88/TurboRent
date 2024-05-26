import React from 'react'
import { Form } from './ui/form'
import DateTimeForm from './DateTimeForm'
import { pickupTime } from '@/constants/appdata'

function StepOne({form}) {
  return (
    <div>
    <Form {...form}>
     <form className='w-full bg-white p-5 shadow-md border'>
       <DateTimeForm
       id="pickupdate"
       label="Pickup Date"
        control={form.control}/>
      <SelectForm
      id="pickuptimr"
      label="Pickup Time"
      placeholder="Set pickup time"
      list={pickupTime}
      control={form.control}/>
       
     </form>
    </Form>
    </div>
  )
}

export default StepOne