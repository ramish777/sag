import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import LocationCard from "../components/Location";
import PricingCard from '../components/PriceCard';



const Academy = () => {
    const images =[
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWMxLnBuZyIsImlhdCI6MTcyMzQ2OTEzMCwiZXhwIjoyMDM4ODI5MTMwfQ.zFa7PojpKS9o3MANSWRxXWuKe0017mB5f33IPzdDgAA&t=2024-08-12T13%3A25%3A31.195Z",
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWMyLmpwZyIsImlhdCI6MTcyMzQ2OTE0NywiZXhwIjoyMDM4ODI5MTQ3fQ.pvC2xassINaHvowYkv-UaJff532hozJn9l_ippD37Io&t=2024-08-12T13%3A25%3A47.940Z",
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWMzLmpwZyIsImlhdCI6MTcyMzQ2OTE2NywiZXhwIjoyMDM4ODI5MTY3fQ.N-33PT1eya_vqJW5BMRGvqf5t6f8OpHTBBCsrVDMGaA&t=2024-08-12T13%3A26%3A07.495Z",
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWM0LnBuZyIsImlhdCI6MTcyMzQ2OTE4OCwiZXhwIjoyMDM4ODI5MTg4fQ.nMNc2Ix6RMWhBmiVGdgq8N2rcdG1B8kM4_G565_xy08&t=2024-08-12T13%3A26%3A28.352Z",
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWM1LmpwZyIsImlhdCI6MTcyMzQ2OTIwNywiZXhwIjoyMDM4ODI5MjA3fQ.J_Eh6uBCmrFhVZTaXSTaAtTf-oD-3uQL0UF0omgL2L8&t=2024-08-12T13%3A26%3A48.131Z"
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#price') {
          const element = document.getElementById('price');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);

      const pricingData = [
        {
            ageCategory: 'Under 14 (Male)',
            price: '7000',
            trainingTimes: [
                { days: 'Thursday', time: '8:00 PM - 9:30 PM' },
                { days: '(Friday - Sunday)', time: '6:00 PM - 7:30 PM' },
            ],
            sessionsPerWeek: 4,
        },
        {
            ageCategory: 'Early Years (Male)',
            price: '6000',
            trainingTimes: [
                { days: '(Friday - Sunday)', time: '6:00 PM - 7:30 PM' },
            ],
            sessionsPerWeek: 4,
        },
        {
            ageCategory: 'Seniors (Male)',
            price: '5000',
            trainingTimes: [
                { days: 'Thursday', time: '9:30 PM - 11:00 PM' },
                { days: '(Friday - Sunday)', time: '7:30 PM - 9:00 PM' },
            ],
            sessionsPerWeek: 4,
        },
        {
            ageCategory: 'Girls',
            price: '6000',
            trainingTimes: [
                { days: '(Friday - Sunday)', time: '6:00 PM - 7:30 PM' },
            ],
            sessionsPerWeek: 3,
        }, 
    ];  

    return (
        <div className="relative w-full min-h-screen bg-black">
    <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Academy/Main%20header/Main_Header.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNhZGVteS9NYWluIGhlYWRlci9NYWluX0hlYWRlci5qcGVnIiwiaWF0IjoxNzIzNDcxNDQ5LCJleHAiOjIwMzg4MzE0NDl9.Y3krvXQGHbucPz5A-1YXG3wLrQJMZThr9FQF2QupIog&t=2024-08-12T14%3A04%3A10.067Z)`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full overflow-y-auto">
            <Navbar />

            <div className="flex flex-col mt-20 lg:flex-row justify-center lg:mt-40 p-4">
                <div className="w-full lg:w-2/3 justify-center items-center">
                    <h1 className="text-2xl lg:text-4xl sm:text-4xl font-bold text-white text-center">Academy</h1>
                    <p className="text-sm lg:text-lg text-gray-200 mt-4">
                    The mission of the club is to give a platform to the young dreamers to turn their passion into profession. We believe in the potential of developing athletes from the grassroots level and give them a chance not only to do what they love but earn a living while doing it. 
                    SAG Academy’s is to revamp Pakistan’s youth academy system based on European/American models. We plan to do this by partnering with educational institutions and Pakistan Football Federation by offering them professional coaches who will train kids from the ages of 8 – 16                    
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-10 p-4">
                <button className="bg-red-600 text-white lg:w-1/3 font-bold py-3 px-6 rounded text-lg hover:bg-transparent hover:border-white hover:border-2 hover:text-white transition-colors duration-300"
                onClick={() => window.open("https://forms.gle/yAiXP1DDUbivTDcg7", "_blank")}>
                    Join Now
                </button>
            </div>
        </div>
    </div>

    {/* Pricing Section */}
    <div id="price" className="locations-section items-center justify-center bg-gray-700 py-16">
        <h2 className="text-3xl font-bold text-center text-white lg:mb-4">Training Packages</h2>
        {/* <div className="h-2 rounded-lg w-64 bg-red-600 mx-auto"></div>  */}
        <div className="flex flex-col md:flex-row items-center justify-center p-4 lg:ml-32 lg:mr-32 lg:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {pricingData.map((item, index) => (
                    <PricingCard
                        key={index}
                        ageCategory={item.ageCategory}
                        price={item.price}
                        trainingTimes={item.trainingTimes}
                        sessionsPerWeek={item.sessionsPerWeek}
                    />
                ))}
            </div>
        </div>
    </div>
    
    {/* Clubs and facilities */}
    <div id="facilities" className="flex flex-col lg:flex-row p-4 bg-gray-800">
        <div className="flex flex-col w-full items-start lg:ml-32 lg:mr-32 lg:mt-8 lg:mb-8 p-4">
            <div className="flex w-full items-center justify-between lg:mr-8 sm:mr-8">
                <div className="flex items-center">
                    <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                    <h2 className="text-white text-xl lg:text-2xl font-bold ml-4">Our Facilities and Activities</h2>
                </div>
                <div className="flex space-x-1">
                    <button className="bg-gray-600 text-white font-bold py-3 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                    onClick={prevImage}>
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </button>
                    <button className="bg-gray-600 text-white font-bold py-3 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                    onClick={nextImage}
                    >
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className=" w-full items-center justify-center flex flex-col lg:flex-row">

                <div className=" flex flex-col w-full lg:flex-row mt-8 lg:mt-8">
                <div className="relative w-full" id="controls-carousel">
                    <div className="relative h-80 overflow-hidden rounded-lg lg:h-96">
                    {images.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out transform ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                        alt={`Slide ${index + 1}`}
                        />
                    ))}
                    </div>
                </div>
                </div>
                
            </div>
            
            <div className="mt-8">
                <h3 className="text-white text-xl lg:text-2xl font-bold">Exciting Facilities We Offer</h3>
                <ul className="list-disc list-inside mt-4 text-gray-300">
                    <li className="mb-2">State-of-the-art football & futsal fields</li>
                    <li className="mb-2">Physiotherapy and medical assistance</li>
                    <li className="mb-2">Lounge area for parents and visitors</li>
                    <li className="mb-2">Training sessions with professional coaches</li>
                    <li className="mb-2">Tournaments and competitive matches</li>
                    <li className="mb-2">Personalized training programs</li>
                    <li className="mb-2">Video analysis sessions</li>
                </ul>
            </div>
            
        </div>
    </div>

    {/* Locations Section */}
    <div id="locations" className="locations-section items-center justify-center bg-gray-700 py-16">
        <h2 className="text-3xl font-bold text-center text-white lg:mb-4">Our Locations</h2>
        {/* <div className="h-2 rounded-lg w-64 bg-red-600 mx-auto"></div>  */}
        <div className="flex flex-col items-center justify-center p-4 lg:ml-32 lg:mr-32 lg:mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2  md:items-center md:justify-center lg:grid-cols-3">
                <LocationCard 
                    name="Mega Arena, DHA" 
                    address="Jammu Chowk, E 40 Bedian Rd, Jamun, Lahore, Punjab" 
                    image="https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWMzLmpwZyIsImlhdCI6MTcyMzQ2OTE2NywiZXhwIjoyMDM4ODI5MTY3fQ.N-33PT1eya_vqJW5BMRGvqf5t6f8OpHTBBCsrVDMGaA&t=2024-08-12T13%3A26%3A07.495Z" 
                    phone="+92 332 4966181 | +92 321 7209053" 
                    mapUrl="https://g.co/kgs/RXAFzoZ" 
                />
                <LocationCard 
                    name="Lion's Den, ISL Pine Avenue" 
                    address="2 Al-Biruni Rd, off Pine Avenue, Edenabad, Lahore, Punjab" 
                    image= "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWM0LnBuZyIsImlhdCI6MTcyMzQ2OTE4OCwiZXhwIjoyMDM4ODI5MTg4fQ.nMNc2Ix6RMWhBmiVGdgq8N2rcdG1B8kM4_G565_xy08&t=2024-08-12T13%3A26%3A28.352Z" 
                    phone="+92 332 4966181 | +92 321 7209053" 
                    mapUrl="https://g.co/kgs/TCmFyzC" 
                />
                <LocationCard 
                    name="Third Umpire, Bahria Town" 
                    address="Superior Services Housing Society, Lahore, Punjab" 
                    image="https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWM1LmpwZyIsImlhdCI6MTcyMzQ2OTIwNywiZXhwIjoyMDM4ODI5MjA3fQ.J_Eh6uBCmrFhVZTaXSTaAtTf-oD-3uQL0UF0omgL2L8&t=2024-08-12T13%3A26%3A48.131Z" 
                    phone="+92 332 4966181 | +92 321 7209053" 
                    mapUrl="https://g.co/kgs/Bdj15EQ" 
                />
            </div>

        </div>
    </div>

    {/* footer */}
    <Footer/>
</div>

    );
};

export default Academy;
