import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
function  Dashboard() {
  const baseURL = "http://localhost:5030/Events";
    const [menuItem, setMenuItem] = React.useState(null);
    const baseURL2 = "http://localhost:5030/Events/confirmer";
    const baseURL3 = "http://localhost:5030/speakers";
    const [menuItem2, setMenuItem2] = React.useState(null);
    const [menuItem3, setMenuItem3] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setMenuItem(response.data.length);
         
        });

        axios.get(baseURL2).then((response) => {
          setMenuItem2(response.data.length);
         
        });

        axios.get(baseURL3).then((response) => {
          setMenuItem3(response.data.length);
         
        });
      }, []);
    
      if (!menuItem) return null;
      
        if (!menuItem2) return null;
        if (!menuItem3) return null;



  
        return (


         
       
      
      
      
          
      
            <div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to="#">Home</Link></li>
              <li className="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">

            
                <h3> { menuItem}</h3>
                <p>Nombre D'Evenemnets Nouveau</p> 
              
               
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <Link to="#" className="small-box-footer"><i className="fas fa-arrow-circle-right" /></Link>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>{menuItem2}</h3>
                <p>Nombre D'Evenemnets </p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3> { menuItem3}</h3>
                <p>Speakers</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3> 6</h3>
                <p>IT & Tech</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-yellow">
              <div className="inner">
                <h3>7</h3>
                <p>Politique</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-primary">
              <div className="inner">
                <h3>5</h3>
                <p>Economie</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
            </div>
            
          </div>
          
        </div>
        {/* /.row */}
        
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <section className="col-lg-7 connectedSortable">
            {/* Custom tabs (Charts with tabs)*/}
           
           
           
            {/* /.card */}
          </section>
          {/* right col */}
        </div>
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
</div>

        )
    }

export default Dashboard;