export default function Resume() {
    const education = [
        {
            degree: "BSc (Hons) in Software Engineering",
            period: "Mar 2025 - Present",
            institution: "Northern Uni (SLIIT)"
        },
        {
            degree: "HND in Computing (Software Engineering)",
            period: "Sep 2022 - Mar 2024",
            institution: "Pearson College London (BCAS)",
            achievements: ["Graduated with Distinction"]
        },
         {
            degree: "Grade 6 - A/L",
            period: "Jan 2012 - Dec 2021",
            institution: "J/Vemdadi Girls' High School",
            achievements: ["A/L - 2CS in Maths Stream" , "O/L - 5A 3B C"]
        },
                 {
            degree: "Grade 1 - 5",
            period: "Jan 2007 - Dec 2011",
            institution: "St. John Bosco's Vidyalayam",
            achievements: []
        },
    ];

    const skills = [
        {
            category: "Frontend",
            items: ["HTML5", "CSS3", "JS", "React", "Tailwind CSS", "PHP"]
        },
        {
            category: "Backend",
            items: ["Python","Laravel"]
        },
        {
            category: "Tools",
            items: ["Git", "VS Code", "Netbeans", "Figma"]
        },
        {
            category: "Database",
            items: ["MySql", "Firebase"]
        }
    ];

    return (
        <section id='myskills' className='bg-gray-50 px-5 py-16'>
            <div className='max-w-6xl mx-auto'>
                 <h1 className='text-4xl font-bold text-gray-800 mb-12 pb-2 border-b-4 border-primary inline-block'>
                    Education & Skills
                </h1>

                <div className='flex flex-col md:flex-row gap-8'>
                   
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-primary w-[120px]'>
                            Education
                        </h2>
                        
                        <div className='space-y-6'>
                            {education.map((edu, index) => (
                                <div key={index} className='bg-white p-6 rounded-lg shadow-md border-l-4 border-primary'>
                                    <h3 className='text-xl font-bold text-gray-800'>{edu.degree}</h3>
                                    <p className='text-gray-600 mt-1'>{edu.institution}</p>
                                    <p className='text-sm text-gray-500 mt-2'>{edu.period}</p>
                                    {edu.achievements && (
                                        <ul className='mt-3 space-y-1'>
                                            {edu.achievements.map((item, i) => (
                                                <li key={i} className='flex items-start text-gray-700'>
                                                    <span className='text-primary mr-2'>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                  
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-primary w-[90px]'>
                            Skills
                        </h2>
                        
                        <div className='space-y-6'>
                            {skills.map((skill, index) => (
                                <div key={index} className='bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary'>
                                    <h3 className='text-xl font-bold text-gray-800 mb-4'>{skill.category}</h3>
                                    <div className='flex flex-wrap gap-3'>
                                        {skill.items.map((item, i) => (
                                            <span 
                                                key={i}
                                                className='
                                                    px-4 py-2 rounded-md
                                                    bg-gray-50 text-gray-800
                                                    border border-gray-200
                                                    hover:bg-primary/10 hover:border-primary/50
                                                    transition-colors duration-200
                                                    text-sm font-medium
                                                '
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}