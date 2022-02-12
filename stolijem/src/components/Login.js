import React,{ Fragment, useState } from "react";
import { Link } from "react-router-dom";
import io from 'socket.io-client';
import Baner from '../images/Baner.png';
import google from '../images/google.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");


export const Login= ()=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [showChat,setShowChat] = useState(false);

    const joinRoom = () =>{
        if(username != "" && password !=""){
            socket.emit("join_room", password);
            setShowChat(true); 
        }
    };

    return(
        <Fragment>
            <div className="login">
                <div className='container-fluid text-left py-5'>  
                {!showChat ? (
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-6 ml-5">
                            <img src={Baner} alt="subnetcongo" />
                            <Blogin />
                        </div>
                        <div className="col-md-4 col-lg-4 offset-1">
                            <div className="login-box bg-white box-shadow border-radius-10"><br/>
                                <div className="login-title mt-3">
                                    <h2 className="text-center text-primary">Authentification</h2>
                                </div>
                                <label className="mt-3 ml-4" htmlFor="Username">Username</label>							
                                <div className="input-group mt-2">								
                                    <input type="text" 
                                    id="username" 
                                    name="username" 
                                    className="form-control form-control-lg col-md-9 ml-4" 
                                    placeholder="Enter your username" 
                                    name={username}
                                    onChange={(event) =>{setUsername(event.target.value); }}
                                    required/>
                                    <div className="input-group-append custom">
                                        <span className="input-group-text"><i className="icon-copy fa fa-user"></i></span>
                                     </div>
                                </div>
                                <label className="mt-3 ml-4" htmlFor="password">Password</label>
                                <div className="input-group mt-2">								
                                    <input type="password" 
                                    id="password" name="password" 
                                    className="form-control form-control-lg col-md-9 ml-4" 
                                    placeholder="Enter your password" 
                                    name={password}
                                    onChange={(event) =>{setPassword(event.target.value); }}
                                    required/>
                                    <div className="input-group-append custom">								
                                        <span className="input-group-text"><i  className="fa fa-eye"></i></span>
                                    </div>
                                </div>
                                <div className="row pb-30 mt-3 ml-4">
                                    <div className="col-6">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="forgot-password"><a href="#">Forgot Password</a></div>
                                    </div>
                                </div>
                                <button onClick={joinRoom} className="btn btn-primary btn-lg btn-block ml-4 mt-3 col-md-9">Sign In</button>
                            </div>
                        </div>
                    </div>
                      )
                      : (
                      <Chat socket={socket} username={username} password={password} />
                      )}
                </div>      
            </div>
        </Fragment>
    )
}



export const Blogin = () =>{
    return(
        <Fragment>
            <div className="blogin col-md-8 mt-3">
                <Link className="log mt-3" to="#"><img src={google} className="logim" alt="subnetcongo" />   Se connecter avec Google</Link>
            </div>
            <div className="blogin col-md-8 mt-3">
                <Link className="log mt-3" to="#"><img src={facebook} className="logim" alt="subnetcongo" />  Se connecter avec Facebook</Link>
            </div>
            <div className="blogin col-md-8 mt-3">
                <Link className="log mt-3" to="#"><img src={twitter} className="logim" alt="subnetcongo" />   Se connecter avec Twitter</Link>
            </div>
        </Fragment>
    )
}