// ============================================================
// EVENTS & EXPERIENCES DATA
// Centralized, editable data for the Events, Hackathons & Leadership section.
// Add your images to /public/events/ and reference them here.
// ============================================================

// Category definitions — controls order, labels, and visual prominence
export const EVENT_CATEGORIES = [
  {
    id: 'hackathons',
    label: 'HACKATHONS & COMPETITIONS',
    description: 'Competitive coding, building under pressure, and winning solutions.',
    color: 'var(--pink)',
    borderColor: 'var(--ink)',
    prominent: false,
  },
  {
    id: 'leadership',
    label: 'ORGANIZING & LEADERSHIP',
    description: 'Building communities, leading teams, and creating opportunities for others.',
    color: 'var(--butter)',
    borderColor: 'var(--ink)',
    prominent: true,
  },
  {
    id: 'panels',
    label: 'PANELS & JUDGING',
    description: 'Evaluating projects, sharing expertise, and mentoring the next generation.',
    color: 'var(--lavender)',
    borderColor: 'var(--ink)',
    prominent: false,
  },
  {
    id: 'conferences',
    label: 'TECH EVENTS & CONFERENCES',
    description: 'Learning from industry leaders, networking, and staying current.',
    color: 'var(--mint)',
    borderColor: 'var(--ink)',
    prominent: false,
  },
];

// Helper: create an event card with consistent structure
const event = (data) => ({
  id: '',
  category: 'hackathons',
  name: '',
  year: '',
  role: '',
  description: '',
  tags: [],
  images: [],
  timeline: [],
  featured: false,
  externalLink: '',
  chapterHighlights: [], // for nested highlights like Technex under ACM
  ...data,
});

