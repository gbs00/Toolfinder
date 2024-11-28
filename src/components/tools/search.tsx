"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Search as SearchIcon } from "lucide-react"

interface SearchProps {
  onSearch: (query: string) => void
}

export function Search({ onSearch }: SearchProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="搜索工具..."
        className="w-full pl-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
