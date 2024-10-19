import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const SocialIcon = ({ Icon }) => (
  <a
    href="#"
    className="text-[#52656C] hover:text-[#F7941E] transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

const FooterSection = ({ title, items }) => (
  <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
    <h3 className="text-[#F7941E] font-semibold text-lg mb-2">{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-1">
          <a href={item.href} className="text-[#52656C] hover:text-[#F7941E] transition-colors duration-300 text-sm">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/4 px-4 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <a href="#home" className="mr-2">
                <img src="/1.png" alt="PrimeStep Solutions Logo" className="h-10 w-auto" />
              </a>
              <a href="#home">
                <img src="/4.png" alt="PrimeStep Solutions Logo" className="h-7 w-auto" />
              </a>
            </div>
            <p className="text-[#52656C] text-sm mb-4">
            At PrimeStep Solutions, we transform your ideas into reality with customized services for students and professionals alike. Our expert team in software, hardware, and career services ensures solutions that exceed expectations, helping you step into the future with confidence!            </p>
          </div>


          <FooterSection
            title="Services"
            items={[
              { name: "Software Development", href: "#services" },
              { name: "Hardware Solutions", href: "#services" },
              { name: "Resume Building", href: "#services" },
              { name: "Mock Interviews", href: "#services" }
            ]}
          />

          <FooterSection
            title="Company"
            items={[
              { name: "About Us", href: "#about" },
              { name: "Our Team", href: "#about" },
              { name: "Careers", href: "#careers" },
              { name: "Contact Us", href: "#contact" }
            ]}
          />

          <FooterSection
            title="Resources"
            items={[
              { name: "Blog", href: "#blog" },
              { name: "FAQ", href: "#faq" },
              { name: "Terms of Service", href: "#terms" },
              { name: "Privacy Policy", href: "#privacy" }
            ]}
          />
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#52656C] text-sm mb-4 sm:mb-0">
            © {currentYear} PrimeStep Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Mail} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
