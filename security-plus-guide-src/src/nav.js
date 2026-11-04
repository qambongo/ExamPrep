/**
 * Single source of truth for site structure.
 * Drives the sidebar, the home dashboard, breadcrumbs and prev/next links.
 *
 * Item kinds: 'overview' | 'lesson' | 'test' | 'exam' | 'pbq' | 'reference'
 */
export const DOMAINS = [
  {
    key: 'd1', num: '1.0', title: 'General Security Concepts', short: 'General Concepts',
    weight: 12, color: 'blue',
    blurb: 'Control types, CIA triad, Zero Trust, change management and cryptography.',
    items: [
      { id: 'intro',  kind: 'overview', label: 'Domain Overview' },
      { id: 'sec11',  kind: 'lesson',   num: '1.1', label: 'Security Controls' },
      { id: 'sec12',  kind: 'lesson',   num: '1.2', label: 'Fundamental Concepts' },
      { id: 'sec13',  kind: 'lesson',   num: '1.3', label: 'Change Management' },
      { id: 'sec14',  kind: 'lesson',   num: '1.4', label: 'Cryptographic Solutions' },
      { id: 'test1',  kind: 'test',     num: 'A',   label: 'Practice Test A' },
      { id: 'test1b', kind: 'test',     num: 'B',   label: 'Practice Test B' },
    ],
  },
  {
    key: 'd2', num: '2.0', title: 'Threats, Vulnerabilities & Mitigations', short: 'Threats & Vulns',
    weight: 22, color: 'red',
    blurb: 'Threat actors, attack vectors, vulnerability types, indicators and mitigations.',
    items: [
      { id: 'intro2', kind: 'overview', label: 'Domain Overview' },
      { id: 'sec21',  kind: 'lesson',   num: '2.1', label: 'Threat Actors & Motivations' },
      { id: 'sec22',  kind: 'lesson',   num: '2.2', label: 'Threat Vectors & Attack Surfaces' },
      { id: 'sec23',  kind: 'lesson',   num: '2.3', label: 'Types of Vulnerabilities' },
      { id: 'sec24',  kind: 'lesson',   num: '2.4', label: 'Indicators of Malicious Activity' },
      { id: 'sec25',  kind: 'lesson',   num: '2.5', label: 'Mitigation Techniques' },
      { id: 'test2',  kind: 'test',     num: 'A',   label: 'Practice Test A' },
      { id: 'test2b', kind: 'test',     num: 'B',   label: 'Practice Test B' },
    ],
  },
  {
    key: 'd3', num: '3.0', title: 'Security Architecture', short: 'Architecture',
    weight: 18, color: 'purple',
    blurb: 'Architecture models, enterprise infrastructure, data protection and resilience.',
    items: [
      { id: 'intro3', kind: 'overview', label: 'Domain Overview' },
      { id: 'sec31',  kind: 'lesson',   num: '3.1', label: 'Architecture & Infrastructure' },
      { id: 'sec32',  kind: 'lesson',   num: '3.2', label: 'Security Considerations' },
      { id: 'sec33',  kind: 'lesson',   num: '3.3', label: 'Enterprise Infrastructure' },
      { id: 'sec34',  kind: 'lesson',   num: '3.4', label: 'Network Security' },
      { id: 'sec35',  kind: 'lesson',   num: '3.5', label: 'Data Protection' },
      { id: 'sec36',  kind: 'lesson',   num: '3.6', label: 'HA & Resilience' },
      { id: 'test3',  kind: 'test',     num: 'A',   label: 'Practice Test A' },
      { id: 'test3b', kind: 'test',     num: 'B',   label: 'Practice Test B' },
    ],
  },
  {
    key: 'd4', num: '4.0', title: 'Security Operations', short: 'Operations',
    weight: 28, color: 'green',
    blurb: 'Hardening, vuln management, monitoring, IAM, automation, IR and forensics.',
    items: [
      { id: 'intro4', kind: 'overview', label: 'Domain Overview' },
      { id: 'sec41',  kind: 'lesson',   num: '4.1', label: 'Secure Baselines & Hardening' },
      { id: 'sec42',  kind: 'lesson',   num: '4.2', label: 'Wireless & Asset Management' },
      { id: 'sec43',  kind: 'lesson',   num: '4.3', label: 'Vulnerability Management' },
      { id: 'sec44',  kind: 'lesson',   num: '4.4', label: 'Security Alerting & Monitoring' },
      { id: 'sec45',  kind: 'lesson',   num: '4.5', label: 'Enterprise Security Capabilities' },
      { id: 'sec46',  kind: 'lesson',   num: '4.6', label: 'Identity & Access Management' },
      { id: 'sec47',  kind: 'lesson',   num: '4.7', label: 'Automation & Incident Response' },
      { id: 'sec48',  kind: 'lesson',   num: '4.9', label: 'Digital Forensics & Data Sources' },
      { id: 'test4',  kind: 'test',     num: 'A',   label: 'Practice Test A' },
      { id: 'test4b', kind: 'test',     num: 'B',   label: 'Practice Test B' },
    ],
  },
  {
    key: 'd5', num: '5.0', title: 'Security Program Management & Oversight', short: 'Program Mgmt',
    weight: 20, color: 'amber',
    blurb: 'Governance, risk, third parties, compliance, audits and awareness.',
    items: [
      { id: 'intro5', kind: 'overview', label: 'Domain Overview' },
      { id: 'sec51',  kind: 'lesson',   num: '5.1', label: 'Security Governance' },
      { id: 'sec52',  kind: 'lesson',   num: '5.2', label: 'Risk Management' },
      { id: 'sec53',  kind: 'lesson',   num: '5.3', label: 'Third-Party Risk' },
      { id: 'sec54',  kind: 'lesson',   num: '5.4', label: 'Security Compliance' },
      { id: 'sec55',  kind: 'lesson',   num: '5.5', label: 'Audits & Assessments' },
      { id: 'sec56',  kind: 'lesson',   num: '5.6', label: 'Security Awareness' },
      { id: 'test5',  kind: 'test',     num: 'A',   label: 'Practice Test A' },
      { id: 'test5b', kind: 'test',     num: 'B',   label: 'Practice Test B' },
    ],
  },
]

