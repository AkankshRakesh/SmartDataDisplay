"use client"

import { useState, useMemo } from "react"
import { Search, Filter, Code, Star, ExternalLink, RefreshCw, Zap, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import pic1 from "@/public/vscode.png"
import pic2 from "@/public/github.png"
import pic3 from "@/public/docker.png"
import pic4 from "@/public/figma.png"
import pic5 from "@/public/postman.png"
import pic6 from "@/public/slack.png"
import pic7 from "@/public/notion.png"
import pic8 from "@/public/vercel.png"
import pic9 from "@/public/jest.png"
import pic10 from "@/public/mongodb.png"
import pic11 from "@/public/webpack.png"
import pic12 from "@/public/kubernetes.png"
import pic13 from "@/public/redis.png"
import pic14 from "@/public/terraform.png"
import pic15 from "@/public/jira.jpg"
import pic16 from "@/public/eslint.png"
import pic17 from "@/public/grafana.jpg"
import pic18 from "@/public/insomnia.jpg"
import pic19 from "@/public/prettier.png"
import pic20 from "@/public/supabase.jpg"
interface DeveloperTool {
  id: number
  name: string
  description: string
  category: string
  pricingModel: "Free" | "Freemium" | "Paid"
  website: string
  keyFeatures: string[]
  platforms: string[]
  rating: number
  logo: string
  company: string
  users: string
  established: number
}

const developerToolsData: DeveloperTool[] = [
  {
    id: 1,
    name: "Visual Studio Code",
    description:
      "A lightweight but powerful source code editor with built-in support for JavaScript, TypeScript, and Node.js.",
    category: "Code Editor",
    pricingModel: "Free",
    website: "https://code.visualstudio.com",
    keyFeatures: ["IntelliSense", "Debugging", "Git Integration", "Extensions", "Integrated Terminal"],
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.8,
    logo: pic1.src,
    company: "Microsoft",
    users: "50M+",
    established: 2015,
  },
  {
    id: 2,
    name: "GitHub",
    description: "The world's leading software development platform for version control and collaboration using Git.",
    category: "Version Control",
    pricingModel: "Freemium",
    website: "https://github.com",
    keyFeatures: ["Git Repositories", "Pull Requests", "Issues Tracking", "Actions CI/CD", "Codespaces"],
    platforms: ["Web", "Desktop", "Mobile"],
    rating: 4.7,
    logo: pic2.src,
    company: "GitHub Inc.",
    users: "100M+",
    established: 2008,
  },
  {
    id: 3,
    name: "Docker",
    description: "Platform for developing, shipping, and running applications using containerization technology.",
    category: "DevOps",
    pricingModel: "Freemium",
    website: "https://docker.com",
    keyFeatures: ["Containerization", "Docker Hub", "Compose", "Swarm", "Desktop App"],
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    logo: pic3.src,
    company: "Docker Inc.",
    users: "20M+",
    established: 2013,
  },
  {
    id: 4,
    name: "Figma",
    description: "Collaborative interface design tool for creating user interfaces, prototypes, and design systems.",
    category: "Design",
    pricingModel: "Freemium",
    website: "https://figma.com",
    keyFeatures: ["Real-time Collaboration", "Prototyping", "Design Systems", "Auto Layout", "Plugins"],
    platforms: ["Web", "Desktop", "Mobile"],
    rating: 4.8,
    logo: pic4.src,
    company: "Figma Inc.",
    users: "4M+",
    established: 2016,
  },
  {
    id: 5,
    name: "Postman",
    description:
      "API development environment for testing, documenting, and sharing APIs with powerful collaboration features.",
    category: "API Testing",
    pricingModel: "Freemium",
    website: "https://postman.com",
    keyFeatures: ["API Testing", "Documentation", "Mock Servers", "Monitoring", "Team Collaboration"],
    platforms: ["Windows", "macOS", "Linux", "Web"],
    rating: 4.7,
    logo: pic5.src,
    company: "Postman Inc.",
    users: "25M+",
    established: 2012,
  },
  {
    id: 6,
    name: "Slack",
    description:
      "Business communication platform that brings teams together with channels, messaging, and integrations.",
    category: "Communication",
    pricingModel: "Freemium",
    website: "https://slack.com",
    keyFeatures: ["Channels", "Direct Messages", "File Sharing", "App Integrations", "Video Calls"],
    platforms: ["Web", "Desktop", "Mobile"],
    rating: 4.5,
    logo: pic6.src,
    company: "Slack Technologies",
    users: "12M+",
    established: 2013,
  },
  {
    id: 7,
    name: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases with powerful organization features.",
    category: "Productivity",
    pricingModel: "Freemium",
    website: "https://notion.so",
    keyFeatures: ["Notes & Docs", "Databases", "Kanban Boards", "Templates", "Team Collaboration"],
    platforms: ["Web", "Desktop", "Mobile"],
    rating: 4.6,
    logo: pic7.src,
    company: "Notion Labs",
    users: "30M+",
    established: 2016,
  },
  {
    id: 8,
    name: "Vercel",
    description: "Frontend cloud platform for static sites and serverless functions with automatic deployments.",
    category: "Deployment",
    pricingModel: "Freemium",
    website: "https://vercel.com",
    keyFeatures: ["Instant Deployments", "Serverless Functions", "Edge Network", "Preview URLs", "Analytics"],
    platforms: ["Web", "CLI"],
    rating: 4.8,
    logo: pic8.src,
    company: "Vercel Inc.",
    users: "1M+",
    established: 2015,
  },
  {
    id: 9,
    name: "Jest",
    description: "Delightful JavaScript testing framework with focus on simplicity and powerful assertion library.",
    category: "Testing",
    pricingModel: "Free",
    website: "https://jestjs.io",
    keyFeatures: ["Zero Config", "Snapshot Testing", "Mocking", "Code Coverage", "Parallel Testing"],
    platforms: ["Node.js"],
    rating: 4.7,
    logo: pic9.src,
    company: "Meta",
    users: "10M+",
    established: 2014,
  },
  {
    id: 10,
    name: "MongoDB",
    description: "Document-oriented NoSQL database program with high performance and easy scalability.",
    category: "Database",
    pricingModel: "Freemium",
    website: "https://mongodb.com",
    keyFeatures: ["Document Storage", "Indexing", "Replication", "Sharding", "Atlas Cloud"],
    platforms: ["Windows", "macOS", "Linux", "Cloud"],
    rating: 4.5,
    logo: pic10.src,
    company: "MongoDB Inc.",
    users: "35M+",
    established: 2009,
  },
  {
    id: 11,
    name: "Webpack",
    description: "Static module bundler for modern JavaScript applications with powerful optimization features.",
    category: "Build Tools",
    pricingModel: "Free",
    website: "https://webpack.js.org",
    keyFeatures: ["Module Bundling", "Code Splitting", "Hot Reloading", "Tree Shaking", "Plugin System"],
    platforms: ["Node.js"],
    rating: 4.4,
    logo: pic11.src,
    company: "JS Foundation",
    users: "15M+",
    established: 2012,
  },
  {
    id: 12,
    name: "Kubernetes",
    description: "Open-source container orchestration platform for automating deployment, scaling, and management.",
    category: "DevOps",
    pricingModel: "Free",
    website: "https://kubernetes.io",
    keyFeatures: ["Container Orchestration", "Auto Scaling", "Service Discovery", "Load Balancing", "Rolling Updates"],
    platforms: ["Linux", "Cloud"],
    rating: 4.6,
    logo: pic12.src,
    company: "CNCF",
    users: "5M+",
    established: 2014,
  },
  {
    id: 13,
    name: "Redis",
    description: "In-memory data structure store used as database, cache, and message broker with high performance.",
    category: "Database",
    pricingModel: "Free",
    website: "https://redis.io",
    keyFeatures: ["In-Memory Storage", "Data Structures", "Pub/Sub", "Lua Scripting", "Clustering"],
    platforms: ["Linux", "macOS", "Windows"],
    rating: 4.7,
    logo: pic13.src,
    company: "Redis Ltd.",
    users: "8M+",
    established: 2009,
  },
  {
    id: 14,
    name: "Terraform",
    description:
      "Infrastructure as code tool for building, changing, and versioning infrastructure safely and efficiently.",
    category: "DevOps",
    pricingModel: "Freemium",
    website: "https://terraform.io",
    keyFeatures: ["Infrastructure as Code", "Multi-Cloud", "State Management", "Plan & Apply", "Modules"],
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    logo: pic14.src,
    company: "HashiCorp",
    users: "3M+",
    established: 2014,
  },
  {
    id: 15,
    name: "Jira",
    description: "Project management and issue tracking software for agile teams with powerful workflow customization.",
    category: "Project Management",
    pricingModel: "Freemium",
    website: "https://atlassian.com/software/jira",
    keyFeatures: ["Issue Tracking", "Agile Boards", "Reporting", "Workflows", "Integrations"],
    platforms: ["Web", "Mobile"],
    rating: 4.2,
    logo: pic15.src,
    company: "Atlassian",
    users: "10M+",
    established: 2002,
  },
  {
    id: 16,
    name: "ESLint",
    description: "Pluggable JavaScript linter that helps identify and fix problems in JavaScript code automatically.",
    category: "Code Quality",
    pricingModel: "Free",
    website: "https://eslint.org",
    keyFeatures: ["Code Linting", "Auto-fixing", "Custom Rules", "Plugin System", "IDE Integration"],
    platforms: ["Node.js"],
    rating: 4.6,
    logo: pic16.src,
    company: "OpenJS Foundation",
    users: "20M+",
    established: 2013,
  },
  {
    id: 17,
    name: "Grafana",
    description: "Open-source analytics and interactive visualization platform for monitoring and observability.",
    category: "Monitoring",
    pricingModel: "Freemium",
    website: "https://grafana.com",
    keyFeatures: ["Data Visualization", "Dashboards", "Alerting", "Data Sources", "Plugins"],
    platforms: ["Web", "Cloud"],
    rating: 4.7,
    logo: pic17.src,
    company: "Grafana Labs",
    users: "1M+",
    established: 2014,
  },
  {
    id: 18,
    name: "Insomnia",
    description: "Cross-platform REST client for testing APIs with a clean interface and powerful features.",
    category: "API Testing",
    pricingModel: "Freemium",
    website: "https://insomnia.rest",
    keyFeatures: ["REST Client", "GraphQL Support", "Environment Variables", "Code Generation", "Team Sync"],
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    logo: pic18.src,
    company: "Kong Inc.",
    users: "2M+",
    established: 2016,
  },
  {
    id: 19,
    name: "Prettier",
    description: "Opinionated code formatter that enforces consistent style across your entire codebase automatically.",
    category: "Code Quality",
    pricingModel: "Free",
    website: "https://prettier.io",
    keyFeatures: ["Code Formatting", "Language Support", "Editor Integration", "Configuration", "Pre-commit Hooks"],
    platforms: ["Node.js"],
    rating: 4.8,
    logo: pic19.src,
    company: "Prettier Team",
    users: "25M+",
    established: 2017,
  },
  {
    id: 20,
    name: "Supabase",
    description: "Open-source Firebase alternative providing database, authentication, and real-time subscriptions.",
    category: "Backend as a Service",
    pricingModel: "Freemium",
    website: "https://supabase.com",
    keyFeatures: ["PostgreSQL Database", "Authentication", "Real-time", "Storage", "Edge Functions"],
    platforms: ["Web", "Cloud"],
    rating: 4.7,
    logo: pic20.src,
    company: "Supabase Inc.",
    users: "500K+",
    established: 2020,
  },
]

export default function SmartDataDisplay() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPricing, setSelectedPricing] = useState("all")
  const [isRefreshing, setIsRefreshing] = useState(false)

  const categories = ["all", ...Array.from(new Set(developerToolsData.map((tool) => tool.category)))]
  const pricingModels = ["all", "Free", "Freemium", "Paid"]

  const filteredTools = useMemo(() => {
    return developerToolsData.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.keyFeatures.some((feature) => feature.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory
      const matchesPricing = selectedPricing === "all" || tool.pricingModel === selectedPricing

      return matchesSearch && matchesCategory && matchesPricing
    })
  }, [searchTerm, selectedCategory, selectedPricing])

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simulate data refresh
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "Free":
        return "bg-green-100 text-green-800"
      case "Freemium":
        return "bg-blue-100 text-blue-800"
      case "Paid":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Developer Tools Hub</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most popular and essential tools that every developer should know. Search, filter, and find
            your next productivity booster!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Zap className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">{developerToolsData.length}</p>
                <p className="text-sm text-gray-600">Developer Tools</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Users className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">300M+</p>
                <p className="text-sm text-gray-600">Total Users</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Star className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{categories.length - 1}</p>
                <p className="text-sm text-gray-600">Categories</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, description, company, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Pricing</label>
                <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    {pricingModels.map((pricing) => (
                      <SelectItem key={pricing} value={pricing}>
                        {pricing === "all" ? "All Pricing Models" : pricing}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">{filteredTools.length}</span> of{" "}
                  <span className="font-semibold">{developerToolsData.length}</span> tools
                </div>
              </div>

              <div className="flex items-end">
                <Button onClick={handleRefresh} disabled={isRefreshing} className="w-full">
                  <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                  {isRefreshing ? "Refreshing..." : "Refresh Data"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Card key={tool.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={tool.logo || "/placeholder.svg"}
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl line-clamp-1">{tool.name}</CardTitle>
                    <p className="text-sm text-gray-600">{tool.company}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{tool.rating}</span>
                      </div>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{tool.users} users</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-gray-700 line-clamp-3">{tool.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline">{tool.category}</Badge>
                    <Badge className={getPricingColor(tool.pricingModel)}>{tool.pricingModel}</Badge>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-600 mb-1">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {tool.keyFeatures.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {tool.keyFeatures.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{tool.keyFeatures.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-600 mb-1">Platforms:</p>
                    <p className="text-xs text-gray-500">{tool.platforms.join(", ")}</p>
                  </div>
                </div>
              </CardContent>

              <Separator />

              <CardFooter className="pt-4">
                <div className="flex items-center justify-between w-full">
                  <div className="text-xs text-gray-500">Since {tool.established}</div>
                  <Button size="sm" asChild>
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Visit <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <Code className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No tools found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}

      </div>
      <footer className="mt-16 text-center text-gray-500 text-sm">
          <p className="mt-1">Built with Next.js, TypeScript, and Tailwind CSS</p>
      </footer>
    </div>
  )
}
