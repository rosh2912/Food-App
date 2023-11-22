import React, {useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'

const Navbar = () => {
const [nav, setnav] = useState(false);


  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* left side */}
      <div className='flex items-center'>
        <div onClick={()=> setnav(!nav)} className=' cursor-pointer '>
        <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Sizzling <span className='font-bold'>Feast</span> </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white p-2 rounded-full'>Delivery</p>
          <p className='p-2'>Pickup</p>
      </div>
      </div>
      {/* search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search Food' />
      </div>
      {/* cart btn */}
      <button className='bg-black hidden text-white rounded-full md:flex items-center py-2'>
        <BsFillCartFill size={20} className='mr-2' />Cart
      </button>
      {/* mobile menu */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
      </div> : '' }
      
      {/* side drawer menu  */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
      <AiOutlineClose  onClick={()=> setnav(!nav)} size={30} className='absolute right-4 top-4  cursor-pointer' />
      <h2 className='text-2xl p-2'>Sizzling <span className='font-bold'>Feast</span> </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='flex py-4 text-xl'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
            <li className='flex py-4 text-xl'><MdFavorite size={25} className='mr-4' /> Favorites</li>
            <li className='flex py-4 text-xl'><FaWallet size={25} className='mr-4' /> Wallet</li>
            <li className='flex py-4 text-xl'><MdHelp size={25} className='mr-4' /> Help</li>
            <li className='flex py-4 text-xl'><AiFillTag size={25} className='mr-4' /> Promotion</li>
            <li className='flex py-4 text-xl'><BsFillSaveFill size={25} className='mr-4' /> Best One</li>
            <li className='flex py-4 text-xl'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
