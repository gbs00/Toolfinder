import { Tool, Category } from '@/types'
import toolsData from '@/data/tools.json'
import categoriesData from '@/data/categories.json'

export async function getTools(): Promise<Tool[]> {
  return toolsData.tools
}

export async function getToolBySlug(slug: string): Promise<Tool | undefined> {
  return toolsData.tools.find(tool => tool.slug === slug)
}

export async function getCategories(): Promise<Category[]> {
  return categoriesData.categories
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return categoriesData.categories.find(category => category.slug === slug)
}

export async function getToolsByCategory(categoryId: string): Promise<Tool[]> {
  return toolsData.tools.filter(tool => tool.categories.includes(categoryId))
}

export async function searchTools(query: string, locale: string): Promise<Tool[]> {
  const searchTerm = query.toLowerCase()
  return toolsData.tools.filter(tool => {
    const nameMatch = tool.name[locale as keyof typeof tool.name].toLowerCase().includes(searchTerm)
    const descriptionMatch = tool.description[locale as keyof typeof tool.description].toLowerCase().includes(searchTerm)
    return nameMatch || descriptionMatch
  })
}
