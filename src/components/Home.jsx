import { motion } from 'framer-motion';

const HomeSection = () => {

  return (
    <section id='home' className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Innovative Solutions for Every Challenge with <span className="text-[#F7941E]">PrimeStep Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
At PrimeStep Solutions, we transform your ideas into reality with customized services for students and professionals alike. Our expert team in software, hardware, and career services ensures solutions that exceed expectations, helping you step into the future with confidence!            </motion.p>
            <motion.button
              className="bg-[#F7941E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#52656C] transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(247,148,30)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
          
          {/* Image and Animations */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img 
              src="/3.png" 
              alt="Innovative Solutions" 
              className="w-4/5 h-auto mx-auto"
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-1/4 right-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
            <img src="/gear.png" alt="Innovation" className="w-10 h-10" />
            </motion.div>
            <motion.div 
              className="absolute bottom-1/4 left-15"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <img src="/bul.png" alt="Ideas" className="w-12 h-12 " />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Features Section */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { title: "Expert Development", description: "Cutting-edge web solutions tailored to your needs" },
            { title: "Strategic Design", description: "User-centric designs that captivate and convert" },
            { title: "Growth-Driven Approach", description: "Scalable solutions that grow with your business" }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
