
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Check,
  Clock,
  DollarSign,
  Download,
  FileText,
  Lock,
  MessageSquare,
  Paperclip,
  Send,
  Shield,
  Star,
  User,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const ProjectDetails = () => {
  const { id } = useParams();
  const [messageText, setMessageText] = useState("");

  const project = {
    id: id || "1",
    title: "Smart Contract Development for DeFi Platform",
    description:
      "We're looking for an experienced Solidity developer to create custom smart contracts for our new DeFi lending platform. The contracts should handle borrowing, lending, and liquidation with proper security measures. All code will be audited before deployment to mainnet. We need someone who has experience with yield farming, flash loans, and security best practices.",
    status: "in-progress", // open, in-progress, completed, disputed
    budget: "$4,500",
    deadline: "April 30, 2025",
    createdAt: "March 15, 2025",
    client: {
      name: "FinChain Labs",
      avatar: "/placeholder.svg",
      rating: 4.8,
      projectsCompleted: 12,
      memberSince: "January 2024",
    },
    milestones: [
      {
        id: "m1",
        title: "Smart Contract Architecture & Design",
        status: "completed",
        dueDate: "March 25, 2025",
        amount: "$1,000",
        description: "Define the architecture and design of the smart contracts, including data models and interaction flows.",
      },
      {
        id: "m2",
        title: "Core Lending & Borrowing Implementation",
        status: "in-progress",
        dueDate: "April 10, 2025",
        amount: "$2,000",
        description: "Implement the core smart contracts for lending, borrowing, interest calculation, and collateral management.",
      },
      {
        id: "m3",
        title: "Liquidation & Security Features",
        status: "pending",
        dueDate: "April 20, 2025",
        amount: "$1,000",
        description: "Implement liquidation mechanisms and security features like emergency stops and upgradability.",
      },
      {
        id: "m4",
        title: "Testing & Documentation",
        status: "pending",
        dueDate: "April 30, 2025",
        amount: "$500",
        description: "Complete unit and integration tests, and provide comprehensive documentation for all smart contracts.",
      },
    ],
    messages: [
      {
        id: "msg1",
        sender: "client",
        name: "John from FinChain",
        avatar: "/placeholder.svg",
        content: "Hi, thanks for accepting the project. Do you have any questions about the requirements?",
        timestamp: "March 15, 2025, 10:15 AM",
      },
      {
        id: "msg2",
        sender: "freelancer",
        name: "You",
        avatar: "/placeholder.svg",
        content: "Thanks for the opportunity! I've reviewed the requirements and have a few questions about the interest calculation mechanism you'd like to implement.",
        timestamp: "March 15, 2025, 11:30 AM",
      },
      {
        id: "msg3",
        sender: "client",
        name: "John from FinChain",
        avatar: "/placeholder.svg",
        content: "Sure! We're thinking of a dynamic interest rate model that adjusts based on utilization. Similar to Compound or Aave, but with some modifications. I'll send you a detailed document about it.",
        timestamp: "March 15, 2025, 1:45 PM",
      },
      {
        id: "msg4",
        sender: "client",
        name: "John from FinChain",
        avatar: "/placeholder.svg",
        content: "Here's the interest rate model document. Please let me know if you have any other questions!",
        timestamp: "March 15, 2025, 2:00 PM",
        attachment: {
          name: "InterestRateModel.pdf",
          size: "1.2 MB",
        },
      },
    ],
    files: [
      {
        id: "file1",
        name: "ProjectRequirements.pdf",
        size: "2.5 MB",
        uploadedBy: "Client",
        date: "March 15, 2025",
      },
      {
        id: "file2",
        name: "InterestRateModel.pdf",
        size: "1.2 MB",
        uploadedBy: "Client",
        date: "March 15, 2025",
      },
      {
        id: "file3",
        name: "ContractArchitecture.pdf",
        size: "3.1 MB",
        uploadedBy: "You",
        date: "March 25, 2025",
      },
    ],
    skills: ["Solidity", "Smart Contracts", "DeFi", "Security Audit"],
  };

  const getMilestoneStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-300";
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "pending":
        return "bg-gray-100 text-gray-800 border-gray-300";
      case "disputed":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getProjectProgress = () => {
    const totalMilestones = project.milestones.length;
    const completedMilestones = project.milestones.filter(
      (m) => m.status === "completed"
    ).length;
    return (completedMilestones / totalMilestones) * 100;
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">{project.title}</h1>
            <Badge className="blockchain-badge">
              <Shield className="h-3 w-3" />
              Verified
            </Badge>
          </div>
          <p className="text-muted-foreground">Project #{project.id}</p>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
          <Button variant="outline" className="border-fairlance-primary text-fairlance-primary">
            <Lock className="mr-2 h-4 w-4" />
            View Smart Contract
          </Button>
          <Button className="bg-fairlance-primary hover:bg-fairlance-primary/90">
            <Clock className="mr-2 h-4 w-4" />
            Track Time
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Description</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Skills Required</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Project Status</h3>
                  <div className="flex items-center space-x-4">
                    <Progress value={getProjectProgress()} className="h-2 flex-1" />
                    <span className="text-sm font-medium">
                      {Math.round(getProjectProgress())}% Complete
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestones & Payments</CardTitle>
              <CardDescription>
                Track progress and payment status for each milestone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {project.milestones.map((milestone, index) => (
                  <div
                    key={milestone.id}
                    className={`border ${
                      milestone.status === "in-progress" ? "border-blue-300" : "border-gray-200"
                    } rounded-lg p-4 ${
                      milestone.status === "in-progress" ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            milestone.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : milestone.status === "in-progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {milestone.status === "completed" ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <span>{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium">{milestone.title}</h4>
                          <p className="text-sm text-gray-500">{milestone.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        <Badge
                          variant="outline"
                          className={getMilestoneStatusColor(milestone.status)}
                        >
                          {milestone.status.charAt(0).toUpperCase() +
                            milestone.status.slice(1)}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{milestone.dueDate}</span>
                        </div>
                        <div className="font-medium">{milestone.amount}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-4">
              <div className="text-sm text-gray-500">
                <span className="font-medium">Total Budget:</span> {project.budget}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Deadline:</span> {project.deadline}
              </div>
            </CardFooter>
          </Card>

          <Tabs defaultValue="messages">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="files">Files & Deliverables</TabsTrigger>
              <TabsTrigger value="activity">Activity Log</TabsTrigger>
            </TabsList>

            <TabsContent value="messages" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <Badge variant="outline" className="text-xs py-1">
                        March 15, 2025
                      </Badge>
                    </div>

                    {project.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === "freelancer" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] ${
                            message.sender === "freelancer"
                              ? "bg-fairlance-accent text-fairlance-primary order-1"
                              : "bg-gray-100 text-gray-800 order-2"
                          } rounded-lg p-4`}
                        >
                          <div className="flex items-center mb-2">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage src={message.avatar} alt={message.name} />
                              <AvatarFallback>
                                {message.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-sm">{message.name}</span>
                            <span className="ml-auto text-xs text-gray-500">
                              {message.timestamp.split(", ")[1]}
                            </span>
                          </div>
                          <p className="text-sm">{message.content}</p>
                          {message.attachment && (
                            <div className="mt-2 p-2 bg-white rounded-md border flex items-center justify-between">
                              <div className="flex items-center">
                                <Paperclip className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-sm">{message.attachment.name}</span>
                                <span className="text-xs text-gray-500 ml-2">
                                  {message.attachment.size}
                                </span>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </div>
                        <Avatar
                          className={`h-8 w-8 mt-4 mx-2 ${
                            message.sender === "freelancer" ? "order-2" : "order-1"
                          }`}
                        >
                          <AvatarImage src={message.avatar} alt={message.name} />
                          <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Type your message..."
                        className="min-h-[80px]"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                      />
                      <Button
                        onClick={handleSendMessage}
                        className="self-end bg-fairlance-primary hover:bg-fairlance-primary/90"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between mt-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="h-4 w-4 mr-1" />
                        Attach Files
                      </Button>
                      <div className="text-xs text-gray-500">
                        Messages are stored on the blockchain for transparency
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="files" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Files & Deliverables</CardTitle>
                  <CardDescription>
                    Access all files shared during the project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.files.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between border rounded-lg p-4"
                      >
                        <div className="flex items-center">
                          <div className="p-2 bg-gray-100 rounded-md mr-3">
                            <FileText className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-xs text-gray-500">
                              {file.size} • Uploaded by {file.uploadedBy} on{" "}
                              {file.date}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      <Paperclip className="h-4 w-4 mr-2" />
                      Upload New File
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                  <CardDescription>
                    Chronological record of project activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 mr-3">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Milestone Completed</div>
                        <div className="text-sm text-gray-500">
                          Milestone "Smart Contract Architecture & Design" was marked as
                          completed
                        </div>
                        <div className="text-xs text-gray-400 mt-1">March 25, 2025</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Payment Released</div>
                        <div className="text-sm text-gray-500">
                          $1,000 was released from escrow for the completed milestone
                        </div>
                        <div className="text-xs text-gray-400 mt-1">March 26, 2025</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 mr-3">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">File Uploaded</div>
                        <div className="text-sm text-gray-500">
                          "ContractArchitecture.pdf" was uploaded by you
                        </div>
                        <div className="text-xs text-gray-400 mt-1">March 25, 2025</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Milestone Started</div>
                        <div className="text-sm text-gray-500">
                          Milestone "Core Lending & Borrowing Implementation" was started
                        </div>
                        <div className="text-xs text-gray-400 mt-1">March 27, 2025</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Client Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-4">
                <Avatar className="h-16 w-16 mb-2">
                  <AvatarImage src={project.client.avatar} alt={project.client.name} />
                  <AvatarFallback>
                    {project.client.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-medium">{project.client.name}</h3>
                <div className="flex mt-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < project.client.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="blockchain-badge">
                  <Shield className="h-3 w-3" />
                  Blockchain Verified
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    {project.client.projectsCompleted} projects completed
                  </span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    Member since {project.client.memberSince}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    Project posted {project.createdAt}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full text-fairlance-primary border-fairlance-primary"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Client
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Smart Contract Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-1">Contract Address</div>
                  <div className="bg-gray-50 p-2 rounded border border-gray-200 font-mono text-xs text-gray-600 break-all">
                    0x8b2f35b2c7d9845d69b726cb28efadca6fc4a213
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Escrow Status</div>
                  <div className="bg-green-50 text-green-800 p-2 rounded border border-green-200 text-sm font-medium">
                    Funded - $4,500 locked in contract
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Smart Contract Type</div>
                  <div className="text-sm">Milestone-based Escrow</div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Network</div>
                  <div className="text-sm">Ethereum (Mainnet)</div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-1">Last Updated</div>
                  <div className="text-sm">March 27, 2025 (Block #18245632)</div>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-fairlance-primary hover:bg-fairlance-primary/90">
                  <Lock className="h-4 w-4 mr-2" />
                  View on Blockchain Explorer
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                If any issues arise during the project, you can initiate a dispute
                resolution process through FairLance's decentralized arbitration.
              </p>
              <Button variant="outline" className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Start Dispute Process
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
