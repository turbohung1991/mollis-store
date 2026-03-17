import { Product, Collection } from '@/types';

export const collections: Collection[] = [
  {
    handle: 'all',
    title: '全部商品',
    description: '所有卫生护理产品',
  },
  {
    handle: 'pants',
    title: '安睡裤',
    description: '整夜安心，舒适防漏',
  },
  {
    handle: 'pads',
    title: '卫生巾',
    description: '轻薄透气，贴心呵护',
  },
];

export const products: Product[] = [
  {
    id: 'prod_001',
    title: '云朵安睡裤 - 日用型',
    handle: 'cloud-sleep-pants-day',
    description: '超薄透气，360°全方位防漏。采用亲肤棉柔表层，敏感肌也能安心使用。立体护围设计，翻身也不怕侧漏。',
    descriptionHtml: '<p>超薄透气，360°全方位防漏。采用亲肤棉柔表层，敏感肌也能安心使用。立体护围设计，翻身也不怕侧漏。</p><ul><li>360°全方位防漏</li><li>超薄透气设计</li><li>亲肤棉柔表层</li><li>立体护围防侧漏</li></ul>',
    price: 29.9,
    compareAtPrice: 39.9,
    images: [
      { url: 'https://placehold.co/600x600/fbcfe8/831843?text=安睡裤-日用', altText: '云朵安睡裤日用型' },
      { url: 'https://placehold.co/600x600/fce7f3/be185d?text=产品细节1', altText: '产品细节展示' },
      { url: 'https://placehold.co/600x600/fdf2f8/9d174d?text=产品细节2', altText: '包装展示' },
    ],
    variants: [
      { id: 'var_001_s', title: 'S码(45-55kg)', price: 29.9, availableForSale: true, quantityAvailable: 100 },
      { id: 'var_001_m', title: 'M码(55-65kg)', price: 29.9, availableForSale: true, quantityAvailable: 150 },
      { id: 'var_001_l', title: 'L码(65-75kg)', price: 29.9, availableForSale: true, quantityAvailable: 120 },
    ],
    tags: ['安睡裤', '日用', '防漏', '透气'],
    category: 'pants',
    featured: true,
    availableForSale: true,
  },
  {
    id: 'prod_002',
    title: '云朵安睡裤 - 夜用加长型',
    handle: 'cloud-sleep-pants-night',
    description: '超长吸收芯体，整夜干爽。加宽臀部设计，提供更全面的保护。适合量大夜晚使用。',
    descriptionHtml: '<p>超长吸收芯体，整夜干爽。加宽臀部设计，提供更全面的保护。适合量大夜晚使用。</p><ul><li>超长吸收芯体</li><li>加宽臀部保护</li><li>超大吸收量</li><li>整夜干爽舒适</li></ul>',
    price: 35.9,
    compareAtPrice: 45.9,
    images: [
      { url: 'https://placehold.co/600x600/f9a8d4/831843?text=安睡裤-夜用', altText: '云朵安睡裤夜用加长型' },
      { url: 'https://placehold.co/600x600/fbcfe8/be185d?text=夜用细节', altText: '夜用加长设计' },
    ],
    variants: [
      { id: 'var_002_m', title: 'M码(55-65kg)', price: 35.9, availableForSale: true, quantityAvailable: 80 },
      { id: 'var_002_l', title: 'L码(65-75kg)', price: 35.9, availableForSale: true, quantityAvailable: 100 },
      { id: 'var_002_xl', title: 'XL码(75-85kg)', price: 35.9, availableForSale: true, quantityAvailable: 60 },
    ],
    tags: ['安睡裤', '夜用', '加长', '大吸收量'],
    category: 'pants',
    featured: true,
    availableForSale: true,
  },
  {
    id: 'prod_003',
    title: '纯棉卫生巾 - 日用超薄',
    handle: 'cotton-pads-day-ultra-thin',
    description: '100%纯棉表层，天然亲肤无刺激。0.1cm超薄设计，轻薄无感。瞬吸导流层，快速锁住潮涌。',
    descriptionHtml: '<p>100%纯棉表层，天然亲肤无刺激。0.1cm超薄设计，轻薄无感。瞬吸导流层，快速锁住潮涌。</p><ul><li>100%纯棉表层</li><li>0.1cm超薄设计</li><li>瞬吸导流技术</li><li>透气底膜不闷热</li></ul>',
    price: 19.9,
    compareAtPrice: 25.9,
    images: [
      { url: 'https://placehold.co/600x600/f472b6/ffffff?text=卫生巾-日用', altText: '纯棉卫生巾日用超薄' },
      { url: 'https://placehold.co/600x600/ec4899/ffffff?text=纯棉表层', altText: '纯棉表层细节' },
    ],
    variants: [
      { id: 'var_003_240', title: '240mm 10片装', price: 19.9, availableForSale: true, quantityAvailable: 200 },
      { id: 'var_003_240_30', title: '240mm 30片装', price: 49.9, availableForSale: true, quantityAvailable: 150 },
    ],
    tags: ['卫生巾', '日用', '超薄', '纯棉'],
    category: 'pads',
    featured: true,
    availableForSale: true,
  },
  {
    id: 'prod_004',
    title: '纯棉卫生巾 - 夜用超长',
    handle: 'cotton-pads-night-long',
    description: '420mm超长保护，安心睡眠一整晚。加宽尾翼设计，有效防止后漏。纯棉亲肤，敏感肌适用。',
    descriptionHtml: '<p>420mm超长保护，安心睡眠一整晚。加宽尾翼设计，有效防止后漏。纯棉亲肤，敏感肌适用。</p><ul><li>420mm超长尺寸</li><li>加宽尾翼防后漏</li><li>纯棉亲肤表层</li><li>超大吸收量</li></ul>',
    price: 22.9,
    compareAtPrice: 28.9,
    images: [
      { url: 'https://placehold.co/600x600/db2777/ffffff?text=卫生巾-夜用', altText: '纯棉卫生巾夜用超长' },
      { url: 'https://placehold.co/600x600/be185d/ffffff?text=420mm长度', altText: '超长420mm展示' },
    ],
    variants: [
      { id: 'var_004_420', title: '420mm 8片装', price: 22.9, availableForSale: true, quantityAvailable: 180 },
      { id: 'var_004_420_24', title: '420mm 24片装', price: 59.9, availableForSale: true, quantityAvailable: 100 },
    ],
    tags: ['卫生巾', '夜用', '超长', '纯棉'],
    category: 'pads',
    featured: false,
    availableForSale: true,
  },
  {
    id: 'prod_005',
    title: '护垫 - 纯棉透气型',
    handle: 'panty-liners-cotton',
    description: '150mm迷你尺寸，日常清爽呵护。纯棉表层，透气舒适。适合经期前后或日常使用。',
    descriptionHtml: '<p>150mm迷你尺寸，日常清爽呵护。纯棉表层，透气舒适。适合经期前后或日常使用。</p><ul><li>150mm迷你尺寸</li><li>纯棉透气表层</li><li>轻薄无感</li><li>独立包装卫生</li></ul>',
    price: 15.9,
    compareAtPrice: 19.9,
    images: [
      { url: 'https://placehold.co/600x600/fce7f3/831843?text=护垫', altText: '纯棉护垫透气型' },
    ],
    variants: [
      { id: 'var_005_20', title: '20片装', price: 15.9, availableForSale: true, quantityAvailable: 300 },
      { id: 'var_005_60', title: '60片装', price: 39.9, availableForSale: true, quantityAvailable: 200 },
    ],
    tags: ['护垫', '纯棉', '透气', '日常'],
    category: 'pads',
    featured: false,
    availableForSale: true,
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find(p => p.handle === handle);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getCollectionByHandle(handle: string): Collection | undefined {
  return collections.find(c => c.handle === handle);
}
