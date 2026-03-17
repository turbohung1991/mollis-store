import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductByHandle } from '@/data/products';
import { formatPriceCny } from '@/lib/utils';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { ProductCard } from '@/components/product-card';
import { getFeaturedProducts } from '@/data/products';
import { Check, Truck, Shield, RotateCcw } from 'lucide-react';

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductByHandle(params.handle);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} - CareComfort`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductByHandle(params.handle);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = getFeaturedProducts()
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-gray-500">
            <span>首页</span>
            <span className="mx-2">/</span>
            <span>商品</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100">
              <Image
                src={product.images[0]?.url}
                alt={product.images[0]?.altText}
                fill
                className="object-cover"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer hover:border-pink-300 transition-colors"
                  >
                    <Image
                      src={image.url}
                      alt={image.altText}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-3xl font-bold text-pink-600">
                  {formatPriceCny(product.price)}
                </span>
                {product.compareAtPrice && product.compareAtPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      {formatPriceCny(product.compareAtPrice)}
                    </span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">
                      省 {formatPriceCny(product.compareAtPrice - product.price)}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-6 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="w-5 h-5 text-green-500" />
                <span>现货供应，24小时内发货</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="w-5 h-5 text-pink-500" />
                <span>满99元包邮，隐私包装配送</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-pink-500" />
                <span>正品保证，假一赔十</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <RotateCcw className="w-5 h-5 text-pink-500" />
                <span>7天无理由退换</span>
              </div>
            </div>

            <AddToCartButton product={product} />

            {/* Description */}
            <div className="prose prose-pink max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">产品详情</h3>
              <div
                className="text-gray-600 space-y-4"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">相关推荐</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
