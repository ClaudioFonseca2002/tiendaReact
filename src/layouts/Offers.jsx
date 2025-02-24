import React, { useRef } from "react";
import nuevosLanzamientos from "../assets/images/nuevoLanzamientos.png";

const Offers = () => {
  const carruselRef = useRef(null);
  const scrollAmount = 300; // Ajusta el desplazamiento según el tamaño del producto

  const scrollLeft = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="containerOffers">
      <div className="containerImg">
        <img src={nuevosLanzamientos} alt="Imagen promocional" />
      </div>
      <div className="carrusel-container">
        <button className="btn-nav btn-prev" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="carrusel" ref={carruselRef}>
          <div className="producto">
            <img src="https://via.placeholder.com/200" alt="Producto 1" />
            <h3>Producto 1</h3>
            <p>$20.00</p>
          </div>
          <div className="producto">
            <img src="https://via.placeholder.com/200" alt="Producto 2" />
            <h3>Producto 2</h3>
            <p>$30.00</p>
          </div>
          <div className="producto">
            <img src="https://via.placeholder.com/200" alt="Producto 3" />
            <h3>Producto 3</h3>
            <p>$40.00</p>
          </div>
          <div className="producto">
            <img src="https://via.placeholder.com/200" alt="Producto 4" />
            <h3>Producto 4</h3>
            <p>$50.00</p>
          </div>
          <div className="producto">
            <img src="https://via.placeholder.com/200" alt="Producto 5" />
            <h3>Producto 5</h3>
            <p>$60.00</p>
          </div>
          <div className="producto">
            <img src="https://via.placeholder.com/200" alt="Producto 6" />
            <h3>Producto 6</h3>
            <p>$70.00</p>
          </div>
        </div>
        <button className="btn-nav btn-next" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Offers;
