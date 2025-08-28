import { Navigation } from "@/components/Navigation";
import { 
  Database, 
  Upload, 
  Activity, 
  Users,
  Plus,
  MoreHorizontal,
  FileText,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const clientApps = [
    { 
      name: "E-Commerce API", 
      database: "shop_db", 
      status: "active", 
      records: 12500,
      lastSync: "2 minutes ago"
    },
    { 
      name: "User Management", 
      database: "users_db", 
      status: "syncing", 
      records: 8750,
      lastSync: "5 minutes ago"
    },
    { 
      name: "Analytics Engine", 
      database: "analytics_db", 
      status: "active", 
      records: 45000,
      lastSync: "1 minute ago"
    }
  ];

  const recentUploads = [
    { name: "customer_data.csv", size: "2.4 MB", status: "completed", time: "10 min ago" },
    { name: "products.sql", size: "1.8 MB", status: "processing", time: "15 min ago" },
    { name: "orders_export.csv", size: "5.2 MB", status: "completed", time: "1 hour ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your blockchain data operations and manage client applications
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Records</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">66,250</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">API Calls</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234,567</div>
              <p className="text-xs text-muted-foreground">+8% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4 GB</div>
              <Progress value={48} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">48% of 5 GB plan</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Client Applications */}
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Client Applications</CardTitle>
                  <CardDescription>Manage your registered applications</CardDescription>
                </div>
                <Button size="sm" className="gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Add App
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clientApps.map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-smooth">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10">
                        <Database className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{app.name}</h4>
                        <p className="text-sm text-muted-foreground">{app.database}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <Badge 
                          variant={app.status === "active" ? "default" : "secondary"}
                          className={app.status === "active" ? "status-confirmed" : "status-pending"}
                        >
                          {app.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {app.records.toLocaleString()} records
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Uploads */}
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Uploads</CardTitle>
                  <CardDescription>Track your data conversion progress</CardDescription>
                </div>
                <Button size="sm" variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Data
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUploads.map((upload, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-accent/20">
                        <FileText className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium">{upload.name}</h4>
                        <p className="text-sm text-muted-foreground">{upload.size}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={upload.status === "completed" ? "default" : "secondary"}
                        className={upload.status === "completed" ? "status-confirmed" : "status-pending"}
                      >
                        {upload.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{upload.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;