
import { useState } from "react";
import { SearchIcon, FilterIcon, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProjectCard, { ProjectCardProps } from "@/components/projects/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const projects: ProjectCardProps[] = [
    {
      id: "1",
      title: "Smart Contract Development for DeFi Platform",
      description:
        "Looking for an experienced Solidity developer to create custom smart contracts for our new DeFi lending platform. The contracts should handle borrowing, lending, and liquidation with proper security measures.",
      budget: "$3,000 - $5,000",
      deadline: "30 days",
      skills: ["Solidity", "Smart Contracts", "DeFi", "Security Audit"],
      status: "open",
      clientName: "FinChain Labs",
      clientRating: 4.8,
      blockchainVerified: true,
    },
    {
      id: "2",
      title: "Web3 Wallet Integration for E-commerce Platform",
      description:
        "We need to add crypto payment options to our existing e-commerce platform. Users should be able to connect their Web3 wallets and pay using major cryptocurrencies.",
      budget: "$1,500 - $2,500",
      deadline: "14 days",
      skills: ["React", "Web3.js", "JavaScript", "Crypto Payments"],
      status: "open",
      clientName: "CryptoShop",
      clientRating: 4.2,
      blockchainVerified: true,
    },
    {
      id: "3",
      title: "NFT Marketplace UI/UX Design",
      description:
        "Create a modern, user-friendly design for our NFT marketplace. The design should include all main pages including homepage, collection view, NFT detail, and user profile.",
      budget: "$2,000 - $3,000",
      deadline: "20 days",
      skills: ["UI/UX", "Figma", "NFT", "Web Design"],
      status: "open",
      clientName: "ArtBlock Digital",
      clientRating: 5.0,
      blockchainVerified: true,
    },
    {
      id: "4",
      title: "Blockchain Documentation Writer",
      description:
        "We need comprehensive documentation for our new blockchain protocol. This includes technical whitepapers, API documentation, and user guides.",
      budget: "$1,000 - $2,000",
      deadline: "45 days",
      skills: ["Technical Writing", "Blockchain", "Documentation"],
      status: "open",
      clientName: "ChainDocs",
      clientRating: 4.5,
      blockchainVerified: false,
    },
    {
      id: "5",
      title: "Smart Contract Security Audit",
      description:
        "Perform a comprehensive security audit of our DeFi protocol smart contracts. Identify vulnerabilities and provide recommendations for improvement.",
      budget: "$4,000 - $6,000",
      deadline: "10 days",
      skills: ["Smart Contract Audit", "Security", "Solidity", "DeFi"],
      status: "open",
      clientName: "SecureChain",
      clientRating: 4.9,
      blockchainVerified: true,
    },
    {
      id: "6",
      title: "Blockchain Integration for Supply Chain Management",
      description:
        "Develop a solution to integrate blockchain technology into our existing supply chain management system for improved transparency and traceability.",
      budget: "$5,000 - $8,000",
      deadline: "60 days",
      skills: ["Blockchain", "Supply Chain", "API Integration", "Backend"],
      status: "open",
      clientName: "LogiChain Solutions",
      clientRating: 4.7,
      blockchainVerified: false,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    // Filter by search query
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Filter by status
    const matchesStatus = filter === "all" || project.status === filter;

    // Filter by verification
    const matchesVerification = !verifiedOnly || project.blockchainVerified;

    return matchesSearch && matchesStatus && matchesVerification;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "budget-high") {
      const aBudget = parseInt(a.budget.replace(/[^0-9]/g, ""));
      const bBudget = parseInt(b.budget.replace(/[^0-9]/g, ""));
      return bBudget - aBudget;
    } else if (sortBy === "budget-low") {
      const aBudget = parseInt(a.budget.replace(/[^0-9]/g, ""));
      const bBudget = parseInt(b.budget.replace(/[^0-9]/g, ""));
      return aBudget - bBudget;
    } else if (sortBy === "rating") {
      return b.clientRating - a.clientRating;
    }
    // Default: newest
    return parseInt(b.id) - parseInt(a.id);
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Find Jobs</h1>
        <p className="text-muted-foreground">
          Browse blockchain-verified freelance opportunities
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              All Jobs
            </TabsTrigger>
            <TabsTrigger value="open" onClick={() => setFilter("open")}>
              Open
            </TabsTrigger>
            <TabsTrigger value="trending" onClick={() => setFilter("trending")}>
              Trending
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="verified"
                checked={verifiedOnly}
                onCheckedChange={(checked) => setVerifiedOnly(!!checked)}
              />
              <Label htmlFor="verified" className="text-sm cursor-pointer">
                Blockchain verified only
              </Label>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Sort by" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                <SelectItem value="rating">Client Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search jobs, skills, or keywords..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <FilterIcon className="h-4 w-4" />
          </Button>
        </div>

        <Separator className="my-6" />

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 gap-6">
            {sortedProjects.length > 0 ? (
              sortedProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="open" className="mt-0">
          <div className="grid grid-cols-1 gap-6">
            {sortedProjects.filter(p => p.status === "open").length > 0 ? (
              sortedProjects
                .filter(p => p.status === "open")
                .map((project) => <ProjectCard key={project.id} {...project} />)
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">No open jobs found</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="trending" className="mt-0">
          <div className="grid grid-cols-1 gap-6">
            {sortedProjects
              .filter((_, index) => index < 3)
              .map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Jobs;
