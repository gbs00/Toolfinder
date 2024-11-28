export interface Tool {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  categories: string[]
  features: string[]
  content: string
  links: {
    title: string
    url: string
  }[]
}

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  tools: string[]
}
