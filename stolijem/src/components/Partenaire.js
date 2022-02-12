import React from "react";
import Updev1 from '../images/Updev1.png';
import UpdevCommunity from '../images/UpdevCommunity.png';
import images from '../images/images.jfif';
import Logo from '../images/Logo.jpg';

export const Partenaire = () =>{
    return (
        <div className="partenaire"><br/><br/>
            <div className="container-fluid">
                <h1 className="text-center text-white">Ils nous font confiance</h1><br/>
                <p className="col-md-7 text-center offset-2 text-white">Voici quelques exemples de collaborations qui illustrent une 
                partie de notre savoir-faire, parce que la relation et la satisfaction client sont au cœur de nos 
                préoccupations. Le SubNetCongo agit en esprit de solidarité avec les personnes en besoin, 
                et reconnaît sa responsabilité de plaider en public et auprès des représentants pour ces personnes. 
                Son partenaire c'est la communauté bénéficiaires, ce niveau de partenariat, renforce la collaboration.
                </p>
                <br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Roler image={Updev1} 
                            title="Professionnalisme" 
                            detail="Respect de nos engagements et réponse aux attentes." />
                        </div>
                        <div className="col-md-3">
                            <Roler image={UpdevCommunity} />
                        </div>
                        <div className="col-md-3">
                            <Roler image={images} />
                        </div>
                        <div className="col-md-3">
                            <Roler image={Logo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Roler = ({image}) =>{
    return(
        <div className="blog1 text-center">
            <img src={image} width={150} height={100} alt="blog" />
        </div>
    )
}

 