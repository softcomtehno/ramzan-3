export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
}

export type ProductCategory = 
  | 'compressors'
  | 'radiators'
  | 'refrigerant'
  | 'pipes'
  | 'electrical';

export interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  deliveryMethod: 'pickup' | 'courier';
  comment: string;
}