import React from 'react'
import './createForm.css'
function CreateForm() {
    const [titre, setTitre] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [date, setDate] = React.useState("");
    // const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  
    const handleSubmit = (event) => {
      console.log(`
        titre: ${titre}
        desc: ${desc}
        date: ${date}
      `);
      
      event.preventDefault();
    }
  // Accepted Terms: ${acceptedTerms}
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
            value={category}
            onChange={e => setCategory(e.target.value)}
            required>
            <option key=""></option>
            {/* {countries.map(country => ( */}
              <option key="IT">IT</option>
              <option key="Data">Data</option>
            {/* // ))} */}
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
         <h2> Lien Image: </h2> 
          <input
            name="image"
            type="url"

            // value={date}
            // onChange={e => setDate(e.target.value)}
            required />


        </label>     

       
  
        <button className='btn6'>Submit</button>
      </form>
    );
}

export default CreateForm
