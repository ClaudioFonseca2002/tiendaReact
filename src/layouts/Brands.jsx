import React from "react";
import penaltie from "../assets/images/brands/penaltie.png";
import jhonfoes from "../assets/images/brands/jhonfoes.png";
import kappa from "../assets/images/brands/kappa.png";
import rebook from "../assets/images/brands/rebook.png";
import adidas from "../assets/images/brands/adidas.png";
import topper from "../assets/images/brands/topper.png";

const Brands = () =>{
    return <>
        <div className="containerBrands">
            <div className="containerText">Marcas</div>
            <div className="containerLogos">
                <img src={penaltie} alt="Logo Penaltie" />
                <img src={jhonfoes} alt="Logo JhonFoes" />
                <img src={kappa} alt="Logo Kappa" />
                <img src={rebook} alt="Logo Rebook" />
                <img src={adidas} alt="Logo Adidas" />
                <img src={topper} alt="Logo topper" />
            </div>
        </div>
    </>
}

export default Brands;