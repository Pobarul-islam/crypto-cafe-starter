import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className=' hidden md:block'><Link to={'/'} className='font-sans font-bold text-xl text-gray-600'></Link> Cripto Cafe</div>
        </div>
    );
};

export default Header;