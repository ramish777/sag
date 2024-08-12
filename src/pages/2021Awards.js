import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';

const Awards2021 = () => {
    const { setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
    }, [setActiveLink]);

    const achievements = [
        {
            title: "Futsal Fiesta",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2021-2022/FutsalFiesta.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjEtMjAyMi9GdXRzYWxGaWVzdGEuanBlZyIsImlhdCI6MTcyMzQ2OTg0OCwiZXhwIjoyMDM4ODI5ODQ4fQ.DgBbnAmgCZKXLlEqWYrNVHer5-if2vgRRvR4WuLWJQs&t=2024-08-12T13%3A37%3A28.652Z",
            description: "Celebrated our first futsal tournament win at the Futsal Fiesta, marking a milestone in our futsal journey."
        },
        {
            title: "Lahore Sports Tournament 8",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2021-2022/LahoreSports.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjEtMjAyMi9MYWhvcmVTcG9ydHMuanBnIiwiaWF0IjoxNzIzNDY5ODc2LCJleHAiOjIwMzg4Mjk4NzZ9.Yb5Fdtjock0Ov_f_wrFdbhBiC9WBaQ-SvEQxyU65uXQ&t=2024-08-12T13%3A37%3A56.406Z",
            description: "Dominated the Lahore Sports Tournament 8 with a commanding 2-0 victory over Raiders Nation, solidifying our reputation in the local futsal scene."
        },
        {
            title: "Liga Smurfia Lahore",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2021-2022/LigaSmurfiaLahore.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjEtMjAyMi9MaWdhU211cmZpYUxhaG9yZS5qcGciLCJpYXQiOjE3MjM0Njk5MDEsImV4cCI6MjAzODgyOTkwMX0.9QbTH0KLkkYsWPmR4fb11sKNsKgE5fMVcJ9NUh-MUSU&t=2024-08-12T13%3A38%3A21.891Z",
            description: "Achieved a remarkable 8-0 triumph against Golazo FC in Liga Smurfia Lahore, underscoring our offensive prowess and teamwork."
        },
        {
            title: "Liga Smurfia Islamabad",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2021-2022/LigaSmurfiaPakistan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjEtMjAyMi9MaWdhU211cmZpYVBha2lzdGFuLmpwZyIsImlhdCI6MTcyMzQ2OTkyOCwiZXhwIjoyMDM4ODI5OTI4fQ._TeycRqb5UAy2Jbac2P_gnPw-bMMhnnHqjAEshkxnU4&t=2024-08-12T13%3A38%3A48.641Z",
            description: "Clinched a decisive 2-0 win against Goals FC in Liga Smurfia Islamabad, continuing our success across different cities."
        },
        {
            title: "Chitral League - Finalists",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2021-2022/ChitralLeague.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjEtMjAyMi9DaGl0cmFsTGVhZ3VlLmpwZyIsImlhdCI6MTcyMzQ2OTgyMiwiZXhwIjoyMDM4ODI5ODIyfQ.9QIShPWtjNEolrv2QhDSo3IjtlmKElvpyevpB1Fy6dw&t=2024-08-12T13%3A37%3A02.441Z",
            description: "Finished as finalists in the Chitral League, putting up a valiant fight against Pakistan Army in a close 2-1 match."
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
                            <h1 className="text-5xl lg:text-9xl font-bold text-white">Achievements (2021-2022)</h1>
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

export default Awards2021;
