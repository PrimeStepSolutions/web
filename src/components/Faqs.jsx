import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div 
      className="border-b border-[#52656C]/20 last:border-b-0 overflow-hidden"
      initial={false}
      animate={{ 
        backgroundColor: isOpen ? 'rgba(247, 148, 30, 0.05)' : 'transparent',
        boxShadow: isOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
        onClick={onToggle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span 
          className="font-medium text-[#52656C] text-lg"
          whileHover={{ color: 'rgb(247, 148, 30)' }}
          transition={{ duration: 0.2 }}
        >
          {question}
        </motion.span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-[#F7941E]" />
          ) : (
            <ChevronDown className="w-6 h-6 text-[#F7941E]" />
          )}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="px-4 pb-5"
          >
            <motion.p 
              className="text-[#52656C] leading-relaxed"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Why choose PrimeStep Solutions?",
      answer: "PrimeStep Solutions offers an experienced team, transparent and reliable service, affordable and customizable solutions, comprehensive support, and a customer-centric approach. We're committed to helping you succeed in all aspects of your tech career journey."
    },
    {
      question: "What kind of projects do you offer?",
      answer: "We offer a wide range of software and hardware projects, including full stack development, machine learning, cyber security, IoT-based projects, and Arduino projects. Our solutions are tailored to meet your specific requirements."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Most of our software projects are delivered within 48 to 72 hours, complete with detailed documentation and a PowerPoint presentation. Hardware project timelines may vary depending on component requirements."
    },
    {
      question: "Do you offer resume building services?",
      answer: "Yes, we offer comprehensive resume building services. For ₹500, we'll complete two high-quality projects and incorporate them into your resume, set up a GitHub profile with project links, and ensure your resume is ATS-friendly."
    },
    {
      question: "What is the cost, and is there a money-back guarantee?",
      answer: "Our services are affordably priced, and we stand by our quality. If we don't deliver as promised, you can rest assured with our money-back guarantee—your satisfaction is our priority!"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      id="faq" 
      className="bg-white py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-[#52656C]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <FAQItem 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index} 
                onToggle={() => handleToggle(index)} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQSection;
