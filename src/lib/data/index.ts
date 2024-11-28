import { tools } from './tools'
import { categories } from './categories'
import { Tool, Category } from '@/types'

export async function getTools(): Promise<Tool[]> {
  // 模拟API调用延迟
  await new Promise(resolve => setTimeout(resolve, 100))
  return tools
}

export async function getCategories(): Promise<Category[]> {
  // 模拟API调用延迟
  await new Promise(resolve => setTimeout(resolve, 100))
  return categories
}
