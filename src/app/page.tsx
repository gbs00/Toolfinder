"use client"

import { useState } from "react"
import { Search } from "@/components/tools/search"
import { ToolGrid } from "@/components/tools/tool-grid"
import { CategoryNav } from "@/components/tools/category-nav"
import { tools } from "@/lib/data/tools"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || tool.categories.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-8">
      <div className="w-full max-w-5xl space-y-12 px-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">发现完美工具</h1>
          <p className="text-lg text-muted-foreground">
            探索精心策划的工具集合，满足各种需求
          </p>
          <div className="max-w-2xl mx-auto">
            <Search onSearch={setSearchQuery} />
          </div>
        </div>
        <CategoryNav onSelect={setSelectedCategory} selected={selectedCategory} />
        <ToolGrid tools={filteredTools} />
      </div>
    </main>
  )
}
