import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-12 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Контакты</h1>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-blue-100">
              Мы всегда на связи и готовы ответить на ваши вопросы. 
              Свяжитесь с нами удобным для вас способом.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Как с нами связаться</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Телефон</h3>
                    <p className="text-gray-600 mt-1">+996 705 321 000</p>
                    <p className="text-gray-500 text-sm">Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600 mt-1">info@autocool.kg</p>
                    <p className="text-gray-500 text-sm">Мы отвечаем на все сообщения в течение рабочего дня</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Адрес</h3>
                    <p className="text-gray-600 mt-1">г. Бишкек, ул. Логвиненко, 23</p>
                    <p className="text-gray-500 text-sm">Офис и склад в одном месте</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <MessageSquare className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Мессенджеры</h3>
                    <div className="mt-3 flex space-x-4">
                      <a
                        href="https://wa.me/996705321000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                      >
                        WhatsApp
                      </a>
                      <a
                        href="https://t.me/autocool_kg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                      >
                        Telegram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Наше местоположение</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11695.569448589663!2d74.57136868139456!3d42.87555311621301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c50b8a0ba5%3A0x9c40e35408b6481!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1716245184387!5m2!1sru!2skg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AutoCool KG на карте"
                ></iframe>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Мы находимся в центре Бишкека, рядом с перекрестком ул. Логвиненко и ул. Киевская
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Остались вопросы?</h2>
          
          <form className="bg-gray-50 rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="form-label">Имя</label>
                <input type="text" id="name" className="form-input" />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-input" />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="form-label">Тема</label>
              <input type="text" id="subject" className="form-input" />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="form-label">Сообщение</label>
              <textarea id="message" rows={5} className="form-input"></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="btn btn-primary px-8 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Форма отправлена! В реальном приложении здесь был бы API-запрос.');
                }}
              >
                Отправить сообщение
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Часто задаваемые вопросы</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Есть ли у вас доставка в другие города?</h3>
              <p className="text-gray-600">
                Да, мы доставляем товары по всему Кыргызстану через курьерские службы. 
                Стоимость и сроки доставки зависят от города назначения.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Предоставляете ли вы гарантию на товары?</h3>
              <p className="text-gray-600">
                Мы предоставляем гарантию на все наши товары согласно условиям производителя. 
                Обычно гарантийный срок составляет от 1 до 6 месяцев в зависимости от типа товара.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Как я могу оплатить заказ?</h3>
              <p className="text-gray-600">
                Мы принимаем оплату наличными при самовывозе или доставке, а также безналичный 
                расчет для юридических лиц. Онлайн-оплата доступна по запросу.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Могу ли я вернуть товар?</h3>
              <p className="text-gray-600">
                Возврат товара возможен в течение 14 дней с момента покупки при сохранении 
                товарного вида и упаковки. Для некоторых типов товаров возврат может быть ограничен.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;