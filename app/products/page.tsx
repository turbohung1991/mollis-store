'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { getProductsByCategory, collections } from '@/data/products';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const products = getProductsByCategory(category);
  const currentCollection = collections.find((c) => c.handle === category);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900">
            {currentCollection?.title || '全部商品'}
          </h1>
          <p className="text-gray-600 mt-2">
            {currentCollection?.description || '浏览我们的全部产品'}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="font-semibold text-gray-900 mb-4">分类</h2>
              <div className="space-y-2">
                {collections.map((collection) => (
                  <Link
                    key={collection.handle}
                    href={
                      collection.handle === 'all'
                        ? '/products'
                        : `/products?category=${collection.handle}`
                    }
                    className={cn(
                      'block px-4 py-2 rounded-lg text-sm transition-colors',
                      category === collection.handle
                        ? 'bg-pink-50 text-pink-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    )}
                  >
                    {collection.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                共 <span className="font-medium text-gray-900">{products.length}</span> 件商品
              </p>
            </div>
            
            {products.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500">暂无商品</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">加载中...</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}
