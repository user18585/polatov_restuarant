import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaFilter, FaFire, FaLeaf, FaStar, FaShoppingCart, FaHome } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MenuPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Kategoriyalar
  const categories = [
    { id: 'all', name: 'Barchasi', icon: '🍽️' },
    { id: 'milliy', name: 'Milliy Taomlar', icon: '🇺🇿' },
    { id: 'fastfood', name: 'Fast Food', icon: '🍔' },
    { id: 'ichimliklar', name: 'Ichimliklar', icon: '🥤' },
    { id: 'salatlar', name: 'Salatlar', icon: '🥗' },
    { id: 'shirinlik', name: 'Shirinliklar', icon: '🍰' },
    { id: 'nonushta', name: 'Nonushta', icon: '🥞' },
    { id: 'baliq', name: 'Baliq Taomlari', icon: '🐟' },
    { id: 'kaboblar', name: 'Kaboblar', icon: '🍢' },
    { id: 'vegetarian', name: 'Vegetarian', icon: '🌿' },
  ];

  // Mahsulotlar ma'lumotlari
  const allProducts = {
    milliy: [
      { id: 1, name: 'Osh', description: 'An\'anaviy O\'zbek oshi, qo\'y go\'shti bilan', price: 35000, image: 'https://cdn.tasteatlas.com/images/dishes/27db9824904b49ec8e4164ce73bafb12.jpg?w=600', popular: true, special: false },
      { id: 2, name: 'Manti', description: 'Qo\'y go\'shtli 12 dona manti', price: 25000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqx7XonzfyW6yV-FXxelOFl1p6PE66g2PuQ&s', popular: true, special: true },
      { id: 3, name: 'Shashlik', description: 'Molo go\'shtidan tayyorlangan 6 dona', price: 30000, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 4, name: 'Norin', description: 'An\'anaviy O\'zbek norini, qazi bilan', price: 28000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQLGb4QGSGlMlg8S65bnb8WkFf_OjQctDhQ&s', popular: false, special: true },
      { id: 5, name: 'Qovurma Lag\'mon', description: 'Qo\'y go\'shti bilan lag\'mon', price: 32000, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 6, name: 'Mastava', description: 'Sutli mastava, qo\'y go\'shti bilan', price: 22000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimeACutHIlfQAioxeGrhKRci_a52Rm7_JhQ&s', popular: false, special: false },
      { id: 7, name: 'Chuchvara', description: 'Qo\'y go\'shtli 30 dona chuchvara', price: 24000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLA6GLC_b-GomQNPbsYzz0fKvy9eOBAyphdg&s', popular: true, special: false },
      { id: 8, name: 'Dimlama', description: 'Qo\'y go\'shti va sabzavotlar bilan', price: 33000, image: 'https://i.ytimg.com/vi/mLt-jKATuDs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDnrm9zDX3G1z41wsBymtoQxD-MPQ ', popular: false, special: true },
      { id: 9, name: 'Beshbarmoq', description: 'Qo\'y go\'shti bilan beshbarmoq', price: 36000, image: 'https://avatars.mds.yandex.net/get-altay/11622009/2a0000018f81fe8d233257fbeea840c6345e/L_height', popular: true, special: true },
      { id: 10, name: 'Somsa', description: 'Tandirda pishirilgan 4 dona somsa', price: 20000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oJjxm7SrAHP112gHcB5RJkLYom4AgzLlzg&s', popular: true, special: false },
    ],
    fastfood: [
      { id: 11, name: 'Burger Deluxe', description: 'Go\'shtli klassik burger kartoshka fri bilan', price: 22000, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 12, name: 'Pizza Margarita', description: 'Pishloqli klassik pizza', price: 45000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboolyqwSRB0V5JHNy_IX7Z-atkeTJ8mm7zw&s', popular: true, special: true },
      { id: 13, name: 'Lavash Maxsus', description: 'To\'yimli go\'shtli lavash', price: 18000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsCUODNmpVrPVuIMPULHHPZOxEYCPTi-kDg&s', popular: true, special: false },
      { id: 14, name: 'Hot-Dog', description: '2 dona klassik hot-dog', price: 15000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeLkcqgOn3kYqsOfP0m7pfCNh2OOQXuL4hg&s', popular: false, special: false },
      { id: 15, name: 'Kartoshka Fri', description: 'Katta hajmdagi kartoshka fri', price: 12000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNq8mqTFowGJK_VCH0oa9c2lYCMJMAHAkKWg&s', popular: true, special: false },
      { id: 16, name: 'Chicken Wings', description: '12 dona qovurilgan qanot', price: 28000, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: true },
      { id: 17, name: 'Doner', description: 'Tovuq go\'shtli doner', price: 19000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ErUbDOX94RoLfRBiEd4XmPtI8RlPHeOmGA&s', popular: false, special: false },
      { id: 18, name: 'Cheeseburger', description: 'Pishloqli burger', price: 20000, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 19, name: 'Pizza Pepperoni', description: 'Pepperoni va pishloqli pizza', price: 48000, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: true },
      { id: 20, name: 'Nachos', description: 'Pishloqli nachos', price: 18000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ui4fvm7xt0Z30qeSjF9ZnSSxjfgpcMCWew&s', popular: false, special: false },
    ],
    ichimliklar: [
      { id: 21, name: 'Ko\'k Choy', description: 'Yaxshi damlangan ko\'k choy', price: 5000, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 22, name: 'Qora Choy', description: 'Yaxshi damlangan qora choy', price: 5000, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 23, name: 'Arabcha Kofe', description: 'Turkcha kofe', price: 15000, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: true },
      { id: 24, name: 'Latte', description: 'Sutli latte', price: 18000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrc2tPztEd3gDD0g_tw2hoFgQzY6oclHt3FQ&s800&q=80', popular: true, special: false },
      { id: 27, name: 'Fresh Sok', description: 'Yangi siqilgan apelsin sharbati', price: 15000, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: true },
      { id: 28, name: 'Coca-Cola', description: 'Sovuq ichimlik', price: 8000, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 29, name: 'Fanta', description: 'Apelsinli ichimlik', price: 8000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PLObngBdDxrbdu6Ib72cGLFaG7NuQg6jzQ&s', popular: false, special: false },
      { id: 30, name: 'Suv', description: '0.5L mineral suv', price: 3000, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
    ],
    salatlar: [
      { id: 31, name: 'Sezar Salat', description: 'Tovuq go\'shti bilan Sezar salat', price: 22000, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 32, name: 'Grecheskiy Salat', description: 'Yunoncha salat', price: 20000, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: true },
      { id: 33, name: 'Olivye', description: 'An\'anaviy Olivye salati', price: 18000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP97Q9gUPJ_Z2g_ywrZiLkaYi9-9Dc9kEoBw&s', popular: true, special: false },
      { id: 34, name: 'Mimoza', description: 'Baliqli Mimoza salati', price: 24000, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false, special: false },
      { id: 35, name: 'Vitamin', description: 'Sabzavotli vitamin salat', price: 16000, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false, special: true },
    ],
    shirinlik: [
      { id: 36, name: 'Napaleon Tort', description: 'Klassik Napoleon torti', price: 12000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFAJTSItZNbwxicUtom_OUNhukhqj7GLo6w&s', popular: true, special: false },
      { id: 37, name: 'Chocolate Cake', description: 'Shokoladli tort', price: 15000, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: true },
      { id: 38, name: 'Cheesecake', description: 'Yangi mevali cheesecake', price: 18000, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 39, name: 'Murabbo', description: 'Uy sharoitida tayyorlangan murabbo', price: 8000, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false, special: false },
      { id: 40, name: 'Ice Cream', description: '3 turdagi muzqaymoq', price: 10000, image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
    ],
    nonushta: [
      { id: 41, name: 'Nonushta Set', description: 'Tuxum, kolbasa, pishloq, non', price: 25000, image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 42, name: 'Omlit', description: '3 tuxumli omlit', price: 15000, image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 43, name: 'Sosiska Tuxum', description: 'Sosiska va qovurilgan tuxum', price: 18000, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false, special: true },
      { id: 44, name: 'Blini', description: '5 dona blini jam bilan', price: 22000, image: 'https://vikalinka.com/wp-content/uploads/2019/09/Russian-Crepes-Blini-20-Edit-500x500.jpg', popular: true, special: false },
    ],
    baliq: [
      { id: 45, name: 'Qovurilgan Baliq', description: 'Limon bilan qovurilgan baliq', price: 35000, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: true },
      { id: 46, name: 'Baliq Shashlik', description: 'Grildagi baliq shashlik', price: 32000, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false, special: false },
      { id: 47, name: 'Baliq Baliq', description: 'Bug\'doy bilan baliq', price: 38000, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: true },
    ],
    kaboblar: [
      { id: 48, name: 'Tovuq Kabob', description: '12 dona tovuq kabob', price: 28000, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 49, name: 'Mol Go\'shti Kabob', description: '8 dona mol go\'shti kabob', price: 32000, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: true },
      { id: 50, name: 'Jigar Kabob', description: '6 dona jigar kabob', price: 25000, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false, special: false },
    ],
    vegetarian: [
      { id: 51, name: 'Vegetarian Osh', description: 'Sabzavotli osh', price: 28000, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false, special: true },
      { id: 52, name: 'Sabzavotli Lag\'mon', description: 'Sabzavotlar bilan lag\'mon', price: 25000, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: true, special: false },
      { id: 53, name: 'Falafel', description: '12 dona falafel', price: 20000, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', popular: false, special: false },
    ],
  };

  // Barcha mahsulotlarni bitta massivga yig'amiz
  const allProductsArray = Object.values(allProducts).flat();

  // Filtrlangan mahsulotlar
  const filteredProducts = activeCategory === 'all' 
    ? allProductsArray.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProducts[activeCategory].filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Savatga qo'shish
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    setCartCount(prev => prev + 1);
    toast.success(`${product.name} savatga qo'shildi!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Narxni formatlash
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white sticky top-0 z-50 shadow-lg">
        <div className="container-custom px-4 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:text-gray-200 transition-colors"
            >
              <FaHome className="text-xl" />
              <span className="font-medium">Bosh sahifa</span>
            </button>
            
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              <span className="text-white">Polatov</span>
              <span className="text-yellow-300"> Menyusi</span>
            </h1>
            
            <div className="relative">
              <button 
                onClick={() => navigate('/cart')}
                className="flex items-center space-x-2 hover:text-gray-200 transition-colors"
              >
                <FaShoppingCart className="text-xl" />
                <span className="font-medium">Savat ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="container-custom px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Taom nomi bo'yicha qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-lg"
            />
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <FaFilter className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container-custom px-4 py-4">
        <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 flex items-center space-x-2 px-4 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium whitespace-nowrap">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-custom px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-dark mb-2">
            {activeCategory === 'all' ? 'Barcha Taomlar' : categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} ta mahsulot topildi
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Mahsulot topilmadi</h3>
            <p className="text-gray-600">Boshqa so'z bilan qidiring yoki kategoriyani o'zgartiring</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex space-x-2">
                    {product.popular && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <FaFire className="mr-1" /> Mashhur
                      </span>
                    )}
                    {product.special && (
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <FaStar className="mr-1" /> Maxsus
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full shadow-lg transition-colors duration-300"
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-dark">{product.name}</h3>
                    <span className="text-primary font-bold text-xl">
                      {formatPrice(product.price)} so'm
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaShoppingCart />
                      <span>Savatga</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Summary */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-2xl shadow-2xl"
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FaShoppingCart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-white text-primary w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  {cartCount}
                </span>
              </div>
              <div>
                <p className="font-bold">Savatda {cartCount} ta mahsulot</p>
                <p className="text-sm opacity-90">
                  Jami: {formatPrice(cart.reduce((sum, item) => sum + item.price, 0))} so'm
                </p>
              </div>
              <button 
                onClick={() => navigate('/cart')}
                className="bg-white text-primary px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Buyurtma
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 bg-dark text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-40"
      >
        ↑
      </button>
    </div>
  );
};

export default MenuPage;