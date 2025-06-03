import React from 'react';
import { Award, Clock, Users, Truck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">О компании</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-blue-100">
              AutoCool KG — ведущий поставщик запчастей и комплектующих 
              для автокондиционеров в Кыргызстане. Мы сотрудничаем с СТО, 
              магазинами и частными клиентами уже более 5 лет.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-700 mb-4">
                Компания AutoCool KG была основана в 2018 году группой специалистов 
                по автомобильным системам кондиционирования с целью обеспечить рынок Кыргызстана 
                качественными комплектующими по доступным ценам.
              </p>
              <p className="text-gray-700 mb-4">
                Начав с небольшого офиса в Бишкеке, сегодня мы выросли в крупного поставщика
                запчастей для автокондиционеров по всей стране, сотрудничаем с ведущими 
                производителями и обслуживаем сотни клиентов ежемесячно.
              </p>
              <p className="text-gray-700">
                Наша миссия — обеспечивать клиентов высококачественными комплектующими 
                для систем кондиционирования автомобилей и предоставлять профессиональную 
                консультацию по их выбору и эксплуатации.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="AutoCool KG Office" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Качество</h3>
              <p className="text-gray-600">
                Мы работаем только с проверенными производителями и поставщиками, 
                предлагая нашим клиентам товары высокого качества.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Опыт</h3>
              <p className="text-gray-600">
                Более 5 лет опыта работы на рынке автомобильных 
                кондиционеров позволяет нам предлагать лучшие решения.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Клиенты</h3>
              <p className="text-gray-600">
                Нам доверяют сотни автосервисов, магазинов и частных 
                клиентов по всему Кыргызстану.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Truck className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Доставка</h3>
              <p className="text-gray-600">
                Быстрая доставка по всему Кыргызстану и удобные
                способы оплаты для всех наших клиентов.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Наша команда</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Азамат Каримов"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Азамат Каримов</h3>
                <p className="text-primary-600 mb-4">Директор</p>
                <p className="text-gray-600">
                  Более 10 лет опыта в сфере автомобильных систем кондиционирования 
                  и логистики автозапчастей.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Айнура Сатыбалдиева"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Айнура Сатыбалдиева</h3>
                <p className="text-primary-600 mb-4">Менеджер по продажам</p>
                <p className="text-gray-600">
                  Специалист по работе с клиентами с опытом более 7 лет. 
                  Поможет подобрать необходимые детали для вашего автомобиля.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Бакыт Эсенкулов"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Бакыт Эсенкулов</h3>
                <p className="text-primary-600 mb-4">Технический специалист</p>
                <p className="text-gray-600">
                  Эксперт по системам кондиционирования автомобилей.
                  Проводит консультации по подбору и установке комплектующих.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Наши партнеры</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold">DENSO</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold">SANDEN</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold">VALEO</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold">DELPHI</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;