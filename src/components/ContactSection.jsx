import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react'; // Keep these imports for Phone, Mail, MapPin
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import LinkedIn and Instagram icons from react-icons

const ContactItem = ({ icon: Icon, title, content, link }) => (
  <motion.div
    className="flex items-center mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-[#F7941E] p-3 rounded-full mr-4 cursor-pointer" onClick={link}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="text-[#52656C] font-semibold">{title}</h3>
      <p className="text-[#52656C] cursor-pointer" onClick={link}>{content}</p>
    </div>
  </motion.div>
);

const ContactUsPage = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "8328291760"; // Your phone number
    window.open(`https://wa.me/${phoneNumber}`, '_blank'); // Opens WhatsApp
  };

  const handleEmailClick = () => {
    const email = "primestepsolutions7@gmail.com"; // Your email
    window.open(`mailto:${email}`, '_blank'); // Opens the default mail client
  };

  // Future placeholders for LinkedIn and Instagram
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/your-linkedin-profile', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/your-instagram-profile', '_blank');
  };

  return (
    <section id="contact">
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-[#52656C]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-center text-[#52656C] mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Please feel free to reach out to us for any queries. With PrimeStep Solutions, you're guaranteed fast, reliable, and professional services. Contact us today to bring your ideas to life!
          </motion.p>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8 h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-[#52656C]">Get in Touch</h2>
                <ContactItem 
                  icon={Phone} 
                  title="Phone" 
                  content="8328291760" 
                  link={handlePhoneClick} // Set the phone link
                />
                <ContactItem 
                  icon={Mail} 
                  title="Email" 
                  content="primestepsolutions7@gmail.com" 
                  link={handleEmailClick} // Set the email link
                />
                <ContactItem 
                  icon={MapPin} 
                  title="Location" 
                  content="Hyderabad" 
                  link={() => alert("Our office is located in Hyderabad.")}
                />
                {/* Use LinkedIn and Instagram icons here */}
                <ContactItem 
                  icon={FaLinkedin} // LinkedIn icon from react-icons
                  title="LinkedIn" 
                  content="Connect with us on LinkedIn" 
                  link={handleLinkedInClick} // LinkedIn link
                />
                <ContactItem 
                  icon={FaInstagram} // Instagram icon from react-icons
                  title="Instagram" 
                  content="Follow us on Instagram" 
                  link={handleInstagramClick} // Instagram link
                />
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-8">
              <motion.form
                className="bg-white rounded-lg shadow-lg p-8 h-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-[#52656C]">Send us a Message</h2>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#52656C] mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7941E]" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#52656C] mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7941E]" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-[#52656C] mb-2">Message</label>
                  <textarea id="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7941E]"></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="bg-[#F7941E] text-white px-6 py-2 rounded-md hover:bg-[#52656C] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
