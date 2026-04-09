import AboutImg from '../assets/img3.png';
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

export default function About() {
    const config = {
        content: (
            <>
                <p className='text-lg md:text-xl text-white/90 leading-relaxed text-justify mb-4'>
                    Passionate Full-Stack Developer specializing in modern web development with expertise in both frontend and backend technologies. I graduated with First Class Honours in BSc (Hons) Computer Science & Software Engineering from the University of Bedfordshire through the Northern Uni (SLIIT) and SLIIT City Uni collaboration, demonstrating strong academic excellence and technical proficiency. Prior to this, I completed an HND in Computing (Software Engineering) from Pearson College London with Distinction, which provided me with a solid foundation in both theoretical and practical skills. I am skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, and database management, and I build responsive, efficient, and scalable web applications that solve real-world problems.
                </p>
                <p className='text-lg md:text-xl text-white/90 leading-relaxed text-justify mb-6'>
                    During my studies, I actively participated in personal and group projects that enhanced my problem-solving, teamwork, and communication abilities. I am currently pursuing my Master’s degree at SLIIT, further strengthening my knowledge and expertise in the field. I am seeking an internship where I can apply my skills to real-world challenges, contribute to organizational success, and continue advancing my expertise in full-stack development.
                </p>

                <div className='flex gap-8 justify-center md:justify-start'>
                    <div className='flex flex-col items-center group'>
                        <FaCode className='text-3xl md:text-4xl text-white group-hover:text-blue-400 transition-colors' />
                        <span className='text-white mt-2'>Web Dev</span>
                    </div>
                    <div className='flex flex-col items-center group'>
                        <FaLaptopCode className='text-3xl md:text-4xl text-white group-hover:text-green-400 transition-colors' />
                        <span className='text-white mt-2'>Full-Stack</span>
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