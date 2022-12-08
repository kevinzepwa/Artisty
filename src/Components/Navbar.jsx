import React, {useState} from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'

function Navbar() {
  const [navig, setNav] = useState(false)
  const handleClick = () => setNav(!navig)

    return (
        <div className='w-screen h-[80px] z-10 bg-yellow-600 fixed drop-shadow-lg'>
            <div className='flex items-center justify-between w-full h-full px-2'>
              <div className='flex items-center'>
                <h1 className='mr-4 text-3xl text-white font-bold sm:text-4xl pl-2'>Artisty</h1>
              </div>
              <div className='hidden md:flex pr-4 text-white'>
                <ul className='hidden md:flex'>
                  <li className='hover:bg-yellow-700 cursor-pointer rounded-xl'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                  <li className='hover:bg-yellow-700 cursor-pointer rounded-xl'><Link to="gallery" smooth={true} offset={-50} duration={500}>Gallery</Link></li>
                  <li className='hover:bg-yellow-700 cursor-pointer rounded-xl'><Link to="favourite" smooth={true} offset={-200} duration={500}>Favourite</Link></li>
                  <li className='hover:bg-yellow-700 cursor-pointer rounded-xl'><Link to="addart" smooth={true} offset={-200} duration={500}>Add art</Link></li>
                </ul>

                <button className='px-8 py-3 bg-transparent mr-4 signinBtn'>Sign Up</button>
                <button className='px-8 py-3'>Sign In</button>
              </div>

              <div className='md:hidden mr-2' onClick={handleClick}>
                {(!navig ? <Bars3Icon className="h-6 w-6 text-white"/> : <XMarkIcon className='h-6 w-6 text-white' />)}
              </div>
            </div>

            {/* <ul className='absolute bg-zinc-200 2-full px-8'> */}
            <ul className={!navig ? 'hidden' : 'md:hidden absolut bg-zinc-200 2-full px-8'}>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 cursor-pointer hover:text-yellow-600'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 cursor-pointer hover:text-yellow-600'><Link onClick={handleClick} to="gallery" smooth={true} offset={-50} duration={500}>Gallery</Link></li>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 cursor-pointer hover:text-yellow-600'><Link onClick={handleClick} to="favourite" smooth={true} offset={-200} duration={500}>Favourite</Link></li>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 cursor-pointer hover:text-yellow-600'><Link onClick={handleClick} to="addart" smooth={true} offset={-200} duration={500}>Add art</Link></li>

              <div className='flex flex-col my-4'>
                <button className='bg-transparent text-yellow-800 px-2 py-3 mb-4 hover:bg-slate-300'>Sign Up</button>
                <button className='mb-4 px-2 py-3'>Sign In</button>
              </div>
            </ul>

        </div>
    );
}

export default Navbar;