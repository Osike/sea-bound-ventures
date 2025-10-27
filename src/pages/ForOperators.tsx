import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Shield, DollarSign, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForOperators = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Reach more customers through our platform. Get discovered by travelers looking for authentic sea experiences."
    },
    {
      icon: Shield,
      title: "Verified & Trusted",
      description: "Build trust with our verification process. Display your credentials and safety certifications to attract more bookings."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Set your own prices with full transparency. No hidden fees. Keep more of what you earn with competitive commission rates."
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Get help when you need it. Our team is here to support you with onboarding, technical issues, and growing your business."
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
                Partner With Barrizii
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join our network of verified boat operators and grow your business with transparent, reliable bookings
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-success hover:opacity-90">
                Register Your Business
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Why Join Barrizii?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-success/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Register your boat or water sports business today and start accepting bookings through our platform. 
                Our team will guide you through the verification process and help you set up your profile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-success hover:opacity-90">
                  Register Now
                </Button>
                <Button size="lg" variant="outline">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForOperators;
