import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center py-4 px-24 max-sm:px-5 bg-navBorderColor border-b border-navBorderColor'>
        <h1 className=' font-titleTextFont text-4xl'>Mustafa Mercan</h1>
        <nav className='flex gap-12 max-sm:gap-6 font-mainTextFont font-semibold text-gray-500 text-lg'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='services'>Services</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
