"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Tool } from "@/types"

interface ToolNavigationProps {
  prevTool?: Tool
  nextTool?: Tool
}

export function ToolNavigation({ prevTool, nextTool }: ToolNavigationProps) {
  return (
    <div className="flex justify-between mt-8">
      {prevTool ? (
        <Button variant="outline" asChild>
          <Link href={`/tools/${prevTool.slug}`}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Link>
        </Button>
      ) : (
        <div />
      )}
      {nextTool ? (
        <Button variant="outline" asChild>
          <Link href={`/tools/${nextTool.slug}`}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  )
}
