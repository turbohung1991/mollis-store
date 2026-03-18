import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/components/product-card';
import { getFeaturedProducts } from '@/data/products';
import { ArrowRight, Shield, Truck, Clock, Heart, Star, Check } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section - 添加欧美女士背景 */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* 背景图片层 */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80"
            alt="Lifestyle background"
            fill
            className="object-cover"
            priority
          />
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-pink-800/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                <Heart className="w-4 h-4" />
                <span>Trusted by 1M+ Women Worldwide</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Feel Confident
                <span className="block text-pink-200">Every Single Day</span>
              </h1>
              <p className="text-lg text-white/90 max-w-lg">
                Premium feminine care products designed for modern women. 
                Experience ultimate comfort and protection with our medical-grade sanitary solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-700 font-semibold rounded-full hover:bg-pink-50 transition-colors shadow-lg"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/products?category=pants"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Explore Period Pants
                </Link>
              </div>
              
              {/* 信任指标 */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/80">4.9/5 (12,000+ reviews)</span>
                </div>
              </div>
            </div>
            
            {/* 右侧产品展示 */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="Happy woman using product"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 浮动卡片 */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Medical Grade</p>
                    <p className="text-sm text-gray-500">FDA Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌故事区 - 添加欧美女士图片 */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80"
                      alt="Confident woman"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                      alt="Happy customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
                      alt="Relaxed woman"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80"
                      alt="Smiling woman"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Designed by Women,<br />
                <span className="text-pink-600">For Women</span>
              </h2>
              <p className="text-lg text-gray-600">
                We understand that every woman deserves to feel comfortable and confident, 
                especially during her period. Our products are thoughtfully crafted with 
                premium materials and innovative technology.
              </p>
              <div className="space-y-4">
                {[
                  'Premium cotton from certified organic farms',
                  'Advanced leak-proof technology',
                  'Dermatologically tested for sensitive skin',
                  'Eco-friendly and sustainable materials'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-pink-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors"
              >
                Discover Our Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Safety Certified</h3>
                <p className="text-sm text-gray-600">FDA approved, no荧光剂, suitable for sensitive skin</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Discreet Shipping</h3>
                <p className="text-sm text-gray-600">Private packaging, fast delivery with tracking</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Worry-Free Returns</h3>
                <p className="text-sm text-gray-600">7-day no-questions-asked return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
              <p className="text-gray-600 mt-2">Our most loved products by customers worldwide</p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-2 text-pink-600 font-medium hover:text-pink-700"
            >
              View All
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

      {/* 用户评价区 - 添加欧美女士头像 */}
      <section className="py-20 bg-pink-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: 'New York, USA',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                rating: 5,
                text: 'Finally found a brand that understands what women need. The period pants are a game changer!'
              },
              {
                name: 'Emma Wilson',
                location: 'London, UK',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
                rating: 5,
                text: 'Super comfortable and reliable. I can sleep through the night without any worries.'
              },
              {
                name: 'Lisa Anderson',
                location: 'Sydney, Australia',
                avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
                rating: 5,
                text: 'The quality is amazing and the customer service is top-notch. Highly recommend!'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Shop by Category</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/products?category=pants" className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                alt="Period Pants"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Period Pants</h3>
                <p className="text-white/80">360° protection for peaceful nights</p>
              </div>
            </Link>
            <Link href="/products?category=pads" className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80"
                alt="Sanitary Pads"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Sanitary Pads</h3>
                <p className="text-white/80">Pure cotton, ultra-thin comfort</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
