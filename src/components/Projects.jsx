import websiteImg1 from '../assets/food_website.png';
import websiteImg2 from '../assets/pos.png';
import websiteImg3 from '../assets/game2.png';
import websiteImg4 from '../assets/portfolio.png';
import websiteImg5 from '../assets/ecommerce.png';
import { FiExternalLink } from 'react-icons/fi';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg2,
                title: 'POS System',
                description: 'A POS system that generates food order bills instantly with item details, quantity, and total cost.',
                link: 'https://github.com/TheebigaV/POS_System.git',
                tags: ['Java'],
                year: '2023',
                color: 'bg-indigo-100',
                textColor: 'text-indigo-800',
                borderColor: 'border-indigo-300',
                accentColor: 'bg-indigo-500'
            },
            {
                image: websiteImg1,
                title: 'Food Website',
                description: 'A front-end website for selecting food items, placing orders, and viewing a responsive menu layout.',
                link: 'https://github.com/TheebigaV/Royal-Food-Corner-Website.git',
                tags: ['HTML', 'CSS', 'JS'],
                year: '2023',
                color: 'bg-amber-100',
                textColor: 'text-amber-800',
                borderColor: 'border-amber-300',
                accentColor: 'bg-amber-500'
            },
            {
                image: websiteImg3,
                title: 'Small Math Challenge Game',
                description: 'A fun math challenge game that tests basic arithmetic skills through quick, interactive problem-solving rounds.',
                link: 'https://github.com/TheebigaV/Game.git',
                tags: ['HTML', 'CSS', 'JS', 'Firebase'],
                year: '2025',
                color: 'bg-emerald-100',
                textColor: 'text-emerald-800',
                borderColor: 'border-emerald-300',
                accentColor: 'bg-emerald-500'
            },
            {
                image: websiteImg4,
                title: 'My Portfolio',
                description: 'Discover my projects, expertise, and passion for creating impactful digital experiences.',
                link: 'https://github.com/TheebigaV/My-Portfolio.git',
<<<<<<< HEAD
                tags: ['React', 'Tailwind CSS', 'EmailJS'],
                year: '2025',
                color: 'bg-rose-100',
                textColor: 'text-rose-800',
                borderColor: 'border-rose-300',
                accentColor: 'bg-rose-500'
            },
            {
=======
                tags: ['React', 'Tailwind CSS' , 'EmailJS-Cloud-based email service'],
                year: '2025'
            },
              {
>>>>>>> 68d411ad7f3271eab136c2468de6732c7dca409b
                image: websiteImg5,
                title: 'E-Commerce Website',
                description: 'E-Commerce website built with a focus on design, responsiveness, and user experience.',
                link: 'https://github.com/TheebigaV/E-Commerce.git',
                tags: ['React', 'Tailwind CSS'],
<<<<<<< HEAD
                year: '2025',
                color: 'bg-violet-100',
                textColor: 'text-violet-800',
                borderColor: 'border-violet-300',
                accentColor: 'bg-violet-500'
=======
                year: '2025'
>>>>>>> 68d411ad7f3271eab136c2468de6732c7dca409b
            }
        ]
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const animations = [
        { 
            initial: { y: 50, opacity: 0, rotate: -2 }, 
            animate: { y: 0, opacity: 1, rotate: 0 },
            transition: { type: 'spring', stiffness: 100 }
        },
        { 
            initial: { scale: 0.8, opacity: 0 }, 
            animate: { scale: 1, opacity: 1 },
            transition: { type: 'spring', bounce: 0.4 }
        },
        { 
            initial: { x: -50, opacity: 0 }, 
            animate: { x: 0, opacity: 1 },
            transition: { type: 'spring', stiffness: 80 }
        },
        { 
            initial: { rotateY: 90, opacity: 0 }, 
            animate: { rotateY: 0, opacity: 1 },
            transition: { duration: 0.8 }
        },
        { 
            initial: { y: -50, opacity: 0, rotate: 2 }, 
            animate: { y: 0, opacity: 1, rotate: 0 },
            transition: { type: 'spring', stiffness: 100 }
        }
    ];

    return (
        <section id='projects' className="py-20 px-5 bg-[#1e1b4b] text-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <motion.h1 
                        className="text-4xl font-bold inline-block pb-2 mb-4 relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Projects
                        <motion.span 
                            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        These are the projects I built throughout my learning and development journey.
                    </motion.p>
                </div>

                <div className="slider-container">
                    <Slider {...settings}>
                        {config.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="px-2"
                                initial={animations[index % animations.length].initial}
                                animate={animations[index % animations.length].animate}
                                transition={animations[index % animations.length].transition}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`${project.color} ${project.textColor} rounded-xl overflow-hidden border ${project.borderColor} hover:shadow-lg transition-all duration-300 h-[350px] flex flex-col justify-between group`}>
                                    {/* Image */}
                                    <div className="relative overflow-hidden h-32">
                                        <motion.img
                                            className="w-full h-full object-cover"
                                            src={project.image}
                                            alt={project.title}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            {project.link ? (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 ${project.accentColor} text-white px-3 py-1 rounded hover:opacity-90 text-xs`}
                                                >
                                                    View Project <FiExternalLink />
                                                </a>
                                            ) : (
                                                <span className="bg-gray-500 text-white px-3 py-1 rounded text-xs">
                                                    Coming Soon
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 flex flex-col justify-between flex-grow">
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <motion.h3 
                                                    className="text-md font-bold group-hover:underline"
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    {project.title}
                                                </motion.h3>
                                                <span className={`text-xs ${project.accentColor}/20 px-2 py-0.5 rounded-full ${project.textColor}`}>
                                                    {project.year}
                                                </span>
                                            </div>
                                            <p className="text-sm opacity-90 mb-2 h-[60px] overflow-hidden leading-snug">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mt-auto">
                                            {project.tags.map((tag, i) => (
                                                <motion.span
                                                    key={i}
                                                    className={`${project.accentColor}/20 text-xs px-2 py-0.5 rounded-full ${project.textColor}`}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
<<<<<<< HEAD
    );
}
=======
    )
}
>>>>>>> 68d411ad7f3271eab136c2468de6732c7dca409b
