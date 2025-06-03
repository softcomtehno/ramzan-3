import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <svg width="32" height="32" viewBox="0 0 24 24" className="text-primary-800 fill-current">
                <rect width="24" height="24" rx="4" />
                <path d="M6.5 10.5C7.88071 10.5 9 9.38071 9 8C9 6.61929 7.88071 5.5 6.5 5.5C5.11929 5.5 4 6.61929 4 8C4 9.38071 5.11929 10.5 6.5 10.5Z" className="fill-white" />
                <path d="M17.5 10.5C18.8807 10.5 20 9.38071 20 8C20 6.61929 18.8807 5.5 17.5 5.5C16.1193 5.5 15 6.61929 15 8C15 9.38071 16.1193 10.5 17.5 10.5Z" className="fill-white" />
                <path d="M6 12.5H18C19.1046 12.5 20 13.3954 20 14.5V16.5C20 17.6046 19.1046 18.5 18 18.5H6C4.89543 18.5 4 17.6046 4 16.5V14.5C4 13.3954 4.89543 12.5 6 12.5Z" className="fill-white" />
                <path d="M10 7L14 7" className="stroke-primary-800" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-xl text-primary-800">AutoCool KG</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary-700 font-medium">Главная</Link>
              <Link to="/catalog" className="text-gray-700 hover:text-primary-700 font-medium">Каталог</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-700 font-medium">О компании</Link>
              <Link to="/contacts" className="text-gray-700 hover:text-primary-700 font-medium">Контакты</Link>
            </nav>

            {/* Cart and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Link to="/order" className="relative p-2">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span>
                )}
              </Link>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 shadow-md animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-700 font-medium py-2">Главная</Link>
              <Link to="/catalog" className="text-gray-700 hover:text-primary-700 font-medium py-2">Каталог</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-700 font-medium py-2">О компании</Link>
              <Link to="/contacts" className="text-gray-700 hover:text-primary-700 font-medium py-2">Контакты</Link>
              <Link to="/order" className="text-primary-700 font-medium py-2 flex items-center">
                Корзина
                {totalItems > 0 && (
                  <span className="ml-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">{totalItems}</span>
                )}
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;