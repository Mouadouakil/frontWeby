import React from 'react';
import Header from './Header';
import Menu from './Menu';
import axios from 'axios';

function AjoutCategorie() {
    

  const [keywords, setKeywords] = React.useState("");
 
  const [category, setCategory] = React.useState("");

  const baseURL = "http://localhost:5030/Categories";
  const data = {
    name: category,
    keywords : keywords
    }
  const handleSubmit = (event) => {
   console.log(data);
    axios.post(baseURL, {
        name : data.name,
        keywords : data.keywords,})
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
          <label>Categorie : </label>
          <input type="text" className="form-control" placeholder="Enter ..." value={category} onChange={e => setCategory(e.target.value)}
/>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label>Mots Clés</label>
          <textarea type="text" className="form-control" placeholder="Enter ..." value={keywords}  onChange={e => setKeywords(e.target.value)}/>
        </div>
      </div>
    </div>
    
   

    <button type="submit" onSubmit={handleSubmit} class="btn btn-primary">Submit</button>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

  </form>
</div>
</div>



</div>)
}

export default AjoutCategorie;