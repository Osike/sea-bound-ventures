import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BoatCard from "@/components/BoatCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search as SearchIcon, SlidersHorizontal, MapPin, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { boats } from "@/data/boats";

const Search = () => {
  const [date, setDate] = useState<Date>();
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Search Bar */}
        <section className="bg-gradient-to-br from-primary/10 to-success/10 py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass p-6 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Where to?"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Activity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jetski">JET SKI</SelectItem>
                      <SelectItem value="dhows">SWAHILI DHOWS</SelectItem>
                      <SelectItem value="kite">KITE SURFING</SelectItem>
                      <SelectItem value="windsurf">WINDSURFING</SelectItem>
                      <SelectItem value="snorkeling">SNORKELING</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="bg-gradient-to-r from-primary to-success hover:opacity-90">
                    <SearchIcon className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-display font-bold mb-2">Available Boats</h1>
                <p className="text-muted-foreground">Found {boats.length} boats matching your search</p>
              </div>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boats.map((boat) => (
                <BoatCard key={boat.id} {...boat} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
