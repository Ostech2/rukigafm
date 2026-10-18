import { StationConfig, Programme, Presenter, NewsArticle, PodcastEpisode, Poll } from '../types';

export const stationConfig: StationConfig = {
  stationName: 'RUKIGA FM',
  brandIdentity: 'EKICUNCU',
  slogan: 'RUKIGA FM — EKICUNCU. Eiraka ryaitu, omwoyo gwaitu.',
  tagline: 'EKICUNCU — YOUR VOICE, YOUR COMMUNITY.',
  description:
    'Your destination for music, news, conversations, entertainment, sports, and the stories that bring our communities together. Tune in and be part of the experience.',
  // Official Live Streaming URL for RUKIGA FM
  streamUrl: 'https://stream1.rcast.net/65813',
  // Official Online Portal URL
  onlineWebsiteUrl: 'https://rukigafm.com',
  // Safe royalty-free sample broadcast clip for previewing audio player controls when testing:
  testAudioFallbackUrl: 'https://cdn.freesound.org/previews/316/316844_4939433-lq.mp3',
  isLiveBroadcasting: true,
  contact: {
    phone: '+256 393 000 000 [Station Hotline Placeholder]',
    whatsappNumber: '256700000000',
    whatsappFormatted: '+256 700 000 000',
    email: 'info@rukigafm.com',
    studioAddress: 'Rukiga District, Western Region, Uganda [Official Studio Address TBC]',
    region: 'Rukiga District & Western Uganda',
  },
  socialLinks: {
    facebook: 'https://facebook.com/rukigafm',
    twitter: 'https://twitter.com/rukigafm',
    instagram: 'https://instagram.com/rukigafm',
    tiktok: 'https://tiktok.com/@rukigafm',
    youtube: 'https://youtube.com/@rukigafm',
  },
  colors: {
    primaryBackground: '#0B0B0D',
    secondaryBackground: '#151519',
    brandRed: '#E5232E',
    goldAccent: '#F5B82E',
    mainText: '#FFFFFF',
    secondaryText: '#B8B8C2',
  },
};

/**
 * 5 OFFICIAL WEEKDAY PROGRAMMES (Monday to Friday)
 * All descriptions, timeslots, and presenters remain editable.
 */
