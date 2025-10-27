import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Calendar, Anchor, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Discover",
      description: "Explore our curated selection of verified boats and sea activities. Filter by location, activity type, or price range."
    },
    {
      icon: Calendar,
      title: "Book Your Adventure",
      description: "Select your preferred date and time. View transparent pricing with no hidden fees. Complete your secure booking in minutes."
    },
    {
      icon: Anchor,
      title: "Enjoy Your Experience",
      description: "Meet your verified operator at the designated location. Enjoy your sea adventure with peace of mind and professional service."
    },
    {
      icon: Shield,
      title: "Rate & Review",
      description: "Share your experience to help others. Your feedback helps us maintain quality and trust in our community."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient-ocean">
                How It Works
              </h1>
              <p className="text-xl text-muted-foreground">
                Book your perfect sea adventure in four simple steps
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="glass p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-success/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our selection of verified boats and activities to find your perfect sea experience.
            </p>
            <a 
              href="/search" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-success text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Browse Boats
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
