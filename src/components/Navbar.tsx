import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Anchor, Menu, User } from "lucide-react";
import { useState } from "react";

// Smooth scroll to the sea activities section (if present), otherwise navigate to home with hash
const scrollToSeaActivities = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  try {
    const el = document.getElementById("sea-activities");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // update URL without reloading
      window.history.pushState({}, "", "/#sea-activities");
      return;
    }
  } catch (err) {
    // ignore — fallback to full navigation
  }
  // If element not found (we're on another route), navigate so the browser lands on home+hash
  window.location.href = "/#sea-activities";
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center">
              <Anchor className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-2xl font-display font-bold text-gradient-ocean">
              Barrizii
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/#sea-activities" onClick={scrollToSeaActivities} className="text-foreground hover:text-primary transition-colors">
              Sea Activities
            </Link>
            <Link to="/search" className="text-foreground hover:text-primary transition-colors">
              Browse Boats
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/for-operators" className="text-foreground hover:text-primary transition-colors">
              For Operators
            </Link>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-success hover:opacity-90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/#sea-activities" onClick={scrollToSeaActivities} className="text-foreground hover:text-primary transition-colors">
                Sea Activities
              </Link>
              <Link to="/search" className="text-foreground hover:text-primary transition-colors">
                Browse Boats
              </Link>
              <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="/for-operators" className="text-foreground hover:text-primary transition-colors">
                For Operators
              </Link>
              <Button variant="ghost" size="sm" className="justify-start">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-success hover:opacity-90">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
