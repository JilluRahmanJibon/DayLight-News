import React, { useEffect, useState } from 'react';
import { FcDonate } from 'react-icons/fc'


const DonationModal = () => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowModal(true);
        }, 20000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div >
            {
                showModal &&
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-11/12 my-6 mx-auto max-w-3xl">
                            <div className="border-0 position rounded-lg shadow-lg relative flex flex-col w-full  bg-gray-100 outline-none focus:outline-none">

                                <div className="card  sm:card-side shadow-xl sm:px-2 ">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className=' absolute -mt-2 right-0 sm:text-2xl text-lg sm:hidden  bg-gray-200 hover:bg-red-400 px-2 py-1 rounded-full'>
                                        x
                                    </button>
                                    <figure>
                                        <img
                                            className='sm:w-96 w-full  rounded-lg ease-in-out duration-500 transform hover:scale-105'
                                            src="https://i.ibb.co/JdrV0mx/photo-1579621970795-87facc2f976d-ixlib-rb-4-0.jpg" alt="Album" />
                                    </figure>
                                    <div className="card-body font-serif text-black">
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className=' absolute -mt-7 sm:right-3  lg:text-xl text-lg hidden sm:block bg-gray-200 hover:bg-red-400 px-2 py-1 rounded-full'>
                                            X
                                        </button>
                                        <h2
                                            className="card-title md:text-4xl sm:text-xl text-lg text-inline animate-bounce select-none">
                                            Please Donate Some Money!
                                        </h2>
                                        <p className='text-xl'>If you donate some money please click  the  button and share it.</p>
                                        <div className="bg-red-100  w-full h-[2px] mx-auto sm:block  my-2"></div>

                                        <div className="card-actions ">
                                            <button
                                                className=" flex items-center justify-center gap-2 py-1 w-full text-xl font-semibold hover:bg-green-600 rounded-md bg-red-200 ">
                                                Donate
                                                <FcDonate className='text-2xl' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>


            }

        </div>
    );
};

export default DonationModal;