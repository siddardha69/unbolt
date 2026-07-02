export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  verticalId: string;
  beforeMetric: string;
  afterMetric: string;
  timeframe: string;
  summary: string;
  startingPoint: string;
  strategy: string[];
  results: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "aesthetic-clinic",
    clientName: "DermaGlow Clinic",
    industry: "Clinics & Healthcare",
    verticalId: "clinics",
    beforeMetric: "1.2K views",
    afterMetric: "450K views",
    timeframe: "90 Days",
    summary: "+34 inbound consultation bookings per month generated directly from Instagram Direct Messages.",
    startingPoint: "DermaGlow had a beautiful clinic but struggled to get noticed online. Their posts were static stock graphics, averaging less than 100 engagements and 1,200 views per month.",
    strategy: [
      "Shifted content from static graphics to high-retention video patient walkthroughs.",
      "Introduced 'Meet the Doctor' educational Q&As to address common patient anxieties.",
      "Optimized caption SEO targeting high-value local aesthetic treatments."
    ],
    results: [
      "450K+ organic views reached within the local metropolitan area.",
      "34 new high-ticket treatment consultations booked via DMs per month.",
      "Follower base increased by 280% with zero paid ad spend."
    ],
    quote: {
      text: "Upbolt transformed our Instagram from a digital brochure into our absolute primary source of new patients. The return on investment was clear in the first month.",
      author: "Dr. Evelyn Ross",
      role: "Founder & Chief Surgeon"
    }
  },
  {
    id: "fine-dining",
    clientName: "L'Aura Restaurant",
    industry: "Fine Dining",
    verticalId: "restaurants",
    beforeMetric: "4K views/video",
    afterMetric: "85K views/video",
    timeframe: "60 Days",
    summary: "+42% increase in weekend table reservations and standard waiting list times.",
    startingPoint: "L'Aura served exquisite French-Asian fusion cuisine, but their social media was dark, sporadic, and failed to communicate the theatrical level of service inside the dining room.",
    strategy: [
      "Shot ultra-close, high-framerate preparation sequences showcasing premium ingredients.",
      "Produced ASMR food and cocktail assembly videos using high-fidelity external microphones.",
      "Executed a weekly campaign highlighting 'Behind the Dish' stories from the Head Chef."
    ],
    results: [
      "Average view count jumped from 4,000 to over 85,000 views per reel.",
      "Weekend table reservations booked out 4 weeks in advance (up from 1 week).",
      "Overall weekend sales revenue grew by 42% over the 60-day campaign."
    ],
    quote: {
      text: "We used to rely entirely on food critics. Now, people walk in holding their phones, pointing at a Reel they saw last night. It has completely changed our business.",
      author: "Marcus Chen",
      role: "General Manager"
    }
  },
  {
    id: "pilates-studio",
    clientName: "Pulse Pilates",
    industry: "Boutique Fitness",
    verticalId: "fitness",
    beforeMetric: "150 visits/mo",
    afterMetric: "1.8K visits/mo",
    timeframe: "120 Days",
    summary: "85 new recurring monthly memberships signed, filling off-peak morning classes.",
    startingPoint: "Pulse Pilates had empty slots in their 9:00 AM and 10:30 AM reformer classes. Their Instagram posts were low-quality phone snaps that didn't capture the studio's premium feel.",
    strategy: [
      "Filmed energetic, beat-synced class clips highlighting the studio's luxury reformers.",
      "Captured instructor spotlight reels demonstrating proper form and modification options.",
      "Designed a direct lead funnel driving viewers to an intro offer landing page."
    ],
    results: [
      "Website visits originating from social media grew from 150 to 1,800 per month.",
      "85 new recurring members signed using the 3-class introductory trial package.",
      "Off-peak morning class utilization increased from 30% to 92% capacity."
    ],
    quote: {
      text: "The videos feel so high-end that they make our studio look like a luxury club. Our sales for intro packages skyrocketed within weeks of working together.",
      author: "Sarah Jenkins",
      role: "Studio Director"
    }
  }
];
