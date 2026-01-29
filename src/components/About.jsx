import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaAward, FaLeaf } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaUtensils />,
      title: "Tajribali Oshpazlar",
      description: "Yillik tajribaga ega professional oshpazlar jamoasi"
    },
    {
      icon: <FaLeaf />,
      title: "Halol Mahsulotlar",
      description: "Faqat yangi va sifatli ingredientlardan foydalanamiz"
    },
    {
      icon: <FaAward />,
      title: "Yuqori Sifat",
      description: "Har bir taomga e'tibor va g'amxo'rlik bilan qaraymiz"
    }
  ];

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Biz</span>
            <span className="text-secondary"> Haqimizda</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            20 yildan ortiq tajriba bilan mijozlarga eng yaxshi restoran tajribasini taqdim etamiz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                  alt="Restoran interyeri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-full -z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-dark">
              An'anaviy ta'm va zamonaviy uslub
            </h3>
            <p className="text-gray-600 mb-6">
              Polatov Restaurant 2003-yildan buyon o'z mijozlariga eng yaxshi oshxona an'analarini 
              zamonaviy uslubda taqdim etib kelmoqda. Bizning oshpazlarimiz o'z ishining ustasi 
              bo'lib, har bir taomni maxsus g'amxo'rlik bilan tayyorlaydilar.
            </p>
            <p className="text-gray-600 mb-8">
              Biz faqat sifatli va yangi mahsulotlardan foydalanamiz, bu esa taomlarimizning 
              mazasi va foydaliligini kafolatlaydi.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-primary text-2xl bg-primary/10 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;