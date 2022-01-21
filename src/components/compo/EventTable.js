import React from 'react'
import { Link } from "react-router-dom";
import './EventTable.css'
import axios from "axios";

function EventTable() {

  
    const baseURL = "http://localhost:5030/Events";
    const [menuItem, setMenuItem] = React.useState(null);


    const baseURL2 = "http://localhost:5030/speakers";
    const [menuItem2, setMenuItem2] = React.useState(null);
 
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setMenuItem(response.data);
        axios.get(baseURL2).then((response) => {
          setMenuItem2(response.data);
          
        });
      });
    }, []);
  
    if (!menuItem) return null;

  
    if (!menuItem2) return null;


    return (
        <div className="container">

      
<br></br>
        <br></br>
        <h1>Evenements Non Approvées : </h1>
        <br></br>
        <br></br>


        <div className="py-4">
         
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Titre</th>
                <th scope="col">Date</th>
                <th scope="col">Categorie</th>
                <th scope="col">Lien</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
          {
             menuItem.map((item) => ( 

              <tr>
              <td>{item.title}</td>
              <td>{item.datevent}</td>
              <td>{item.categorie}</td>
              <td>{item.description}</td>
              <td>
                <a href={`http://localhost:5030/Events/verify?term=${item.id}`}
                  class="btn btn-outline-primary mr-2"  >
                  Accepte
                </a>
                <Link class="btn btn-danger" >
                  Refuse
                </Link>
              </td>


              </tr>


              ))
          }
               
                
            </tbody>
          </table>
        </div>

        <br></br>
        <br></br>
        <h1>Speakers : </h1>
        <br></br>
        <br></br>
        <div className="py-4">
         
      


         <table class="table border shadow">
           <thead class="thead-dark">
             <tr>
               <th scope="col">Titre</th>
               <th scope="col">Date</th>
               <th scope="col">Categorie</th>
               <th scope="col">Lien</th>
               <th scope="col">Action</th>
             </tr>
           </thead>
           <tbody>
           {
             menuItem2.map((item2) => ( 

              <tr>
              <td>{item2.fullname}</td>
              <td>{item2.email}</td>
              <td>h</td>
              <td>h</td>
              <td>
              </td>


              </tr>


              ))
          }
               
           
           </tbody>
         </table>
       </div>


      </div>
    )
}

export default EventTable
