import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';

const Awards2022 = () => {
    const { setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
    }, [setActiveLink]);

    const achievements = [
        {
            title: "Lahore Futsal League by LST",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2023-2024/lfl.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjMtMjAyNC9sZmwuanBnIiwiaWF0IjoxNzIzNDcwMzk5LCJleHAiOjIwMzg4MzAzOTl9.hDqWR-xbL1v6C2jtzX98ImL3Hy7ln5qVzx5mK8VgXms&t=2024-08-12T13%3A46%3A39.840Z",
            description: "Clinched the Lahore Futsal League title by winning the final fixture against Lahore Athletic 3-1, solidifying our status as league champions."
        },
        {
            title: "Liga Smurfia S5",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2023-2024/ls.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjMtMjAyNC9scy5qcGciLCJpYXQiOjE3MjM0NzA0MjEsImV4cCI6MjAzODgzMDQyMX0.vOinx3gWO8WL9XNcxZzpGTSz1YTY_-UCeF1DbRZUn8U&t=2024-08-12T13%3A47%3A01.624Z",
            description: "Secured the Liga Smurfia S5 title with a thrilling 5-3 victory over Baseline FC in Islamabad, demonstrating our consistent dominance."
        },
        {
            title: "National Challenge Cup - Finalist",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2023-2024/ncc.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjMtMjAyNC9uY2MuanBnIiwiaWF0IjoxNzIzNDcwNDQzLCJleHAiOjIwMzg4MzA0NDN9.FA1Oo54ciaqMe2Ez_b3atRq_zjvnoQnBcyvh2fW_wVc&t=2024-08-12T13%3A47%3A23.627Z",
            description: "Made history as the only private club to reach the National Challenge Cup final, narrowly losing to Pakistan WAPDA 1-0 in the country’s premier championship."
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
                            <h1 className="text-5xl lg:text-9xl font-bold text-white">Achievements (2023-2024)</h1>
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

export default Awards2022;
