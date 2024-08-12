import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';
import { Link } from 'react-router-dom';


const Acheivements = () => {
    const { setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
    }, [setActiveLink]);

    const achievements = [
        {
            title: "2024 Awards",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2023-2024/lfl.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjMtMjAyNC9sZmwuanBnIiwiaWF0IjoxNzIzNDcwMzk5LCJleHAiOjIwMzg4MzAzOTl9.hDqWR-xbL1v6C2jtzX98ImL3Hy7ln5qVzx5mK8VgXms&t=2024-08-12T13%3A46%3A39.840Z",
            description: "We were able to secure 3 trophies in these mega events.",
            link: "/awards-2023-24"
        },
        {
            title: "2023-2022 Awards",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2022-2023/AllPakistanCup.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjItMjAyMy9BbGxQYWtpc3RhbkN1cC5qcGciLCJpYXQiOjE3MjM0NzAxMzksImV4cCI6MjAzODgzMDEzOX0.rtcvd5COgal9n8FtFTRMfzkRWHY1ydzi-J9uKCE1weA&t=2024-08-12T13%3A42%3A19.787Z",
            description: "We were able to secure 4 trophies in these mega events.",
            link: "/awards-2022-23"
        },
        {
            title: "2022-2021 Awards",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2021-2022/ChitralLeague.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjEtMjAyMi9DaGl0cmFsTGVhZ3VlLmpwZyIsImlhdCI6MTcyMzQ2OTgyMiwiZXhwIjoyMDM4ODI5ODIyfQ.9QIShPWtjNEolrv2QhDSo3IjtlmKElvpyevpB1Fy6dw&t=2024-08-12T13%3A37%3A02.441Z",
            description: "We were able to secure 4 trophies in these mega events.",
            link: "/awards-2021-22"
        },
        {
            title: "2020 Awards",
            image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2020/Depalpur.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjAvRGVwYWxwdXIuanBlZyIsImlhdCI6MTcyMzQ2OTYwOSwiZXhwIjoyMDM4ODI5NjA5fQ.wpT_2O7EPeCoNzTKU-iGYnqRM0W_Xq_snGf4btUQRSo&t=2024-08-12T13%3A33%3A30.096Z",
            description: "We were able to secure 2 trophies in these mega events.",
            link: "/awards-2020"
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
                            <h1 className="text-5xl lg:text-9xl font-bold text-white">All Achievements</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-700 justify-center items-center">

            <div className="lg:ml-32 lg:mr-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {achievements.map((achievement, index) => (
                    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={achievement.link}>
                            <img
                                className="h-64 w-full rounded-t-lg object-cover"
                                src={achievement.image}
                                alt={achievement.title}
                            />
                        </Link>
                        <div className="p-5">
                            <Link to={achievement.link}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {achievement.title}
                                </h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {achievement.description}
                            </p>
                            <Link to={achievement.link}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                                Read more
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


            </div>
           

            <Footer />
        </div>
    );
};

export default Acheivements;
