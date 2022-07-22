import React from 'react';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <nav className='flex justify-between items-start h-16 bg-red-800 text-white relative shadow-sm'>
            <div>
                LOGO
            </div>
            <div className='px-4 cursor-pointer md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
            <div className='pr-8 hidden md:block'>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;