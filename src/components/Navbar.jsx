import React, { useState } from 'react'
import { FaHamburger, FaSearch, FaUserFriends } from 'react-icons/fa'
import { SiBurgerking } from 'react-icons/si'
import { BsCart3, BsFillTagFill, BsFillSaveFill } from 'react-icons/bs'
import { BiWalletAlt } from 'react-icons/bi'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    return (
        <div className='max-w-[1640] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer' >
                    <FaHamburger size={30} />
                </div>

                <h1 className='text-2xl sm:text-3xl lg-text:4xl px-2'>
                    Enjoy <span className='font-bold'>Eating</span>
                </h1>

                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>

            {/* Search */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 py-1 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <FaSearch size={25} />
                <input
                    className='bg-transparent w-full focus:outline-none'
                    type="text"
                    placeholder='Search your foods'
                />
            </div>

            {/* Cart button*/}
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <BsCart3 size={20} className='mr-2' /> Cart
            </button>

            {/* Mobile Menu */}
            {/* Overlay */}
            {/* {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>: ''} */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}


            {/* Sidebar */}

            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500'}>
                <SiBurgerking
                    onClick={() => setNav(!nav)}
                    className='absolute right-4 top-4 cursor-pointer duration-300'
                    size={30}
                />

                <h2 className='text-2xl p-4'>
                    Enjoy <span className='font-bold'>Eating</span>
                </h2>

                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favourite</li>
                        <li className='text-xl py-4 flex'><BiWalletAlt size={25} className='mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex'><BsFillTagFill size={25} className='mr-4' /> Promotion</li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best One</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>

                    </ul>
                </nav>
            </div>



        </div>
    )
}

export default Navbar
