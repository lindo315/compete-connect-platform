
import { Calendar, Users, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CompetitionCardProps {
  id: string;
  title: string;
  organizer: string;
  category: string;
  deadline: string;
  teamSize: string;
  imgSrc: string;
}

const CompetitionCard = ({
  id,
  title,
  organizer,
  category,
  deadline,
  teamSize,
  imgSrc,
}: CompetitionCardProps) => {
  return (
    <div className="card overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-neutral-muted text-sm mb-4">Organized by {organizer}</p>
        
        <div className="space-y-2 mb-5">
          <div className="flex items-center text-sm text-neutral-muted">
            <Calendar size={16} className="mr-2" />
            <span>Deadline: {deadline}</span>
          </div>
          <div className="flex items-center text-sm text-neutral-muted">
            <Users size={16} className="mr-2" />
            <span>{teamSize}</span>
          </div>
          <div className="flex items-center text-sm text-neutral-muted">
            <Tag size={16} className="mr-2" />
            <span>{category}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <Link to={`/competitions/${id}`} className="w-full">
            <Button className="w-full">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
