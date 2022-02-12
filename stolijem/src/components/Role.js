import React from "react";
import people from '../images/people.png';
import layers from '../images/layers.png';
import company from '../images/company.png';
import crow from '../images/crow.png';
import logo from '../images/logo.png';

export const Role = () =>{
    return (
        <div className="role"><br/><br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 ml-5">
                        <h1 className="text-left">Quel est le rôle de SubNetCongo ?</h1><br/>
                        <p className="text-left">L'activité principale de Subnet Congo est de concevoir et de développer des 
                        applications,installer les antennes reseaux et administrer le reseaux qui contribuent à résoudre des problèmes 
                        de la communauté. Le siège social de SubNetCongo est situé à Goma en République Démocratique du Congo, 
                        où son espace de travail est ouvert aux développeurs,designers et ingenieurs reseaux et architectes qui 
                        souhaitent apporter leur contribution intellectuelle pour améliorer la qualité du travail.
                        </p>
                        <p className="text-left">Notre quête de promotion du numérique en RDC, en Afrique, 
                        fait intervenir plusieurs types de personnes sous différentes façons : 
                        La communauté via différents meetups et conférences que nous organisons, les jeunes en général via des 
                        formations , les développeurs en leur offrant un espace de travail, les entreprises en leur 
                        concevant des applications et installer un reseau,camera de surveillances et autres...
                        </p>
                        <img src={logo} alt="blog" width={400} height={200}/>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div class="col-md-6">
                                    <Roler image={people} 
                                    title="Jeunes" 
                                    detail="Nous organisons différentes activités organisées annuellement pour la promotion des TIC." />
                                    <br/>
                                    <Roler image={layers} 
                                    title="Développeurs" 
                                    detail="Un environnement de travail compétitif favorisant l'expression de la créativité." />
                            </div>
                            <div class="col-md-6">
                                    <Roler image={company} 
                                    title="Entreprises" 
                                    detail="Des applications informatiques pour l'amélioration de votre performance." />
                                <br/>
                                    <Roler image={crow} 
                                    title="Communauté" 
                                    detail="Nous proposons des solutions pour contribuer à la résolution des problèmes." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export const Roler = ({image,title,detail}) =>{
    return(
        <div className="blog text-center">
            <img src={image} alt="blog" className="mt-5 ima"/>
            <h3 className="mt-4">{title}</h3>
            <p className="mt-3">{detail}</p>
        </div>
    )
}

 