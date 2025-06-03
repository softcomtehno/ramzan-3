import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Package, Shield } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  // Get 4 popular products for showcase
  const popularProducts = products.slice(0, 4);
  
  // Define categories for display
  const categories = [
    { id: 'compressors', name: 'Компрессоры', icon: '🔧' },
    { id: 'radiators', name: 'Радиаторы', icon: '❄️' },
    { id: 'refrigerant', name: 'Фреон и масла', icon: '💧' },
    { id: 'pipes', name: 'Трубки и фитинги', icon: '🔄' },
    { id: 'electrical', name: 'Электрика', icon: '⚡' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-800 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-primary-900/80"></div>
          <img
            src="https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Auto Air Conditioning"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Все для автокондиционеров в одном месте
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Широкий ассортимент запчастей и комплектующих для ремонта и обслуживания автомобильных кондиционеров
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="btn btn-accent text-base">
                Перейти в каталог
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contacts" className="btn bg-white text-primary-800 hover:bg-gray-100 text-base">
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Популярные товары</h2>
            <Link to="/catalog" className="text-primary-700 hover:text-primary-800 font-medium flex items-center">
              Все товары
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Категории товаров</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map(category => (
              <Link 
                key={category.id} 
                to={`/catalog?category=${category.id}`}
                className="card flex flex-col items-center p-6 bg-gray-50 hover:bg-primary-50 hover:scale-105 transition-all duration-300"
              >
                <span className="text-3xl mb-3">{category.icon}</span>
                <h3 className="font-medium text-center">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Наши преимущества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Truck className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-3">Опт и розница</h3>
              <p>Мы работаем как с оптовыми клиентами, так и с розничными покупателями по всему Кыргызстану</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Package className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-3">Доставка</h3>
              <p>Отправляем товары в любой город Кыргызстана через надежные службы доставки</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Shield className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-3">Гарантия</h3>
              <p>Предоставляем гарантию на все товары и консультацию по их установке и эксплуатации</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Готовы сделать заказ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Выберите необходимые товары в нашем каталоге и оформите заказ онлайн или свяжитесь с нами для получения консультации
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/catalog" className="btn btn-primary text-base px-8 py-3">
              Перейти в каталог
            </Link>
            <Link to="/contacts" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 text-base px-8 py-3">
              Связаться с менеджером
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;