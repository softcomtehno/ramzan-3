import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import { products, getCategoryName } from '../data/products';
import { Product, ProductCategory } from '../types';
import ProductCard from '../components/ProductCard';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as ProductCategory | null;
  const searchQuery = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: 'compressors', name: 'Компрессоры' },
    { id: 'radiators', name: 'Радиаторы' },
    { id: 'refrigerant', name: 'Фреон и масла' },
    { id: 'pipes', name: 'Трубки и фитинги' },
    { id: 'electrical', name: 'Электрика' },
  ];

  // Filter and sort products based on category, search term, and sort order
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(lowerSearchTerm) || 
        product.description.toLowerCase().includes(lowerSearchTerm)
      );
    }
    
    // Sort by price
    result.sort((a, b) => 
      sortOrder === 'asc' 
        ? a.price - b.price 
        : b.price - a.price
    );
    
    setFilteredProducts(result);
    
    // Update URL search params
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (searchTerm) params.set('search', searchTerm);
    setSearchParams(params);
  }, [selectedCategory, searchTerm, sortOrder, setSearchParams]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already applied through the useEffect
  };

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
        
        <div className="lg:grid lg:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Категории</h2>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleCategoryChange(null)}
                    className={`w-full text-left px-2 py-1 rounded ${!selectedCategory ? 'bg-primary-100 text-primary-800' : 'hover:bg-gray-100'}`}
                  >
                    Все товары
                  </button>
                </li>
                {categories.map(category => (
                  <li key={category.id}>
                    <button 
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-2 py-1 rounded ${selectedCategory === category.id ? 'bg-primary-100 text-primary-800' : 'hover:bg-gray-100'}`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Сортировка по цене</h2>
                <button 
                  onClick={toggleSortOrder}
                  className="flex items-center px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
                >
                  {sortOrder === 'asc' ? 'По возрастанию ↑' : 'По убыванию ↓'}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters Button and Search */}
          <div className="lg:hidden mb-6">
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-3 py-2 bg-primary-100 text-primary-800 rounded-md"
              >
                <Filter className="w-5 h-5 mr-2" />
                Фильтры
              </button>
              
              <button 
                onClick={toggleSortOrder}
                className="flex items-center px-3 py-2 bg-gray-100 rounded-md"
              >
                {sortOrder === 'asc' ? 'Цена ↑' : 'Цена ↓'}
              </button>
            </div>
            
            {showFilters && (
              <div className="bg-white rounded-lg shadow p-4 mb-6 animate-fade-in">
                <h2 className="text-lg font-semibold mb-3">Категории</h2>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => handleCategoryChange(null)}
                    className={`px-3 py-1 rounded-full text-sm ${!selectedCategory ? 'bg-primary-100 text-primary-800' : 'bg-gray-100'}`}
                  >
                    Все
                  </button>
                  {categories.map(category => (
                    <button 
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category.id ? 'bg-primary-100 text-primary-800' : 'bg-gray-100'}`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Products Grid and Search */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full form-input pl-10 pr-4 py-3 rounded-lg"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </form>
            </div>
            
            {/* Category title */}
            {selectedCategory && (
              <h2 className="text-2xl font-semibold mb-6">{getCategoryName(selectedCategory)}</h2>
            )}
            
            {/* Results count */}
            <p className="mb-4 text-gray-600">
              Найдено товаров: <span className="font-medium">{filteredProducts.length}</span>
            </p>
            
            {/* Products grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-gray-600 mb-4">Попробуйте изменить параметры поиска или выбрать другую категорию.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchTerm('');
                  }}
                  className="btn btn-primary"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;