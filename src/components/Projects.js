import websiteImg1 from '../assets/food_website.png';
import websiteImg2 from '../assets/pos.png';
import websiteImg3 from '../assets/game2.png';
import { FiExternalLink } from 'react-icons/fi';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg2,
                title: 'POS System',
                description: 'A POS system that generates food order bills instantly with item details, quantity, and total cost.',
                link: 'https://github.com/TheebigaV/POS_System.git',
                tags: ['Java']
            },
            {
                image: websiteImg1,
                title: 'Food Website',
                description: 'A front-end website for selecting food items, placing orders, and viewing a responsive menu layout.',
                link: 'https://github.com/TheebigaV/Royal-Food-Corner-Website.git',
                tags: ['HTML', 'CSS', 'JS']
            },
            {
                image: websiteImg3,
                title: 'Small Math Challenge Game',
                description: 'A fun math challenge game that tests basic arithmetic skills through quick, interactive problem-solving rounds.',
                link: 'https://github.com/TheebigaV/Game.git',
                tags: ['HTML', 'CSS','JS','Firebase']
            },
            {
                image: websiteImg3,
                title: 'My Portfolio',
                description: 'Discover my projects, expertise, and passion for creating impactful digital experiences.',
                link: 'https://github.com/TheebigaV/Game.git',
                tags: ['React', 'Tailwind CSS']
            },
        ]
    }

    return (
        <section id='projects' className="py-20 px-5 bg-primary text-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl font-bold border-b-4 border-primary inline-block pb-2 mb-4">
                        Projects
                    </h1>
                    <p className="text-lg opacity-90 max-w-2xl">
                        These are my featured projects built with React, MERN stack, and modern web technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {config.projects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-white/10 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                        >
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
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
                    ))}
                </div>
            </div>
        </section>
    )
}