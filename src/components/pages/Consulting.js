import React from 'react';
import { useForm } from "react-hook-form";
import './consulting.css'
export default function Consulting() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it

  return (


    
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
     

      <label>Nom D'utilisateur</label>
      <input  {...register("example")} className='inpu'/>
      
      <label>Email</label>
      <input {...register("exampleRequired", { required: true })} className='inpu' type="Email"/>

      <label>Nom D'Evenement</label>
      <input {...register("Nomevent", { required: true })} className='inpu'/>

      <label>Description</label>
      <input {...register("descrittipon", { required: true })} className='inpu' type="textarea"/>

      <label>Nom de Conferencier</label>
      <input {...register("conferencier", { required: true })} className='inpu' />
      
      <label>Date</label>
      <input {...register("Date", { required: true })} className='inpu' type="Date"/>

      <label>Lien  GoogleMeet ou Zoom Par exemple</label>
      <input {...register("Lien", { required: true })} className='inpu'/>

      <label>Lien D'image</label>
      <input {...register("picture", { required: true })} className='inpu'/>

      {errors.exampleRequired && <span>This field is required</span>}
      


      <label><h4 className='h'>Il Faut attendre que l'admin approve votre Evenement  ! </h4></label>

      <input type="submit" />
    </form>
    </>
  );
}
