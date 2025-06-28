import websiteImg1 from '../assets/food_website.png';
import websiteImg2 from '../assets/pos.png';
import websiteImg3 from '../assets/game2.png';
import websiteImg4 from '../assets/portfolio.png';
import { FiExternalLink } from 'react-icons/fi';
import Slider from 'react-slick';
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
                year: '2023'
            },
            {
                image: websiteImg1,
                title: 'Food Website',
                description: 'A front-end website for selecting food items, placing orders, and viewing a responsive menu layout.',
                link: 'https://github.com/TheebigaV/Royal-Food-Corner-Website.git',
                tags: ['HTML', 'CSS', 'JS'],
                year: '2023'
            },
            {
                image: websiteImg3,
                title: 'Small Math Challenge Game',
                description: 'A fun math challenge game that tests basic arithmetic skills through quick, interactive problem-solving rounds.',
                link: 'https://github.com/TheebigaV/Game.git',
                tags: ['HTML', 'CSS','JS','Firebase'],
                year: '2025'
            },
            {
                image: websiteImg4,
                title: 'My Portfolio',
                description: 'Discover my projects, expertise, and passion for creating impactful digital experiences.',
                link: 'https://github.com/TheebigaV/Portfolio.git',
                tags: ['React', 'Tailwind CSS' , 'EmailJS-Cloud-based email service'],
                year: '2025'
            },
        ]
    }

    // Settings for the carousel
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
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id='projects' className="py-20 px-5 bg-primary text-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl font-bold border-b-4 border-primary inline-block pb-2 mb-4">
                        Projects
                    </h1>
                    <p className=" ">These are the projects I built throughout my learning and development journey.</p>
                </div>

                <div className="slider-container">
                    <Slider {...settings}>
                        {config.projects.map((project, index) => (
                            <div key={index} className="px-2">
                                <div className="bg-white/10 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 h-full">
                                    <div className="relative group">
                                        <img 
                                            className="w-full h-48 object-cover"
                                            src={project.image} 
                                            alt={project.title} 
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            {project.link ? (
                                                <a 
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                                                >
                                                    View Project <FiExternalLink />
                                                </a>
                                            ) : (
                                                <span className="bg-gray-500 text-white px-4 py-2 rounded">
                                                    Coming Soon
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold">{project.title}</h3>
                                            <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                                                {project.year}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span 
                                                    key={i}
                                                    className="bg-white/20 text-white text-xs px-3 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}