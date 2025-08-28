import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Upload as UploadIcon, Database, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Upload = () => {
  const [selectedApp, setSelectedApp] = useState("");
  const [databaseName, setDatabaseName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const clientApps = [
    { id: "ecommerce", name: "E-Commerce API", database: "shop_db" },
    { id: "users", name: "User Management", database: "users_db" },
    { id: "analytics", name: "Analytics Engine", database: "analytics_db" }
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setIsDialogOpen(true);
    }
  };

  const handleUpload = () => {
    if (selectedFile && selectedApp && databaseName) {
      // Handle the upload logic here
      console.log("Uploading file:", selectedFile.name);
      console.log("To app:", selectedApp);
      console.log("Database:", databaseName);
      setIsDialogOpen(false);
      setSelectedFile(null);
      setSelectedApp("");
      setDatabaseName("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Data</h1>
          <p className="text-muted-foreground">
            Convert your SQL databases and CSV files to blockchain-ready JSON format
          </p>
        </div>

        {/* Upload Area */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UploadIcon className="h-5 w-5 text-primary" />
              File Upload
            </CardTitle>
            <CardDescription>
              Select your SQL or CSV file to begin the conversion process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-smooth">
              <UploadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Drop files here or click to browse</h3>
              <p className="text-muted-foreground mb-4">
                Supports SQL dump files (.sql) and CSV files (.csv) up to 50MB
              </p>
              <input
                type="file"
                accept=".sql,.csv"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <Button asChild className="gradient-primary">
                <label htmlFor="file-upload" className="cursor-pointer">
                  Choose File
                </label>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* File Format Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                SQL Database Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  MySQL dump files (.sql)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  PostgreSQL exports (.sql)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  SQLite schema exports
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Automatic schema detection
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                CSV Data Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Comma-separated values (.csv)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Custom delimiter support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Header row detection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Data type inference
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Database Name Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Configure Upload Settings</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  File selected: <strong>{selectedFile?.name}</strong> ({selectedFile?.size && (selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </AlertDescription>
              </Alert>
              
              <div className="space-y-2">
                <Label htmlFor="client-app">Client Application</Label>
                <Select value={selectedApp} onValueChange={setSelectedApp}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a client application" />
                  </SelectTrigger>
                  <SelectContent>
                    {clientApps.map((app) => (
                      <SelectItem key={app.id} value={app.id}>
                        {app.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="database-name">Database Name</Label>
                <Input
                  id="database-name"
                  placeholder="Enter database name"
                  value={databaseName}
                  onChange={(e) => setDatabaseName(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  This will be used to organize your data on the blockchain
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleUpload}
                  disabled={!selectedApp || !databaseName}
                  className="gradient-primary"
                >
                  Upload & Convert
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Upload;