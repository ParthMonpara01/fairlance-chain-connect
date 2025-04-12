
import { BriefcaseIcon, ClockIcon, DollarSign, Wallet, TrendingUp, Users, Star } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const recentProjects = [
    {
      id: "proj-1",
      title: "Web3 Portfolio Website",
      client: "TechFusion Labs",
      status: "in-progress",
      completion: 75,
      dueDate: "Apr 20, 2025",
    },
    {
      id: "proj-2",
      title: "Smart Contract Audit",
      client: "BlockSafe Security",
      status: "completed",
      completion: 100,
      dueDate: "Apr 10, 2025",
    },
    {
      id: "proj-3",
      title: "DeFi Dashboard UI Design",
      client: "CryptoFlow Inc",
      status: "in-progress",
      completion: 45,
      dueDate: "Apr 28, 2025",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your freelancing activity.
          </p>
        </div>
        <div className="mt-4 md:mt-0 space-x-2">
          <Link to="/jobs">
            <Button variant="outline">Find Jobs</Button>
          </Link>
          <Link to="/create-project">
            <Button className="bg-fairlance-primary hover:bg-fairlance-primary/90">Create Project</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Current Balance"
          value="$3,240.55"
          icon={Wallet}
          description="Available for withdrawal"
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Active Projects"
          value="4"
          icon={BriefcaseIcon}
          description="2 milestones due this week"
        />
        <StatsCard
          title="Earned This Month"
          value="$2,156.00"
          icon={DollarSign}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Blockchain Rating"
          value="4.9"
          icon={Star}
          description="Top 5% of freelancers"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-4">
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>
              Your ongoing projects and their current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentProjects.map((project) => (
                <div key={project.id} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Link to={`/projects/${project.id}`} className="font-medium hover:text-fairlance-primary">
                        {project.title}
                      </Link>
                      <div className="text-sm text-gray-500">Client: {project.client}</div>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{project.completion}%</span>
                    </div>
                    <Progress value={project.completion} className="h-2" />
                  </div>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    Due: {project.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/projects">
              <Button variant="outline" className="w-full">View All Projects</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="col-span-7 md:col-span-3">
          <CardHeader>
            <CardTitle>Blockchain Stats</CardTitle>
            <CardDescription>
              Your on-chain reputation and activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary mr-3">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Reputation Score</div>
                    <div className="text-sm text-gray-500">Immutable on-chain rating</div>
                  </div>
                </div>
                <div className="text-2xl font-bold">94.5</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary mr-3">
                    <BriefcaseIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Completed Projects</div>
                    <div className="text-sm text-gray-500">Verified on blockchain</div>
                  </div>
                </div>
                <div className="text-2xl font-bold">32</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Repeat Clients</div>
                    <div className="text-sm text-gray-500">Clients who rehired you</div>
                  </div>
                </div>
                <div className="text-2xl font-bold">8</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary mr-3">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Total Earnings</div>
                    <div className="text-sm text-gray-500">All-time verified earnings</div>
                  </div>
                </div>
                <div className="text-2xl font-bold">$42,180</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/profile">
              <Button variant="outline" className="w-full">View Full Profile</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
