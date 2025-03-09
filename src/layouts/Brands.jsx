import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import penaltie from "../assets/images/brands/penaltie.png";
import jhonfoes from "../assets/images/brands/jhonfoes.png";
import kappa from "../assets/images/brands/kappa.png";
import rebook from "../assets/images/brands/rebook.png";
import adidas from "../assets/images/brands/adidas.png";
import topper from "../assets/images/brands/topper.png";
import puma from "../assets/images/brands/puma.png";

const Brands = () => {
  const brands = [
    { src: penaltie, alt: "Penaltie" },
    { src: jhonfoes, alt: "JhonFoes" },
    { src: kappa, alt: "Kappa" },
    { src: rebook, alt: "Rebook" },
    { src: adidas, alt: "Adidas" },
    { src: topper, alt: "Topper" },
    { src: puma, alt: "Puma" },
  ];

  return (
    <div className="containerBrands">
      <div className="containerText">Marcas</div>
      <Swiper
        slidesPerView={6} // Cantidad visible en pantallas grandes
        spaceBetween={150} // Espaciado entre logos
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          320: { slidesPerView: 3 }, // Para móviles
          768: { slidesPerView: 4 }, // Tablets
          1024: { slidesPerView: 4 }, // Desktop
        }}
        className="containerLogos"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand.src} alt={brand.alt} className="brandLogo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
