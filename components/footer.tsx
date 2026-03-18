import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Building2 } from 'lucide-react';

const footerLinks = {
  products: [
    { label: '安睡裤', href: '/products?category=pants' },
    { label: '卫生巾', href: '/products?category=pads' },
    { label: '护垫', href: '/products?category=pads' },
    { label: '组合套装', href: '/products' },
  ],
  support: [
    { label: '常见问题', href: '/faq' },
    { label: '配送说明', href: '/shipping' },
    { label: '退换政策', href: '/returns' },
    { label: '联系我们', href: '/contact' },
  ],
  company: [
    { label: '关于我们', href: '/about' },
    { label: '品牌故事', href: '/story' },
    { label: '加入我们', href: '/careers' },
    { label: '隐私政策', href: '/privacy' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Mollis</span>
            </Link>
            <p className="text-gray-600 text-sm mb-6 max-w-sm">
              专注女性卫生护理，提供高品质的安睡裤、卫生巾等产品。
              让每一位女性在特殊时期都能感受到舒适与安心。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Building2 className="w-4 h-4 text-pink-500" />
                <span>浙江珍琦护理用品有限公司</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-pink-500" />
                <span>0571-63595008</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-pink-500" />
                <span>客服热线：400-809-5280</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-pink-500" />
                <span>shenchunming@hzzhenqi.com.cn</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span>浙江省杭州市富阳区场口镇盘龙山路6号</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">产品系列</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">客户服务</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">关于我们</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Mollis. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> for your comfort
          </p>
        </div>
      </div>
    </footer>
  );
}
