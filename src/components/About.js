import AboutImg from '../assets/img3.png';
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

export default function About() {
    const config = {
        content: (
            <>
                <p className='text-lg md:text-xl text-white/90 leading-relaxed text-justify mb-6'>
                    Passionate Software Engineer specializing in modern web development with expertise in frontend technologies. Graduated with Distinction in HND Computing from Pearson College London and currently pursuing BSc (Hons) at Northern Uni (SLIIT).
                </p>
                
                <p className='text-lg md:text-xl text-white/90 leading-relaxed text-justify mb-8'>
                    Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, I build responsive web applications that solve real-world problems. Strong problem-solver who thrives in collaborative environments to deliver innovative solutions.
                </p>

                <div className='flex gap-8 justify-center md:justify-start'>
                    <div className='flex flex-col items-center group'>
                        <FaCode className='text-3xl md:text-4xl text-white group-hover:text-blue-400 transition-colors' />
                        <span className='text-white mt-2'>Web Dev</span>
                    </div>
                    <div className='flex flex-col items-center group'>
                        <FaLaptopCode className='text-3xl md:text-4xl text-white group-hover:text-green-400 transition-colors' />
                        <span className='text-white mt-2'>Frontend</span>
                    </div>
                    <div className='flex flex-col items-center group'>
                        <FaGraduationCap className='text-3xl md:text-4xl text-white group-hover:text-purple-400 transition-colors' />
                        <span className='text-white mt-2'>Education</span>
                    </div>
                </div>
            </>
        ),
    };

    return (
        <section className='flex flex-col md:flex-row bg-primary px-4 py-16 md:py-24' id='about'>
            <div className='w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12'>
                {/* Image Section - Left Side */}
                <div className='md:w-1/3 flex justify-center'>
                    <img 
                        src={AboutImg} 
                        alt="Theebiga Vicknarajah"
                        className='w-full max-w-xs md:max-w-sm rounded-2xl shadow-2xl border-4 border-white/20 object-cover'
                    />
                </div>
                
                {/* Content Section - Right Side */}
                <div className='md:w-2/3 space-y-6 flex flex-col justify-center'>
                    <h1 className='text-4xl md:text-5xl text-white font-bold'>
                        About <span className='text-blue-400'>Me</span>
                    </h1>
                    
                    <div className='space-y-6'>
                        {config.content}
                    </div>
                </div>
            </div>
        </section>
    );
}