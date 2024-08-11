import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import sa from "../images/sa.jpg"



const AboutUs = () => {
    return (
        <div className="relative flex-col w-full min-h-screen bg-black">
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg_3})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 h-full overflow-y-auto">
                <Navbar />
    
                <div className="flex flex-col mt-20 lg:flex-row items-center justify-center lg:mt-40 lg:mb-40 p-4">
                    <div className="w-full lg:w-2/3 justify-center items-center">
                        <h1 className="text-2xl lg:text-4xl sm:text-4xl font-bold text-white text-center">About Us</h1>
                        <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        Welcome to SA Gardens Football Club, where passion for the game meets a rich legacy rooted in the heart of SA Gardens. With a proud history that reflects the vibrant community around us, our club stands as a beacon of excellence and unity. Located at the heart of SA Gardens, our main office is the hub of all our activities, serving players and fans alike.                        </p>
                    </div>
                </div>
            </div>
        </div>
    
        {/* History */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-start lg:ml-32 lg:mt-8 p-4">
                <div className="flex items-center lg:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">History & Origin</h2>
                </div>
                <div className="relative flex w-full flex-col lg:flex-col mt-8 lg:mt-8 lg:mr-32">
                <iframe className="rounded-lg h-96 mr-32" src="https://www.youtube.com/embed/_LNJYzhyuGo?si=Dnhjsm8YmMA5Ks9a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    
        {/* About SA Gardens and SA Group */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-start lg:ml-32 lg:mt-8 p-4">
                <div className="flex items-center lg:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">About SA Gardens and SA Group</h2>
                </div>
                <div className="relative flex flex-col lg:flex-col mt-8 lg:mt-8 lg:mr-32">
                    <img src={sa} alt="Achievement" className="w-full rounded-lg" />
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        SA Group is one of Pakistan's leading business conglomerates operating within a diverse set of verticals, across real estate, construction, architecture, interior design, culinary arts, fashion, hospitality, sports, agriculture and industrial production, to name a few.
                        SA Gardens, the leading project of SA Group blends tradition with innovation to create an exceptional living experience. Our commitment to excellence extends from our world-class facilities to our vibrant community. SA Gardens is not just a place to live; its a place to thrive, connect, and make lasting memories.
                    </p>
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        SA Group is passionately promoting sports at a grassroots level; notably basketball, football, MMA, motorsports, tent pegging & snooker amongst others. It is home to a number of state-of-the-art sports facilities in the country. SA Gardens Football is the embodiment of that raging passion. 
                    </p>
                </div>
            </div>
        </div>
    
        {/* Location of main office */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-start lg:ml-32 lg:mr-32 lg:mt-8 p-4">
                <div className="flex items-center lg:mr-8 sm:mr-8">
                    <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-2xl font-bold ml-4">Location</h2>
                </div>
                <div className="relative flex flex-col w-full lg:flex-col mt-8 lg:mt-8 lg:mr-32">
                    <p className="text-sm lg:text-lg text-center text-gray-300 lg:mb-4">
                        SA Gardens, Head Office, Main GT Road, Kala Shah Kaku.                     
                    </p>
                    <iframe
                        title="uniqueTitle"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.4522613754784!2d74.26358017512803!3d31.730854136713624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191f320e5f28b1%3A0x93ad1e608ed90b5c!2sS%20A%20Gardens%20Main%20Enterance%20Gate!5e0!3m2!1sen!2s!4v1719577411477!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                    ></iframe>
                    
                </div>
            </div>
        </div>
    
        {/* footer */}
        <Footer/>
    </div>
    
    );
};

export default AboutUs;
