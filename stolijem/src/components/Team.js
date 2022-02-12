import React from "react";
import Naomi from '../images/Naomi.jpg';
import Kalema from '../images/Kalema.jpg';
import JT from '../images/JT.jpg';
import jered from '../images/jered.jpg';

export const Team = () =>{
    return (
        <div className="teamb"><br/><br/>
            <h1 className="text-center">Notre équipe</h1><br/>
            <p className="col-md-7 text-center offset-2">Rencontrez l'équipe dédiée à contribuer à résoudre les 
            problèmes de la communauté en fournissant des solutions numériques aux problèmes.
            </p><br/><br/>
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Roler image={Naomi} 
                    title="Rebecca N'saka" 
                    detail="Chef de Projet Technique" github="" linkedin="" twitter="" facee="" />
                </div>
                <div className="col-md-3">
                    <Roler image={Kalema} 
                    title="Kalema Joseph" 
                    detail="CEO & Co-fondateur" github="" linkedin="" twitter="" facee="" />
                </div>
                <div className="col-md-3">
                    <Roler image={JT} 
                    title="JOEL Tsongo" 
                    detail="Developpeur & Analyste" github="" linkedin="" twitter="" facee="" />
                </div>
                <div className="col-md-3">
                    <Roler image={jered} 
                    title="ANGUANDIA Jered" 
                    detail="Administrateur & Analyste" github="" linkedin="" twitter="" facee="" />
                </div>
            </div>
            </div>
        </div>
    )
}

export const Roler = ({image,title,detail,github,linkedin,twitter,face}) =>{
    return(
        <div className="team text-center">
            <img src={image} alt="blog" width={200} height={200} className="mt-3 rounded-circle"/>
            <h3 className="mt-4">{title}</h3>
            <p className="mt-3">{detail}</p>
            <a className="lien">{github}<i className="fa fa-github"></i></a>
            <a className="ml-3 lien">{linkedin}<i className="fa fa-linkedin"></i></a>
            <a className="ml-3 lien">{twitter}<i className="fa fa-twitter"></i></a>
            <a className="ml-3 lien">{face}<i className="fa fa-facebook"></i></a>
        </div>
    )
}

 