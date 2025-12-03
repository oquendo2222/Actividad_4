import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname == path? 'active' : '';
    }
  return (
    <nav className='navbar'>
       <div className='container'>

        <Link to= "/" className='nav-brand'>
        💵 CreditJuli
        </Link>
        <ul className='nav-menu'>
            <li>
                <Link to="/" className={isActive('/')}>
                    Inicio
                </Link>
            </li>
            <li>
            <Link to="Simulador" className={isActive('/simulador')}>
                    Simulador
                </Link>
            </li>
            <li>
            <Link to="Solicitar" className={isActive('/solicitar')}>
                    Solicitar
                </Link>
            </li>
        </ul>

       </div>
    </nav>
  )
}


