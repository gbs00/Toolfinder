"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Tool } from "@/types"

interface BreadcrumbProps {
  tool: Tool
}

export function Breadcrumb({ tool }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-foreground">
        Tools
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground">{tool.name}</span>
    </nav>
  )
}
