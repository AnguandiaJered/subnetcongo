import React from "react";
import website from '../images/website.png';
import sales from '../images/sales.png';
import maintenance from '../images/maintenance.png';
import graphic from '../images/graphic.png';
import career from '../images/career.png';
import web from '../images/web.png';


export const Servo = () =>{
    return (
        <div className="servo"><br/><br/>
            <div className="container-fluid">
                <h1 className="text-center">Nos services</h1><br/>
                <p className="col-md-7 text-center offset-2">Les services de SubNetCongo permettent aux entreprises et 
                aux particuliers de trouver des solutions à leurs problèmes grâce au numérique
                </p><br/><br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <Sero image={website} 
                            title="Développement Applications" 
                            detail="Conception des applications en fonction du cahier des charges des clients"
                            titre="Quelques plateformes :" 
                            liste="Mobile(IOS et Android)" 
                            liste2="Web(Applications web, Site web)" 
                            liste3="Desktop" /><br/>
                            <Sero image={maintenance} 
                            title="Consultance Informatique" 
                            detail="Des solutions techniques pour faire évoluer votre système d'information"
                            titre="Nous intervenons dans :" 
                            liste="Maintenance" 
                            liste2="Formation & Consultance" 
                            liste3="Assistance" />
                        </div>
                        <div className="col-md-4">
                            <Sero image={web} 
                                title="Webmaster" 
                                detail="Conception, développement et entretient de votre site internet"
                                titre="Notre rôle :" 
                                liste="Mise en forme des contenus" 
                                liste2="Maintenance technique" 
                                liste3="Référencement" /><br/>
                            <Sero image={sales} 
                                title="Marketing Digital" 
                                detail="Pour bien promouvoir une entreprise en ligne et attirer un public."
                                titre="Différents types :" 
                                liste="SEO" 
                                liste2="SMM" 
                                liste3="Le marketing de contenu" />
                        </div>
                        <div className="col-md-4">
                            <Sero image={career} 
                            title="administration et installation reseau et antennes" 
                            detail="Des solutions techniques pour faire évoluer votre système d'information"
                            titre="Nous intervenons dans :" 
                            liste="Maintenance" 
                            liste2="Installation & Administration" 
                            liste3="Assistance" /><br/>
                            <Sero image={graphic} 
                            title="Architecture batiment" 
                            detail="Conception et architectures de batiement"
                            titre="Notre rôle :" 
                            liste="Mise en forme des contenus" 
                            liste2="Maintenance technique" 
                            liste3="Référencement" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Sero = ({image,title,detail,titre,liste,liste2,liste3}) =>{
    return(
        <div className="blsere text-left">
            <img src={image} alt="blog" className="mt-3 ml-3 imag"/>
            <h3 className="mt-4 ml-3">{title}</h3>
            <p className="mt-3 ml-3">{detail}</p>
            <h6 className="mt-3 ml-3">{titre}</h6>
            <li className="mt-3 ml-3">{liste}</li>
            <li className="mt-3 ml-3">{liste2}</li>
            <li className="mt-3 ml-3">{liste3}</li>
        </div>
    )
}

 