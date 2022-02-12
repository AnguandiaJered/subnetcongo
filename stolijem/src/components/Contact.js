import React,{ Fragment } from 'react';
import mail from '../images/mail.PNG';
import adresse from '../images/adresse.PNG';
import tel from '../images/tel.PNG';
import Contac from '../images/Contac.png';


export const Contact = () =>{
    return(
        <Fragment>
            <div className='contacts mt-5'><br/><br/><br/>
                <div className='container-fluid'>
                    <h1 className='text-center'>Contactez-nous</h1>
                </div>
            </div>
            <Contacts />
        </Fragment>
    )
}

export const Contacts = () =>{
    return(
        <Fragment>
            <div className='conta'><br/><br/><br/>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-4">
                            <Blog image={mail} 
                            title="Email" 
                            liste="subnetcongo@gmail.com "
                            liste2="www.subnetcongo.net" />
                        </div>
                        <div className="col-md-4">
                            <Blog image={adresse} 
                            title="Adresse" 
                            liste="Goma, Rond point Bdegl, Q Les Volcans." />
                        </div>
                        <div className="col-md-4">
                            <Blog image={tel} 
                            title="WhatsApp" 
                            liste="+243 979 184 716" liste2="+243 997 185 989" />
                        </div>
                    </div>
                    <div className='ml-5 mt-5'>
                        <div className='row'>
                            <div className='col-md-6 mt-5'>
                            <h1>Contactez-nous</h1>
                            <p>Vous êtes en quête d'une information ? N'hésitez pas de nous contacter, notre équipe sera heureuse de vous répondre</p>
                                <form>
                                    <div class="row form-group">
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <input type="text"  class="form-control" placeholder='Noms' />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="email" id="email" class="form-control" placeholder='Email' />
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Ecriver votre message ici..."></textarea>
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input type="submit" value="ENVOYER" class="btn btn-primary btn-md text-white col-md-4" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='col-md-5'>
                                <img src={Contac} width={600} alt='subnet congo' />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export const Blog = ({image,title,detail,liste,liste2}) =>{
    return(
        <div className="telo text-center">
            <img src={image} alt="blog" className="mt-5 ima"/>
            <h3 className="mt-4">{title}</h3>
            <p className="mt-3">{liste}</p>
            <p className="mt-3">{liste2}</p>
        </div>
    )
}