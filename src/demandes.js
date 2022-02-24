import React from 'react';
import axios from "axios";
import Header from './Header';
import Menu from './Menu';
function Demandes() {


    
    const baseURL = "http://localhost:5030/Events/confirmer";
    const [menuItem, setMenuItem] = React.useState(null);


    const baseURL2 = "http://localhost:5030/speakers";
    const [menuItem2, setMenuItem2] = React.useState(null);
 



    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setMenuItem(response.data);
      });
      axios.get(baseURL2).then((response) => {
        setMenuItem2(response.data);
        
      });
    }, []);
  
    if (!menuItem) return null;

  
    if (!menuItem2) return null;
    function methodName(params) {
      const baseURL3 = "http://localhost:5030/Events/verify?term="+params;

      axios.get(baseURL3).then((response) => {
        console.log(response.data);
        
      });
    }
    function methodName2(params) {
      const baseURL4 = "http://localhost:5030/Events/delete?term="+params;

      axios.get(baseURL4).then((response) => {
        console.log(response.data);
        
      });
    }




  return (<div class="wrapper">

<Header/>
<Menu/>
<div className='content-wrapper'>
  <div className="col-12">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Nouveau Demandes</h3>
        <div className="card-tools">
          <div className="input-group input-group-sm" style={{width: 150}}>
            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-default">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive p-0">
        <table className="table table-hover text-nowrap">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Date</th>
              <th>categorie</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
             menuItem.map((item) => ( 

              <tr>
              <td>{item.title}</td>
              <td>{item.datevent}</td>
              <td>{item.categorie}</td>
              <td style={{width: 100}}>{item.description.substring(0, 50)}</td>
              <td>
                <a href="/services"
                onClick = {() => { methodName(item.id);} }
                  class="btn btn-outline-primary mr-2"  >
                  Accepte
                </a>
                <a href="/services"
                onClick = {() => { methodName2(item.id);} }
                  class="btn btn-outline-primary mr-2"  >
                  Refuse
                </a>
              </td>


              </tr>


              ))
          }
     
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div></div>
    {/* /.card */}
  </div>
</div>





);
}

export default Demandes;
