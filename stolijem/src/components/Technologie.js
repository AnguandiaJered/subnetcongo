import React from "react";
import js from '../images/js.png';
import mongo from '../images/mongo.png';
import ts from '../images/ts.png';
import node from '../images/node.png';
import mysql from '../images/mysql.png';
import json from '../images/json.png';
import html from '../images/html.png';
import post from '../images/post.png';
import php from '../images/php.png';
import reacts from '../images/reacts.svg';
import lara from '../images/lara.PNG';



export const Technologie = () =>{
    return (
        <div className="techno"><br/><br/>
            <div className="container-fluid">
                <h1 className="text-center">Les technologies que nous utilisons fréquemment</h1><br/>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Roler image={js} 
                            title="JavaScript"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={mongo} 
                            title="MongoDB"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={html} 
                            title="Html"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={ts} 
                            title="TypeScript"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={php} 
                            title="Php"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={json} 
                            title="Json"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={post} 
                            title="PostgreSQL"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={mysql} 
                            title="Mysql"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={node} 
                            title="Node Js"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={reacts} 
                            title="ReactJs et VueJs"  />
                        </div>
                        <div className="col-md-2">
                            <Roler image={lara} 
                            title="Laravel"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Roler = ({image,title}) =>{
    return(
        <div className="blo text-center">
            <img src={image} alt="blog" className="mt-2 ima"/>
            <h3 className="mt-2">{title}</h3>
        </div>
    )
}

 