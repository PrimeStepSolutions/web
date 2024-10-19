import { motion } from 'framer-motion';

const AboutSection = () => {
    const processSteps = [
        {
            icon: "👥",
            title: "Meet and Understand",
            description: "We initiate by meeting you to grasp the essence of your requirements, ensuring a tailored approach to your digital aspirations."
        },
        {
            icon: "📊",
            title: "Niche Exploration",
            description: "Our process involves studying solutions within your niche, allowing us to present ideas that align seamlessly with industry trends."
        },
        {
            icon: "🎨",
            title: "Creative Design Showcase",
            description: "We bring your ideas to life through a creative design phase, presenting visuals that capture the essence of your brand for your feedback."
        },
        {
            icon: "🚀",
            title: "Development and Delivery",
            description: "From concept to reality, we craft and refine your project, delivering a solution that meets and exceeds your expectations."
        }
    ];

    return (
        <section  id="about" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h2>
                    <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                        At PrimeStep Solutions, we are a passionate team dedicated to transforming your ideas into reality.
                        Whether you&apos;re a student looking for project guidance or a professional seeking resume enhancement,
                        we specialize in delivering innovative solutions for every challenge.
                    </p>
                </motion.div>

                {/* Image and Content */}
                <div className="flex flex-col lg:flex-row items-center mb-20">
                    {/* Image Integration */}
                    <motion.div
                        className="lg:w-1/2 mb-10 lg:mb-0"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/image.png"
                            alt="PrimeStep Team"
                            className="w-full h-auto object-cover"  // Ensures full-width and no shadow/border
                            style={{ display: 'block', borderRadius: '0px' }} // Removed rounded corners and shadow
                        />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2 lg:pl-12"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h3>
                        <p className="text-gray-600 mb-6">
                            With a global footprint, we take pride in having served clients from various backgrounds and industries.
                            Our commitment goes beyond borders as we thrive on translating diverse visions into impactful digital realities.
                        </p>
                        <ul className="space-y-2">
                            {["Tailored solutions for students and professionals", "Expert guidance on projects and resume enhancement", "Innovative approaches to every challenge"].map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center text-gray-600"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <svg className="w-5 h-5 text-[#F7941E] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Our Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md"
                                whileHover={{ y: -5, boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="text-4xl mr-2">{step.icon}</div>
                                    <h4 className="text-xl font-semibold text-gray-800">{step.title}</h4>
                                </div>
                                <p className="text-gray-600">{step.description}</p>

                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
