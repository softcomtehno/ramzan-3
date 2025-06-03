import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-primary-800 mb-2">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Страница не найдена</h2>
        <p className="text-gray-600 mb-8">
          Извините, запрашиваемая вами страница не существует или была перемещена.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary inline-flex items-center"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;