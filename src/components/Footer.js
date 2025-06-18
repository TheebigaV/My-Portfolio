import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    const emailAddress = "theebivicky03@gmail.com";

    return (
        <footer className="bg-primary text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a 
                        href="https://github.com/TheebigaV" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                        <FaGithub className="text-2xl" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/theebiga-vicknarajah-2745a8257/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a 
                        href={`mailto:${emailAddress}`} 
                        className="p-2 rounded-full hover:bg-blue-700 transition-colors"
                        title="Send me an email"
                    >
                        <FaEnvelope className="text-2xl" />
                    </a>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 mb-6">
                    <a 
                        href="#about" 
                        className="px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                    >
                        About
                    </a>
                    <a 
                        href="#projects" 
                        className="px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                    >
                        Projects
                    </a>
                    <a 
                        href="#myskills" 
                        className="px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                    >
                        Skills
                    </a>
                    <a 
                        href="#contact" 
                        className="px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                    >
                        Contact
                    </a>
                </nav>

                {/* Copyright and Additional Info */}
                <div className="text-center">
                    <p className="mb-2">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                    <p className="text-sm">Built with React and Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}