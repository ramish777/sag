import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import React, { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';

const managers = [
    {
        name: "Ahmed Sohaib",
        position: "General Manager",
        description: "AFC Futsal Level 1 & FA Level 1, Certified Program In Football Data Analytics & Sports Marketing, 4 years’ experience in managing esports and football organizations.",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/management/Ahmed_Sohaib.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvbWFuYWdlbWVudC9BaG1lZF9Tb2hhaWIuanBnIiwiaWF0IjoxNzIzNDczMTc1LCJleHAiOjIwMzg4MzMxNzV9.mgq4OkbdJM3iBiJNDmV7-hyfXM2wnSE1eK2DKrJivsE&t=2024-08-12T14%3A32%3A55.595Z"
    },
    {
        name: "Saud Yousaf",
        position: "Club Technical Director",
        description: "UEFA technical drive diploma holder, AFC Futsal Level 1, FA level 1, FA level 1 futsal, 4 years’ experience in coaching at grass root level at Beaconhouse, 2 years coaching experience at Lahore school of economics.",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/management/Saud_Yousaf.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvbWFuYWdlbWVudC9TYXVkX1lvdXNhZi5KUEciLCJpYXQiOjE3MjM0NzMxOTcsImV4cCI6MjAzODgzMzE5N30.WbEakLJ6euH6EpvNhTqji6-MioSwHI_C4p949l7GPLo&t=2024-08-12T14%3A33%3A17.687Z"
    },
    {
        name: "Zohair Altaf Gondal",
        position: "Academy Director",
        description: "Futsal Level 1 AFC, former head coach of F5 academy, current head coach of SA Gardens Futsal Academy.",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/management/Zohair_Altaf_Gondal.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvbWFuYWdlbWVudC9ab2hhaXJfQWx0YWZfR29uZGFsLkpQRyIsImlhdCI6MTcyMzQ3MzIyMSwiZXhwIjoyMDM4ODMzMjIxfQ.W_cH-pWWJ7ai2RjlLbrRWOd-7w2D8Yx8uFo0KHKQO8A&t=2024-08-12T14%3A33%3A41.947Z"
    },
    
];

const coaches = [
    {
        name: "Zafar Iqbal",
        position: "Assistant Coach Senior Football Team",
        description: "Futsal Level 1 AFC, former coach for fame football club, former coach for FC Smurfs, current coach of SA Gardens Futsal Team under 18s and Assistant Coach of SAG Senior Football Team",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/coaches/Zafar_Iqbal.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvY29hY2hlcy9aYWZhcl9JcWJhbC5KUEciLCJpYXQiOjE3MjM0NzMyODgsImV4cCI6MjAzODgzMzI4OH0.uGoKcqAV0pvsIaEb3ABhBByCOAlaUgKFt_do0luqNKM&t=2024-08-12T14%3A34%3A48.826Z"
    },
    {
        name: "Muhammad Raza Fazli",
        position: "Head Coach Senior Football Team",
        description: "Former head coach LUMS football team, former head coach Allied bank football team which won Pakistan premier league for 4 years, ex assistant coach for Pakistan national team, current head coach SA Gardens senior football team",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/coaches/Muhammad_Raza_Fazli_6_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvY29hY2hlcy9NdWhhbW1hZF9SYXphX0ZhemxpXzZfMTF6b24uanBnIiwiaWF0IjoxNzIzNDczMjUxLCJleHAiOjIwMzg4MzMyNTF9._ouYBldl0dsnbHdS5xzeMc55YrCkYRNFC5STGVF__fE&t=2024-08-12T14%3A34%3A11.862Z"
    },
    {
        name: "Waseem Abdul Salam",
        position: "Head Coach Senior Futsal Team",
        description: "Futsal Level 2 AFC, Physical Fitness Coaching, Nutrition Certificate, Body Physiology and Anatomy, current head coach of SA Gardens senior futsal team",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/coaches/Waseem_Abdul_Salam_7_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvY29hY2hlcy9XYXNlZW1fQWJkdWxfU2FsYW1fN18xMXpvbi5qcGciLCJpYXQiOjE3MjM0NzMyNzEsImV4cCI6MjAzODgzMzI3MX0.d8RdBRMEiqRfHsoBG3tmcwqKPeATKfGmzt9DatvTGCA&t=2024-08-12T14%3A34%3A31.344Z"
    },
    
];

const CoachCard = ({ coach }) => {
    const { setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
    }, [setActiveLink]);

    return (
        <div className="w-full max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <div className="flex flex-col items-center p-10">
                <img className="h-96 rounded-lg mb-3 w-full shadow-lg object-cover" src={coach.image} alt={coach.name} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{coach.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{coach.position}</span>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">{coach.description}</p>
            </div>
        </div>
    );
};

const Management = () => {
    return (
        <div className="relative flex-col w-full min-h-screen bg-black">
            <div className="relative z-10 h-full overflow-y-auto">
                <Navbar />
            </div>

            {/* Coaches Section */}
            <div className="flex flex-col p-4 bg-gray-700">
                <div className="flex flex-col items-center lg:ml-32 lg:mr-32 lg:mt-8 p-4">
                    <div className="text-4xl text-white font-bold mt-20">Our Coaches</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-8">
                        {coaches.map((coach, index) => (
                            <div key={index} className="p-4">
                                <CoachCard coach={coach} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Management Section */}
            <div className="flex flex-col p-4 bg-gray-700">
                <div className="flex flex-col items-center lg:ml-32 lg:mr-32 lg:mt-8 p-4">
                    <div className="text-4xl text-white font-bold mt-10">Management</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-8">
                        {managers.map((manager, index) => (
                            <div key={index} className="p-4">
                                <CoachCard coach={manager} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Management;
