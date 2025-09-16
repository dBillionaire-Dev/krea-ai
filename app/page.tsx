import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { GenerateSection } from "@/components/generate-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="py-12">
          <div className="container mx-auto px-6">
            <HeroCarousel />
          </div>
        </section>

        {/* Generate Section */}
        <GenerateSection />
        
        {/* Gallery Section */}
                    
        <section className="py-20 border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Gallery</h2>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground font-medium">
                <button className="hover:text-foreground transition-colors">Latest</button>
                <span className="text-muted-foreground/50">•</span>
                <button className="hover:text-foreground transition-colors">Popular</button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="aspect-square rounded-2xl bg-muted hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border border-border/40 hover:border-primary/30">
                <img
                  src="/cyberpunk-cityscape-neon.png"
                  alt="Cyberpunk cityscape"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="aspect-square rounded-2xl bg-muted hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border border-border/40 hover:border-primary/30">
                <img
                  src="/abstract-digital-art-with-flowing-colors.jpg"
                  alt="Abstract digital art"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="aspect-square rounded-2xl bg-muted hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border border-border/40 hover:border-primary/30">
                <img
                  src="/ai-generated-portrait-of-a-person-with-artistic-st.jpg"
                  alt="AI portrait"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="aspect-square rounded-2xl bg-muted hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border border-border/40 hover:border-primary/30">
                <img
                  src="/floating-islands-surreal.png"
                  alt="Surreal landscape"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="aspect-square rounded-2xl bg-muted hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border border-border/40 hover:border-primary/30">
                <img
                  src="/geometric-patterns-with-vibrant-colors.jpg"
                  alt="Geometric patterns"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="aspect-square rounded-2xl bg-muted hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border border-border/40 hover:border-primary/30">
                <img
                  src="/fantasy-creature-in-magical-forest.jpg"
                  alt="Fantasy creature"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
