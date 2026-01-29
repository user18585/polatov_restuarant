import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowLeft, FaCreditCard } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CartPage = () => {
  const navigate = useNavigate();
  
  // Test uchun savat ma'lumotlari
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Osh', price: 35000, quantity: 2, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Manti', price: 25000, quantity: 1, image: 'https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Coca-Cola', price: 8000, quantity: 3, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.info('Mahsulot savatdan olib tashlandi');
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = totalPrice > 100000 ? 0 : 15000;
  const finalTotal = totalPrice + deliveryFee;

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleCheckout = () => {
    toast.success('Buyurtma qabul qilindi! Tez orada siz bilan bog\'lanamiz', {
      position: "top-center",
      autoClose: 3000,
    });
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom px-4 py-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <FaArrowLeft className="text-xl" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold flex items-center space-x-3">
                <FaShoppingBag />
                <span>Buyurtma Savati</span>
              </h1>
              <p className="text-white/90 mt-1">{cartItems.length} ta mahsulot</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom px-4 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Savat bo'sh</h3>
            <p className="text-gray-600 mb-6">Siz hali hech narsa tanlamadingiz</p>
            <button
              onClick={() => navigate('/menu')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Menyuni ko'rish
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-dark">Savatdagilar</h2>
                
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-primary font-bold">{formatPrice(item.price)} so'm</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          <FaMinus />
                        </button>
                        <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          <FaPlus />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-bold text-lg">{formatPrice(item.price * item.quantity)} so'm</p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 mt-2"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => navigate('/menu')}
                    className="text-primary hover:text-primary/80 font-bold flex items-center space-x-2"
                  >
                    <FaPlus />
                    <span>Yana taom qo'shish</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h2 className="text-2xl font-bold mb-6 text-dark">Buyurtma hisobi</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mahsulotlar:</span>
                    <span className="font-bold">{formatPrice(totalPrice)} so'm</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Yetkazib berish:</span>
                    <span className={`font-bold ${deliveryFee === 0 ? 'text-green-500' : ''}`}>
                      {deliveryFee === 0 ? 'Bepul' : formatPrice(deliveryFee) + ' so\'m'}
                    </span>
                  </div>
                  
                  {deliveryFee > 0 && totalPrice < 100000 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-sm text-yellow-800">
                        💡 100,000 so'mdan ortiq buyurtmalarda yetkazib berish bepul!
                      </p>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Jami:</span>
                      <span className="text-primary font-bold text-xl">{formatPrice(finalTotal)} so'm</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3">Yetkazib berish manzili</h3>
                  <input
                    type="text"
                    placeholder="Manzilingizni kiriting"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3">To'lov usuli</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="payment" defaultChecked className="text-primary" />
                      <span>Naqd pul</span>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="payment" className="text-primary" />
                      <span>Karta orqali</span>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="payment" className="text-primary" />
                      <span>Click yoki Payme</span>
                    </label>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                >
                  <FaCreditCard />
                  <span>Buyurtma berish ({formatPrice(finalTotal)} so'm)</span>
                </motion.button>
                
                <p className="text-gray-500 text-sm text-center mt-4">
                  Buyurtma berish orqali siz shartlarga rozilik bildirasiz
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;