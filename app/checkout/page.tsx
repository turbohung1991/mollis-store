'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store';
import { formatPriceCny } from '@/lib/utils';
import { CreditCard, Check } from 'lucide-react';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const total = getTotalPrice();
  const shipping = total >= 99 ? 0 : 10;
  const finalTotal = total + shipping;

  const handlePayment = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setStep('success');
    clearCart();
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">购物车是空的</h1>
          <a href="/products" className="text-pink-600 hover:underline">去购物</a>
        </div>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">订单提交成功！</h1>
            <p className="text-gray-600 mb-8">感谢您的订购，我们会尽快为您发货。</p>
            <a href="/products" className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors">
              继续购物
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">结算</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${step === 'shipping' ? 'text-pink-600' : 'text-green-600'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'shipping' ? 'bg-pink-100' : 'bg-green-100'}`}>
                    {step === 'shipping' ? '1' : <Check className="w-5 h-5" />}
                  </div>
                  <span className="font-medium">配送信息</span>
                </div>
                <div className="flex-1 h-px bg-gray-200" />
                <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-pink-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-pink-100' : 'bg-gray-100'}`}>2</div>
                  <span className="font-medium">支付</span>
                </div>
              </div>
            </div>

            {step === 'shipping' ? (
              <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-6">
                <h2 className="text-lg font-bold text-gray-900">配送信息</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none" placeholder="收货人姓名" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">电话</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none" placeholder="手机号码" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">详细地址</label>
                  <textarea rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none" placeholder="省市区、街道、门牌号" />
                </div>
                <button onClick={() => setStep('payment')} className="w-full py-4 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors">继续支付</button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-6">
                <h2 className="text-lg font-bold text-gray-900">支付方式</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 border-2 border-pink-300 bg-pink-50 rounded-xl">
                    <div className="w-5 h-5 rounded-full border-2 border-pink-600 bg-pink-600 flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full" /></div>
                    <CreditCard className="w-6 h-6 text-pink-600" />
                    <span className="font-medium">信用卡/借记卡</span>
                  </div>
                </div>
                <button onClick={handlePayment} disabled={isProcessing} className="w-full py-4 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors disabled:opacity-50">
                  {isProcessing ? '处理中...' : `支付 ${formatPriceCny(finalTotal)}`}
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">订单摘要</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.product.images[0]?.url} alt={item.product.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">{item.product.title}</p>
                      <p className="text-xs text-gray-500">{item.variant.title} × {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium">{formatPriceCny(item.variant.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-gray-600"><span>商品小计</span><span>{formatPriceCny(total)}</span></div>
                <div className="flex justify-between text-gray-600"><span>运费</span><span>{shipping === 0 ? '免运费' : formatPriceCny(shipping)}</span></div>
                <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-200"><span>合计</span><span className="text-pink-600">{formatPriceCny(finalTotal)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
