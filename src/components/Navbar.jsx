import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex justify-between py-10 px-12 max-sm:px-5 bg-navBorderColor border-b border-navBorderColor'>
        <h1 className=' font-titleTextFont text-3xl '>Good Nutrition</h1>
        <nav className='flex gap-12 max-sm:gap-6 font-mainTextFont text-base'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='services'>Services</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
