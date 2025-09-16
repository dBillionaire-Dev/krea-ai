"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ImageIcon, Video, Zap, Edit3, Palette, Wand2, Camera, ArrowRight, Mic } from "lucide-react"

const generateTools = [
  {
    id: "image",
    title: "Image",
    subtitle: "NEW",
    description: "Generate images with custom styles in Flux and ideogram",
    icon: ImageIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    id: "video",
    title: "Video",
    description: "Generate videos with pica, Runway, Luma and more",
    icon: Video,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    id: "realtime",
    title: "Realtime",
    description: "Real-time AI rendering on a canvas, instant feedback loops",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    id: "enhancer",
    title: "Enhancer",
    subtitle: "NEW",
    description: "Upscale and enhance images and videos up to 22k",
    icon: Wand2,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
  {
    id: "edit",
    title: "Edit",
    subtitle: "NEW",
    description: "Add objects, change style or expand photos and generations",
    icon: Edit3,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    id: "motion-lipsync",
    title: "Motion Lipsync",
    subtitle: "NEW",
    description: "Try out this feature now. Lip sync any video to any audio.",
    icon: Mic,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    id: "motion-transfer",
    title: "Motion Transfer",
    subtitle: "NEW",
    description: "Transfer motion to images and animate characters",
    icon: Camera,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
  },
  {
    id: "train",
    title: "Train",
    description: "Teach Krea to replicate your style, products or characters",
    icon: Palette,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
]

export function GenerateSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Generate</h2>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 w-full">
          {generateTools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Card
                key={tool.id}
                className={`p-6 lg:p-2 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 ${tool.borderColor} hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:scale-105 h-32 lg:h-29 w-75`}
              >
                <div className="flex items-center h-full gap-4">
                  <div
                    className={`p-4 rounded-xl ${tool.bgColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    <IconComponent className={`h-10 w-8 ${tool.color}`} />
                  </div>

                
                  <div className="flex-1 flex flex-col justify-between h-full py-1">
                  
                    <div className="flex items-center gap-2 mb-0">
                      <h3 className="font-semibold text-base tracking-tight">{tool.title}</h3>
                      {tool.subtitle && (
                        <span className="text-xs bg-blue-600 dark:bg-blue-500 text-white px-2 py-0.5 rounded-full font-medium">
                          {tool.subtitle}
                        </span>
                      )}
                    </div>

            
                    <div className="flex items-end justify-between gap-2">
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{tool.description}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs h-7 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200 bg-transparent font-medium flex-shrink-0"
                      >
                        Open
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
