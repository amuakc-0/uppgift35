import React from "react";


// Footer som finns med i botten av samtliga sidor. Hänvisas till i Navigation.js

function Footer() {
  return (
    <div className="footer">
      <footer className="py-5 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Grupp 30
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;