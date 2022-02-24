import React from 'react';
import Header from './Header';
import Menu from './Menu';
import axios from 'axios';





function AjoutEvent() {






  const [titre, setTitre] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [date, setDate] = React.useState("");
  const [link, setLink] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const baseURL = "http://localhost:5030/Events/admin";
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
        if(response.status === "200"){
          alert("valide")
  
        }else{
          alert("request nest pas valide")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  
  
    event.preventDefault();
  }
  
  











   return (<div class="wrapper">
    <Header/>
    <Menu/>
    
    <div className="card card-warning">
  <div className="card-header">
    <h3 className="card-title">General Elements</h3>
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label>Titre d'Evenement</label>
            <input type="text" className="form-control" placeholder="Enter ..." value={titre} onChange={e => setTitre(e.target.value)}
/>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Description</label>
            <textarea type="text" className="form-control" placeholder="Enter ..." value={desc}  onChange={e => setDesc(e.target.value)}/>
          </div>
        </div>
      </div>
      
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputSuccess"><i className="fas fa-check" /> Date</label>
          <input
            name="Date"
            type="date"
            className="form-control is-invalid"
            value={date}
            onChange={e => setDate(e.target.value)}
            required />
      </div>
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputWarning"><i className="far fa-bell" /> 
          Lien </label>
          <input
            name="link"
            type="url"
            className="form-control is-invalid"
            onChange={e => setLink(e.target.value)}
            required />
      </div>
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputError"><i className="far fa-times-circle" /> L'annonce</label>
          <input
            name="image"
            type="url"
            className="form-control is-invalid"
            onChange={e => setPicture(e.target.value)}
            required />      </div>
     
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label>Categorie</label>
            <select
            name="category"
            className="form-control"
            onChange={e => setCategory(e.target.value)}
            required>
            <option value="1">Categorie de L'evenement</option>
            <option value="2">Management</option>
            <option value="3">Politique</option>
            <option value="1">IT</option>
            <option value="4">Politique</option>
          </select>
          </div>
        </div>
       
      </div>
      <br></br>
      <br></br>

      <button type="submit" onSubmit={handleSubmit} class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>

<footer/>

  </div>)
}
export default AjoutEvent;
