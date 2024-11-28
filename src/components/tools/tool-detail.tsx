"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Tool } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

interface ToolDetailProps {
  tool: Tool
}

export function ToolDetail({ tool }: ToolDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16">
          <Image
            src={tool.icon}
            alt={tool.name}
            fill
            className="rounded-lg object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{tool.name}</h1>
          <p className="text-lg text-muted-foreground mt-2">{tool.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tool.categories.map((category) => (
          <Badge key={category} variant="secondary">
            {category}
          </Badge>
        ))}
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-xl font-semibold mb-4">功能特点</h2>
        <ul>
          {tool.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-xl font-semibold mb-4">详细介绍</h2>
        <p>{tool.content}</p>
      </div>

      <div className="flex flex-col gap-2">
        {tool.links.map((link, index) => (
          <Button key={index} variant="outline" asChild>
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
