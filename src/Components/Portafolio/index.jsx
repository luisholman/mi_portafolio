import React, { useState } from "react";
import './portafolio.css';
import datos from "./datos";


const Portafolio=()=>{
const [item, setItem] = useState (datos);

/*
const filtrarDatos = (cateItem) => {
    const updateItem = datos.filtrarDatos((curElem) => {
        return curElem.category === cateItem
    })
    setItem(updateItem)
}*/

return(
    <section className="portafolio mtop">
        <div className="container">

            <div className="head flexSB">
                <div className="left">
                    <h6>Trabajos Creativos</h6>
                    <h2>Consulta mi Portafolio</h2>
                </div>
            </div>

            {/*<div className="links">
                <ul className="flexSB">
                    <li className="active" onClick={() =>setItem(datos)}> All</li>
                    <li  onClick={() =>filtrarDatos ("Products")}> Products</li>
                    <li  onClick={() =>filtrarDatos ("Web App")}> Web App</li>
                    <li  onClick={() =>filtrarDatos ("Inetraction")}> Inetraction</li>
                    <li  onClick={() =>filtrarDatos ("Brand Identify")}> Brand Identify</li>
                    
                </ul>
</div>*/}
                <div className="content grid mtop">
                    {item.map((elem) =>{
                        const {cover, title}=elem;
                        return (
                            <div className="box">
                                <div className="img">
                                    <img src={cover} alt="img" />
                                </div>
                                <div className="overlay">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                        )

                    })}
                </div>
        </div>
    </section>
)

}

export default Portafolio;