export const officialProgrammes: Programme[] = [
  {
    id: 'oruume-program',
    title: 'ORUUME PROGRAM',
    slug: 'oruume-program',
    subtitle: 'Energizing Western Uganda Every Morning',
    description:
      'Start your day with high-energy radio, inspiring music, morning devotion, fresh local headlines, weather, and farm produce market reviews.',
    fullDescription:
      'ORUUME PROGRAM is RUKIGA FM’s flagship breakfast experience. Designed to awaken the entire community across Rukiga and beyond, the show blends spirited traditional and modern melodies, spirited morning conversations, vital community news updates, and real-time announcements from local leaders. Wake up feeling informed, inspired, and ready for work.',
    theme: 'Energetic morning radio atmosphere & community sunrise',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeSlot: '06:00 AM – 10:00 AM [Station to Confirm]',
    presenter: 'Show Host (To be confirmed by Station)',
    isConfirmed: false,
    category: 'Morning',
  },
  {
    id: 'amani-gomukozi',
    title: 'AMANI GOMUKOZI',
    slug: 'amani-gomukozi',
    subtitle: 'Engaging Conversations & Grassroots Community Focus',
    description:
      'A dedicated mid-day forum honoring the daily worker. Delving deep into enterprise, agriculture, healthcare, trade, and community empowerment.',
    fullDescription:
      'AMANI GOMUKOZI celebrates the hardworking hands shaping our society. From terrace farmers in the hills of Rukiga to market vendors, artisans, teachers, and business entrepreneurs, this show gives a platform to the everyday heroes. Tune in for expert advice on financial literacy, agricultural best practices, family health, and live listener call-ins.',
    theme: 'Engaging conversations and community-focused broadcasting',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeSlot: '10:00 AM – 02:00 PM [Station to Confirm]',
    presenter: 'Community Anchor (To be confirmed by Station)',
    isConfirmed: false,
    category: 'Midday',
  },
  {
    id: 'sports-magazine',
    title: 'SPORTS MAGAZINE',
    slug: 'sports-magazine',
    subtitle: 'Passionate Sports Discussions, Match Updates & Local Athletics',
    description:
      'In-depth analysis of local sports leagues, Ugandan football, East African athletic talent, European leagues, and thrilling matchday debates.',
    fullDescription:
      'SPORTS MAGAZINE is the definitive home of sporting thrill on RUKIGA FM. Bringing match highlights, player transfers, tactical breakdowns, and grassroots sports tournaments directly to your ears. We shine a spotlight on budding local athletes from Kigezi and Western Uganda while delivering punchy updates on continental and global sporting spectacles.',
    theme: 'Sports discussions, match updates, and sporting stories',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeSlot: '02:00 PM – 04:00 PM [Station to Confirm]',
    presenter: 'Sports Analyst (To be confirmed by Station)',
    isConfirmed: false,
    category: 'Sports',
  },
  {
    id: 'evening-overdrive',
    title: 'EVENING OVERDRIVE',
    slug: 'evening-overdrive',
    subtitle: 'Energetic Evening Entertainment, Music & Rush Hour Beats',
    description:
      'Your ultimate companion as the workday winds down. Packed with top chart hits, comedy, entertainment scoops, traffic, and high-energy vibes.',
    fullDescription:
      'EVENING OVERDRIVE brings the pulse and rhythm of the evening to life. Featuring non-stop playlists curated by our resident DJ, celebrity interviews, listener song requests, witty social banter, and updates to ease your journey home. Whether in your car, taxi, workplace, or home verandah, this show keeps your adrenaline soaring.',
    theme: 'Energetic evening entertainment and music',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeSlot: '04:00 PM – 08:00 PM [Station to Confirm]',
    presenter: 'Drive Host (To be confirmed by Station)',
    isConfirmed: false,
    category: 'Drive',
  },
  {
    id: 'kurikayo',
    title: 'KURIKAYO',
    slug: 'kurikayo',
    subtitle: 'Reflective Nightly Homecoming, Soulful Tunes & Heartfelt Stories',
    description:
      'Wind down the night in peace. Thoughtful conversations, bedtime melodies, relationship discussions, and stories that touch the heart.',
    fullDescription:
      'KURIKAYO warmly welcomes you home after a long day under the African skies. With a calm, soothing atmosphere, soulful ballads, acoustic gems, and gentle nighttime storytelling, the programme invites listeners to share their deepest reflections, poetry, prayers, and heartfelt dedications to loved ones.',
    theme: 'Distinctive programme branding with warm nighttime companionship',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeSlot: '08:00 PM – 12:00 AM [Station to Confirm]',
    presenter: 'Night Anchor (To be confirmed by Station)',
    isConfirmed: false,
    category: 'Evening',
  },
];

/**
 * PRESENTER PROFILES (With honest placeholders for station to update)
 */
export const presentersData: Presenter[] = [
  {
    id: 'p1',
    name: 'Broadcaster Placeholder 1',
    role: 'Morning Anchor',
    show: 'ORUUME PROGRAM',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    bio: 'Energetic voice greeting listeners at dawn. Brings infectious positivity, news awareness, and community warmth to every sunrise broadcast.',
    socials: { twitter: '#', facebook: '#', instagram: '#' },
    isPlaceholder: true,
  },
  {
    id: 'p2',
    name: 'Broadcaster Placeholder 2',
    role: 'Midday Host & Community Advocate',
    show: 'AMANI GOMUKOZI',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    bio: 'Passionate about grassroots community stories, local entrepreneurship, and uplifting voices from all corners of the district.',
    socials: { twitter: '#', facebook: '#', instagram: '#' },
    isPlaceholder: true,
  },
  {
    id: 'p3',
    name: 'Broadcaster Placeholder 3',
    role: 'Head of Sports Desk',
    show: 'SPORTS MAGAZINE',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    bio: 'Seasoned commentator with an encyclopedia of football stats, local tournament updates, and high-octane commentary.',
    socials: { twitter: '#', facebook: '#', instagram: '#' },
    isPlaceholder: true,
  },
  {
    id: 'p4',
    name: 'Broadcaster Placeholder 4',
    role: 'Drive-Time Host & Music Selector',
    show: 'EVENING OVERDRIVE',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop',
    bio: 'Master of the soundwaves, bringing listeners the freshest hits, dynamic pacing, and unforgettable evening banter.',
    socials: { twitter: '#', facebook: '#', instagram: '#' },
    isPlaceholder: true,
  },
  {
    id: 'p5',
    name: 'Broadcaster Placeholder 5',
    role: 'Late Night Companion & Storyteller',
    show: 'KURIKAYO',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=600&auto=format&fit=crop',
    bio: 'A comforting, warm voice accompanying families and night owls through soul-stirring melodies and gentle conversation.',
    socials: { twitter: '#', facebook: '#', instagram: '#' },
    isPlaceholder: true,
  },
];

