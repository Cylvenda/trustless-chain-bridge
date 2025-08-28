import { ArrowRight, Shield, Database, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-primary/20 shadow-glow animate-float">
              <Shield className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Zero Trust</span><br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Data Engine
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Securely transform your Web 2.0 applications into blockchain-powered data engines. 
            Upload, convert, and store your data with enterprise-grade zero-trust architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-primary">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
            >
              View Documentation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Database className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">SQL to Blockchain</h3>
              <p className="text-white/80">Convert SQL databases and CSV files into blockchain-ready JSON structures</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Shield className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Zero Trust Security</h3>
              <p className="text-white/80">Enterprise-grade security with cryptographic verification at every step</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Zap className="h-10 w-10 text-success mb-4" />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast API</h3>
              <p className="text-white/80">RESTful APIs with real-time blockchain synchronization and monitoring</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}