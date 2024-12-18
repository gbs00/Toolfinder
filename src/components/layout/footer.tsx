"use client"

import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            2024 Codeium. 
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/gbs00"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