/**
 * EDITORIAL NEWS & ENTERTAINMENT (Sample content clearly designated)
 */
export const newsArticlesData: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Rukiga District Farmers Champion New Terracing and Conservation Techniques',
    slug: 'rukiga-farmers-champion-terracing-techniques',
    category: 'Rukiga Stories',
    date: 'October 14, 2026',
    author: 'RUKIGA FM Editorial Desk',
    readTime: '4 min read',
    summary:
      'Local agricultural cooperatives across the scenic hills of Rukiga share practical soil conservation successes during this planting season.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop',
    isSample: true,
    content: [
      'In a bid to safeguard fertile volcanic soils from erosion on steep hillsides, farming clusters across Rukiga have united under modern conservation initiatives.',
      'During yesterday’s agricultural forum covered by RUKIGA FM reporters, representatives highlighted how stone bunds, vetiver grass planting, and reinforced bench terraces have dramatically improved yields for beans, Irish potatoes, and sorghum.',
      'Community leaders praised the proactive cooperation of youth groups who provide labor and technical advice, proving that collective grassroots action protects both community livelihood and ecological heritage.',
      'RUKIGA FM will continue tracking these agricultural developments on AMANI GOMUKOZI with live call-ins every Tuesday.',
    ],
  },
  {
    id: 'n2',
    title: 'Western Uganda Inter-Subcounty Football Championship Kicks Off This Weekend',
    slug: 'western-uganda-football-championship-kickoff',
    category: 'Sports',
    date: 'October 13, 2026',
    author: 'Sports Desk',
    readTime: '3 min read',
    summary:
      'Excitement reaches fever pitch as grassroots football clubs prepare to battle for regional pride and scouting opportunities.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
    isSample: true,
    content: [
      'Sports enthusiasts across the district are gearing up for the highly anticipated kickoff of the annual grassroots tournament.',
      'Twelve sub-county squads have finalized their 22-man rosters, featuring both experienced veteran strikers and thrilling high-school talents.',
      'Catch full previews, live stadium reports, and post-match breakdowns on SPORTS MAGAZINE with our sports desk experts every weekday from 2:00 PM.',
    ],
  },
  {
    id: 'n3',
    title: 'Traditional Folk Sounds Blend with Afro-Beats: Western Ugandan Artists on the Rise',
    slug: 'traditional-folk-sounds-blend-afrobeats',
    category: 'Entertainment',
    date: 'October 11, 2026',
    author: 'Entertainment Reporter',
    readTime: '5 min read',
    summary:
      'How a new wave of talented youth from the Kigezi region are weaving the Enanga harp and traditional rhythms into modern chart-toppers.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
    isSample: true,
    content: [
      'Ugandan music continues to evolve as emerging artists embrace ancestral acoustics and contemporary digital production.',
      'Studio sessions reviewed by RUKIGA FM showcase innovative instrumentation where acoustic folk elements seamlessly accompany vibrant electronic basslines.',
      'Listeners can catch exclusive premiere tracks and exclusive in-studio acoustic sessions on EVENING OVERDRIVE.',
    ],
  },
  {
    id: 'n4',
    title: 'Empowering Youth Through Technical Skills and Vocational Education in Rukiga',
    slug: 'empowering-youth-technical-skills-rukiga',
    category: 'Education',
    date: 'October 09, 2026',
    author: 'Community Outreach',
    readTime: '4 min read',
    summary:
      'Community training workshops in solar installation, metal fabrication, and computer literacy create sustainable opportunities.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
    isSample: true,
    content: [
      'Vocational training centers are experiencing a surge in enrollments as practical skills training gains momentum.',
      'Local instructors emphasize hands-on competence, equipping young men and women with the craftsmanship required in modern construction, renewable energy, and digital commerce.',
      'Tune into AMANI GOMUKOZI for regular announcements on upcoming free workshops and registration details.',
    ],
  },
  {
    id: 'n5',
    title: 'District Healthcare Initiative Launches Free Maternal and Child Wellness Clinics',
    slug: 'district-healthcare-maternal-child-wellness',
    category: 'Local Community',
    date: 'October 08, 2026',
    author: 'Health Desk',
    readTime: '3 min read',
    summary:
      'Mobile medical teams deploy across rural trading centres to provide free checkups, immunisations, and family nutrition guidance.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
    isSample: true,
    content: [
      'Dedicated health workers have commenced a comprehensive community outreach tour across several parishes.',
      'The clinic targets early detection of childhood illnesses, provides essential maternal supplements, and offers confidential consultations.',
      'Listen to RUKIGA FM daily news bulletins for clinic dates and village arrival schedules.',
    ],
  },
  {
    id: 'n6',
    title: 'Small Business Spotlight: How Local Traders Are Thriving with Mobile Financial Services',
    slug: 'small-business-spotlight-mobile-finance',
    category: 'Business',
    date: 'October 05, 2026',
    author: 'Business Desk',
    readTime: '4 min read',
    summary:
      'Traders in bustling market centers explain how digital payments have reduced transaction costs and boosted regional commerce.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop',
    isSample: true,
    content: [
      'Market stalls that once operated strictly on cash are rapidly adopting instant mobile payment methods, bringing security and speed to daily transactions.',
      'Financial experts visiting RUKIGA FM studios shared vital advice on managing digital records and building credit scores for commercial expansion.',
    ],
  },
];

