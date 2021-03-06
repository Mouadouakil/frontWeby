import React from 'react';
import { useForm } from "react-hook-form";
import './consulting.css';
import axios from 'axios';


export default function Consulting() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => envoyer(data);
  const baseURL = "http://localhost:5030/Events";

  watch("event")

  function  envoyer(data) {
    console.log(data);
    axios.post(baseURL, {
    title : data.event,
    description : data.description,
    link : data.Lien,
    categorie : data.categorie,
    datevent : data.date,
    picture : data.picture})
    .then(function (response) {
      console.log(response);
      if(response.status === "200"){
        alert("email et Demende recu")

      }else{
        alert("Error d envoi verifier la date")

      }
    })
    .catch(function (error) {
      console.log(error);
    });





      console.log(data.exampleRequired)

  }



  return (


    
    <>

      
    <div className='ajout'></div>

        <form onSubmit={handleSubmit(onSubmit)}>
     

        <h2>  </h2>
  
        
      <label>Email : </label>
      <input {...register("email", { required: true })} className='inpu' type="Email"/>

      <label>Titre :</label>
      <input {...register("event", { required: true })} className='inpu'/>

      <label>Description : </label>
      <input {...register("description", { required: true })} className='desc' type="textarea"/>

      <label>Nom de Conferencier</label>
      <input {...register("speaker", { required: true })} className='inpu' />
      
      <label>Date : </label>
      <input {...register("date", { required: true })} className='inpu' type="Date"/>

      <label>Lien  (GoogleMeet/Zoom)</label>
      <input {...register("Lien", { required: true })} className='inpu'/>

      <label>Categorie</label>
      <select {...register("categorie")} className='inpu'>
        <option value="1">IT</option>
        <option value="2">Management</option>
        <option value="3">Economie</option>
        <option value="1">Politique</option>
      </select>

      <label>Annonce <h6>utiliser ce <a href='https://imgbb.com/'>lien</a> pour creer  un lien pour l'image  </h6></label>
      <input {...register("picture", { required: true })} className='inpu'/>

      {errors.exampleRequired && <span>This field is required</span>}
      


      <label><h4 className='h'>Il Faut attendre que l'admin approve votre Evenement  ! </h4></label>

      <input type="submit" />
    </form>
    </>
  );
}
