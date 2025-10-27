import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivityCard from "@/components/ActivityCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, CheckCircle, Shield, Star, DollarSign, Waves, Anchor, Fish, Glasses, Sailboat, Sunset, Ship, Zap, Wind } from "lucide-react";
import heroBoat from "@/assets/hero-boat.jpg";
import scenicTour from "@/assets/scenic-tour.jpg";
import fishingTrip from "@/assets/fishing-trip.jpg";
import snorkelingImg from "@/assets/snorkeling.jpg";
import sunsetCruise from "@/assets/sunset-cruise.jpg";
import islandHopping from "@/assets/island-hopping.jpg";
import boat1 from "@/assets/boat-1.jpg";

const Index = () => {
  const activities = [
    {
      title: "Jet Ski Rides",
      image: islandHopping,
      icon: <Zap className="w-5 h-5" />,
      startingPrice: "KES 2,600",
    },
    {
      title: "Swahili Dhow Cruises",
      image: sunsetCruise,
      icon: <Ship className="w-5 h-5" />,
      startingPrice: "KES 5,500",
    },
    {
      title: "Kiting",
      image: boat1,
      icon: <Wind className="w-5 h-5" />,
      startingPrice: "KES 3,500",
    },
    {
      title: "Windsurfing",
      image: boat1,
      icon: <Sailboat className="w-5 h-5" />,
      startingPrice: "KES 4,200",
    },
    {
      title: "Snorkeling",
      image: snorkelingImg,
      icon: <Glasses className="w-5 h-5" />,
      startingPrice: "KES 5,200",
    },
    {
      title: "Scenic Tours",
      image: scenicTour,
      icon: <Waves className="w-5 h-5" />,
      startingPrice: "KES 4,500",
    },
    {
      title: "Fishing Trips",
      image: fishingTrip,
      icon: <Fish className="w-5 h-5" />,
      startingPrice: "KES 6,500",
    },
    {
      title: "Sunset Cruise",
      image: heroBoat,
      icon: <Sunset className="w-5 h-5" />,
      startingPrice: "KES 8,500",
    },
  ];

  const stats = [
    { label: "Verified Operators", value: "500+", icon: <Shield className="w-6 h-6" /> },
    { label: "Happy Travelers", value: "10,000+", icon: <Star className="w-6 h-6" /> },
    { label: "Coastal Locations", value: "15+", icon: <MapPin className="w-6 h-6" /> },
    { label: "Average Rating", value: "4.8", icon: <Star className="w-6 h-6 fill-current" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBoat})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-success/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border-white/30 px-4 py-2 text-sm">
            ✓ 100% Verified Operators • Safe & Transparent
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Your Gateway to <br />
            <span className="text-gradient-sunset">Unforgettable</span> Sea Adventures
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl mx-auto">
            Book verified boat rides with transparent pricing. Safe, simple, spectacular.
          </p>

          {/* Quick Booking Widget */}
          <Card className="max-w-4xl mx-auto glass border-white/20">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Where to?" 
                    className="pl-11 h-12 bg-white"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    type="date" 
                    className="pl-11 h-12 bg-white"
                  />
                </div>
                <div className="relative">
                  <Anchor className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select className="w-full h-12 pl-11 pr-4 rounded-lg border border-input bg-white">
                    <option>Activity Type</option>
                    <option>Scenic Tours</option>
                    <option>Fishing Trips</option>
                    <option>Snorkeling</option>
                    <option>Sunset Cruise</option>
                  </select>
                </div>
                <Link to="/search" className="w-full">
                  <Button className="w-full h-12 bg-gradient-to-r from-primary to-success hover:opacity-90 text-lg">
                    <Search className="w-5 h-5 mr-2" />
                    Find Your Adventure
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 wave-pattern" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-success text-white mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Activities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Popular <span className="text-gradient-ocean">Sea Activities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From serene coastal tours to thrilling water sports, find your perfect sea adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ActivityCard {...activity} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              How <span className="text-gradient-ocean">It Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to your perfect sea adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Choose Your Adventure",
                description: "Browse verified boats and activities. Filter by location, date, and experience type.",
                icon: <Search className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "Select Your Boat",
                description: "Compare prices, read reviews, and pick the perfect boat for your group.",
                icon: <Sailboat className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Book & Enjoy",
                description: "Secure payment, instant confirmation. Show up and enjoy your unforgettable experience!",
                icon: <CheckCircle className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="text-8xl font-display font-bold text-primary/10 absolute -top-4 -right-4">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-success text-white mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose <span className="text-gradient-ocean">Barrizii</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Verified & Safe",
                description: "All operators are verified with licenses and insurance",
                icon: <Shield className="w-6 h-6" />,
              },
              {
                title: "Best Price Guarantee",
                description: "Transparent pricing with no hidden fees",
                icon: <DollarSign className="w-6 h-6" />,
              },
              {
                title: "Easy Booking",
                description: "Book in minutes with instant confirmation",
                icon: <CheckCircle className="w-6 h-6" />,
              },
              {
                title: "Secure Payments",
                description: "Your payment information is always protected",
                icon: <Shield className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-success/20 flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${sunsetCruise})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-success/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers exploring the coast with verified operators
          </p>
          <Link to="/search">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14">
              Explore Boat Rides
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
