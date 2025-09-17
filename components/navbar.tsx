"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Home, ImageIcon, HelpCircle, Bell } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
              <span className="text-white dark:text-slate-900 font-bold text-sm">⚡</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">Krea</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
              <Home className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-sm text-muted-foreground hidden md:block">Gallery</span>
            <span className="text-sm text-muted-foreground hidden md:block">Support</span>
            <Bell className="h-4 w-4 text-muted-foreground" />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleThemeToggle}
              className="h-9 w-9 px-0 hover:bg-muted/80 relative cursor-pointer transition-colors border border-border/50 hover:border-border"
              type="button"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-slate-900 dark:bg-slate-100 flex items-center justify-center">
              <span className="text-white dark:text-slate-900 font-medium text-xs">U</span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-9 w-9 px-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" className="justify-start">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <ImageIcon className="h-4 w-4 mr-2" />
                Gallery
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <HelpCircle className="h-4 w-4 mr-2" />
                Support
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
