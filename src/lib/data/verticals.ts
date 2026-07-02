export interface Vertical {
  id: string;
  name: string;
  icon: string;
  description: string;
  growthPotential: string;
  diyMultiplier: number;       // flatter DIY curve
  managedMultiplier: number;   // steeper Managed curve
  volume: string;
  reach: string;
  outcome: string;
}

export const verticals: Vertical[] = [
  {
    id: "clinics",
    name: "Aesthetic Clinics",
    icon: "health",
    description: "High-retention visual content showing patient journeys, clinical expertise, and real results to build medical trust.",
    growthPotential: "12x reach lift",
    diyMultiplier: 1.1,
    managedMultiplier: 3.4,
    volume: "~12 reels / month",
    reach: "150K - 500K views/mo",
    outcome: "Increase in booking inquiries & consultation calls"
  },
  {
    id: "restaurants",
    name: "Fine Dining",
    icon: "food",
    description: "Cinematic, slow-paced preparation shots, atmosphere showcases, and culinary storytelling that drives weekend bookings.",
    growthPotential: "8x reach lift",
    diyMultiplier: 1.2,
    managedMultiplier: 2.9,
    volume: "~10 reels / month",
    reach: "80K - 250K views/mo",
    outcome: "Higher tables booked & reservation site traffic"
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: "building",
    description: "Sleek, high-production walkthroughs of premium listings, neighborhood guides, and developer stories for high-net-worth buyers.",
    growthPotential: "15x reach lift",
    diyMultiplier: 1.05,
    managedMultiplier: 3.8,
    volume: "~8 reels / month",
    reach: "200K - 600K views/mo",
    outcome: "More direct messages & agent email inquiries"
  },
  {
    id: "fitness",
    name: "Boutique Fitness",
    icon: "fitness",
    description: "High-energy movement captures, instructor profiles, and member community highlights that drive trial class signups.",
    growthPotential: "10x reach lift",
    diyMultiplier: 1.15,
    managedMultiplier: 3.1,
    volume: "~14 reels / month",
    reach: "100K - 300K views/mo",
    outcome: "More intro package sales & class bookings"
  }
];
