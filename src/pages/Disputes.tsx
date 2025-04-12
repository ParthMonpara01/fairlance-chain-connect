
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs,  TabsContent,  TabsList,  TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Calendar, Check, Clock, DollarSign, FileText, MessageSquare, Scale, ShieldAlert, User, Users, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Disputes = () => {
  const [activeTab, setActiveTab] = useState("active");

  const disputeTypes = {
    active: [
      {
        id: "disp-1",
        projectTitle: "Smart Contract Audit",
        projectId: "proj-5462",
        client: "SecureChain Protocols",
        clientAvatar: "/placeholder.svg",
        freelancer: "Alex Chen",
        freelancerAvatar: "/placeholder.svg", 
        status: "voting",
        dateOpened: "April 5, 2025",
        dateUpdated: "April 10, 2025",
        amount: "$2,500",
        summary: "Dispute over deliverable quality and scope of smart contract security audit",
        description: "The client claims that the security audit does not cover all agreed-upon attack vectors and lacks sufficient depth. The freelancer maintains that all requirements in the contract were met according to industry standards.",
        votes: {
          total: 12,
          client: 5,
          freelancer: 7
        },
        timeRemaining: "2 days 16 hours",
      }
    ],
    resolved: [
      {
        id: "disp-2",
        projectTitle: "NFT Marketplace Development",
        projectId: "proj-4291",
        client: "Digital Art Collective",
        clientAvatar: "/placeholder.svg",
        freelancer: "Sarah Johnson",
        freelancerAvatar: "/placeholder.svg",
        status: "resolved",
        outcome: "freelancer", // client, freelancer, or split
        dateOpened: "March 12, 2025",
        dateClosed: "March 19, 2025",
        amount: "$3,800",
        summary: "Dispute over project completion criteria and final deliverables",
        description: "The client claimed that several features were missing from the final deliverable. After review by community arbitrators, it was determined that the freelancer had delivered all features as specified in the contract.",
        votes: {
          total: 15,
          client: 6,
          freelancer: 9
        },
      },
      {
        id: "disp-3",
        projectTitle: "DeFi Dashboard UI/UX",
        projectId: "proj-3815",
        client: "YieldFarm Finance",
        clientAvatar: "/placeholder.svg",
        freelancer: "Michael Rodriguez",
        freelancerAvatar: "/placeholder.svg",
        status: "resolved",
        outcome: "split", // client, freelancer, or split
        dateOpened: "February 25, 2025",
        dateClosed: "March 5, 2025",
        amount: "$2,200",
        summary: "Dispute over design quality and responsiveness issues",
        description: "The client reported issues with the UI responsiveness on mobile devices. The arbitration determined that while the design quality met requirements, the mobile optimization was insufficient. Funds were split 70/30 in favor of the freelancer.",
        votes: {
          total: 18,
          client: 8,
          freelancer: 7,
          split: 3
        },
      }
    ]
  };

  const getStatusBadge = (status: string, outcome?: string) => {
    if (status === "voting") {
      return <Badge className="bg-amber-100 text-amber-800 border-amber-300">Community Voting</Badge>;
    } else if (status === "evidence") {
      return <Badge className="bg-blue-100 text-blue-800 border-blue-300">Evidence Collection</Badge>;
    } else if (status === "resolved") {
      if (outcome === "freelancer") {
        return <Badge className="bg-green-100 text-green-800 border-green-300">Resolved (Freelancer)</Badge>;
      } else if (outcome === "client") {
        return <Badge className="bg-green-100 text-green-800 border-green-300">Resolved (Client)</Badge>;
      } else if (outcome === "split") {
        return <Badge className="bg-green-100 text-green-800 border-green-300">Resolved (Split)</Badge>;
      }
      return <Badge className="bg-green-100 text-green-800 border-green-300">Resolved</Badge>;
    }
    return <Badge>Unknown</Badge>;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dispute Resolution</h1>
          <p className="text-muted-foreground">
            Decentralized arbitration for project disputes
          </p>
        </div>
        <Button className="mt-4 md:mt-0 bg-fairlance-primary hover:bg-fairlance-primary/90">
          <ShieldAlert className="mr-2 h-4 w-4" />
          Open New Dispute
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How Decentralized Dispute Resolution Works</CardTitle>
          <CardDescription>
            Fair and transparent arbitration through community voting
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="mx-auto w-12 h-12 rounded-full bg-fairlance-accent flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-fairlance-primary" />
              </div>
              <h3 className="font-medium mb-2">1. Issue Reported</h3>
              <p className="text-sm text-gray-500">
                Either party can open a dispute if there's a disagreement about deliverables or terms.
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="mx-auto w-12 h-12 rounded-full bg-fairlance-accent flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-fairlance-primary" />
              </div>
              <h3 className="font-medium mb-2">2. Evidence Collection</h3>
              <p className="text-sm text-gray-500">
                Both parties submit evidence and statements to support their position.
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="mx-auto w-12 h-12 rounded-full bg-fairlance-accent flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-fairlance-primary" />
              </div>
              <h3 className="font-medium mb-2">3. Community Voting</h3>
              <p className="text-sm text-gray-500">
                Verified community members review evidence and vote on the resolution.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="active">Active Disputes</TabsTrigger>
          <TabsTrigger value="resolved">Resolved Disputes</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          <div className="space-y-6">
            {disputeTypes.active.length > 0 ? (
              disputeTypes.active.map((dispute) => (
                <Card key={dispute.id}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>{dispute.projectTitle}</CardTitle>
                        <CardDescription>Dispute #{dispute.id} for Project #{dispute.projectId}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(dispute.status)}
                        <Badge variant="outline" className="border-fairlance-primary text-fairlance-primary">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {dispute.amount}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-4 md:col-span-2">
                        <div>
                          <h3 className="font-medium mb-2">Dispute Summary</h3>
                          <p className="text-gray-700">{dispute.summary}</p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Details</h3>
                          <p className="text-gray-700">{dispute.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                          <div className="flex-1 border rounded-lg p-4">
                            <h3 className="font-medium mb-2 flex items-center text-fairlance-primary">
                              <Scale className="mr-1 h-4 w-4" />
                              Voting Status
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">In favor of client</span>
                                  <span className="text-sm font-medium">{dispute.votes.client} votes</span>
                                </div>
                                <Progress value={(dispute.votes.client / dispute.votes.total) * 100} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">In favor of freelancer</span>
                                  <span className="text-sm font-medium">{dispute.votes.freelancer} votes</span>
                                </div>
                                <Progress value={(dispute.votes.freelancer / dispute.votes.total) * 100} className="h-2" />
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Total votes: {dispute.votes.total}</span>
                                <span className="text-amber-600 font-medium flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {dispute.timeRemaining} remaining
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 border rounded-lg p-4">
                            <h3 className="font-medium mb-2 flex items-center text-fairlance-primary">
                              <Calendar className="mr-1 h-4 w-4" />
                              Timeline
                            </h3>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500">Opened</span>
                                <span className="text-sm">{dispute.dateOpened}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500">Last Updated</span>
                                <span className="text-sm">{dispute.dateUpdated}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500">Expected Resolution</span>
                                <span className="text-sm">~{dispute.timeRemaining}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-4">Involved Parties</h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={dispute.clientAvatar} alt={dispute.client} />
                                <AvatarFallback>{dispute.client.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{dispute.client}</div>
                                <div className="text-xs text-gray-500 flex items-center">
                                  <User className="h-3 w-3 mr-1" />
                                  Client
                                </div>
                              </div>
                            </div>

                            <Separator />

                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={dispute.freelancerAvatar} alt={dispute.freelancer} />
                                <AvatarFallback>{dispute.freelancer.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{dispute.freelancer}</div>
                                <div className="text-xs text-gray-500 flex items-center">
                                  <User className="h-3 w-3 mr-1" />
                                  Freelancer
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Button className="w-full">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            View Case Details
                          </Button>
                          <Button variant="outline" className="w-full">
                            <FileText className="mr-2 h-4 w-4" />
                            Submit Evidence
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border">
                <ShieldAlert className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No Active Disputes</h3>
                <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
                  You don't have any active disputes at the moment. If you're experiencing issues with a project, you can open a new dispute.
                </p>
                <Button className="mt-6 bg-fairlance-primary hover:bg-fairlance-primary/90">
                  <ShieldAlert className="mr-2 h-4 w-4" />
                  Open New Dispute
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="resolved" className="mt-6">
          <div className="space-y-6">
            {disputeTypes.resolved.length > 0 ? (
              disputeTypes.resolved.map((dispute) => (
                <Card key={dispute.id}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>{dispute.projectTitle}</CardTitle>
                        <CardDescription>Dispute #{dispute.id} for Project #{dispute.projectId}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(dispute.status, dispute.outcome)}
                        <Badge variant="outline" className="border-fairlance-primary text-fairlance-primary">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {dispute.amount}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-4 md:col-span-2">
                        <div>
                          <h3 className="font-medium mb-2">Dispute Summary</h3>
                          <p className="text-gray-700">{dispute.summary}</p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Details</h3>
                          <p className="text-gray-700">{dispute.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                          <div className="flex-1 border rounded-lg p-4">
                            <h3 className="font-medium mb-2 flex items-center text-fairlance-primary">
                              <Scale className="mr-1 h-4 w-4" />
                              Final Voting Results
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">In favor of client</span>
                                  <span className="text-sm font-medium">{dispute.votes.client} votes</span>
                                </div>
                                <Progress value={(dispute.votes.client / dispute.votes.total) * 100} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">In favor of freelancer</span>
                                  <span className="text-sm font-medium">{dispute.votes.freelancer} votes</span>
                                </div>
                                <Progress value={(dispute.votes.freelancer / dispute.votes.total) * 100} className="h-2" />
                              </div>
                              {dispute.votes.split && (
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-sm">In favor of split payment</span>
                                    <span className="text-sm font-medium">{dispute.votes.split} votes</span>
                                  </div>
                                  <Progress value={(dispute.votes.split / dispute.votes.total) * 100} className="h-2" />
                                </div>
                              )}
                              <div className="flex justify-between text-sm">
                                <span>Total votes: {dispute.votes.total}</span>
                                <span className="text-green-600 font-medium flex items-center">
                                  <Check className="h-3 w-3 mr-1" />
                                  Voting completed
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 border rounded-lg p-4">
                            <h3 className="font-medium mb-2 flex items-center text-fairlance-primary">
                              <Calendar className="mr-1 h-4 w-4" />
                              Timeline
                            </h3>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500">Opened</span>
                                <span className="text-sm">{dispute.dateOpened}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500">Resolved</span>
                                <span className="text-sm">{dispute.dateClosed}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500">Duration</span>
                                <span className="text-sm">
                                  {/* Simplified calculation */}
                                  {Math.floor((new Date(dispute.dateClosed).getTime() - new Date(dispute.dateOpened).getTime()) / (1000 * 60 * 60 * 24))} days
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-4">Involved Parties</h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={dispute.clientAvatar} alt={dispute.client} />
                                <AvatarFallback>{dispute.client.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{dispute.client}</div>
                                <div className="text-xs text-gray-500 flex items-center">
                                  <User className="h-3 w-3 mr-1" />
                                  Client
                                </div>
                              </div>
                              {dispute.outcome === "client" && (
                                <Badge className="ml-auto bg-green-100 text-green-800">
                                  <Check className="h-3 w-3 mr-1" />
                                  Won
                                </Badge>
                              )}
                            </div>

                            <Separator />

                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={dispute.freelancerAvatar} alt={dispute.freelancer} />
                                <AvatarFallback>{dispute.freelancer.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{dispute.freelancer}</div>
                                <div className="text-xs text-gray-500 flex items-center">
                                  <User className="h-3 w-3 mr-1" />
                                  Freelancer
                                </div>
                              </div>
                              {dispute.outcome === "freelancer" && (
                                <Badge className="ml-auto bg-green-100 text-green-800">
                                  <Check className="h-3 w-3 mr-1" />
                                  Won
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          {dispute.outcome === "split" && (
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
                              <div className="font-medium text-amber-800 mb-1 flex items-center">
                                <Scale className="h-4 w-4 mr-1" />
                                Split Resolution
                              </div>
                              <p className="text-xs text-amber-700">
                                Payment was split 70/30 in favor of the freelancer based on community voting.
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Button className="w-full">
                            <FileText className="mr-2 h-4 w-4" />
                            View Complete Case
                          </Button>
                          <Button variant="outline" className="w-full">
                            <Scale className="mr-2 h-4 w-4" />
                            View Blockchain Record
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border">
                <Check className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No Resolved Disputes</h3>
                <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
                  You don't have any resolved disputes yet. All your completed dispute cases will appear here.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Disputes;
