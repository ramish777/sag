import React from 'react';


const PricingCard = ({ ageCategory, price, trainingTimes, sessionsPerWeek }) => {
    return (
        <div className="max-w-sm bg-gray-900 border border-gray-200 rounded-lg shadow-lg p-6 text-white">
        <h3 className="text-3xl font-extrabold text-red-600 mb-2">{ageCategory}</h3>
        <p className="text-xl font-semibold mb-4">PKR {price} / month</p>
        
        <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-md py-2 px-4 mb-4">
            <p className="text-lg font-semibold text-white">
                Sessions per Week: <span className="text-yellow-200">{sessionsPerWeek}</span>
            </p>
        </div>
        
        {trainingTimes.map((time, index) => (
            <div key={index} className="mb-4">
                <p className="text-lg font-semibold text-gray-300">{time.days}</p>
                <p className="text-lg text-white">Time: {time.time}</p>
            </div>
        ))}
    </div>
    );
};



export default PricingCard;