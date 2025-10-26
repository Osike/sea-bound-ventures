import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ActivityCardProps {
  title: string;
  image: string;
  icon: React.ReactNode;
  startingPrice: string;
}

const ActivityCard = ({ title, image, icon, startingPrice }: ActivityCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift group cursor-pointer border-2 hover:border-primary/50">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            {icon}
            <h3 className="font-display font-semibold text-lg">{title}</h3>
          </div>
          <p className="text-sm text-white/90">From {startingPrice}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <Button variant="ghost" className="w-full group/btn">
          Explore Now
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
