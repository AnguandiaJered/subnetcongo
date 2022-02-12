import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand text-white ml-3" to="/">SubNetCongo</Link>
                <ul className="navbar-nav mr-auto mt-2 ml-5">                   
                    <li className='nav-item active'>
                        <Link className='nav-link text-white' to='/'>Accueil <span className='sr-only'>(current)</span></Link>
                    </li>
                    <li className='nav-item text-white'>
                        <Link className='nav-link text-white' to='/services'>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-white' to='/technologie'>Technologies</Link>
                    </li>           
                </ul>
                <ul className="navbar-nav mr-auto mt-2 offset-3">
                    <Link className='btn contact' to='/contact'>Nos contacts</Link>
                    <Link className='btn connect ml-3' to='/login'>Se connecter</Link>
                </ul>             
            </div>
        </nav>
    )
}

export default Navbar;