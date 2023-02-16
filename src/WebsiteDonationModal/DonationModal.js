import React, { useEffect, useState } from 'react';
import DonationModalCard from './DonationModalCard';

const DonationModal = () => {
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowModal(true);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    // <button
    //     className="bg-transparent border-0 text-black float-right"
    //     onClick={() => setShowModal(false)}
    // >
    //     <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
    //         x
    //     </span>
    // </button>


    return (
        <div >
            {
                showModal &&
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-11/12 my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-base-100 outline-none focus:outline-none">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className='flex flex-row-reverse pr-4 pb-0 text-3xl font-semibold hover:text-red-600'>
                                    x
                                </button>
                                <div className="card sm:card-side shadow-xl px-4 pb-3">
                                    <figure>
                                        <img
                                            className='sm:w-96 w-full  rounded-0'
                                            src="https://i.ibb.co/JdrV0mx/photo-1579621970795-87facc2f976d-ixlib-rb-4-0.jpg" alt="Album" />
                                    </figure>
                                    <div className="card-body font-serif text-black">
                                        <h2 className="card-title md:text-4xl text-2xl">Please Donate Some Money</h2>
                                        <p className='text-xl'>If you donate some money please click  the  button and share it</p>
                                        <div className="bg-red-100  w-full h-[2px] mx-auto sm:block    mt-2"></div>

                                        <div className="card-actions ">
                                            <button
                                                className=" py-1 w-full text-xl font-semibold hover:bg-green-600 rounded-md bg-red-200">
                                                Click
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