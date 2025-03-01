import React from "react";

const Footer = () => {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Información</h3>
              <ul>
                <li>
                  <a href="#">¿Quienes somos?</a>
                </li>
                <li>
                  <a href="#">Nuestras sucursales</a>
                </li>
                <li>
                  <a href="#">Terminos y condiciones</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>Ayuda</h3>
              <ul>
                <li>
                  <a href="#">¿Cómo comprar?</a>
                </li>
              </ul>
            </div>
            <div class="col item social">
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p class="copyright">Online Store 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
