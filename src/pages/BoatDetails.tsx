import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Star, Users, Clock, MapPin, Shield, CheckCircle2, Heart } from "lucide-react";
import boatImage from "@/assets/jetski7.jpg";

const BoatDetails = () => {
  const { id } = useParams();
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState(2);

  // Mock boat data
  const boat = {
    name: "JETSKI RENTAL",
    operator: "Captain John's Tours",
    rating: 4.8,
    reviews: 124,
    price: 5850,
    capacity: 8,
    duration: "3 hours",
    location: "Mombasa Marina",
    verified: true,
    image: boatImage,
  };

  const features = [
    "Life jackets provided",
    "Snorkeling equipment",
    "Refreshments included",
    "Professional guide",
    "Photo opportunities",
    "All safety equipment",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={boat.image}
                  alt={boat.name}
                  className="w-full h-96 object-cover"
                />
                <button className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors">
                  <Heart className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Boat Info */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-display font-bold mb-2">{boat.name}</h1>
                    <p className="text-lg text-muted-foreground">{boat.operator}</p>
                  </div>
                  {boat.verified && (
                    <Badge className="bg-success text-success-foreground">
                      ✓ Verified Operator
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-foreground">{boat.rating}</span>
                    <span>({boat.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Up to {boat.capacity} guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{boat.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{boat.location}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="text-2xl font-display font-semibold mb-4">About this experience</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Join us for an unforgettable ocean adventure! Explore the beautiful coastline, 
                    discover hidden coves, and experience the thrill of the open sea. Our experienced 
                    captain and crew ensure your safety and comfort throughout the journey.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Perfect for families, couples, or groups of friends looking for an authentic 
                    sea experience. We provide all necessary equipment and refreshments to make 
                    your trip memorable.
                  </p>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="text-2xl font-display font-semibold mb-4">What's included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="text-2xl font-display font-semibold mb-4">Safety & Trust</h2>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        All our boats are regularly inspected and maintained to the highest standards. 
                        Our operators are licensed and insured, with years of experience navigating 
                        these waters. Your safety is our top priority.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">KES {boat.price.toLocaleString()}</span>
                    <span className="text-base font-normal text-muted-foreground">/person</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Date</label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Number of Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full p-2 border rounded-md"
                    >
                      {Array.from({ length: boat.capacity }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        KES {boat.price.toLocaleString()} × {guests} guests
                      </span>
                      <span>KES {(boat.price * guests).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service fee</span>
                      <span>KES {Math.round(boat.price * guests * 0.1).toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>KES {(boat.price * guests + Math.round(boat.price * guests * 0.1)).toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-success hover:opacity-90 h-12 text-lg"
                    disabled={!date}
                  >
                    {date ? "Book Now" : "Select a date"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    You won't be charged yet
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      {/* Structured Data: Product (Boat Listing) + Breadcrumb */}
      {
        // Build JSON-LD using boat data
      }
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: boat.name,
            description: "Join us for an unforgettable ocean adventure exploring the beautiful coastline. Equipment and refreshments included.",
            image: [boat.image],
            brand: { "@type": "Brand", name: boat.operator },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: String(boat.rating),
              reviewCount: String(boat.reviews),
              bestRating: "5",
              worstRating: "1"
            },
            offers: {
              "@type": "Offer",
              price: String(boat.price),
              priceCurrency: "KES",
              availability: "https://schema.org/InStock",
              url: (typeof window !== "undefined" && window.location.href) ? window.location.href : `https://barrizii.com/boat-rides/mombasa/${boat.name.replace(/\s+/g, '-').toLowerCase()}`,
              priceValidUntil: "2025-12-31",
              validFrom: "2025-01-01"
            },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Sarah Johnson" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody: "Amazing experience! The crew was professional and the snorkeling spots were incredible.",
                datePublished: "2025-01-15"
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://barrizii.com" },
              { "@type": "ListItem", position: 2, name: "Boat Rides", item: "https://barrizii.com/boat-rides" },
              { "@type": "ListItem", position: 3, name: boat.location || "Mombasa", item: `https://barrizii.com/destinations/${(boat.location || 'mombasa').toString().toLowerCase().replace(/\s+/g, '-')}` },
              { "@type": "ListItem", position: 4, name: boat.name, item: (typeof window !== "undefined" && window.location.href) ? window.location.href : undefined }
            ]
          })
        }}
      />
    </div>
  );
};

export default BoatDetails;
