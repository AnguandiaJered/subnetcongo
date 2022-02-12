import React,{ Fragment } from "react";
import {Link} from "react-router-dom";
import visuel from '../images/visuel.png';
import agile from '../images/agile.webp';
import front from '../images/front.png';
import back from '../images/back.png';
import full from '../images/full.png';
import backend from '../images/backend.png';
import frontend from '../images/frontend.png';
import { Technologie } from "./Technologie";


export const Techno = () =>{
    return (
        <Fragment>
            <div className="technol mt-5"><br/><br/>
                <div className="container-fluid">
                    <div className="row ml-5">
                        <div className="col-md-6 mt-5">
                            <h1 className="text-white">Maintenez vos compétences à jour en tant que développeur</h1>
                            <p className="mt-5 text-white">Chez SubNetCongo, nous sommes ouverts pour tester les nouvelles technologies qu'apporte 
                                chaque développeur qui rejoint notre équipe.</p>
                            <Link className='btn tech mt-3 col-md-5' href='#'>Inscrivez-Vous</Link>
                            <img src={agile} width={500} height={250} alt="subnet" />
                        </div>
                        <div className="col-md-5">
                            <img src={visuel} width={600} alt="subnet" />
                        </div>
                    </div>
                </div>
            </div>
            <Types />
            <Frontend />
            <Backend />
            <Technologie />
        </Fragment>
    )
}

export const Types = () =>{
    return(
        <Fragment>
            <div className="type">
                <div className="container-fluid"><br/><br/>
                    <h1 className="text-center">Trois types de développeurs</h1><br/>
                    <p className="col-md-7 text-center offset-2">Afin de renforcer le travail en groupe, nous subdivisons toujours les 
                    tâches selon les trois types des développeurs que nous avons chez nous.
                    </p><br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <Blog image={front} 
                                title="Front-end" 
                                detail="Le rôle du développeur front-end est de développer la partie visible d’une application web ou mobile. Ce que nous appelons le côté “client”." />
                            </div>
                            <div className="col-md-4">
                                <Blog image={back} 
                                title="Back-end" 
                                detail="Le développeur back-end gère toute la partie « non visible » du développement d’une application web ou mobile. Ce que nous appelons le côté “Serveur”." />
                            </div>
                            <div className="col-md-4">
                                <Blog image={full} 
                                title="Full stack" 
                                detail="Le développeur full stack travaille à la fois côté Backend et Frontend. Il réalise ce que les développeurs front-end et back-end font en équipe." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export const Blog = ({image,title,detail}) =>{
    return(
        <div className="bac text-center">
            <img src={image} alt="blog" className="mt-5 ima"/>
            <h3 className="mt-4">{title}</h3>
            <p className="mt-3">{detail}</p>
        </div>
    )
}


export const Frontend = () =>{
    return (
        <Fragment>
            <div className="frontend"><br/><br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 ml-5 mt-3">
                                <h1 className="text-left">Développement Front End</h1><br/>
                                <p className="text-left">Le développement de l'interface utilisateur graphique afin que les 
                                utilisateurs puissent afficher et interagir avec des applications web et/ou mobile. 
                                Le terme « frontend » désigne les éléments d'un site que l'on voit à l'écran et avec 
                                lesquels on peut interagir depuis un navigateur. En effet, tout ce qu'on voit sur un site 
                                internet par exemple, est une combinaison de HTML, CSS et JavaScript. Ces langages de 
                                programmation utilisés par le développeur Front End sont interprétés par le navigateur de 
                                votre ordinateur pour afficher un résultat « visuel ». Il s'agit notamment de polices, 
                                de menus déroulants, de boutons, de transitions, de curseurs, 
                                de formulaires de contact, etc.
                                </p>
                                <div className="row">
                                    <div className="col-md-5">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </div>
                                </div>
                        </div>                
                        <div className="col-md-4">
                            <img src={frontend} width={550} alt="Subnet" height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export const Backend = () =>{
    return (
        <Fragment>
            <div className="backend"><br/><br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 ml-5 mt-3">
                            <img src={backend} width={550} alt="Subnet" height={400}/>
                        </div>
                        <div className="col-md-6 ml-5 mt-3">
                                <h1 className="text-left">Développement Back End</h1><br/>
                                <p className="text-left">C'est toute la partie que l'utilisateur ne voit pas, mais qui lui 
                                permet de réaliser des actions sur un site ou une application. On ne la voit pas en tant que 
                                simple Internaute, mais elle représente une très grande partie d'un projet. Le Backend se 
                                compose généralement de trois éléments : Un serveur (hébergement web), Une application 
                                (site web, administration), Une base de données (sorte de feuille de calcul pour organiser les données).
                                </p>
                                <div className="row">
                                    <div className="col-md-5">
                                        <li>Next Js</li>
                                        <li>Nest Js</li>
                                        <li>Node Js</li>
                                    </div>
                                </div>
                        </div>                
                    </div>
                </div>
            </div>
        </Fragment>
    )
}