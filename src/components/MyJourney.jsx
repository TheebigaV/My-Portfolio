import { motion } from 'framer-motion';

export default function Resume() {
  // Motion variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const fadeIn = (direction, delay = 0) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: delay,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  });

  const education = [
    {
      degree: "BSc (Hons) in Software Engineering",
      period: "Mar 2025 - Present",
      institution: "Northern Uni (SLIIT)",
      icon: "🎓"
    },
    {
      degree: "HND in Computing (Software Engineering)",
      period: "Sep 2022 - Mar 2024",
      institution: "Pearson College London (BCAS)",
      achievements: ["Graduated with Distinction"],
      icon: "🏆"
    },
    {
      degree: "Grade 6 - A/L",
      period: "Jan 2012 - Dec 2021",
      institution: "J/Vemdadi Girls' High School",
      achievements: ["A/L - 2CS in Maths Stream", "O/L - 5A 3B C"],
      icon: "📚"
    },
    {
      degree: "Grade 1 - 5",
      period: "Jan 2007 - Dec 2011",
      institution: "St. John Bosco's Vidyalayam",
      icon: "✏️"
    },
  ];

  const workExperience = [
    {
      position: "Frontend Developer Intern",
      company: "Microwe",
      period: "Jun 2025 - Present",
      icon: "💼",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      achievements: [],
      highlights: []
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "PHP"],
      icon: "💻",
      color: "from-blue-100 to-blue-50"
    },
    {
      category: "Backend",
      items: ["Python", "Laravel"],
      icon: "⚙️",
      color: "from-purple-100 to-purple-50"
    },
    {
      category: "Tools",
      items: ["GitHub", "VS Code", "Netbeans", "Figma"],
      icon: "🛠️",
      color: "from-amber-100 to-amber-50"
    },
    {
      category: "Database",
      items: ["MySQL", "Firebase"],
      icon: "🗄️",
      color: "from-emerald-100 to-emerald-50"
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Teamwork", "Communication", "Time Management"],
      icon: "🌟",
      color: "from-pink-100 to-pink-50"
    }
  ];

  return (
    <section id='resume' className='relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50/30 to-purple-50/30'>
      {/* Animated background elements */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <motion.div 
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-blue-200/20 rounded-full filter blur-3xl'
        ></motion.div>
        <motion.div 
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className='absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-200/20 rounded-full filter blur-3xl'
        ></motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='max-w-7xl mx-auto px-4 sm:px-6'
      >
        {/* Section Header */}
        <motion.div 
          variants={fadeIn('up')}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 md:mb-4'>
            My <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>Journey</span>
          </h2>
          <div className='w-16 md:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-3 md:mb-4 rounded-full'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2'>
            Education, professional experience, and technical expertise
          </p>
        </motion.div>

        <div className='flex flex-col lg:flex-row gap-8 md:gap-12'>
          {/* Left Column - Education & Experience */}
          <div className='lg:w-1/2 space-y-8 md:space-y-12'>
            {/* Education Section */}
            <motion.div 
              variants={fadeIn('right')}
              className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6'
            >
              <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center'>
                <span className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white mr-2 sm:mr-3 text-sm sm:text-base'>
                  🎓
                </span>
                Education
              </h3>
              <div className='relative'>
                {/* Timeline line */}
                <div className='absolute left-4 sm:left-6 top-0 h-full w-0.5 bg-gradient-to-b from-blue-200 to-purple-200'></div>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                    className='mb-6 sm:mb-8 relative pl-8 sm:pl-10'
                  >
                    {/* Timeline dot */}
                    <div className='absolute left-0 top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white shadow-md'></div>
                    <div className='bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1'>
                      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2'>
                        <div className='flex items-start'>
                          <span className='text-lg sm:text-xl mr-2 sm:mr-3'>{edu.icon}</span>
                          <div>
                            <h4 className='text-base sm:text-lg font-bold text-gray-800'>{edu.degree}</h4>
                            <p className='text-sm sm:text-base text-gray-600'>{edu.institution}</p>
                          </div>
                        </div>
                        <span className='px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full whitespace-nowrap self-start sm:self-auto'>
                          {edu.period}
                        </span>
                      </div>
                      {edu.achievements?.length > 0 && (
                        <motion.ul 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className='mt-3 sm:mt-4 space-y-1 sm:space-y-2 pl-2'
                        >
                          {edu.achievements.map((item, i) => (
                            <li key={i} className='flex items-start text-sm sm:text-base text-gray-700'>
                              <span className='text-blue-500 mr-1 sm:mr-2 mt-1'>•</span>
                              {item}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Work Experience Section */}
            <motion.div 
              variants={fadeIn('right', 0.2)}
              className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6'
            >
              <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center'>
                <span className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white mr-2 sm:mr-3 text-sm sm:text-base'>
                  💼
                </span>
                Work Experience
              </h3>
              <div className='space-y-4 sm:space-y-6'>
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 0.3 + index * 0.1)}
                    className={`bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${
                      job.company === 'Microwe' ? 'relative overflow-hidden group' : ''
                    }`}
                  >
                    {job.company === 'Microwe' && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 -mr-3 sm:-mr-5 -mt-3 sm:-mt-5 bg-blue-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 -ml-6 sm:-ml-10 -mb-6 sm:-mb-10 bg-purple-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </>
                    )}
                    <div className='relative z-10'>
                      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2 sm:mb-3'>
                        <div className='flex items-start'>
                          <span className={`text-lg sm:text-xl mr-2 sm:mr-3 ${job.company === 'Microwe' ? 'text-blue-600' : ''}`}>
                            {job.icon}
                          </span>
                          <div>
                            <h4 className={`text-base sm:text-lg font-bold ${
                              job.company === 'Microwe' 
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' 
                                : 'text-gray-800'
                            }`}>
                              {job.position}
                            </h4>
                            <p className={`font-medium text-sm sm:text-base ${
                              job.company === 'Microwe' 
                                ? 'text-blue-700' 
                                : 'text-gray-600'
                            }`}>
                              {job.company}
                            </p>
                          </div>
                        </div>
                        <span className={`px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium rounded-full whitespace-nowrap self-start sm:self-auto ${
                          job.company === 'Microwe'
                            ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {job.period}
                        </span>
                      </div>
                      {/* Special styling for Microwe experience */}
                      {job.company === 'Microwe' ? (
                        <div className='mt-4 sm:mt-6'>
                          {/* Tech Stack */}
                          <div className='mb-4 sm:mb-6'>
                            <h5 className='text-xs sm:text-sm font-semibold text-gray-500 mb-1 sm:mb-2'>TECH STACK</h5>
                            <div className='flex flex-wrap gap-1 sm:gap-2'>
                              {job.techStack.map((tech, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ scale: 0.9, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                                  whileHover={{ 
                                    y: -2,
                                    backgroundColor: 'rgba(99, 102, 241, 0.1)'
                                  }}
                                  className='px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-200 shadow-xs cursor-default transition-all duration-200'
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className='lg:w-1/2'
          >
            <div className='bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6'>
              <h3 className='text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center'>
                <span className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white mr-2 sm:mr-3 text-sm sm:text-base'>
                  ✨
                </span>
                Skills & Expertise
              </h3>
              <div className='grid grid-cols-1 gap-3 sm:gap-5'>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 0.5 + index * 0.1)}
                    whileHover={{ scale: 1.02 }}
                    className='bg-white p-3 sm:p-5 rounded-lg shadow-sm border border-gray-100 overflow-hidden relative group'
                  >
                    <div className='absolute -top-3 -right-3 text-5xl sm:text-7xl opacity-10 z-0 transition-all duration-300 group-hover:opacity-20'>
                      {skill.icon}
                    </div>
                    <div className='relative z-10'>
                      <h4 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center'>
                        <span className='mr-1 sm:mr-2'>{skill.icon}</span>
                        {skill.category}
                      </h4>
                      <div className='flex flex-wrap gap-1 sm:gap-2'>
                        {skill.items.map((item, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 + i * 0.03 }}
                            whileHover={{ 
                              y: -3,
                              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                            }}
                            className={`
                              px-2 py-1 sm:px-3 sm:py-1.5
                              bg-gradient-to-br ${skill.color}
                              text-gray-800 font-medium text-xs sm:text-sm
                              border border-gray-200
                              rounded-md sm:rounded-lg
                              shadow-xs
                              cursor-default
                              transition-all duration-200
                            `}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}