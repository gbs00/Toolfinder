"use client"

import { categories } from "@/lib/data/categories"
import { Button } from "@/components/ui/button"

interface CategoryNavProps {
  onSelect: (category: string | null) => void
  selected: string | null
}

export function CategoryNav({ onSelect, selected }: CategoryNavProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selected === null ? "default" : "outline"}
        onClick={() => onSelect(null)}
      >
        全部
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selected === category.id ? "default" : "outline"}
          onClick={() => onSelect(category.id)}
        >
          {category.icon} {category.name}
        </Button>
      ))}
    </div>
  )
}