// Event definitions
export const EVENTS = [
  // ============================================================
  // HACKATHONS & COMPETITIONS
  // ============================================================
  event({
    id: 'sih-progression',
    category: 'hackathons',
    name: 'Smart India Hackathon',
    year: '2024 — 2026',
    role: 'Participant → Organizer → Panelist',
    description: 'Three-year progression from building at the Grand Finale to organizing and evaluating at national level.',
    tags: ['Hackathon', 'AI-ML', 'Edge Computing', 'Leadership'],
    images: [
      // { src: '/events/sih/2024-id-card.jpg', alt: 'SIH 2024 ID Card', caption: '2024 Participant ID' },
      // { src: '/events/sih/2024-team.jpg', alt: 'SIH 2024 Team', caption: 'Team at Grand Finale' },
      // { src: '/events/sih/2024-demo.jpg', alt: 'SIH 2024 Demo', caption: 'Live demo to judges' },
      // { src: '/events/sih/2025-organizer.jpg', alt: 'SIH 2025 Organizer', caption: '2025 Organizer role' },
      // { src: '/events/sih/2026-panel.jpg', alt: 'SIH 2026 Panel', caption: '2026 Panelist' },
    ],
    timeline: [
      {
        date: '2024',
        title: 'PARTICIPANT — Grand Finale',
        description: 'Top 50 teams nationwide (1000+ teams). Built an AI-powered agricultural disease detection system using YOLOv8 with edge deployment on Jetson Nano.',
      },
      {
        date: '2025',
        title: 'ORGANIZER',
        description: 'Involved in organizing Smart India Hackathon.',
      },
      {
        date: '2026',
        title: 'PANELIST',
        description: 'Part of the panel for Smart India Hackathon.',
      },
    ],
    featured: true,
    externalLink: 'https://www.sih.gov.in',
  }),
  event({
    id: 'hackrx-2024',
    category: 'hackathons',
    name: 'HackRx 2024',
    year: '2024',
    role: 'Full-Stack Developer',
    description: 'Healthcare Track — 2nd Runner Up. Developed a real-time patient monitoring dashboard with FastAPI, WebSockets, and React for ICU vitals tracking.',
    tags: ['Hackathon', 'Healthcare', 'FastAPI', 'WebSockets', 'React'],
    images: [],
    featured: false,
    externalLink: 'https://hackrx.tech',
  }),
  event({
    id: 'acm-icpc-2023',
    category: 'hackathons',
    name: 'ACM ICPC Regionals 2023',
    year: '2023',
    role: 'Competitive Programmer',
    description: 'Regional contest participant solving algorithmic problems under time constraints. Ranked in top 15% regionally.',
    tags: ['Competitive Programming', 'Algorithms', 'C++'],
    images: [],
    featured: false,
  }),

  // ============================================================
  // ORGANIZING & LEADERSHIP
  // ============================================================
  event({
    id: 'acm-chapter',
    category: 'leadership',
    name: 'ACM Student Chapter, JUIT',
    year: '1st Year — 3rd Year',
    role: 'Member → Web Developer → Web Developer Lead → Team Lead → Council Member · Webmaster',
    description: 'Multi-year leadership journey through the ACM Student Chapter. Progressed from member to Webmaster, leading web development, managing teams, and serving on the governing council.',
    tags: ['ACM', 'Leadership', 'Web Development', 'Community', 'React', 'Git', 'Team Management'],
    images: [
      // { src: '/events/acm/id-card.jpg', alt: 'ACM ID Card', caption: 'ACM Membership Card' },
      // { src: '/events/acm/team-1st-year.jpg', alt: 'ACM 1st Year Team', caption: 'Member year' },
      // { src: '/events/acm/web-dev.jpg', alt: 'ACM Web Development', caption: 'Web Developer role' },
      // { src: '/events/acm/lead-team.jpg', alt: 'ACM Team Lead', caption: 'Team Lead' },
      // { src: '/events/acm/council.jpg', alt: 'ACM Council', caption: 'Council Member · Webmaster' },
      // { src: '/events/acm/events.jpg', alt: 'ACM Events', caption: 'Event organization' },
      // { src: '/events/acm/certificates.jpg', alt: 'ACM Certificates', caption: 'Certificates & proof' },
    ],
    timeline: [
      {
        date: '1st Year',
        title: 'MEMBER',
        description: 'Joined ACM Student Chapter, JUIT. Participated in chapter activities, workshops, and events. Attended Technex IIT (BHU) through ACM.',
      },
      {
        date: '2nd Year — Early',
        title: 'WEB DEVELOPER',
        description: 'Joined web development team. Built and maintained chapter web properties.',
      },
      {
        date: '2nd Year — Mid',
        title: 'WEB DEVELOPER LEAD',
        description: 'Led web development initiatives. Guided junior developers, established coding standards.',
      },
      {
        date: '2nd Year — Late',
        title: 'TEAM LEAD',
        description: 'Managed the full web team. Coordinated deliverables, timelines, and cross-functional collaboration.',
      },
      {
        date: '3rd Year',
        title: 'COUNCIL MEMBER · WEBMASTER',
        description: 'Elected to governing council. Served as Webmaster — owned chapter web presence, infrastructure, and digital strategy. Attended Technex IIT (BHU) with council delegation.',
      },
    ],
    featured: true,
    externalLink: '',
    chapterHighlights: [
      {
        id: 'technex',
        name: 'TECHNEX IIT (BHU)',
        years: '2024 • 2026',
        description: 'Attended through ACM Student Chapter involvement.',
        context: '1st year: Attended as ACM member (council members were seniors). 2nd & 3rd year: Attended with ACM council and club delegation.',
        tags: ['ACM Chapter', 'Tech Festival', 'IIT BHU'],
        images: [
          // { src: '/events/acm/technex-2024.jpg', alt: 'Technex 2024', caption: 'Technex 2024 with ACM' },
          // { src: '/events/acm/technex-2026.jpg', alt: 'Technex 2026', caption: 'Technex 2026 with council' },
        ],
      },
    ],
  }),

  // ============================================================
  // PANELS & JUDGING
  // ============================================================
  // SIH 2026 panelist role is shown in the SIH progression timeline above
  // Add additional panel/judging experiences here if any

  // ============================================================
  // TECH EVENTS & CONFERENCES
  // ============================================================
  event({
    id: 'microsoft-azure-academy',
    category: 'conferences',
    name: 'Microsoft Gurugram / Azure Learning Academy',
    year: '2024',
    role: 'Participant — Top Recognition',
    description: 'Technical learning program at Microsoft Gurugram. Azure-focused training, hands-on labs, and networking. Recognized among top participants.',
    tags: ['Microsoft', 'Azure', 'Cloud', 'Technical Learning', 'Top Participant'],
    images: [
      // { src: '/events/microsoft/building.jpg', alt: 'Microsoft Gurugram', caption: 'Microsoft Gurugram campus' },
      // { src: '/events/microsoft/event.jpg', alt: 'Azure Learning Academy', caption: 'Event photo' },
      // { src: '/events/microsoft/id-card.jpg', alt: 'Microsoft ID', caption: 'Participant ID' },
      // { src: '/events/microsoft/recognition.jpg', alt: 'Recognition', caption: 'Top participant recognition' },
    ],
    featured: false,
    externalLink: '',
  }),
  event({
    id: 'devfest-chandigarh',
    category: 'conferences',
    name: 'DevFest Chandigarh',
    year: '2024',
    role: 'Attendee',
    description: 'Developer community conference with sessions on Generative AI, Google technologies, Angular, and modern web development.',
    tags: ['DevFest', 'Google', 'Generative AI', 'Angular', 'Web Development', 'Community'],
    images: [
      // { src: '/events/devfest/photo.jpg', alt: 'DevFest Chandigarh', caption: 'DevFest Chandigarh' },
      // { src: '/events/devfest/badge.jpg', alt: 'DevFest Badge', caption: 'Attendee badge' },
    ],
    featured: false,
    externalLink: '',
  }),
  event({
    id: 'devcon-2024',
    category: 'conferences',
    name: 'Devcon India 2024',
    year: '2024',
    role: 'Attendee',
    description: 'Blockchain & Web3 conference. Explored decentralized infrastructure, zero-knowledge proofs, and next-gen developer tooling. Networked with core protocol engineers.',
    tags: ['Conference', 'Web3', 'Blockchain', 'ZK Proofs'],
    images: [],
    featured: false,
  }),
  event({
    id: 'github-universe-2023',
    category: 'conferences',
    name: 'GitHub Universe 2023 (Virtual)',
    year: '2023',
    role: 'Attendee',
    description: 'Developer conference with sessions on GitHub Copilot, Actions, Codespaces, and AI-assisted development workflows.',
    tags: ['Conference', 'GitHub', 'DevTools', 'AI'],
    images: [],
    featured: false,
  }),
];

// Helper to get events by category
export function getEventsByCategory(categoryId) {
  return EVENTS.filter((e) => e.category === categoryId);
}

// Helper to get featured events
export function getFeaturedEvents() {
  return EVENTS.filter((e) => e.featured);
}

// Helper to get category config
export function getCategoryConfig(categoryId) {
  return EVENT_CATEGORIES.find((c) => c.id === categoryId);
}

// Helper to get chapter highlights for an event
export function getChapterHighlights(eventId) {
  const event = EVENTS.find((e) => e.id === eventId);
  return event?.chapterHighlights || [];
}