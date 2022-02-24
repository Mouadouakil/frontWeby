import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Menu extends Component {
    render() {
        return (
          <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
  
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
       
       
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <Link to="/panel" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            
          </li>
          <li className="nav-item">
            <Link to="/pages/widgets" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Ajouter Evenemnt
               
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/demandes" className="nav-link">
              <i className="nav-icon far fa-circle text-info" />
              <p>Demandes</p>
            </Link>
          </li>
         
          <li className="nav-item">
            <Link to="/Categories" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Categories
               
              </p>
            </Link>
          </li>
         
          <li className="nav-item">
            <Link to="/evenements" className="nav-link">
              <i className="nav-icon far fa-circle text-danger" />
              <p className="text">Evenements</p>
            </Link>
          </li>
      

     
         
       
         
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
