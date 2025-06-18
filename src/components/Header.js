import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
    <header className="flex justify-between px-10 py-5 bg-primary">
        <a className="font-bold text-white text-xl md:text-2xl hover:scale-105 transition-transform duration-200" href="#"> My Portfolio</a>
        <nav className="hidden md:block">
                <ul className="flex text-white space-x-8">
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

        {toggleMenu && (
            <nav className="block md:hidden absolute top-16 left-0 right-0 bg-primary z-50 py-4">
                <ul onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col text-white text-center space-y-4">
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

        <button 
            onClick={() => setToggleMenu(!toggleMenu)} 
            className='block md:hidden p-2 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-110 transform origin-center'
        >
            <Bars3Icon className='h-8 text-white'/>
        </button>
    </header>
    )
}