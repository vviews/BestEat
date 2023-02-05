import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu , AiOutlineSearch , AiFillTag } from "react-icons/ai";
import { BsFillCartFill , BsFillSaveFill} from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite , MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left side */}
        <div className='flex items-center'>
            <div className='cursor-pointer' onClick={()=>(setNav(!nav))}>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'> Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pick up</p>
            </div>
        </div>

        {/* Search input */}
        <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder="Search foods" className='bg-transparent p-2 focus:outline-none w-full'/>
        </div>

        {/* cart button */}
        <div>
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20} className='mr-2'/> Cart
            </button>
        </div>

        {/* Mobile menu */}
        {/* overlay */}
        {nav ? <div className='bg-black/80 w-full h-screen z-10 top-0 left-0 fixed '></div> : ''}


        {/* Side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-1000'}>
            <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setNav(!nav)}/>
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <il className='text-xl flex py-4'>
                        <TbTruckDelivery size={25} className='mr-4'/> Orders
                    </il>
                    <il className='text-xl flex py-4'>
                        <MdFavorite size={25} className='mr-4'/> Favorite
                    </il>
                    <il className='text-xl flex py-4'>
                        <FaWallet size={25} className='mr-4'/> Wallet
                    </il>
                    <il className='text-xl flex py-4'>
                        <MdHelp size={25} className='mr-4'/> Help
                    </il>
                    <il className='text-xl flex py-4'>
                        <AiFillTag size={25} className='mr-4'/> Promotions
                    </il>
                    <il className='text-xl flex py-4'>
                        <BsFillSaveFill size={25} className='mr-4'/> Best Ones
                    </il>
                    <il className='text-xl flex py-4'>
                        <FaUserFriends size={25} className='mr-4'/> Invite Friends
                    </il>
                    
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar