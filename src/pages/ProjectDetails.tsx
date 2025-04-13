import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CalendarDays, Link, User2, Briefcase } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching project details from an API
    setTimeout(() => {
      setProject({
        id: id,
        title: "Blockchain-Based Escrow System for Freelance Marketplace",
        description:
          "Develop a decentralized escrow system to ensure secure and transparent transactions between freelancers and clients.",
        status: "In progress",
        client: {
          name: "John Doe",
          avatar: "https://github.com/shadcn.png",
        },
        freelancer: {
          name: "Alice Smith",
          avatar: "https://github.com/sadmann7.png",
        },
        timeline: "3 months",
        budget: "$5,000 - $10,000",
        skills: ["Blockchain", "Smart Contracts", "React", "Node.js"],
        details: [
          {
            title: "Project Overview",
            content:
              "This project aims to create a secure and transparent escrow system using blockchain technology. The system will allow freelancers and clients to agree on terms, deposit funds, and release payments upon completion of milestones.",
          },
          {
            title: "Technical Requirements",
            content:
              "The escrow system should be built on a scalable blockchain platform such as Ethereum or Binance Smart Chain. Smart contracts will be used to manage the escrow process and ensure that funds are released according to the agreed-upon terms.",
          },
          {
            title: "Milestones",
            content:
              "1. Design and implement smart contracts for escrow management.\n2. Develop a user interface for clients and freelancers to interact with the system.\n3. Integrate the system with a freelance marketplace platform.\n4. Conduct thorough testing and security audits.",
          },
        ],
      });
      setIsLoading(false);
    }, 1000);
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 md:p-6">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
        <Card>
          <CardContent>
            <Skeleton className="h-64 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold text-fairlance-primary mb-4">
        {project.title}
      </h1>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge className="blockchain-badge">
          <Briefcase className="h-3 w-3" />
          Blockchain
        </Badge>
        {project.skills.map((skill: string) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
      <Card>
        <CardContent className="space-y-4">
          <p>{project.description}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={project.client.avatar} alt={project.client.name} />
                <AvatarFallback>{project.client.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">Client: {project.client.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={project.freelancer.avatar} alt={project.freelancer.name} />
                <AvatarFallback>{project.freelancer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">Freelancer: {project.freelancer.name}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Timeline: {project.timeline}</span>
            </div>
            <div className="flex items-center gap-2">
              <Link className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Budget: {project.budget}</span>
            </div>
          </div>
          <Accordion type="single" collapsible>
            {project.details.map((detail: any, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{detail.title}</AccordionTrigger>
                <AccordionContent>{detail.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button>Apply for this project</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetails;
