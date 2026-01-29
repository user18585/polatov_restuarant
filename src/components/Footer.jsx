import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaTelegram />, href: '#', label: 'Telegram' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dark py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-primary">Polatov</span>
              <span className="text-secondary"> Restaurant</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Mazali taomlar va sifatli xizmat - bu bizning va'damiz
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -5 }}
                  className="bg-dark-light hover:bg-primary text-white p-3 rounded-full transition-all duration-300 text-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Tezkor havolalar</h3>
            <ul className="space-y-3">
              {['Bosh Sahifa', 'Biz Haqimizda', 'Menyu', 'Galereya', 'Aloqa'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Yangiliklar uchun obuna bo'ling</h3>
            <p className="text-gray-400 mb-4">
              Yangi taomlar va aksiyalar haqida birinchi bo'lib bilib oling
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-grow px-4 py-3 rounded-l-lg outline-none"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-300">
                Obuna
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {currentYear} Polatov Restaurant. Barcha huquqlar himoyalangan.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;