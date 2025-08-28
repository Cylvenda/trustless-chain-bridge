import { Navigation } from "@/components/Navigation";
import { 
  Code, 
  Book, 
  Play, 
  Copy,
  ExternalLink,
  Terminal,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApiDocs = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/upload",
      description: "Upload and convert data files",
      status: "Available"
    },
    {
      method: "GET",
      path: "/api/v1/data/{database}",
      description: "Retrieve blockchain data by database",
      status: "Available"
    },
    {
      method: "POST",
      path: "/api/v1/apps",
      description: "Register new client application",
      status: "Available"
    },
    {
      method: "GET",
      path: "/api/v1/apps/{id}/status",
      description: "Get application blockchain status",
      status: "Available"
    },
    {
      method: "POST",
      path: "/api/v1/query",
      description: "Execute blockchain queries",
      status: "Beta"
    },
    {
      method: "GET",
      path: "/api/v1/analytics",
      description: "Get usage analytics and metrics",
      status: "Coming Soon"
    }
  ];

  const codeExamples = {
    curl: `curl -X POST https://api.ztde.com/v1/upload \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@database.sql" \\
  -F "database_name=shop_db" \\
  -F "app_id=your_app_id"`,
    javascript: `const response = await fetch('https://api.ztde.com/v1/upload', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    database_name: 'shop_db',
    app_id: 'your_app_id',
    file_data: base64EncodedFile
  })
});

const result = await response.json();
console.log(result);`,
    python: `import requests

url = "https://api.ztde.com/v1/upload"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

files = {
    "file": open("database.sql", "rb"),
    "database_name": "shop_db",
    "app_id": "your_app_id"
}

response = requests.post(url, headers=headers, files=files)
print(response.json())`
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
          <p className="text-muted-foreground">
            Complete reference for the Zero Trust Data Engine API
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="shadow-card sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2 text-sm">
                  <a href="#overview" className="block hover:text-primary transition-smooth">Overview</a>
                  <a href="#authentication" className="block hover:text-primary transition-smooth">Authentication</a>
                  <a href="#endpoints" className="block hover:text-primary transition-smooth">API Endpoints</a>
                  <a href="#examples" className="block hover:text-primary transition-smooth">Code Examples</a>
                  <a href="#webhooks" className="block hover:text-primary transition-smooth">Webhooks</a>
                  <a href="#rate-limits" className="block hover:text-primary transition-smooth">Rate Limits</a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview */}
            <section id="overview">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-primary" />
                    API Overview
                  </CardTitle>
                  <CardDescription>
                    The Zero Trust Data Engine API provides secure blockchain data storage and management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium">Fast & Reliable</h4>
                      <p className="text-sm text-muted-foreground">99.9% uptime SLA</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Code className="h-8 w-8 text-accent mx-auto mb-2" />
                      <h4 className="font-medium">RESTful API</h4>
                      <p className="text-sm text-muted-foreground">JSON over HTTPS</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Terminal className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <h4 className="font-medium">Developer Friendly</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive SDKs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Authentication */}
            <section id="authentication">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Authentication</CardTitle>
                  <CardDescription>
                    All API requests require authentication using API keys
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                    <Button size="sm" variant="ghost" className="ml-2">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Get your API key from the dashboard settings page
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* API Endpoints */}
            <section id="endpoints">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>API Endpoints</CardTitle>
                  <CardDescription>
                    Available endpoints for data management and blockchain operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {endpoints.map((endpoint, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:bg-accent/50 transition-smooth">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Badge 
                              variant={endpoint.method === "GET" ? "default" : "secondary"}
                              className={endpoint.method === "GET" ? "bg-success" : "bg-primary"}
                            >
                              {endpoint.method}
                            </Badge>
                            <code className="text-sm font-mono">{endpoint.path}</code>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={endpoint.status === "Available" ? "default" : "outline"}
                              className={endpoint.status === "Available" ? "status-confirmed" : ""}
                            >
                              {endpoint.status}
                            </Badge>
                            <Button size="sm" variant="ghost">
                              <Play className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Code Examples */}
            <section id="examples">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Code Examples</CardTitle>
                  <CardDescription>
                    Implementation examples in popular programming languages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="curl" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="curl">cURL</TabsTrigger>
                      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                      <TabsTrigger value="python">Python</TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(codeExamples).map(([language, code]) => (
                      <TabsContent key={language} value={language}>
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{code}</code>
                          </pre>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="absolute top-2 right-2"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </section>

            {/* Interactive Playground */}
            <Card className="shadow-card gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-primary" />
                  Interactive API Playground
                </CardTitle>
                <CardDescription>
                  Test API endpoints directly from your browser
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Button className="gradient-primary">
                    Launch Playground
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">
                    Download Postman Collection
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;