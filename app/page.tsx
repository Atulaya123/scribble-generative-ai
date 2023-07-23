'use client'
import { useForm } from "react-hook-form";

export default function Home() { 
const { register, handleSubmit, watch, formState: { errors } } = useForm<{
  prompt:string,
}>();
const onSubmit = data => console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit((formData)=>{
        console.log(formData);
      })}>
     
      <input className="text-black"  {...register("prompt",{ required: true })} />
      
     
      {errors.prompt && <span>This field is required</span>}
      
      <input type="submit" />
    </form> 
    </main>
  )
}
