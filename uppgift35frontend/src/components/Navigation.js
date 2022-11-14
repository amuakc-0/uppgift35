import React from "react";
import { NavLink } from "react-router-dom";
//import './Navigation.css'


// I Navigation och främst tillsammans med index.js-filerna styrs navigeringen i webbappen,
// vilket gör att vi inte behöver använda oss av App.js.

// Navigation använder React Router Dom för att bestämma "route" för de olika sidorna,
// och de länkar som finns deklarerade i denna klassen i form av NavLink:ar följer med
// i alla olika sidor av webbappen som header och footer.

function Navigation() {
  return (

    <div className="navigation">

      <nav className="navbar navbar-expand navbar-dark bg-dark">
         <div className="container">

          <NavLink className="navbar-brand" to="/">
            Web Services
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Hem
                  <span className="sr-only">(current)</span>
                </NavLink>


              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;