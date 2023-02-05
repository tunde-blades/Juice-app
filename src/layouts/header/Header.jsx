import React from 'react'
import logo from '../../assets/images/logo.svg'
import Loginbtn from '../../components/buttons/Loginbtn'
import SignUpbtn from '../../components/buttons/SignUpbtn'
import { useState } from 'react'
import {Menu, Cancel} from '@mui/icons-material';



export default function Header() {

    let [openNav, setopennav] = useState(false)

    let displayNav = ()=>{
         setopennav(!openNav)
    }


  return (
    <section className=' flex  justify-center overflow-hidden border-b-2'>
        <header className='container box-border py-5 px-10'>
        <menu className='flex space-x-10 items-center justify-between'>
                <picture className='logo'>
                    <span onClick={displayNav}>{openNav ? <Cancel className='text-gray-400'/>:<Menu className='text-gray-400'/>}</span>
                    <img className='w-10' src={logo} alt="" />
                </picture>
                <nav className='flex  text-gray-900 navs'>
                    <li className='text-blue-800 cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Catalog</li>
                    <li className='cursor-pointer'>Author</li>
                    <li className='cursor-pointer'>Contact us</li>
                </nav>
                {
                    openNav && <nav className='text-gray-900 navsmobile'>
                    <li className='text-blue-800 cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Catalog</li>
                    <li className='cursor-pointer'>Author</li>
                    <li className='cursor-pointer'>Contact us</li>
                </nav>
                }
                
                <div className='flex items-center space-x-3'>
                    <Loginbtn/>
                    <SignUpbtn/>
                </div>
            </menu>
        </header>
    </section>
  )
}
