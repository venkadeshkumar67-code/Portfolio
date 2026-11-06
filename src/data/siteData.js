/**
 * Single source of truth for all portfolio content.
 * Content is taken from (or directly derived from) the resume and project sources.
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
    'Motivated BCA graduate with hands-on experience in web development. Proven ability to design, build, and maintain a live production website supporting students, faculty, and administrative workflows. Solid foundation in Java, Python, and object-oriented programming, with strong problem-solving skills and a fast learning curve.',
  lede:
    'Motivated BCA graduate with hands-on web development experience. I build and maintain production websites, with a strong foundation in Java, Python, and object-oriented programming.',
  roles: ['Full Stack Developer', 'React Developer', 'Python Developer', 'Web Developer'],
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
    body: 'I build responsive web experiences with React, JavaScript, Node.js and modern tooling, backed by hands-on PHP and database experience.',
  },
  {
    icon: 'layers',
    title: 'Modern web stack',
    body: 'React, Tailwind CSS, Vite and Sanity CMS are part of my toolkit for building and managing responsive web applications.',
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
    items: ['Java', 'Python', 'C', 'C++ fundamentals'],
  },
  {
    title: 'Web development',
    color: '#5aa8f0',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'PHP'],
  },
  {
    title: 'Databases',
    color: '#3ee6b0',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & platforms',
    color: '#b58cf0',
    items: ['MS Office', 'Git', 'GitHub', 'Vite', 'Sanity CMS'],
  },
];

export const coreStrengths = ['Problem solving', 'Adaptability', 'Quick learning'];

export const projects = [
  {
    id: 'fexkode',
    title: 'Fexkode',
    role: 'Full Stack Web Application',
    period: '2026',
    status: { label: 'Live', variant: 'live' },
    description:
      'A responsive technology services website focused on cloud infrastructure, helping businesses modernize, secure and scale with cloud and DevOps solutions.',
    features: [
      'Built sections for cloud solutions, DevOps, industries, case studies and the blog.',
      'Implemented protected admin routes for creating, editing and managing articles.',
      'Integrated Sanity CMS for content management and EmailJS for contact forms.',
      'Configured SEO, sitemap, robots.txt and Google Analytics.',
    ],
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'React Router', 'Express.js', 'JWT', 'Sanity CMS'],
    links: [
      {
        label: 'Visit live site',
        href: 'https://fexkode.vercel.app/',
        variant: 'primary',
        icon: 'external',
      },
    ],
  },
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
];

export const certifications = [
  {
    year: '2026',
    name: 'Python Full Stack',
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
    name: 'Project-Based Learning — TANII Hackathon 2025–2026',
    issuer: 'State Planning Commission, Govt. of Tamil Nadu',
  },
];

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  expected: '2023 — 2026',
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
  { label: 'GitHub', icon: 'github', href: 'https://github.com/venkadeshkumar67-code' },
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
    { t: 'string', v: '"React"' },
    { t: 'plain', v: ', ' },
    { t: 'string', v: '"JavaScript"' },
    { t: 'plain', v: ', ' },
    { t: 'string', v: '"Node.js"' },
    { t: 'plain', v: ', ' },
    { t: 'string', v: '"Python"' },
    { t: 'plain', v: '],' },
  ],
  [
    { t: 'plain', v: '  databases: [' },
    { t: 'string', v: '"MySQL"' },
    { t: 'plain', v: ', ' },
    { t: 'string', v: '"PostgreSQL"' },
    { t: 'plain', v: '],' },
  ],
  [
    { t: 'plain', v: '  tools: [' },
    { t: 'string', v: '"Vite"' },
    { t: 'plain', v: ', ' },
    { t: 'string', v: '"Sanity CMS"' },
    { t: 'plain', v: '],' },
  ],
  [
    { t: 'plain', v: '  portfolio: ' },
    { t: 'string', v: '"vk-portfolio-67.vercel.app"' },
    { t: 'plain', v: ',' },
  ],
  [
    { t: 'plain', v: '  shipped: ' },
    { t: 'string', v: '"Fexkode + gasckk.org.in"' },
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
