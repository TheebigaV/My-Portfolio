import HeroImg from '../assets/img4.png';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import cvFile from '../assets/Theebiga Vicknarajah.pdf'; 
import { useState, useEffect } from 'react';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const config = {
        subtitle: "I am a creative Front-End Developer passionate about crafting elegant, responsive solutions that deliver exceptional user experiences across all devices.",
        social: {
            linkedIn: "https://www.linkedin.com/in/theebiga-vicknarajah-2745a8257/",
            gitHub: "https://github.com/TheebigaV",
            email: "mailto:theebivicky03@gmail.com"
        },
        cvDownload: 'Theebiga_Vicknarajah.pdf'
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = config.cvDownload;
        link.click();
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-10 md:py-20 bg-secondary justify-center items-center min-h-screen md:min-h-fit'>
            {/* Text Content */}
            <div className={`md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left ${isMobile ? 'order-2' : 'order-1'} px-4 md:pl-10`}>
               <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-hero-font leading-tight">
                    Hi, <br /> I'm <span className="text-blue-900 font-bold">Theebiga</span> <span className="block md:inline">Vicknarajah</span>
               </h1>
                <p className='text-xl sm:text-2xl md:text-3xl mt-4 md:mt-6 mb-6 md:mb-8 text-center md:text-left'>
                    {config.subtitle}
                </p>

                {/* Social Icons */}
                <div className='flex py-6 gap-4'>
                    <a 
                        href={config.social.linkedIn} 
                        className='hover:text-blue-900 transition-all duration-300 transform hover:scale-110' 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <AiOutlineLinkedin size={isMobile ? 32 : 40} />
                    </a>
                    <a 
                        href={config.social.gitHub} 
                        className='hover:text-blue-900 transition-all duration-300 transform hover:scale-110' 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <AiOutlineGithub size={isMobile ? 32 : 40} />
                    </a>
                    <a 
                        href={config.social.email} 
                        className='hover:text-blue-900 transition-all duration-300 transform hover:scale-110' 
                        rel="noopener noreferrer"
                        aria-label="Email"
                    >
                        <FaEnvelope size={isMobile ? 32 : 40} />
                    </a>
                </div>
                
                {/* Download Button */}
                <div className='mt-2 md:mt-4 w-full md:w-auto'>
                    <button 
                        onClick={handleDownloadCV} 
                        className='bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-lg flex items-center gap-2 mx-auto md:mx-0 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30'
                    >
                        <FaDownload />
                        Download CV
                    </button>
                </div>
            </div>
          
            {/* Image Container */}
            <div className={`relative group mb-8 md:mb-0 ${isMobile ? 'order-1' : 'order-2'}`}>
                <div className="bg-white p-4 pb-8 rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-2 border-blue-100 hover:border-blue-300">
                    <img 
                        className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-lg"
                        src={HeroImg} 
                        alt="Theebiga Vicknarajah - Frontend Developer" 
                    />
                    <div className="absolute bottom-2 left-0 right-0 text-center text-blue-900 font-medium text-sm md:text-base">
                        Frontend Developer
                    </div>
                </div>
                {isMobile && (
                    <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
                        <div className="w-16 h-1 bg-blue-900 rounded-full opacity-50"></div>
                    </div>
                )}
            </div>
        </section>
    );
}