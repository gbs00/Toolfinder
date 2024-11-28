import { notFound } from "next/navigation"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { tools } from "@/lib/data/tools"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ToolPageProps {
  params: {
    slug: string
  }
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = tools.find((t) => t.slug === params.slug)

  if (!tool) {
    notFound()
  }

  return (
    <div className="container py-8 space-y-8">
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            {/* 工具基本信息 */}
            <div className="space-y-6">
              <div className="relative h-24 w-24">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{tool.name}</h1>
                <p className="text-lg text-muted-foreground mt-2">
                  {tool.description}
                </p>
              </div>
              <div className="flex gap-2">
                {tool.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="bg-muted/50">
                    {category}
                  </Badge>
                ))}
              </div>
              <Button asChild className="w-full">
                <a
                  href={tool.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  访问官网
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* 工具详细信息 */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">功能特点</h2>
                <ul className="grid gap-2">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-muted-foreground">•</span>
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">详细介绍</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tool.content}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
