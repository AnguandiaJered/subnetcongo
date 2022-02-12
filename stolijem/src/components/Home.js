import React from 'react';
import { Link } from 'react-router-dom';
import Baner from '../images/Baner.png';
import {Valeur} from './Valeur';
import {Role} from './Role';
import Service from './Service';
import {Technologie} from './Technologie';
import {Cause} from './Cause';
import {Partenaire} from './Partenaire';
import {Team} from './Team';


const Home = () =>{
    return(
        <div className='mt-5'>
            <div className='container-fluid'>
                <div className='row ml-5'>
                    <div className='col-md-5'>
                        <h1 className='mt-5'>SubNetCongo</h1>
                        <h2>Entreprise de conception et développement des applications et réseaux de telecommunications</h2>
                        <p>Nous faisons la promotion des nouvelles technologies de l'information et de la communication en 
                            développant des solutions informatiques. Et nous faisons aussi l'installation des antennes,
                            la maintenance et l'administration de reseaux informatiques
                        </p> 
                        <Link className='btn serve mt-5' to='/services'>NOS SERVICES</Link>
                        <Link className='btn conte ml-3 mt-5' to='/contact'>NOUS CONTACTER</Link>
                    </div>
                    <div className='col-md-3'>
                        <img src={Baner} alt='Subnet Congo'/>
                    </div>
                </div>
            </div>
        
            <Valeur />
            <Role />
            <Service />
            <Technologie />
            <Cause />
            <Partenaire />
            <Team />
        </div>
    ) 
}

export default Home;