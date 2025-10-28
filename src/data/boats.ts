import swahiliDhow from "@/assets/swahilidhow.jpg";
import jetski from "@/assets/jetski1.jpg";
import boatImage from "@/assets/boat-1.jpg";
import kayak from "@/assets/kayak1.jpg";
import heroBoat from "@/assets/hero-boat.jpg";

export interface Boat {
  id: string;
  name: string;
  operator: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  capacity: number;
  duration: string;
  location: string;
  verified: boolean;
  featured?: boolean;
  description: string;
  features: string[];
}

export const boats: Boat[] = [
  {
    id: "1",
    name: "SWAHILI DHOWS",
    operator: "Captain John's Tours",
    image: swahiliDhow,
    rating: 4.8,
    reviews: 124,
    price: "5,850",
    capacity: 8,
    duration: "3 hours",
    location: "Mombasa Marina",
    verified: true,
    featured: true,
    description: "Experience the authentic charm of traditional Swahili dhows. Sail along the stunning coastline in these beautifully crafted wooden vessels that have been used for centuries. Enjoy the gentle ocean breeze, stunning views, and a peaceful journey that connects you with the rich maritime heritage of the Swahili coast.",
    features: [
      "Traditional wooden dhow experience",
      "Experienced dhow captain",
      "Refreshments and snacks included",
      "Sunset viewing opportunities",
      "Cultural storytelling",
      "All safety equipment provided",
    ],
  },
  {
    id: "2",
    name: "JETSKIS",
    operator: "Traditional Dhow Cruises",
    image: jetski,
    rating: 4.9,
    reviews: 89,
    price: "5,500",
    capacity: 12,
    duration: "1 hour",
    location: "Lamu Island",
    verified: true,
    description: "Feel the adrenaline rush as you speed across the crystal-clear waters on our high-performance jet skis. Perfect for thrill-seekers and water sports enthusiasts, this experience offers an exciting way to explore the coastline. Whether you're a beginner or experienced rider, our professional guides ensure a safe and exhilarating adventure.",
    features: [
      "High-performance jet skis",
      "Professional instruction included",
      "Life jackets and safety gear",
      "Fuel included",
      "Coastline exploration route",
      "Photo opportunities",
    ],
  },
  {
    id: "3",
    name: "PEDLE BOATS",
    operator: "Island Hopping Co.",
    image: boatImage,
    rating: 4.7,
    reviews: 156,
    price: "4,950",
    capacity: 10,
    duration: "2 hours",
    location: "Diani Beach",
    verified: true,
    description: "Enjoy a leisurely and fun-filled experience on our comfortable pedal boats. Perfect for families and couples, these easy-to-operate boats let you explore the calm waters at your own pace. Great for those who want a relaxing yet active water experience with beautiful views of the shoreline.",
    features: [
      "Easy-to-operate pedal boats",
      "Suitable for all ages",
      "Life jackets provided",
      "Shallow water exploration",
      "Sun canopy for shade",
      "Swimming breaks allowed",
    ],
  },
  {
    id: "4",
    name: "KAYAKS",
    operator: "Speed Water Sports",
    image: kayak,
    rating: 4.5,
    reviews: 67,
    price: "2,600",
    capacity: 2,
    duration: "1.5 hours",
    location: "Nyali Beach",
    verified: true,
    featured: true,
    description: "Paddle through serene waters and explore hidden coves in our sturdy kayaks. This eco-friendly water adventure offers an intimate connection with nature, allowing you to navigate through mangroves, spot marine life, and enjoy the tranquility of the ocean. Suitable for both beginners and experienced kayakers.",
    features: [
      "Quality single/double kayaks",
      "Paddles and life jackets",
      "Basic kayaking instruction",
      "Waterproof bags for belongings",
      "Wildlife spotting opportunities",
      "Professional guide available",
    ],
  },
  {
    id: "5",
    name: "YATCH RIDE",
    operator: "Swahili Heritage Tours",
    image: heroBoat,
    rating: 4.8,
    reviews: 112,
    price: "6,200",
    capacity: 15,
    duration: "4 hours",
    location: "Kilifi Creek",
    verified: true,
    description: "Indulge in luxury aboard our premium yacht and experience the ultimate ocean adventure. This sophisticated vessel offers comfort, style, and breathtaking views as you cruise along the beautiful coastline. Perfect for special occasions, corporate events, or simply treating yourself to an unforgettable maritime experience with gourmet refreshments.",
    features: [
      "Luxury yacht experience",
      "Gourmet refreshments and drinks",
      "Professional crew and captain",
      "Swimming and snorkeling stops",
      "Premium sound system",
      "Spacious deck and seating areas",
    ],
  },
  {
    id: "6",
    name: "GLASS BOTTOM BOAT",
    operator: "Coastal Adventures",
    image: boatImage,
    rating: 4.6,
    reviews: 93,
    price: "8,500",
    capacity: 8,
    duration: "2.5 hours",
    location: "Malindi Beach",
    verified: true,
    description: "Discover the magical underwater world without getting wet! Our glass bottom boat offers a unique viewing experience, allowing you to observe colorful coral reefs, tropical fish, and marine life through the clear glass floor. Perfect for families, non-swimmers, and anyone wanting to explore the ocean's wonders in comfort.",
    features: [
      "Glass bottom viewing area",
      "Marine life commentary",
      "Coral reef exploration",
      "Comfortable seating",
      "Refreshments included",
      "Professional marine guide",
    ],
  },
];

export const getBoatById = (id: string): Boat | undefined => {
  return boats.find((boat) => boat.id === id);
};
