import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import toast from 'react-hot-toast';
import { getCategoryName } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} добавлен в корзину!`);
  };

  return (
    <div className="card group h-full flex flex-col">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-[200px] object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded">
          {getCategoryName(product.category)}
        </span>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-gray-900">
            {product.price.toLocaleString()} сом
          </span>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary p-2 rounded-full group-hover:scale-110 transition"
            aria-label="Добавить в корзину"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;