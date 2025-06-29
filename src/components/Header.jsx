import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between items-center px-5 py-4 bg-primary sticky top-0 z-50">
            {/* Left-aligned portfolio title */}
            <a 
                className="font-bold text-white text-xl md:text-2xl hover:scale-105 transition-transform duration-200" 
                href="#"
            >
                TV
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex text-white space-x-6">
                    <li>
                        <a href="/" className="text-lg px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-lg px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-lg px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#myskills" className="text-lg px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center">
                            My Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-lg px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu */}
            {toggleMenu && (
                <nav className="block md:hidden fixed top-16 left-0 right-0 bg-primary z-50 py-4 shadow-lg">
                    <ul onClick={() => setToggleMenu(false)} className="flex flex-col text-white text-center space-y-4">
                        <li>
                            <a href="#" className="text-xl px-4 py-3 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center block">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-xl px-4 py-3 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center block">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-xl px-4 py-3 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center block">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#myskills" className="text-xl px-4 py-3 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center block">
                                My Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-xl px-4 py-3 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform origin-center block">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setToggleMenu(!toggleMenu)} 
                className='block md:hidden p-2 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-110 transform origin-center'
                aria-label="Menu"
            >
                {toggleMenu ? (
                    <XMarkIcon className='h-8 text-white' />
                ) : (
                    <Bars3Icon className='h-8 text-white' />
                )}
            </button>
        </header>
    )
}