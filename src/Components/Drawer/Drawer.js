import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Drawer = () => {

    // categories
    const { data: allCategory = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}categories`)
            .then((res) => res.json())
    })
    const categories = allCategory.filter(n => n !== undefined && n !== null && n !== false && n !== 0)


    return (
        <section>

            <div id="drawer-navigation" className="fixed z-40 h-screen p-4 sm:w-80 w-48 bg-gray-50 text-gray-600" tabIndex="-1" aria-labelledby="drawer-    navigation-label">
                <div className='flex justify-between items-center mb-4 '>
                    <h5 id="drawer-navigation-label" className="text-base font-semibold uppercase ">Menu</h5>
                    <label htmlFor="my-drawer" className=" drawer-button cursor-pointer p-2 bg-black text-white rounded"><FaTimes className='' /> </label>
                </div>

                <div>
                    <ul className=" gap-3 flex-col ">
                        <li className='w-full p-1'>
                            <Link to="/" className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Home</Link>
                            <hr />
                        </li>
                        <li className='w-full p-1'>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>News</Link>
                            <hr />

                        </li>
                        <li className='w-full p-1'>
                            <Link className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Sports</Link>
                            <hr />

                        </li>
                        <li className='w-full p-1'>
                            <Link to="/socialMedia" className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'> SocialMedia</Link>
                            <hr />

                        </li>
                        <li className='w-full p-1'>
                            <Link to="/translation" className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'> Translate Your Language</Link>
                            <hr />

                        </li>
                        <li className='w-full p-1'>
                            <Link to="/stockMarket" className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Live Stock Market</Link>
                            <hr />

                        </li>
                        <li className='w-full p-1'>
                            <Link to="/cryptoMarket" className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'> Crypto Currency Market</Link>
                            <hr />

                        </li>
                        <li className='w-full p-1pl-2  hover:bg-red-500 hover:text-white ease-in-out duration-300 py-1 hover:pl-8' >
                            <div className="dropdown w-full p-1">
                                <Link tabIndex={1} className="flex items-center gap-1 pl-2"><span>Categories</span> <IoIosArrowDropdown className="mt-1" /></Link>
                                <ul tabIndex={1} className="dropdown-content sm:w-60 w-20 z-50 rounded-md text-black font-semibold  shadow bg-gray-200 ">
                                    {
                                        categories?.map((category, i) => <li key={i} className="w-full">
                                            <Link to={`/category/${category}`} className="block py-1 px-2 hover:pl-8 ease-in-out duration-300 hover:text-white  my-1 hover:bg-red-500 "  >{category}</Link>
                                        </li>)
                                    }

                                </ul>
                                < hr />

                            </div>
                        </li>
                        <li className='w-full p-1'>
                            <Link to={`/gadgets`} className='block py-1 hover:bg-red-500 hover:text-white ease-in-out duration-300 pl-2 hover:pl-8'>Gadgets</Link>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Drawer;