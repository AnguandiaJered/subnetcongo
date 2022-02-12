import React from "react";
import {Link} from 'react-router-dom';
import Developer from '../images/Developer.svg';


 const Service = () =>{
    return (
        <div className="service"><br/><br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 ml-5">
                            <h1 className="text-left">Les Services de SubNetCongo</h1><br/>
                            <p className="text-left">Nous vous accompagnons tout au long de votre processus de 
                                transformation digitale avec des solutions digitales adaptées à vos besoins.
                            </p>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="btn btn-primary">Développement Applications</div>
                                    <div className="btn btn-primary mt-2">Consultance informatique</div>
                                    <div className="btn btn-primary mt-2">Promotion TIC</div>
                                </div>
                                <div className="col-md-5">
                                    <div className="btn btn-primary">Graphique Design</div>
                                    <div className="btn btn-primary mt-2">Service de webmaster</div>                            
                                </div>
                                <Link className='btn serve mt-5 col-md-5' to='/services'>VOIR TOUS LES SERVICES</Link>
                            </div>
                    </div>                
                    <div className="col-md-4">
                        <img src={Developer} alt="Subnet" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Service;