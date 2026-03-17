'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { formatPriceCny } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const firstVariant = product.variants[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (firstVariant) {
      addItem(product, firstVariant, 1);
    }
  };

  return (
    <Link href={`/product/${product.handle}`} className="group">
      <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <Image
            src={product.images[0]?.url || 'https://placehold.co/600x600/fbcfe8/831843?text=No+Image'}
            alt={product.images[0]?.altText || product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Sale badge */}
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              优惠
            </div>
          )}

          {/* Quick add button */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-pink-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-pink-50"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description.slice(0, 50)}...
          </p>
          
          {/* Price */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-lg font-bold text-pink-600">
              {formatPriceCny(product.price)}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-sm text-gray-400 line-through">
                {formatPriceCny(product.compareAtPrice)}
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-pink-50 text-pink-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
