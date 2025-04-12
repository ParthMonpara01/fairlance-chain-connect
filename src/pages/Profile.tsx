
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Briefcase, Clock, Award, Link2, Edit, Check, Calendar, DollarSign, Shield, Wallet, TrendingUp } from "lucide-react";
import ProfileStats from "@/components/profile/ProfileStats";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  const skills = [
    "Smart Contract Development",
    "Solidity",
    "Web3.js",
    "React",
    "Node.js",
    "DeFi",
    "NFT",
    "ERC-20",
    "ERC-721",
  ];

  const completedProjects = [
    {
      id: "proj-1",
      title: "NFT Marketplace Development",
      client: "CryptoArt Collective",
      date: "March 2025",
      category: "Development",
      description: "Built a full-featured NFT marketplace with minting, buying, selling, and auction functionality.",
    },
    {
      id: "proj-2",
      title: "DeFi Dashboard UI/UX Design",
      client: "YieldFarm Finance",
      date: "February 2025",
      category: "Design",
      description: "Designed an intuitive dashboard for a DeFi protocol, focusing on user experience and data visualization.",
    },
    {
      id: "proj-3",
      title: "Smart Contract Audit",
      client: "SecureBlock Labs",
      date: "January 2025",
      category: "Security",
      description: "Performed a comprehensive security audit for a lending protocol's smart contracts.",
    },
  ];

  const reviews = [
    {
      id: "rev-1",
      clientName: "Sarah Johnson",
      clientCompany: "CryptoArt Collective",
      rating: 5,
      date: "March 15, 2025",
      content: "Outstanding work on our NFT marketplace. The smart contracts were flawlessly implemented, and the developer was extremely responsive to our needs. Would definitely hire again!",
    },
    {
      id: "rev-2",
      clientName: "Michael Chen",
      clientCompany: "YieldFarm Finance",
      rating: 5,
      date: "February 22, 2025",
      content: "Great eye for design and amazing attention to detail. The DeFi dashboard is both beautiful and highly functional. The developer understood our needs perfectly.",
    },
    {
      id: "rev-3",
      clientName: "David Rodriguez",
      clientCompany: "SecureBlock Labs",
      rating: 4,
      date: "January 10, 2025",
      content: "Very thorough security audit with detailed documentation of potential vulnerabilities. Helped us secure our protocol before launch.",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your profile, portfolio and blockchain reputation
          </p>
        </div>
        <Button 
          variant={editMode ? "default" : "outline"} 
          onClick={() => setEditMode(!editMode)}
          className={editMode ? "bg-fairlance-primary hover:bg-fairlance-primary/90" : ""}
        >
          {editMode ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="blockchain-badge mb-4">
                <Shield className="h-3 w-3" />
                Blockchain Verified
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500 text-center md:text-left">
                32 verified reviews
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-gray-500">Senior Blockchain Developer</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Member since January 2025
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-fairlance-primary">Top Rated</Badge>
                <Badge variant="outline" className="border-green-500 text-green-700">
                  100% Job Success
                </Badge>
                <Badge variant="outline">
                  <Clock className="h-3 w-3 mr-1" />
                  Quick Responder
                </Badge>
              </div>

              <p className="text-gray-700 mb-6">
                Experienced blockchain developer specializing in smart contract development, 
                decentralized applications, and Web3 integration. With over 5 years in the 
                blockchain space, I've helped numerous projects launch secure and efficient 
                blockchain solutions.
              </p>

              <ProfileStats 
                stats={[
                  {
                    icon: Briefcase,
                    title: "Projects Completed",
                    value: "32",
                    description: "100% success rate"
                  },
                  {
                    icon: Award,
                    title: "Expertise Level",
                    value: "Expert",
                    description: "Top 5% in Blockchain"
                  },
                  {
                    icon: Wallet,
                    title: "Hourly Rate",
                    value: "$85/hr",
                    description: "Negotiable for long-term"
                  }
                ]}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="portfolio">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="skills">Skills & Expertise</TabsTrigger>
          <TabsTrigger value="reviews">Client Reviews</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            {completedProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-fairlance-light p-6 flex items-center justify-center">
                    <Briefcase className="h-12 w-12 text-fairlance-primary" />
                  </div>
                  <div className="p-6 md:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-500">
                          Client: {project.client}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{project.date}</span>
                      </div>
                    </div>
                    <Badge className="mb-4">{project.category}</Badge>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">
                        <Link2 className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="skills" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
              <CardDescription>
                Technical skills verified through blockchain-backed projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="py-1.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-lg font-medium mb-4">Blockchain Platforms</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Ethereum</span>
                        <span className="text-sm font-medium">Expert</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-fairlance-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Solana</span>
                        <span className="text-sm font-medium">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-fairlance-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Binance Smart Chain</span>
                        <span className="text-sm font-medium">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-fairlance-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Polkadot</span>
                        <span className="text-sm font-medium">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-fairlance-primary h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Certifications</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Certified Blockchain Developer</h4>
                          <p className="text-sm text-gray-500">Blockchain Council</p>
                          <p className="text-xs text-gray-400">Issued Dec 2024 • No Expiration</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Solidity & Smart Contracts Expert</h4>
                          <p className="text-sm text-gray-500">Ethereum Foundation</p>
                          <p className="text-xs text-gray-400">Issued Oct 2024 • No Expiration</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Blockchain Security Specialist</h4>
                          <p className="text-sm text-gray-500">Security Alliance</p>
                          <p className="text-xs text-gray-400">Issued Aug 2024 • No Expiration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-48 flex flex-col items-center text-center">
                      <Avatar className="h-16 w-16 mb-2">
                        <AvatarFallback>{review.clientName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-medium">{review.clientName}</h4>
                      <p className="text-sm text-gray-500">{review.clientCompany}</p>
                      <div className="flex mt-2 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                    
                    <div className="flex-1">
                      <div className="blockchain-badge inline-flex mb-4">
                        <Shield className="h-3 w-3" />
                        Verified Review
                      </div>
                      <p className="text-gray-700">"{review.content}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="blockchain" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Blockchain Reputation</CardTitle>
              <CardDescription>
                Your on-chain reputation and statistics, verified by smart contracts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-start">
                      <div className="h-16 w-16 rounded-full bg-fairlance-accent flex items-center justify-center text-fairlance-primary mr-4">
                        <TrendingUp className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Reputation Score</h3>
                        <p className="text-sm text-gray-500">Based on completed projects and reviews</p>
                      </div>
                    </div>
                    <div className="text-5xl font-bold text-fairlance-primary">94.5</div>
                  </div>

                  <h3 className="text-lg font-medium mb-4">Performance Metrics</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">On-Time Delivery</span>
                        <span className="text-sm font-medium">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Client Satisfaction</span>
                        <span className="text-sm font-medium">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Communication</span>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Quality of Work</span>
                        <span className="text-sm font-medium">97%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "97%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Blockchain Activity</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Briefcase className="h-5 w-5 text-fairlance-primary mr-3" />
                          <span className="font-medium">Completed Projects</span>
                        </div>
                        <span className="font-bold">32</span>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 text-fairlance-primary mr-3" />
                          <span className="font-medium">Total Earnings</span>
                        </div>
                        <span className="font-bold">$42,180</span>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-fairlance-primary mr-3" />
                          <span className="font-medium">Average Rating</span>
                        </div>
                        <span className="font-bold">4.9/5.0</span>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-fairlance-primary mr-3" />
                          <span className="font-medium">Dispute Rate</span>
                        </div>
                        <span className="font-bold">0%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-fairlance-light rounded-lg">
                    <h4 className="font-medium flex items-center mb-2">
                      <Shield className="h-4 w-4 mr-2 text-fairlance-primary" />
                      Blockchain Certificate
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      This profile's reputation is verified on blockchain and cannot be modified or tampered with.
                    </p>
                    <div className="bg-white p-3 rounded border border-gray-200 font-mono text-xs text-gray-600 break-all">
                      0xf7a5c40d7382491809a9d4a25de18a3ac4123aabcd61a5e4c147463a94fdb298
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
