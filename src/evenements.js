import React from 'react';
import Header from './Header';
import Menu from './Menu';
import axios from 'axios';


function Evenements() {
    const baseURL = "http://localhost:5030/Events";
    const [menuItem, setMenuItem] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setMenuItem(response.data);
        });
      }, []);
    
      if (!menuItem) return null;

  



  return (<div class="wrapper">
      <Header/>
      <Menu/>

<div className="content-wrapper" style={{minHeight: 162}}>
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Timeline</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Timeline</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Timelime example  */}
      <div className="row">
        <div className="col-md-12">
          {/* The time line */}
          <div className="timeline">
            {/* timeline time label */}
            <div className="time-label">
              <span className="bg-red">Prochains</span>
            </div>
            {/* /.timeline-label */}
            {/* timeline item */}
            <div>
            {
        menuItem.map((item) => ( 

            <div className="timeline-item">
            <span className="time"><i className="fas fa-clock" /> {item.datevent}</span>
            <h3 className="timeline-header"><a href="#">{item.title}</a> sent you an email</h3>
            <div className="timeline-body">
            {item.description}
        
            </div>
            &#160;&#160;&#160;&#160;&#160;<img src={item.picture} alt="..." height={200}  />
   
          </div>
 ))
 
}


              <i className="fas fa-envelope bg-blue" />
             
            </div>
         
    
            {/* END timeline item */}
            <div>
              <i className="fas fa-clock bg-gray" />
            </div>
          </div>
        </div>
        {/* /.col */}
      </div>
    </div>
    {/* /.timeline */}
  </section>
  {/* /.content */}
</div>


</div>

     
  );
}

export default Evenements;
