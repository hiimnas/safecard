import { React, useState } from 'react';
import { navLinks } from '../const';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
      <a href='./'><img className='h-[62px]' src='/logo.png' alt='Safecard' /></a>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-normal text-[18px] ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end align-center items-center'>
        <i className={`w-[28px] h-[28px] d-flex align-center bi ${toggle ? 'bi-x-lg' : 'bi bi-list-nested'}`} style={{color: '#c1ecf3', fontSize: 'xx-large', transform: 'scaleX(-1)', cursor: 'pointer'}} onClick={() => setToggle((prev) => !prev)}></i>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-normal text-[18px] ${index == navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>      
      </div>
    </div>
  )
}

export default Navbar