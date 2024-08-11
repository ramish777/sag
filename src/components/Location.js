import React from 'react';

const LocationCard = ({ name, address, image, phone, mapUrl }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <img className="rounded-t-lg w-full h-64 object-cover cursor-pointer" src={image} alt={name} />
            </a>
            
            <div className="text-center p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <div className="w-full flex flex-row">
                    
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                    </svg>
                    <p className="ml-1 mb-3 font-normal text-gray-700 dark:text-gray-400">{address}</p>
                    
                </div>
                </a>
                <div className="w-full flex flex-row">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                    </svg>
                    <p className="ml-1 mb-3 font-normal text-gray-700 dark:text-gray-400">{phone}</p>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
