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
                accentColor: 'from-blue-500 to-cyan-400'
            },
            {
                image: websiteImg1,
                title: 'Food Website',
                description: 'A front-end website for selecting food items, placing orders, and viewing a responsive menu layout.',
                link: 'https://github.com/TheebigaV/Royal-Food-Corner-Website.git',
                tags: ['HTML', 'CSS', 'JS'],
                year: '2023',
                accentColor: 'from-amber-500 to-orange-400'
            },
            {
                image: websiteImg3,
                title: 'Small Math Challenge Game',
                description: 'A fun math challenge game that tests basic arithmetic skills through quick, interactive problem-solving rounds.',
                link: 'https://github.com/TheebigaV/Game.git',
                tags: ['HTML', 'CSS', 'JS', 'Firebase'],
                year: '2025',
                accentColor: 'from-green-500 to-teal-400'
            },
            {
                image: websiteImg4,
                title: 'My Portfolio',
                description: 'Discover my projects, expertise, and passion for creating impactful digital experiences.',
                link: 'https://github.com/TheebigaV/My-Portfolio.git',
                tags: ['React', 'Tailwind CSS', 'EmailJS'],
                year: '2025',
                accentColor: 'from-purple-500 to-pink-400'
            },
            {
                image: websiteImg5,
                title: 'E-Commerce Website',
                description: 'E-Commerce website built with a focus on design, responsiveness, and user experience.',
                link: 'https://github.com/TheebigaV/E-Commerce.git',
                tags: ['React', 'Tailwind CSS'],
                year: '2025',
                accentColor: 'from-red-500 to-rose-400'
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
                settings: { 
                    slidesToShow: 2,
                    dots: true 
                }
            },
            {
                breakpoint: 640,
                settings: { 
                    slidesToShow: 1,
                    dots: true 
                }
            }
        ]
    };

    const animations = {
        container: {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1
                }
            }
        },
        item: {
            hidden: { y: 20, opacity: 0 },
            show: { 
                y: 0, 
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                }
            }
        },
        hover: {
            y: -10,
            transition: { 
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <section id='projects' className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">My Work</h2>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                        Featured Projects
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg">
                        A collection of my recent work showcasing my skills and creativity.
                    </p>
                </motion.div>

                <motion.div
                    variants={animations.container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="slider-container"
                >
                    <Slider {...settings}>
                        {config.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="px-3"
                                variants={animations.item}
                                whileHover="hover"
                            >
                                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 h-full flex flex-col group shadow-lg hover:shadow-xl hover:shadow-cyan-500/10">
                                    {/* Image */}
                                    <div className="relative overflow-hidden h-48">
                                        <motion.img
                                            className="w-full h-full object-cover"
                                            src={project.image}
                                            alt={project.title}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            {project.link ? (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-cyan-400 transition-colors duration-300 text-sm"
                                                >
                                                    View Project <FiExternalLink className="text-sm" />
                                                </a>
                                            ) : (
                                                <span className="bg-gray-600 text-white px-4 py-2 rounded-full font-medium text-sm">
                                                    Coming Soon
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <span className="text-xs bg-gray-700 text-cyan-400 px-2 py-1 rounded-full">
                                                    {project.year}
                                                </span>
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.accentColor} text-white`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </motion.div>

                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://github.com/TheebigaV"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400/10 transition-colors duration-300"
                    >
                        View All Projects on GitHub
                        <FiExternalLink className="ml-2" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}