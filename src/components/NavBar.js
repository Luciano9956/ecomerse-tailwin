import React from 'react';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <nav className='flex justify-between items-center bg-red-600 py-2'>
            <div className='flex w-11/12 justify-between items-center'>
                <img className='h-12 w-12' src='https://static.vscdn.net/images/logos/1598902758-mercadolibre.com-l.png' alt='Logo' />

                <ul className='flex gap-6 cursor-pointer text-white font-semibold '>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>

                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;