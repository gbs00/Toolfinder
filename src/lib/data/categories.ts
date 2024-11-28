import type { Category } from '@/types'

// 导出处理后的分类数据
export const categories: Category[] = [
  {
    id: 'ai',
    slug: 'ai',
    name: 'AI 工具',
    icon: '🤖',
    description: '人工智能和机器学习工具',
    toolCount: 0,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: 'development',
    slug: 'development',
    name: '开发工具',
    icon: '💻',
    description: '软件开发工具和IDE',
    toolCount: 0,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: 'design',
    slug: 'design',
    name: '设计工具',
    icon: '🎨',
    description: '设计和原型工具',
    toolCount: 0,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
]

// 根据分类 ID 获取对应语言的分类名称
export function getCategoryName(categoryId: string): string {
  const category = categories.find(c => c.id === categoryId)
  return category ? category.name : categoryId
}

// 获取所有分类的映射表
export function getCategoryMap(): Map<string, Category> {
  return new Map(categories.map(category => [category.id, category]))
}
