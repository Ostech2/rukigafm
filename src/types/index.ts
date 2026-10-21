export interface Programme {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  theme: string;
  image: string;
  days: string[]; // e.g. ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  timeSlot: string; // e.g. "06:00 AM - 10:00 AM (Confirmed / Placeholder)"
  presenter: string;
  isConfirmed: boolean;
  category: 'Morning' | 'Midday' | 'Sports' | 'Evening' | 'Drive';
}

export interface Presenter {
  id: string;
  name: string;
  role: string;
  show: string;
  image: string;
  bio: string;
  socials: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  isPlaceholder?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Local Community' | 'Rukiga Stories' | 'Uganda News' | 'Entertainment' | 'Sports' | 'Business' | 'Education' | 'Events';
  date: string;
  author: string;
  summary: string;
  content: string[];
  image: string;
  readTime: string;
  isSample: boolean;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  programmeName: string;
  presenter: string;
  date: string;
  duration: string;
  audioUrl: string;
  artwork: string;
  description: string;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  category: string;
  options: PollOption[];
  totalVotes: number;
  expiresAt: string;
}

export interface StationConfig {
  stationName: string;
  brandIdentity: string;
  slogan: string;
  tagline: string;
  description: string;
  streamUrl: string; // Configured with actual Icecast/Shoutcast URL (https://stream1.rcast.net/65813)
  onlineWebsiteUrl: string; // Official online streaming portal (https://rukigafm.com)
  testAudioFallbackUrl?: string; // Optional sample broadcast snippet for testing
  isLiveBroadcasting: boolean;
  contact: {
    phone: string;
    studioLine1: string;
    studioLine2: string;
    receptionLine: string;
    phones: string[];
    whatsappNumber: string;
    whatsappFormatted: string;
    email: string;
    studioAddress: string;
    region: string;
  };
  socialLinks: {
    facebook: string;
    twitter: string;
    x: string;
    instagram: string;
    tiktok: string;
    youtube: string;
  };
  colors: {
    primaryBackground: string;
    secondaryBackground: string;
    brandRed: string;
    goldAccent: string;
    mainText: string;
    secondaryText: string;
  };
}
