export interface ServiceDetail {
  id: string;
  verticalId: string;
  title: string;
  deliverables: string[];
  timeline: string;
  metricImpact: string;
  description: string;
}

export const services: ServiceDetail[] = [
  {
    id: "short-form-video-clinics",
    verticalId: "clinics",
    title: "Clinical Trust Content System",
    deliverables: [
      "12 custom-scripted short-form videos per month",
      "On-site filming days (8K cinema cameras, professional lighting)",
      "Strict HIPAA-compliant editing and consent workflow",
      "Voiceover scripting & expert interview framing",
      "Organic posting, SEO caption optimization & hashtag mapping"
    ],
    timeline: "Ready to launch in 14 days",
    metricImpact: "Average +34 monthly booking inquiries over 90 days",
    description: "We turn complex aesthetic treatments into engaging, educational patient journeys that remove friction and build absolute medical trust before the first consultation."
  },
  {
    id: "short-form-video-restaurants",
    verticalId: "restaurants",
    title: "Cinematic Dining Stories",
    deliverables: [
      "10 cinematic reels/TikToks per month",
      "Monthly 4-hour kitchen and dining room shoot",
      "Sound design focused on ASMR food preparation",
      "Trendy restaurant lifestyle storytelling edit",
      "Direct reservation link mapping & story campaigns"
    ],
    timeline: "Ready to launch in 10 days",
    metricImpact: "Average +42% weekend reservation growth over 60 days",
    description: "High-end dining is an experience, not just food. We capture the atmospheric details, the chefs' precise movements, and the sensory details that drive direct table bookings."
  },
  {
    id: "short-form-video-realestate",
    verticalId: "realestate",
    title: "Premium Listing Tours",
    deliverables: [
      "8 cinematic walk-through reels per month",
      "High-end stabilizer & drone capture of listing details",
      "Neighborhood lifestyle content integration",
      "Agent brand positioning scripts & teleprompter guidance",
      "Multi-platform syndicate posting (Instagram, YouTube Shorts)"
    ],
    timeline: "Ready to launch in 7 days per listing",
    metricImpact: "Over 200K target local views per property reel",
    description: "Still photos don't tell the story of a luxury home. We guide agents through premium properties, highlighting design features, space transitions, and neighborhood prestige."
  },
  {
    id: "short-form-video-fitness",
    verticalId: "fitness",
    title: "Studio Momentum Builder",
    deliverables: [
      "14 high-energy reels/TikToks per month",
      "Weekly studio capture sessions (classes, instructors, workouts)",
      "Dynamic beat-synced editing style & trend integration",
      "Member-focused transformation stories & reviews",
      "Introductory package CTA story flow optimization"
    ],
    timeline: "Ready to launch in 14 days",
    metricImpact: "Average 85 new members signed over 120 days",
    description: "We capture the community energy and physical intensity of your studio. By showcasing the experience of a class, we eliminate the intimidation factor for new trial sign-ups."
  }
];
