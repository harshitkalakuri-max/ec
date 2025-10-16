export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image_url: string;
  is_active: boolean;
  category_id: number;
}

export interface ProductResponseDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image_url: string;
  is_active: boolean;
  category_id: number;
}
