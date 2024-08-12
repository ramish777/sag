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
            title: "Amateur Futbol Liga 2.0",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2022-2023/AmateurFutbolLiga.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjItMjAyMy9BbWF0ZXVyRnV0Ym9sTGlnYS5qcGVnIiwiaWF0IjoxNzIzNDcwMDkzLCJleHAiOjIwMzg4MzAwOTN9.abEVmNotwtGjp53tsWExaj0Ey_nknlSj9bgReEh2tYw&t=2024-08-12T13%3A41%3A33.471Z",
            description: "Topped the charts in the Amateur Futbol Liga 2.0, claiming the league title with consistent performance and determination."
        },
        {
            title: "National Futsal Championship S2",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2022-2023/NationalFutsalChampionship_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjItMjAyMy9OYXRpb25hbEZ1dHNhbENoYW1waW9uc2hpcF8xMXpvbi5qcGciLCJpYXQiOjE3MjM0NzAxMTksImV4cCI6MjAzODgzMDExOX0.IejG0LQWdIB0XJDMiu7z0pC-CkMdIQwoq77xlRmVkMs&t=2024-08-12T13%3A41%3A59.585Z",
            description: "Won the National Futsal Championship S2, defeating Baseline 3-1 in the country’s biggest futsal tournament, showcasing our supremacy in futsal."
        },
        {
            title: "All Pakistan Cup Mansehra",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2022-2023/AllPakistanCup.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjItMjAyMy9BbGxQYWtpc3RhbkN1cC5qcGciLCJpYXQiOjE3MjM0NzAxMzksImV4cCI6MjAzODgzMDEzOX0.rtcvd5COgal9n8FtFTRMfzkRWHY1ydzi-J9uKCE1weA&t=2024-08-12T13%3A42%3A19.787Z",
            description: "Emerged victorious in the All Pakistan Cup Mansehra with a hard-fought 1-0 win against the Army, proving our mettle on the national stage."
        },
        {
            title: "Futsal National Cup Punjab",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2022-2023/FutsalNationalCup.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjItMjAyMy9GdXRzYWxOYXRpb25hbEN1cC5qcGciLCJpYXQiOjE3MjM0NzAyNjksImV4cCI6MjAzODgzMDI2OX0.104dTIYhSAAPBM1a8OeyxB9SpO-eEpaSwgswr18fhdc&t=2024-08-12T13%3A44%3A29.242Z",
            description: "Captured the Futsal National Cup Punjab Phase by winning the final against rivals Lahore Athletic FC 2-1, highlighting our rivalry and excellence."
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
                            <h1 className="text-5xl lg:text-9xl font-bold text-white">Achievements (2022-2023)</h1>
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
