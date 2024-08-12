import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';

const Awards2020 = () => {
    const { setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
    }, [setActiveLink]);

    const achievements = [
        {
            title: "All Pakistan Cup - Depalpur",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2020/Depalpur.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjAvRGVwYWxwdXIuanBlZyIsImlhdCI6MTcyMzQ2OTYwOSwiZXhwIjoyMDM4ODI5NjA5fQ.wpT_2O7EPeCoNzTKU-iGYnqRM0W_Xq_snGf4btUQRSo&t=2024-08-12T13%3A33%3A30.096Z",
            description: "Secured victory in the All Pakistan Cup at Depalpur with a thrilling 2-1 win against the district team, demonstrating our competitive edge."
        },
        {
            title: "Fame Cup - Model Town",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2020/ModelTown.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjAvTW9kZWxUb3duLmpwZWciLCJpYXQiOjE3MjM0Njk2NDAsImV4cCI6MjAzODgyOTY0MH0.c5Im4GSrhQeqRO-ULtcom50HqboEicyzEXSi4MSsmJM&t=2024-08-12T13%3A34%3A00.295Z",
            description: "Triumphed in the Fame Cup at Model Town by edging out Fame FC in a nail-biting penalty shootout, showcasing our resilience and skill."
        },
        {
            title: "National Challenge Cup 2020 – Quarter Finalists",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2020/NationalChallengeCup.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjAvTmF0aW9uYWxDaGFsbGVuZ2VDdXAuanBlZyIsImlhdCI6MTcyMzQ2OTY2OCwiZXhwIjoyMDM4ODI5NjY4fQ.eC1iGUyIM2jwHHc0lG9ERfuosJLGNsq7Ir0pNb2Mjdk&t=2024-08-12T13%3A34%3A28.377Z",
            description: "Reached the quarter-finals of the prestigious National Challenge Cup 2020, narrowly losing to Pakistan WAPDA in our inaugural national cup appearance."
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-black">
             <div className="relative sm:h-2/4 w-full lg:h-screen">
                <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/bg_3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvYmdfMy5qcGciLCJpYXQiOjE3MjM0Njk1NDcsImV4cCI6MjAzODgyOTU0N30.NJjkGkP2rLsmXH5ese-s9fJv11a_a8eK52u5mE83daQ&t=2024-08-12T13%3A32%3A27.868Z)`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 h-full overflow-y-auto">
                    <Navbar />
                    <div className="flex flex-col mt-20 lg:mt-40 p-4">
                        <div className="w-full lg:w-2/3 mx-auto text-center">
                            <h1 className="text-5xl lg:text-9xl font-bold text-white">Achievements (2020)</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-700">

            <div className=" lg:ml-32 lg:mr-32 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-4 ">
               {achievements.map((achievement, index) => (
                   <div key={index} className="flex flex-col p-4 bg-gray-800 rounded-lg">
                       <div className="flex items-center">
                           <div className="w-1.5 h-10 bg-red-600"></div>
                           <h2 className="text-white text-2xl font-bold ml-4">{achievement.title}</h2>
                       </div>
                       <div className="lg:mt-4">
                           <div className="w-full h-96 flex items-center justify-center">
                               <img src={achievement.image} alt="Achievement" className="max-h-full max-w-full object-contain rounded-lg" />
                           </div>
                           <p className="text-sm lg:text-lg mt-4 text-gray-300">
                               {achievement.description}
                           </p>
                       </div>
                   </div>
               ))}

           
           
            </div>

            </div>
           

            <Footer />
        </div>
    );
};

export default Awards2020;
