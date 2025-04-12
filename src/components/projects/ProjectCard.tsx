
import { Clock, Star, DollarSign, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  budget: string;
  deadline: string;
  skills: string[];
  status: "open" | "in-progress" | "completed" | "disputed";
  clientName: string;
  clientRating: number;
  blockchainVerified: boolean;
}

const ProjectCard = ({
  id,
  title,
  description,
  budget,
  deadline,
  skills,
  status,
  clientName,
  clientRating,
  blockchainVerified,
}: ProjectCardProps) => {
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-purple-100 text-purple-800";
      case "disputed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              <Link to={`/projects/${id}`} className="hover:text-fairlance-primary">
                {title}
              </Link>
            </h3>
            <p className="text-sm text-gray-500 mt-1">Posted by {clientName}</p>
          </div>
          <Badge className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
          </Badge>
        </div>
        
        {blockchainVerified && (
          <div className="blockchain-badge inline-flex mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
              <polyline points="17 2 12 7 7 2" />
            </svg>
            Blockchain Verified
          </div>
        )}
        
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">{description}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-gray-900 font-medium">{budget}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-gray-900 font-medium">{deadline}</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="bg-gray-50">+{skills.length - 3}</Badge>
          )}
        </div>
      </div>
      
      <div className="border-t border-gray-100 p-4 bg-gray-50 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < clientRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-xs text-gray-600">Client Rating</span>
        </div>
        
        <Link to={`/projects/${id}`}>
          <Button size="sm" className="bg-fairlance-primary hover:bg-fairlance-primary/90">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
