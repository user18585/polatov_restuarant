import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ali Valiyev",
      role: "Doimiy mijoz",
      rating: 5,
      comment: "Polatov Restaurant - bu mening sevimli dam olish joyim. Taomlar har doim ajoyib, xizmat esa yuqori darajada. Oshpazlar haqiqiy mutaxassislar!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "15.12.2023"
    },
    {
      id: 2,
      name: "Malika Qodirova",
      role: "Tadbirkor",
      rating: 5,
      comment: "Biznes lanchlarimizni doim shu yerda o'tkazamiz. Professional muhit, tezkor xizmat va eng muhimi - ajoyib taomlar. Tavsiya etaman!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "10.12.2023"
    },
    {
      id: 3,
      name: "Javohir Rasulov",
      role: "Oila boshlig'i",
      rating: 4,
      comment: "Oila bilan dam olish uchun mukammal joy. Bolalar uchun maxsus menyu bor, xodimlar mehribon. Har yakshanba oilaviy kechalarimizni shu yerda o'tkazamiz.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "05.12.2023"
    },
    {
      id: 4,
      name: "Sevara Alimova",
      role: "Tadbir tashkilotchisi",
      rating: 5,
      comment: "Yilgi korporativ tadbirimizni shu yerda o'tkazdik. Hammasi mukammal edi - ovqatlar, xizmat, muhit. Barcha mehmonlar mamnun qaytishdi.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      date: "01.12.2023"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Mijozlar</span> Fikrlari
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Bizning mijozlarimiz biz haqimizda nima deyishadi
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          >
            <IoIosArrowDropleft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          >
            <IoIosArrowDropright size={24} />
          </button>

          {/* Testimonial Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="md:flex">
                {/* Client Image */}
                <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
                  <div className="relative">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      {testimonials[currentSlide].role}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="md:w-2/3 p-8 md:p-12">
                  <FaQuoteLeft className="text-primary text-3xl mb-6 opacity-50" />
                  
                  <div className="flex mb-4">
                    {renderStars(testimonials[currentSlide].rating)}
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-8 italic">
                    "{testimonials[currentSlide].comment}"
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl font-bold text-dark mb-1">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-gray-500">{testimonials[currentSlide].date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Baholash</div>
                      <div className="text-2xl font-bold text-primary">
                        {testimonials[currentSlide].rating}.0/5.0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Average Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Bizning Reyting</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">4.8</div>
              <div className="flex justify-center">
                {renderStars(5)}
              </div>
              <p className="text-white/90 mt-2">Google Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">4.9</div>
              <div className="flex justify-center">
                {renderStars(5)}
              </div>
              <p className="text-white/90 mt-2">TripAdvisor</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">2000+</div>
              <p className="text-white/90">Mamnun mijozlar</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;