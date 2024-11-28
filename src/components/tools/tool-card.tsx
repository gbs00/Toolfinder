"use client"

import Image from "next/image"
import Link from "next/link"
import { Tool } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { getCategoryName } from "@/lib/data/categories"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6 space-y-4">
          <div className="space-y-4">
            <div className="relative h-12 w-12">
              <Image
                src={tool.icon}
                alt={tool.name}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-none">{tool.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {tool.description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tool.categories.map((categoryId) => (
              <Badge
                key={categoryId}
                variant="secondary"
                className="bg-muted/50"
              >
                {getCategoryName(categoryId)}
              </Badge>
            ))}
          </div>
          <Button
            variant="outline"
            className="w-full bg-background/50"
            onClick={(e) => {
              e.preventDefault()
              window.open(tool.links[0].url, "_blank", "noopener,noreferrer")
            }}
          >
            访问网站
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
