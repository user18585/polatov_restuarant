import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const MenuPreview = () => {
  const navigate = useNavigate();
  
  const featuredItems = [
    { name: 'Osh', price: '35,000', category: 'Milliy Taomlar', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Burger Deluxe', price: '22,000', category: 'Fast Food', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Sezar Salat', price: '22,000', category: 'Salatlar', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Arabcha Kofe', price: '15,000', category: 'Ichimliklar', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <section id="menu" className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-primary">Menyudan</span> Namunalar
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
            150+ ta turli xil taomlarimiz bilan tanishing
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/menu')}
            className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link to='/menu'>To'liq Menyuni Ko'rish</Link>
            <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => navigate('/menu')}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-dark">{item.name}</h3>
                  <span className="text-primary font-bold">{item.price} so'm</span>
                </div>
                <p className="text-gray-600 mb-4">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/menu')}
            className="text-secondary hover:text-secondary/80 font-bold text-lg flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Barcha 150+ taomlarni ko'rish</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;