import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserFriends, FaClock } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    specialRequest: ''
  });

  const timeSlots = ['18:00', '19:00', '20:00', '21:00', '22:00'];
  const guestOptions = ['1', '2', '3', '4', '5', '6+'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Stol band qilindi! ${formData.date} kuni soat ${formData.time}da kutamiz`, {
      position: "top-right",
      autoClose: 5000,
    });
    
    // Formani tozalash
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '19:00',
      guests: '2',
      specialRequest: ''
    });
  };

  return (
    <section id="reservation" className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="md:flex">
            {/* Left Info Section */}
            <div className="md:w-2/5 bg-primary p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Stol band qiling</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaCalendarAlt className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Har kuni</h4>
                    <p>09:00 - 23:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaUserFriends className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Guruhlarga</h4>
                    <p>Maxsus chegirmalar</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaClock className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Tezkor javob</h4>
                    <p>10 daqiqa ichida</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-sm">📞 Qo'ng'iroq qilish: <strong>+998 90 123 45 67</strong></p>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="md:w-3/5 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Ismingiz *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Sana *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Vaqt *</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Mehmonlar *</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {guestOptions.map(num => (
                        <option key={num} value={num}>{num} kishi</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Maxsus iltimoslar</label>
                  <textarea
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Allergiya, bayram, tug'ilgan kun yoki boshqa maxsus iltimoslar..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 text-lg"
                >
                  Stolni band qilish
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;