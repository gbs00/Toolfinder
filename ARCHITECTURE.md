# Toolfinder 技术架构文档

## 项目概览

Toolfinder 是一个多语言工具发现平台，旨在帮助用户快速找到合适的开发工具。项目使用现代 Web 技术栈构建，支持国际化、响应式设计和主题切换。

### 核心特性

- 🎨 深色/浅色主题切换
- 📱 响应式设计
- 🔍 工具分类和搜索
- 🧭 直观的导航体验

## 技术栈

### 核心框架和库

- **Next.js 15 (RC)**: React 框架，用于构建服务端渲染应用
- **React 19 (RC)**: UI 库
- **TypeScript**: 类型安全的 JavaScript 超集
- **Tailwind CSS**: 原子化 CSS 框架
- **shadcn/ui**: UI 组件库

## 项目结构

```
toolfinder/
├── src/
│   ├── app/                 # Next.js 应用路由
│   │   └── [locale]/       # 国际化路由
│   ├── components/         # React 组件
│   │   ├── layout/        # 布局组件
│   │   ├── navigation/    # 导航组件
│   │   ├── tools/         # 工具相关组件
│   │   └── ui/            # UI 基础组件
│   ├── data/              # 静态数据
│   │   ├── categories.json # 工具分类数据
│   │   └── tools.json     # 工具数据
│   ├── lib/               # 工具函数和配置
│   │   └── data/         # 数据处理函数
│   ├── messages/          # 国际化消息
│   │   ├── en.json       # 英文翻译
│   │   └── zh.json       # 中文翻译
│   ├── types/            # TypeScript 类型定义
│   ├── i18n.ts           # 国际化配置
│   └── messages.ts       # 国际化消息导出
```

## 核心组件

### 布局组件

- **Header**: 顶部导航栏，包含语言切换和主题切换
- **Footer**: 页面底部，显示版权信息
- **Providers**: 全局提供者，包装主题和国际化功能

### 导航组件

- **Breadcrumb**: 面包屑导航，显示当前页面位置
- **ToolNavigation**: 工具导航，支持上一个/下一个工具切换

### 工具组件

- **ToolCard**: 工具卡片，显示工具基本信息
- **ToolDetail**: 工具详情页面，展示完整工具信息

## 数据流

1. 工具和分类数据存储在 `data/` 目录下的 JSON 文件中
2. 通过 `lib/data/` 中的函数处理和转换数据
3. 组件通过这些函数获取所需数据
4. 使用 TypeScript 类型确保数据类型安全

## 国际化实现

1. 翻译文件位于 `messages/` 目录
2. `messages.ts` 统一导出所有翻译
3. `i18n.ts` 配置国际化选项
4. 使用 `next-intl` 的 `useTranslations` 钩子在组件中访问翻译

## 主题系统

- 使用 `next-themes` 管理主题
- 支持浅色/深色模式
- 主题切换持久化
- 使用 Tailwind CSS 变量实现主题样式

## 路由系统

- 基于 Next.js 的 App Router
- 使用动态路由 `[locale]` 支持多语言
- 实现 SEO 友好的 URL 结构

## 开发指南

### 添加新工具

1. 在 `data/tools.json` 中添加工具信息
2. 确保提供所有支持语言的翻译
3. 为工具分配适当的分类

### 添加新语言

1. 在 `messages/` 下创建新的语言文件
2. 更新 `i18n.ts` 中的语言配置
3. 确保所有工具和分类数据都有新语言的翻译

### 添加新组件

1. 在适当的目录下创建组件
2. 使用 TypeScript 类型
3. 遵循现有的样式和主题系统
4. 添加必要的国际化支持

## 性能优化

- 使用 Next.js 的静态生成功能
- 组件级别的代码分割
- 图片优化
- 响应式加载

## 安全考虑

- 输入数据验证
- XSS 防护
- 安全的路由实现
- 类型安全

## 开发环境设置

1. 克隆仓库
2. 安装依赖
3. 运行开发服务器 (`npm run dev`)
4. 访问 `localhost:3000`

## 部署

推荐使用 Vercel 进行部署，可以充分利用 Next.js 的所有特性。

## 注意事项

- 项目使用 React 19 RC 版本，可能存在不稳定性
- 需要注意国际化文本的完整性
- 保持类型定义的更新
- 遵循现有的代码风格和架构模式

## 贡献指南

1. Fork 仓库
2. 创建功能分支
3. 提交更改
4. 创建 Pull Request

## 相关资源

- [Next.js 文档](https://nextjs.org/docs)
- [React 19 RC 文档](https://react.dev)
- [next-intl 文档](https://next-intl-docs.vercel.app)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [shadcn/ui 文档](https://ui.shadcn.com)