/**
 * PODCASTS & RECORDED SHOWS
 */
export const podcastsData: PodcastEpisode[] = [
  {
    id: 'pod-1',
    title: 'The Future of Agro-Processing in the Kigezi Highlands',
    programmeName: 'AMANI GOMUKOZI',
    presenter: 'Community Anchor',
    date: 'October 12, 2026',
    duration: '28:15',
    audioUrl: 'https://cdn.freesound.org/previews/316/316844_4939433-lq.mp3',
    artwork: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop',
    description:
      'An inspiring conversation with local cooperative managers on adding value to Irish potato and honey yields for national export.',
  },
  {
    id: 'pod-2',
    title: 'Western Football Derby Preview & Grassroots Scouting Special',
    programmeName: 'SPORTS MAGAZINE',
    presenter: 'Sports Analyst',
    date: 'October 10, 2026',
    duration: '34:40',
    audioUrl: 'https://cdn.freesound.org/previews/316/316844_4939433-lq.mp3',
    artwork: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop',
    description:
      'A deep dive into player form, tactical matchups, and scouting reports ahead of the upcoming regional knockout stages.',
  },
  {
    id: 'pod-3',
    title: 'Morning Reflections: Wisdom from Our Elders on Community Solidarity',
    programmeName: 'ORUUME PROGRAM',
    presenter: 'Show Host',
    date: 'October 09, 2026',
    duration: '21:10',
    audioUrl: 'https://cdn.freesound.org/previews/316/316844_4939433-lq.mp3',
    artwork: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop',
    description:
      'Community leaders reflect on traditional Rukiga social values, mutual assistance, and passing enduring principles to the next generation.',
  },
  {
    id: 'pod-4',
    title: 'Nighttime Acoustic Soul & Poetic Dedications',
    programmeName: 'KURIKAYO',
    presenter: 'Night Anchor',
    date: 'October 06, 2026',
    duration: '42:50',
    audioUrl: 'https://cdn.freesound.org/previews/316/316844_4939433-lq.mp3',
    artwork: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop',
    description:
      'A calming selection of nighttime acoustic recordings, poetry readings, and listener message highlights from across the country.',
  },
];

/**
 * INTERACTIVE LISTENER POLL
 */
export const initialPoll: Poll = {
  id: 'poll-01',
  question: 'Which community development priority should local leaders focus on most in the next financial quarter?',
  category: 'Community Voice',
  options: [
    { id: 'opt-1', text: 'Feeder road paving & hill terrace protection', votes: 142 },
    { id: 'opt-2', text: 'Clean piped water extension to village centers', votes: 215 },
    { id: 'opt-3', text: 'Youth vocational workshops & digital hubs', votes: 178 },
    { id: 'opt-4', text: 'Farmer storage facilities & cooperative markets', votes: 98 },
  ],
  totalVotes: 633,
  expiresAt: '2026-11-01',
};
