'use client';

import { useState } from 'react';
import { Product } from '@/types';
import { useCartStore } from '@/lib/store';
import { formatPriceCny } from '@/lib/utils';
import { ShoppingBag, Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showVariants, setShowVariants] = useState(false);
  
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product, selectedVariant, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      {/* Variant Selector */}
      {product.variants.length > 1 && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            规格: {selectedVariant?.title}
          </label>
          <div className="relative">
            <button
              onClick={() => setShowVariants(!showVariants)}
              className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded-xl hover:border-pink-300 transition-colors bg-white"
            >
              <span className="text-gray-900">{selectedVariant?.title}</span>
              <ChevronDown className={cn(
                "w-5 h-5 text-gray-400 transition-transform",
                showVariants && "rotate-180"
              )} />
            </button>
            
            {showVariants && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => {
                      setSelectedVariant(variant);
                      setShowVariants(false);
                    }}
                    className={cn(
                      "w-full px-4 py-3 text-left hover:bg-pink-50 transition-colors first:rounded-t-xl last:rounded-b-xl",
                      selectedVariant?.id === variant.id && "bg-pink-50 text-pink-600"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span>{variant.title}</span>
                      <span className="font-medium">{formatPriceCny(variant.price)}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">数量</label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-pink-300 hover:bg-pink-50 transition-colors"
          >
            -
          </button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-pink-300 hover:bg-pink-50 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={added}
        className={cn(
          "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all",
          added
            ? "bg-green-500 text-white"
            : "bg-pink-600 text-white hover:bg-pink-700"
        )}
      >
        {added ? (
          <>
            <Check className="w-5 h-5" />
            已加入购物车
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            加入购物车
          </>
        )}
      </button>
    </div>
  );
}
