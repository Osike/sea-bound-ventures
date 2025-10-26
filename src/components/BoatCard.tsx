import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface BoatCardProps {
  id: string;
  name: string;
  operator: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  capacity: number;
  location: string;
  verified?: boolean;
  featured?: boolean;
}

const BoatCard = ({
  id,
  name,
  operator,
  image,
  rating,
  reviews,
  price,
  capacity,
  location,
  verified = false,
  featured = false,
}: BoatCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift group cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-foreground" />
        </button>
        {featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{operator}</p>
          </div>
          {verified && (
            <Badge variant="outline" className="border-success text-success">
              ✓ Verified
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{rating}</span>
            <span>({reviews})</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Up to {capacity}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-4 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-foreground">{price}</span>
            <span className="text-sm text-muted-foreground">/person</span>
          </div>
          <Link to={`/boat/${id}`}>
            <Button className="bg-gradient-to-r from-primary to-success hover:opacity-90">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoatCard;
