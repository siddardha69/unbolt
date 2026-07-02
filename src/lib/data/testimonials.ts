export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metricBadge: string;
  verticalId: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "derma-glow",
    quote: "Unbolt transformed our Instagram from a digital brochure into our absolute primary source of new patients. The return on investment was clear in the first month.",
    author: "Dr. Evelyn Ross",
    role: "Founder",
    company: "DermaGlow Clinic",
    metricBadge: "+34 Bookings/Mo",
    verticalId: "clinics"
  },
  {
    id: "laura-restaurant",
    quote: "We used to rely entirely on food critics. Now, people walk in holding their phones, pointing at a Reel they saw last night. It has completely changed our business.",
    author: "Marcus Chen",
    role: "General Manager",
    company: "L'Aura Restaurant",
    metricBadge: "+42% Reservations",
    verticalId: "restaurants"
  },
  {
    id: "pulse-pilates",
    quote: "The videos feel so high-end that they make our studio look like a luxury club. Our sales for intro packages skyrocketed within weeks of working together.",
    author: "Sarah Jenkins",
    role: "Studio Director",
    company: "Pulse Pilates",
    metricBadge: "+85 Members",
    verticalId: "fitness"
  }
];
