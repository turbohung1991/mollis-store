export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  price: number;
  compareAtPrice?: number;
  images: ProductImage[];
  variants: ProductVariant[];
  tags: string[];
  category: string;
  featured: boolean;
  availableForSale: boolean;
}

export interface ProductImage {
  url: string;
  altText: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  availableForSale: boolean;
  quantityAvailable: number;
}

export interface CartItem {
  id: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
  totalQuantity: number;
  cost: {
    subtotalAmount: number;
    totalAmount: number;
    totalTaxAmount: number;
  };
}

export interface Collection {
  handle: string;
  title: string;
  description: string;
  image?: string;
}
