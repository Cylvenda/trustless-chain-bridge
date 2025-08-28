import { 
  Upload, 
  RefreshCw, 
  Database, 
  Shield, 
  Code, 
  Users,
  FileText,
  Settings
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Upload,
    title: "Multi-Format Upload",
    description: "Upload SQL databases, CSV files, and structured data with intelligent parsing and validation",
    tags: ["SQL", "CSV", "JSON"],
    status: "Available"
  },
  {
    icon: RefreshCw,
    title: "Real-time Conversion",
    description: "Automatically transform relational data into blockchain-optimized JSON structures",
    tags: ["ETL", "JSON", "Validation"],
    status: "Available"
  },
  {
    icon: Database,
    title: "Client App Management",
    description: "Register and manage multiple client applications with dedicated database namespaces",
    tags: ["Multi-tenant", "Isolation", "Management"],
    status: "Available"
  },
  {
    icon: Shield,
    title: "Blockchain Storage",
    description: "Secure data storage on distributed blockchain networks with cryptographic proof",
    tags: ["Blockchain", "Immutable", "Distributed"],
    status: "Available"
  },
  {
    icon: Code,
    title: "RESTful API",
    description: "Comprehensive API documentation with interactive testing sandbox and code examples",
    tags: ["REST", "OpenAPI", "SDK"],
    status: "Available"
  },
  {
    icon: Users,
    title: "Access Control",
    description: "Fine-grained permissions and role-based access control for enterprise security",
    tags: ["RBAC", "Permissions", "Security"],
    status: "Coming Soon"
  }
]

export function FeatureShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to build
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              blockchain-powered applications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From data ingestion to blockchain storage, our platform provides all the tools 
            you need to transform traditional applications into decentralized systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="shadow-card hover:shadow-glow transition-spring group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge 
                      variant={feature.status === "Available" ? "default" : "secondary"}
                      className={feature.status === "Available" ? "status-confirmed" : ""}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 gradient-card border-2 border-primary/20">
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Comprehensive API Documentation</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interactive API explorer with live testing, code generation, and detailed examples 
              for all supported programming languages and frameworks.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline">OpenAPI 3.0</Badge>
              <Badge variant="outline">Interactive Testing</Badge>
              <Badge variant="outline">Code Examples</Badge>
              <Badge variant="outline">Webhooks</Badge>
              <Badge variant="outline">Rate Limiting</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}