export const EXTRAS = {
  key: 'x', title: 'Exam Prep',
  items: [
    { id: 'final-exam', kind: 'exam',      label: 'Final Comprehensive Exam', desc: '100 questions weighted like the real exam' },
    { id: 'pbq',        kind: 'pbq',       label: 'Performance-Based Questions', desc: 'Hands-on simulations: matching, logs, RBAC, risk math' },
    { id: 'cheatsheet', kind: 'reference', label: 'Exam Cheat Sheet', desc: 'Ports, crypto, attacks, regulations, formulas, acronyms' },
  ],
}

export const HOME = { id: 'home', kind: 'home', label: 'Dashboard' }

/** Flat, ordered list of every page (used for prev/next). */
export const PAGES = [
  HOME,
  ...DOMAINS.flatMap(d => d.items.map(i => ({ ...i, group: d }))),
  ...EXTRAS.items.map(i => ({ ...i, group: EXTRAS })),
]

export function findPage(id) {
  return PAGES.find(p => p.id === id)
}

export function neighbours(id) {
  const i = PAGES.findIndex(p => p.id === id)
  return { prev: i > 0 ? PAGES[i - 1] : null, next: i >= 0 && i < PAGES.length - 1 ? PAGES[i + 1] : null }
}

/** Small inline SVG icons (stroke = currentColor). */
const svg = (d, extra = '') =>
  `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`

export const ICONS = {
  home:      svg('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>'),
  overview:  svg('<circle cx="12" cy="12" r="9"/><path d="M12 8v.01M11 12h1v4h1"/>'),
  lesson:    svg('<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/>'),
  test:      svg('<path d="M9 11l2 2 4-4"/><rect x="4" y="3" width="16" height="18" rx="2"/>'),
  exam:      svg('<path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/>'),
  pbq:       svg('<rect x="3" y="4" width="18" height="14" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/>'),
  reference: svg('<path d="M8 3h8l4 4v14H4V3z"/><path d="M8 11h8M8 15h8M8 7h4"/>'),
  chevron:   svg('<path d="m9 6 6 6-6 6"/>'),
  left:      svg('<path d="m15 6-6 6 6 6"/>'),
  right:     svg('<path d="m9 6 6 6-6 6"/>'),
  menu:      svg('<path d="M4 6h16M4 12h16M4 18h16"/>'),
  search:    svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  check:     svg('<path d="m5 12 5 5L20 7"/>', ' stroke-width="2.4"'),
  close:     svg('<path d="M6 6l12 12M18 6 6 18"/>'),
}
