import { motion } from 'framer-motion';
import { Code, Cpu, FileText, Users } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, items }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center justify-center mb-4">
      <Icon className="w-16 h-16 text-[#F7941E] transform transition-transform hover:scale-110" />
    </div>
    <h3 className="text-2xl font-bold mb-2 text-[#52656C] text-center">{title}</h3>
    <ul className="list-disc list-inside text-[#52656C] ">
      {items.map((item, index) => (
        <li key={index} className="mb-1">{item}</li>
      ))}
    </ul>
  </motion.div>
);

const ServicesComponent = () => {
  const services = [
    {
      icon: Code,
      title: "Projects",
      items: [
        "Tailored Software & Hardware Solutions",
        "Full Stack Development",
        "Machine Learning",
        "Cyber Security",
        "IoT-based Projects",
        "Custom Electronics"
      ]
    },
    {
      icon: FileText,
      title: "Build Resume",
      items: [
        "High-quality projects added to your resume",
        "GitHub profile setup",
        "ATS-friendly resume creation",
        "Add projects"
      ]
    },
    {
      icon: Cpu,
      title: "Professional Portfolio Design",
      items: [
        "Variety of professional templates",
        "Affordable pricing",
        "Tailored to highlight your skills"
      ]
    },
    {
      icon: Users,
      title: "Mock Interviews",
      items: [
        "Conducted by experienced HR professionals",
        "Real-world insights and feedback",
        "Improve your interview performance"
      ]
    }
  ];

  return (
    <section id="services">
      {/* Services content */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#52656C]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default ServicesComponent;
