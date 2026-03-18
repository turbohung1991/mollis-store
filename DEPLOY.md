# Mollis 独立站部署指南

## 方案一：使用 Vercel CLI（推荐）

### 1. 安装 Vercel CLI
```bash
npm i -g vercel
```

### 2. 登录 Vercel
```bash
vercel login
```
按提示用邮箱登录

### 3. 部署
```bash
cd /Users/admin/.openclaw/workspace/mollis-store
vercel --prod
```

## 方案二：GitHub + Vercel 自动部署

### 1. 创建 GitHub 仓库
```bash
cd /Users/admin/.openclaw/workspace/mollis-store
git remote add origin https://github.com/你的用户名/mollis-store.git
git branch -M main
git push -u origin main
```

### 2. 在 Vercel 导入项目
1. 访问 https://vercel.com/new
2. 选择 GitHub 登录
3. 选择 mollis-store 仓库
4. 点击 Deploy

## 方案三：手动上传（最简单）

### 1. 本地构建
```bash
cd /Users/admin/.openclaw/workspace/mollis-store
npm run build
```

### 2. 压缩 dist 文件夹
```bash
cd out
zip -r ../mollis-store.zip .
```

### 3. 在 Vercel 手动上传
1. 访问 https://vercel.com/new
2. 选择 "Import Git Repository" 下方的 "Upload" 选项
3. 上传 zip 文件

## 部署后配置

### 自定义域名
1. 在 Vercel Dashboard 选择项目
2. Settings → Domains
3. 添加你的域名

### 环境变量（支付接入时需要）
1. Settings → Environment Variables
2. 添加：
   - `STRIPE_PUBLIC_KEY`
   - `STRIPE_SECRET_KEY`

## 当前项目状态

- ✅ 项目位置：`/Users/admin/.openclaw/workspace/mollis-store`
- ✅ Git 仓库：已初始化
- ✅ 构建配置：已优化
- ⏳ 部署：待执行

## 访问地址

部署成功后会获得类似：
- `https://mollis-store.vercel.app`
- `https://mollis-store-你的用户名.vercel.app`
