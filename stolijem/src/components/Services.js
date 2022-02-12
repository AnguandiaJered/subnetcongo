import React,{ Fragment } from "react";
import Creative from '../images/Creative.png';
import { Servo } from "./Servo";


 const Services = () =>{
    return (
        <Fragment>
            <div className="mt-5 job"><br/><br/>
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 ml-5">
                                    <h1 className="text-left">Les Services de SubNetCongo</h1><br/>
                                    <p className="text-left">Nous vous accompagnons tout au long de votre processus de transformation digitale avec 
                                    des solutions digitales adaptées à vos besoins. Nos développeurs et designers vous apportent leur expertise 
                                    ainsi que les ressources, l'expérience, l'innovation et le professionnalisme de Subnet Congo afin de vous aider à 
                                    résoudre vos problèmes grâce au numérique.
                                    </p>
                                    <ul>   
                                        <li>Conception et développement des applications Web, Mobile et Desktop</li>
                                        <li>Consultance informatique</li>
                                        <li>Service de webmaster</li>
                                        <li>Marketing Digital</li>
                                        <li>administration et installation reseau et antennes</li>
                                        <li>Architecture batiment</li>
                                    </ul>
                            </div>                
                            <div className="col-md-3">
                                    <img src={Creative} alt="Subnet" width={700} height={700} />
                                </div>
                        </div>
                </div> 
            </div>
            <Servo /> 
        </Fragment>
    )
}

export default Services;
