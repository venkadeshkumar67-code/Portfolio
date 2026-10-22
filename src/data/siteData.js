/**
 * Single source of truth for all portfolio content.
 * Every string here is taken from (or directly derived from) the resume.
 */

export const profile = {
  name: 'Venkatesh Kumar M',
  firstName: 'Venkatesh',
  title: 'Full Stack Developer',
  initials: 'VK',
  location: 'Tenkasi, Tamil Nadu, India',
  shortLocation: 'Tenkasi, Tamil Nadu',
  email: 'venkateshk16@gmail.com',
  phone: '+91 63795 80848',
  phoneHref: 'tel:+916379580848',
  resume: './Venkatesh_Kumar_Resume.pdf',
  availability: 'Open to entry-level software developer roles',
  summary:
    "BCA graduate from Tenkasi, Tamil Nadu, building real products for the web and mobile. I designed and maintain a live college website used daily by students, faculty and administrators — and I'm now deepening that stack with Java + Spring.",
  lede: 'Motivated BCA graduate with hands-on experience in web development (PHP/MySQL) and mobile app development (Flutter).',
  roles: ['Full Stack Developer', 'PHP & MySQL Developer', 'Flutter App Developer', 'Java Enthusiast'],
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '3+', label: 'Years building for the web' },
  { value: '1', label: 'Live production site' },
  { value: '5', label: 'Certifications & trainings' },
  { value: '2026', label: 'BCA graduate' },
];

export const highlights = [
  {
    icon: 'code',
    title: 'Full-stack web',
    body: 'I build end-to-end with PHP and MySQL — from database schema and server-side logic to hand-written HTML/CSS that stays fast on slow connections.',
  },
  {
    icon: 'mobile',
    title: 'Cross-platform mobile',
    body: 'Flutter and Dart are my tools for one codebase shipping to multiple platforms — currently applied to a full food ordering application.',
  },
  {
    icon: 'clock',
    title: 'Production mindset',
    body: 'Real traffic, real deadlines. I optimise load times and SEO during peak admission season, and keep publishing reliable when demand spikes.',
  },
  {
    icon: 'layers',
    title: 'Strong fundamentals',
    body: 'Java, Python, C/C++ and object-oriented design, backed by data structures, DBMS, operating systems and computer networks coursework.',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    color: '#f0a85a',
    items: ['Java', 'Python', 'C', 'C++'],
  },
  {
    title: 'Web development',
    color: '#5aa8f0',
    items: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Responsive design', 'SEO basics'],
  },
  {
    title: 'Mobile development',
    color: '#3ee6b0',
    items: ['Flutter', 'Dart', 'Cross-platform UI'],
  },
  {
    title: 'Tools & platforms',
    color: '#b58cf0',
    items: ['Git', 'GitHub', 'MS Office'],
  },
];

export const coreStrengths = ['Problem solving', 'Adaptability', 'Quick learning'];

export const projects = [
  {
    id: 'gasckk',
    title: 'GASCKK Official College Website',
    role: 'Web Developer',
    period: '2023 — Present',
    status: { label: 'Live', variant: 'live' },
    description:
      'A responsive public website for Government Arts and Science College, Kanyakumari — serving students, faculty and visitors with departmental activities, admission rank lists, exam updates and committee information.',
    features: [
      'Designed and maintain the site end to end, from layout to deployment.',
      'Built a PHP–MySQL backend handling departmental content, admission rank lists, exam updates and committee data.',
      'Streamlined real-time publishing of academic events, seminars and resources.',
      'Optimised load times and SEO to hold up through peak admission traffic.',
    ],
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'SEO', 'Responsive'],
    links: [
      { label: 'Visit live site', href: 'https://gasckk.org.in', variant: 'primary', icon: 'external' },
    ],
    secondaryLink: { label: 'gasckk.org.in', href: 'https://gasckk.org.in' },
  },
  {
    id: 'food-ordering',
    title: 'Food Ordering Application',
    role: 'Final Year Project',
    period: '2026',
    status: { label: 'In progress', variant: 'wip' },
    description:
      'A cross-platform food ordering application pairing a Flutter front end with a PHP–MySQL backend — covering the full ordering flow from menu browsing to cart and order placement.',
    features: [
      'Flutter front end delivering one codebase across platforms.',
      'PHP–MySQL backend for menu, cart and order management.',
      'Designed as my final year capstone, currently in active development.',
    ],
    tech: ['Flutter', 'Dart', 'PHP', 'MySQL'],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/venkateshkumar67',
        variant: 'ghost',
        icon: 'external',
      },
    ],
  },
];

export const certifications = [
  {
    year: '2026',
    name: 'Java Full Stack Development',
    issuer: 'In progress',
  },
  {
    year: '2024',
    name: 'Java Spring Framework',
    issuer: 'ADROIT Training',
  },
  {
    year: '2024',
    name: 'Oracle Application Development',
    issuer: 'ADROIT Training',
  },
  {
    year: '2025',
    name: 'Python Coding Foundations',
    issuer: 'Infosys Springboard',
  },
  {
    year: '2026',
    name: 'Project-Based Learning — TANII Hackathon',
    issuer: 'State Planning Commission, Government of Tamil Nadu',
  },
];

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  expected: 'Expected 2026',
  school: 'Government Arts and Science College, Palkulam, Kanyakumari',
  affiliation: 'Affiliated to Manonmaniam Sundaranar University, Tirunelveli',
  coursework: [
    'Java',
    'C / C++',
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'Web Development',
  ],
};

export const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
];

export const socials = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/venkateshkumar67' },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://linkedin.com/in/venkatesh-kumar-66a65a301',
  },
  { label: 'Email', icon: 'mail', href: 'mailto:venkateshk16@gmail.com' },
];

/** Snippet rendered inside the hero code card. */
export const codeSnippet = [
  [
    { t: 'keyword', v: 'const' },
    { t: 'plain', v: ' ' },
    { t: 'variable', v: 'developer' },
    { t: 'plain', v: ' = {' },
  ],
  [
    { t: 'plain', v: '  name: ' },
    { t: 'string', v: '"Venkatesh Kumar M"' },
    { t: 'plain', v: ',' },
  ],
  [
    { t: 'plain', v: '  role: ' },
    { t: 'string', v: '"Full Stack Developer"' },
    { t: 'plain', v: ',' },
  ],
  [
    { t: 'plain', v: '  location: ' },
    { t: 'string', v: '"Tenkasi, Tamil Nadu"' },
    { t: 'plain', v: ',' },
  ],
  [
    { t: 'plain', v: '  coreStack: [' },
    { t: 'string', v: '"PHP"' },
    { t: 'plain', v: ', ' },
    { t: 'string', v: '"MySQL"' },
    { t: 'plain', v: ', ' },
    { t: 'string', v: '"Java"' },
    { t: 'plain', v: ', ' },
    { t: 'string', v: '"Flutter"' },
    { t: 'plain', v: '],' },
  ],
  [
    { t: 'plain', v: '  currentlyLearning: ' },
    { t: 'string', v: '"Java Full Stack (Spring)"' },
    { t: 'plain', v: ',' },
  ],
  [
    { t: 'plain', v: '  shipped: ' },
    { t: 'string', v: '"gasckk.org.in"' },
    { t: 'plain', v: ',' },
  ],
  [
    { t: 'plain', v: '  openToWork: ' },
    { t: 'boolean', v: 'true' },
    { t: 'plain', v: ',' },
  ],
  [{ t: 'plain', v: '};' }],
  [],
  [{ t: 'comment', v: '// Always shipping. Always learning.' }],
];
