import React from 'react'
import './createForm.css'
import axios from 'axios';

function CreateForm() {
    const [titre, setTitre] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [date, setDate] = React.useState("");
    const [link, setLink] = React.useState("");
    const [picture, setPicture] = React.useState("");
    const baseURL = "http://localhost:5030/Events";
    const data = {
      title: titre,
      description : desc,
      link: link,
      categorie:category,
      datevent:date,
      picture : picture ,
      }
    const handleSubmit = (event) => {
     console.log(data);
      axios.post(baseURL, {
        title : data.title,
        description : data.description,
        link : data.link,
        categorie : data.categorie,
        datevent : data.datevent,
        picture : data.picture})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });


      event.preventDefault();
    }
 
    return (
      <form onSubmit={handleSubmit} className='createForm'>
      
  
        <label>
         <h2>Titre: </h2> 
          <input
            name="titre"
            type="text"
            value={titre}
            onChange={e => setTitre(e.target.value)}
            required />
        </label>
        
        <label>
         <h2>Description:</h2> 
          <textarea
            name="description"
            type="text"
            value={desc}
            onChange={e => setDesc(e.target.value)}
            required />
        </label>
        
        <label>
         <h2> Categorie:</h2>
          <select
            name="category"
            
            onChange={e => setCategory(e.target.value)}
            required>
            <option value="1">Categorie de L'evenement</option>
            <option value="2">Management</option>
            <option value="3">Politique</option>
            <option value="1">IT</option>
          </select>
        </label>
        <label>
         <h2> Date: </h2> 
          <input
            name="Date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required />


        </label>  
        <label>
         <h2> Lien De l'evenement: </h2> 
          <input
            name="link"
            type="url"

            onChange={e => setLink(e.target.value)}
            required />


        </label>   




        <label>
         <h2> Lien Image: </h2> 
         <h6>Utiliser ce <a href='https://imgbb.com/'>lien</a> pour creer  un lien pour l'image  </h6>
          <input
            name="image"
            type="url"

            onChange={e => setPicture(e.target.value)}
            required />


        </label>     

       
  
        <button className='btn6'>Submit</button>
      </form>
    );
}

export default CreateForm
