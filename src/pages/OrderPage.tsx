import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ChevronLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const OrderPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryMethod: 'pickup',
    comment: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите номер телефона';
    } else if (!/^\+996\s\d{3}\s\d{3}\s\d{3}$/.test(formData.phone)) {
      newErrors.phone = 'Формат: +996 XXX XXX XXX';
    }
    
    if (formData.deliveryMethod === 'courier' && !formData.address.trim()) {
      newErrors.address = 'Пожалуйста, введите адрес доставки';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // In a real app, this would be an API call to submit the order
    console.log('Order submitted:', { items: cartItems, customerInfo: formData });
    
    // Show success message and clear cart
    setOrderSubmitted(true);
    clearCart();
    
    // In a production app, you'd redirect to a success page or show a modal
    toast.success('Заказ успешно оформлен!');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      address: '',
      deliveryMethod: 'pickup',
      comment: '',
    });
  };

  // Format phone number as user types
  const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    if (value.length === 0) {
      value = '';
    } else if (value.length <= 3) {
      value = `+${value}`;
    } else if (value.length <= 6) {
      value = `+${value.slice(0, 3)} ${value.slice(3)}`;
    } else if (value.length <= 9) {
      value = `+${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6)}`;
    } else if (value.length <= 12) {
      value = `+${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6, 9)} ${value.slice(9, 12)}`;
    }
    
    setFormData(prev => ({ ...prev, phone: value }));
  };

  if (orderSubmitted) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center bg-green-100 rounded-full">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold mb-4">Спасибо за ваш заказ!</h1>
            <p className="text-gray-600 mb-6">
              Мы получили ваш заказ и свяжемся с вами в ближайшее время для подтверждения.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="btn btn-primary">
                Вернуться на главную
              </Link>
              <Link to="/catalog" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold mb-4">Ваша корзина пуста</h1>
            <p className="text-gray-600 mb-6">
              Добавьте товары из нашего каталога, чтобы оформить заказ.
            </p>
            <Link to="/catalog" className="btn btn-primary">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container-custom max-w-6xl">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="mr-4 p-2 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-3xl font-bold">Оформление заказа</h1>
        </div>
        
        <div className="lg:grid lg:grid-cols-3 gap-8">
          {/* Cart Items - Desktop: right column, Mobile: top section */}
          <div className="lg:col-span-2 order-1 lg:order-none">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Товары в корзине</h2>
                <button 
                  onClick={clearCart}
                  className="flex items-center text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Очистить
                </button>
              </div>
              
              <div className="divide-y">
                {cartItems.map(item => (
                  <div key={item.product.id} className="py-4 flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-24 h-24 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.product.description.substring(0, 80)}...</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border rounded">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100"
                            aria-label="Уменьшить количество"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100"
                            aria-label="Увеличить количество"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-semibold">{item.product.price.toLocaleString()} сом</span>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-500 hover:text-red-600 p-1"
                            aria-label="Удалить товар"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t flex justify-between">
                <span className="text-lg font-semibold">Итого:</span>
                <span className="text-xl font-bold">{getTotalPrice().toLocaleString()} сом</span>
              </div>
            </div>
          </div>
          
          {/* Order Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Данные для заказа</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Имя <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Введите ваше имя"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={formatPhoneNumber}
                    className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="+996 XXX XXX XXX"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="deliveryMethod" className="form-label">
                    Способ доставки
                  </label>
                  <select
                    id="deliveryMethod"
                    name="deliveryMethod"
                    value={formData.deliveryMethod}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="pickup">Самовывоз</option>
                    <option value="courier">Доставка курьером</option>
                  </select>
                </div>
                
                {formData.deliveryMethod === 'courier' && (
                  <div className="mb-4">
                    <label htmlFor="address" className="form-label">
                      Адрес доставки <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`form-input ${errors.address ? 'border-red-500' : ''}`}
                      placeholder="Введите адрес доставки"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="comment" className="form-label">
                    Комментарий к заказу
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    rows={3}
                    className="form-input"
                    placeholder="Дополнительная информация к заказу"
                  />
                </div>
                
                <button type="submit" className="btn btn-accent w-full py-3 flex justify-center items-center">
                  Оформить заказ
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;