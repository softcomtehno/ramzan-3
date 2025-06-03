import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AutoCool KG</h3>
            <p className="text-gray-300 mb-4">
              Поставщик запчастей и комплектующих для автокондиционеров в Кыргызстане.
              Мы сотрудничаем с СТО, магазинами и частными клиентами.
            </p>
            <p className="text-gray-400 text-sm">© 2025 AutoCool KG. Все права защищены.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Быстрые ссылки</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-blue-400 transition">Главная</Link></li>
              <li><Link to="/catalog" className="hover:text-blue-400 transition">Каталог</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">О компании</Link></li>
              <li><Link to="/contacts" className="hover:text-blue-400 transition">Контакты</Link></li>
              <li><Link to="/order" className="hover:text-blue-400 transition">Оформить заказ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Свяжитесь с нами</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+996 705 321 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@autocool.kg</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>г. Бишкек, ул. Логвиненко, 23</span>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://wa.me/996705321000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/autocool_kg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;