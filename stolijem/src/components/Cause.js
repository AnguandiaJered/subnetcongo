import React from "react";
import solution from '../images/solution.png';
import solution1 from '../images/solution1.png';
import backlog from '../images/backlog.png';
import strategy from '../images/strategy.png';
import Artificial from '../images/Artificial.png';

export const Cause = () =>{
    return (
        <div className="cause"><br/><br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 ml-5">
                        <h1 className="text-left">Pourquoi nous choisir ?</h1><br/>
                        <p className="text-left">Notre expertise, nos valeurs et notre expérience dans le domaine du digital 
                            vous offrent notre compréhension en même temps que notre capacité à imaginer les meilleures 
                            solutions pour contribuer à la résolution de votre problème, et augmenter ainsi votre performance.
                        </p>
                        <p className="text-left">Nous sommes avant tout là pour entendre vos besoins et vos attentes afin de 
                            concevoir, sur base de votre demande, la solution digitale la plus adaptée.
                        </p>
                        <img src={Artificial} width={500} alt="subnet"/> 
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div class="col-md-6">
                                    <Causes image={solution} 
                                    title="Compréhension du problème" 
                                    detail="Nous prenons le temps d'étudier et de comprendre votre problème, 
                                        car l'analyse d'un problème est un préalable indispensable avant de chercher à 
                                        le résoudre." />
                                    <br/>
                                    <Causes image={solution1} 
                                    title="Des solutions adaptées" 
                                    detail="Nous vous proposons des solutions adaptées pour résoudre efficacement 
                                        les problèmes que vous rencontrez en suivant rigoureusement 
                                        des étapes bien précises." />
                            </div>
                            <div class="col-md-6">
                                    <Causes image={backlog} 
                                    title="Suivi continu" 
                                    detail="Nous mettons en place un processus d'évaluation et de suivi 
                                    continu nous permettant de nous rassurer que la solution conçue a été bien 
                                    comprise par les utilisateurs." />
                                <br/>
                                    <Causes image={strategy} 
                                    title="Anticipation" 
                                    detail="Dans notre méthode de travail, nous ne vous proposons pas des solutions 
                                    qu'aux problèmes présents, nous vous élaborons également des plans pour la 
                                    prévention des problèmes futurs." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Causes = ({image,title,detail}) =>{
    return(
        <div className="bl text-center">
            <img src={image} alt="blog" className="mt-5 ima"/>
            <h3 className="mt-4">{title}</h3>
            <p className="mt-3">{detail}</p>
        </div>
    )
}

 