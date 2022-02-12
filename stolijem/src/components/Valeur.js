import React from "react";
import portfolio from '../images/portfolio.png';
import idea from '../images/idea.png';
import open from '../images/open.png';
import team from '../images/team.png';

export const Valeur = () =>{
    return (
        <div className="val"><br/><br/>
            <div className="container-fluid">
                <h1 className="text-center">Nos valeurs</h1><br/>
                <p className="col-md-7 text-center offset-2">Des principes sur lesquels nous nous basons et qui nous permettent de bien évoluer, 
                    que ce soit avec nos développeurs ou avec nos clients.
                </p><br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Blog image={portfolio} 
                            title="Professionnalisme" 
                            detail="Respect de nos engagements et réponse aux attentes." />
                        </div>
                        <div className="col-md-3">
                            <Blog image={idea} 
                            title="Créativité" 
                            detail="Originalité dans nos solutions proposées aux problèmes posés." />
                        </div>
                        <div className="col-md-3">
                            <Blog image={open} 
                            title="Ouvert d'esprit" 
                            detail="Nous sommes très réceptifs aux nouvelles idées." />
                        </div>
                        <div className="col-md-3">
                            <Blog image={team} 
                            title="Travail en équipe" 
                            detail="Nous collaborons dans le but d'atteindre nos objectifs." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Blog = ({image,title,detail}) =>{
    return(
        <div className="blog text-center">
            <img src={image} alt="blog" className="mt-5 ima"/>
            <h3 className="mt-4">{title}</h3>
            <p className="mt-3">{detail}</p>
        </div>
    )
}

 