import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const EMAILJS_CONFIG = {
        serviceId: 'service_7amb87v',
        templateId: 'template_2288crn',
        userId: 'BkCCoBB3xxjj_QVfg'
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                await emailjs.sendForm(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.templateId,
                    e.target,
                    EMAILJS_CONFIG.userId
                );
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } catch (error) {
                console.error('Failed to send:', error);
                alert('Failed to send message. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <section id='contact' className='bg-secondary px-5 py-12 text-black'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold mb-4'>Get In Touch</h1>
                    <p className='text-lg text-gray-600'>
                        Contact me for further details, project inquiries, or any questions you may have - I'm happy to help.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-6'>
                    {/* Left Side - Form */}
                    <div className='md:w-2/3'>
                        {submitted ? (
                            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <FaPaperPlane className="text-4xl mx-auto mb-4 text-green-500" />
                                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                                <p className="text-lg text-gray-600">Thank you for reaching out.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 text-base rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-primary`}
                                            placeholder="Your name"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 text-base rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-primary`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 text-base rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-primary`}
                                            placeholder="Your message here..."
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full mt-2 bg-primary hover:bg-blue-600 text-white text-base font-medium py-3 px-4 rounded flex items-center justify-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane className="mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Right Side - Contact Information */}
                    <div className='md:w-1/3'>
                        <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                            <p className="text-base text-gray-500 mb-4">You're free to reach out through any of these channels:</p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaEnvelope className="text-primary mr-3 mt-1 text-lg" />
                                    <a href="mailto:theebivicky03@gmail.com" className="text-base text-gray-700 hover:text-primary">theebivicky03@gmail.com</a>
                                </li>
                                <li className="flex items-start">
                                    <FaPhone className="text-primary mr-3 mt-1 text-lg" />
                                    <a href="tel:+94779037185" className="text-base text-gray-700 hover:text-primary">+94 779 037185</a>
                                </li>
                                <li className="flex items-start">
                                    <FaMapMarkerAlt className="text-primary mr-3 mt-1 text-lg" />
                                    <span className="text-base text-gray-700">Jaffna, Sri Lanka</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}