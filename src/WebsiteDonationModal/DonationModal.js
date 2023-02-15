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


    return (
        <div >
            {
                showModal && 
                <DonationModalCard 
                showModal={showModal}
                />
            }
        </div>
    );
};

export default DonationModal;