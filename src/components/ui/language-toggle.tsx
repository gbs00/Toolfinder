"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/contexts/locale-context"
import type { Locale } from "@/types/locale"

const languages = [
  { 
    code: "en" as Locale,
    label: "English",
    nativeLabel: "English",
    flag: "🇺🇸"
  },
  { 
    code: "zh" as Locale,
    label: "Chinese",
    nativeLabel: "中文",
    flag: "🇨🇳"
  },
] as const

export function LanguageToggle() {
  const { locale, setLocale } = useLocale()

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 px-0 md:h-10 md:w-auto md:px-4 md:mr-2"
        >
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all md:mr-2" />
          <span className="hidden md:inline-flex items-center">
            {currentLanguage?.flag} {currentLanguage?.nativeLabel}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className="cursor-pointer"
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.nativeLabel}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
