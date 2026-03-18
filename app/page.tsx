import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/components/product-card';
import { getFeaturedProducts } from '@/data/products';
import { ArrowRight, Shield, Truck, Clock, Heart, Star, Check } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section - 全屏背景图 + 渐变遮罩 */}
      <section className="relative min-h-screen overflow-hidden">
        {/* 背景图片层 */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80"
            alt="生活方式背景"
            fill
            className="object-cover"
            priority
          />
          {/* 渐变遮罩 - 进一步降低透明度让背景更清晰 */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/50 via-pink-800/35 to-pink-600/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                <Heart className="w-4 h-4" />
                <span>专注女性健康护理</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                舒适护理
                <span className="block text-pink-200">安心每一天</span>
              </h1>
              <p className="text-lg text-white max-w-lg drop-shadow-md">
                高品质卫生护理产品，安睡裤、卫生巾等专业护理用品。
                让每一位女性在特殊时期都能感受到舒适与安心。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-700 font-semibold rounded-full hover:bg-pink-50 transition-colors shadow-lg"
                >
                  立即选购
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/products?category=pants"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-full border-2 border-white/40 hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  了解安睡裤
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
                  <span className="text-white drop-shadow-md">4.9/5 (12,000+ 好评)</span>
                </div>
              </div>
            </div>
            
            {/* 右侧展示 */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="自信女性"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 浮动卡片 */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
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

      {/* 品牌故事区 - 全屏背景 */}
      <section className="relative py-20 overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1545205597-3dd9c08a82c9?w=1920&q=80"
            alt="品牌背景"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80"
                      alt="自信女性"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                      alt="快乐客户"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
                      alt="放松时刻"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80"
                      alt="微笑女性"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                由女性设计，<br />
                <span className="text-pink-600">为女性而生</span>
              </h2>
              <p className="text-lg text-gray-800">
                我们深知每位女性都值得在特殊时期感到舒适与自信。
                我们的产品采用优质材料与创新技术，精心打造。
              </p>
              <div className="space-y-4">
                {[
                  '来自认证有机农场的优质棉材',
                  '先进防漏技术，安心无忧',
                  '皮肤科测试，敏感肌适用',
                  '环保可持续材料'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-pink-600" />
                    </div>
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors"
              >
                探索产品
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features - 全屏背景 */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1920&q=80"
            alt="功能背景"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/75 to-white/70" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg border border-white/50">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">安全认证</h3>
                <p className="text-sm text-gray-700">通过多项国际安全认证，无荧光剂，敏感肌适用</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg border border-white/50">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">隐私配送</h3>
                <p className="text-sm text-gray-700">保密包装，快速送达，全程物流追踪</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg border border-white/50">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">无忧售后</h3>
                <p className="text-sm text-gray-700">7天无理由退换，专业客服在线解答</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - 全屏背景 */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1920&q=80"
            alt="产品背景"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/75 via-gray-50/70 to-gray-50/75" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">热门产品</h2>
              <p className="text-gray-700 mt-2">精选优质护理产品，给您贴心呵护</p>
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

      {/* 用户评价区 - 全屏背景 */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
            alt="评价背景"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50/75 via-pink-50/70 to-pink-50/75" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">用户真实评价</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: '美国纽约',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                rating: 5,
                text: '终于找到了一个真正理解女性需求的品牌！安睡裤简直是改变生活的产品！'
              },
              {
                name: 'Emma Wilson',
                location: '英国伦敦',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
                rating: 5,
                text: '超级舒适可靠，终于可以整夜安睡不用担心了。强烈推荐！'
              },
              {
                name: 'Lisa Anderson',
                location: '澳大利亚悉尼',
                avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
                rating: 5,
                text: '品质 amazing，客服服务一流。已经推荐给所有朋友了！'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white/65 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
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
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - 全屏背景 */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80"
            alt="分类背景"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">产品分类</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/products?category=pants" className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                alt="安睡裤"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">安睡裤系列</h3>
                <p className="text-white/90">360度全方位防漏，整夜安心睡眠</p>
              </div>
            </Link>
            <Link href="/products?category=pads" className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80"
                alt="卫生巾"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">卫生巾系列</h3>
                <p className="text-white/90">纯棉亲肤，轻薄透气</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
