import HeroImg from '../assets/img4.png';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import CV from '../assets/Theebiga Vicknarajah.pdf'; // Exact path to your CV

export default function Hero() {
    const config = {
        subtitle: "I am a creative Front-End Developer passionate about crafting elegant, responsive solutions that deliver exceptional user experiences across all devices.",
        social: {
            linkedIn: "https://www.linkedin.com/in/theebiga-vicknarajah-2745a8257/",
            gitHub: "https://github.com/TheebigaV",
            email: "mailto:theebivicky03@gmail.com"
        },
        cvDownload: 'Theebiga_Vicknarajah_Frontend_Developer_CV.pdf'
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = config.cvDownload;
        link.download = 'Theebiga_Vicknarajah_Frontend_Developer_CV.pdf';
        link.click();
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-20 bg-secondary justify-center items-center'>
            <div className='md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pl-10'>
               <h1 className="text-black text-6xl font-hero-font">
                    Hi, <br /> I'm <span className="text-blue-900">Theebiga</span> Vicknarajah
               </h1>
                <p className='text-3xl mt-6 mb-8 text-left'>{config.subtitle}</p>

                <div className='flex py-8 gap-4'>
                    <a 
                        href={config.social.linkedIn} 
                        className='hover:text-black' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <AiOutlineLinkedin size={40} />
                    </a>
                    <a 
                        href={config.social.gitHub} 
                        className='hover:text-black' 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <AiOutlineGithub size={40} />
                    </a>
                    <a 
                        href={config.social.email} 
                        className='hover:text-black' 
                        rel="noopener noreferrer"
                    >
                        <FaEnvelope size={40} />
                    </a>
                </div>
                <div className='mt-4'>
                    <button 
                        onClick={handleDownloadCV} 
                        className='bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg'
                    >
                        Download CV
                    </button>
                </div>
            </div>
            <img 
                className='w-64 md:w-80'
                src={HeroImg} 
                alt="Theebiga Vicknarajah - Frontend Developer" 
            />
        </section>
    );
}