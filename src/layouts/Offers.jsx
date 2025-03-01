import React, { useRef } from "react";
import nuevosLanzamientos from "../assets/images/nuevoLanzamientos.png";
import adidasTop from "../assets/images/shoes/adidasTop.png";
import adidasRoja from "../assets/images/shoes/adidasRoja.jpg";
import adidasAzul from "../assets/images/shoes/zapatillaAdidasAzul.png";
import adidasZamba from "../assets/images/shoes/adidasZamba.png";

const productos = [
  { id: 1, img: adidasTop , nombre: "Producto 4", precio: "$50.00" },
  { id: 2, img: adidasRoja , nombre: "Producto 2", precio: "$30.00" },
  { id: 3, img: adidasAzul , nombre: "Producto 3", precio: "$40.00" },
  { id: 4, img: adidasZamba , nombre: "Producto 4", precio: "$50.00" },
];

const Offers = () => {
  const carruselRef = useRef(null);
  const scrollAmount = 240;

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
          {productos.map((producto) => (
            <div className="producto" key={producto.id}>
              <img src={producto.img} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.precio}</p>
            </div>
          ))}
        </div>
        <button className="btn-nav btn-next" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Offers;
