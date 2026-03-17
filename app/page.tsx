import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/components/product-card';
import { getFeaturedProducts } from '@/data/products';
import { ArrowRight, Shield, Truck, Clock, Heart } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-pink-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                <span>专注女性健康护理</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                舒适护理
                <span className="block text-pink-600">安心每一天</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                高品质卫生护理产品，安睡裤、卫生巾等专业护理用品。
                让每一位女性在特殊时期都能感受到舒适与安心。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors"
                >
                  立即选购
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/products?category=pants"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-semibold rounded-full border-2 border-pink-200 hover:border-pink-300 hover:bg-pink-50 transition-colors"
                >
                  了解安睡裤
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://placehold.co/800x800/fbcfe8/831843?text=Mollis+Hero"
                  alt="Mollis Products"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">品质保证</p>
                    <p className="text-sm text-gray-500">医用级标准</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">安全认证</h3>
                <p className="text-sm text-gray-600">通过多项国际安全认证，无荧光剂，敏感肌适用</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">隐私配送</h3>
                <p className="text-sm text-gray-600">保密包装，快速送达，全程物流追踪</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">无忧售后</h3>
                <p className="text-sm text-gray-600">7天无理由退换，专业客服在线解答</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">热门产品</h2>
              <p className="text-gray-600 mt-2">精选优质护理产品，给您贴心呵护</p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">产品分类</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/products?category=pants" className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src="https://placehold.co/800x600/f9a8d4/831843?text=安睡裤系列"
                alt="安睡裤"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">安睡裤系列</h3>
                <p className="text-white/80">360度全方位防漏，整夜安心睡眠</p>
              </div>
            </Link>
            <Link href="/products?category=pads" className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src="https://placehold.co/800x600/f472b6/ffffff?text=卫生巾系列"
                alt="卫生巾"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">卫生巾系列</h3>
                <p className="text-white/80">纯棉亲肤，轻薄透气</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
