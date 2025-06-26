
"use client"

import react from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import CustomFormField from './CustomFormField'
import SubmitButton from './SubmitButton'
import { useState } from 'react'
import { UserFormValidation } from '@/lib/validation'
import { useRouter } from 'next/navigation'

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA= 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX ='checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',

}

 

 
const AgentsForm =() => {
  const router = useRouter
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  
   async  function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
  
    setIsLoading(true);
    
    try {
      //const userData = {name,email,phone};

      //const user = await createUser(userData);

      //if(user) router.push(`/agents/${user.$id}/register`)
        
    } catch (error) {
      console.log(error);
    }

  }

  return (
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className='text-xl text-blue-600 font-bold mt-2'>
            Welcome To RentSmart 👋
          </h1>
          <p className='text-gray-800 font-bold'>Start your Smooth Management journey.</p>

        </section>

        <CustomFormField
        fieldType={ FormFieldType.INPUT}
        control= {form.control}
        name="name"
        label="Full name"
        placeholder="John Doe"
        iconSrc="/assets/icons/user.jpg"
        iconAlt="user"
        /> 
        
        <CustomFormField
        fieldType={ FormFieldType.INPUT}
        control= {form.control}
        name="email"
        label="Email"
        placeholder="johndoe@gmail.com"
        iconSrc="/assets/icons/email.jpg"
        iconAlt="email"
        /> 
        
        <CustomFormField
        fieldType={ FormFieldType.PHONE_INPUT}
        control= {form.control}
        name="phone"
        label="Phone number"
        placeholder="(555)123 456 789"
        
      
        />
         

        <SubmitButton isLoading={isLoading}>
          Get Started
        </SubmitButton>
      </form>
    </Form>
  )
}
  
export default AgentsForm