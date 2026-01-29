import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTag, FaFire, FaGift, FaStar } from 'react-icons/fa';

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7); // 7 kun keyin

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      id: 1,
      icon: <FaFire />,
      title: "Dam olish kuni chegirmasi",
      description: "Juma, Shanba, Yakshanba kunlari 20% chegirma",
      color: "from-red-500 to-orange-500",
      validUntil: "07.01.2024"
    },
    {
      id: 2,
      icon: <FaGift />,
      title: "Tug'ilgan kun sovg'asi",
      description: "Tug'ilgan kunda bepul desert va sharbat",
      color: "from-purple-500 to-pink-500",
      validUntil: "Doimiy"
    },
    {
      id: 3,
      icon: <FaStar />,
      title: "Doimiy mijozlar uchun",
      description: "Har 10-xaridingizda 1 ta bepul taom",
      color: "from-blue-500 to-cyan-500",
      validUntil: "Doimiy"
    },
    {
      id: 4,
      icon: <FaTag />,
      title: "Oila uchun paket",
      description: "4 kishilik oila uchun maxsus paket 15% arzon",
      color: "from-green-500 to-emerald-500",
      validUntil: "31.12.2024"
    }
  ];

  return (
    <section id="offers" className="section-padding bg-gradient-to-b from-dark to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-primary">Aksiyalar</span> va Chegirmalar
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Bizning maxsus takliflarimizdan foydalaning va tejamkor ovqatlaning
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Chegirmalar tugashiga qolgan vaqt</h3>
          <div className="flex justify-center space-x-4 md:space-x-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 w-20 h-20 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">{value}</span>
                  <span className="text-white/80 text-sm mt-1">{unit.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${offer.color} rounded-2xl overflow-hidden shadow-xl h-full transform transition-all duration-300 group-hover:shadow-2xl`}>
                <div className="p-6 text-white">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {offer.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
                  <p className="text-white/90 mb-4">{offer.description}</p>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/20">
                    <span className="text-sm opacity-80">Amal qilish muddati:</span>
                    <span className="font-bold">{offer.validUntil}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-6 transition-all duration-300"
                >
                  Batafsil
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;