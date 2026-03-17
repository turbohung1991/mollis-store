'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { formatPriceCny } from '@/lib/utils';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();
  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-pink-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">购物车是空的</h1>
            <p className="text-gray-600 mb-8">快去挑选心仪的商品吧</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors"
            >
              去购物
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">购物车</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-6"
              >
                {/* Image */}
                <Link
                  href={`/product/${item.product.handle}`}
                  className="relative w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={item.product.images[0]?.url}
                    alt={item.product.title}
                    fill
                    className="object-cover"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/product/${item.product.handle}`}
                    className="font-medium text-gray-900 hover:text-pink-600 transition-colors line-clamp-1"
                  >
                    {item.product.title}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">{item.variant.title}</p>
                  <p className="text-lg font-bold text-pink-600 mt-2">
                    {formatPriceCny(item.variant.price)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-pink-300 hover:bg-pink-50 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-pink-300 hover:bg-pink-50 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    {formatPriceCny(item.variant.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">订单摘要</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>商品小计</span>
                  <span>{formatPriceCny(total)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>运费</span>
                  <span>{total >= 99 ? '免运费' : formatPriceCny(10)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">合计</span>
                    <span className="font-bold text-pink-600 text-xl">
                      {formatPriceCny(total >= 99 ? total : total + 10)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors"
              >
                去结算
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-sm text-gray-500 text-center mt-4">
                满99元包邮，继续购物享受免运费
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
