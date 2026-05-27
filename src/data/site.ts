/* =============================================================
   Single source of truth for content + business data.
   Drives the visible page AND the JSON-LD structured data,
   so the two can never drift apart.

   ⚠️  PLACEHOLDER values are marked `// CONFIRM`. They are
   realistic stand-ins for a fictional business. Every one is
   listed in HANDOFF.md and must be confirmed before launch.
   ============================================================= */

import type { ImageMetadata } from 'astro';

import heroDriveway from '../assets/images/hero-driveway.jpg';
import crackedDriveway from '../assets/images/cracked-driveway.jpg';
import processCrew from '../assets/images/process-crew.jpg';
import aboutCrew from '../assets/images/about-crew.jpg';
import svcDriveway from '../assets/images/service-driveway.jpg';
import svcPathway from '../assets/images/service-pathway.jpg';
import svcShedSlab from '../assets/images/service-shed-slab.jpg';
import svcPool from '../assets/images/service-pool.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';
import gallery7 from '../assets/images/gallery-7.jpg';
import gallery8 from '../assets/images/gallery-8.jpg';

export const images = { heroDriveway, crackedDriveway, processCrew, aboutCrew };

/* ---------- core business details ---------- */
export const business = {
  name: 'Melbourne Concreting Co',
  legalName: 'Melbourne Concreting Co Pty Ltd',      // CONFIRM
  shortDesc: 'Residential concreting across Melbourne',
  tagline: 'Concrete driveways, pathways, shed slabs and pool surrounds across Melbourne.',
  phone: '(03) 9123 4567',                           // CONFIRM
  phoneHref: '+61391234567',                          // CONFIRM
  whatsapp: '61412345678',                            // CONFIRM (mobile, digits only, for WhatsApp)
  email: 'info@melbourneconcreting.com.au',           // CONFIRM (keep domain matching the site)
  abn: '12 345 678 901',                              // CONFIRM
  acn: '123 456 789',                                 // CONFIRM (Australian Company Number, for a Pty Ltd)
  url: 'https://www.melbourneconcreting.com.au',      // CONFIRM (production domain)
  region: 'Melbourne, VIC',
  address: {
    street: 'Servicing from a yard in Melbourne’s east', // CONFIRM (or real street)
    locality: 'Melbourne',
    region: 'VIC',
    postcode: '3000',                                 // CONFIRM
    country: 'AU',
  },
  geo: { lat: -37.8136, lng: 144.9631 },              // CONFIRM (Melbourne CBD placeholder)
  hours: [
    { days: 'Mon – Fri', time: '7:00am – 5:00pm' },
    { days: 'Saturday', time: '8:00am – 1:00pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
  warrantyYears: 10,                                  // CONFIRM
  responseTime: 'same day',                           // CONFIRM
  social: {                                           // CONFIRM (real profiles)
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },
};

/* ---------- nav ---------- */
export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'How it works', href: '#process' },
  { label: 'Gallery', href: '#work' },
  { label: 'FAQ', href: '#faq' },
];

/* ---------- hero ---------- */
export const hero = {
  eyebrow: 'Residential concreting · Melbourne, VIC',
  h1: 'Concrete driveways across Melbourne, built to last decades and look the part.',
  sub: 'We pour exposed aggregate, broom and coloured driveways that lift the whole look of your home and stand up to Melbourne summers. Free on-site quote, fixed price in writing.',
};

/* ---------- about ---------- */
export const about = {
  eyebrow: 'About us',
  h2: 'A <span class="hl">local Melbourne crew</span>, not a call centre.',
  paragraphs: [
    'Melbourne Concreting Co is a small, local team laying residential concrete across Melbourne’s eastern, south-eastern and bayside suburbs. Driveways are our bread and butter, and while we’re on site we handle the paths, the shed slab and the area around the pool too.',
    'We keep the crew tight and the standards high. The person who quotes your job is there when it’s poured. Every slab gets steel reinforcement, the right thickness for the job, properly cut control joints, and a finish laid by hand rather than rushed.',
    'You deal with us from the first measure-up to the final sweep: one crew, one point of contact, one fixed price, and a driveway we’re happy to put our name on.',
  ],
  highlights: ['Melbourne-based', 'One crew, start to finish', 'Fully insured', 'Free fixed-price quotes'],
};

/* ---------- trust bar (under hero) ---------- */
export const trustBar = [
  'Fully licensed & insured',         // CONFIRM
  'Fixed-price quotes, in writing',
  '10-year workmanship warranty',     // CONFIRM
  'We answer the phone',
];

/* ---------- problem / "sound familiar" ---------- */
export const problem = {
  eyebrow: 'Worth doing once',
  h2: 'A good driveway should <span class="hl">outlast the car</span> you park on it.',
  intro: 'Laid properly, concrete shrugs off decades of Melbourne summers and lifts the look and value of the whole home. The difference between a driveway that lasts and one that cracks is all in what happens before the truck arrives.',
  points: [
    'It holds up. Steel mesh, the right slab thickness and cut expansion joints, so it doesn’t crack when the ground shifts or the heat sets in.',
    'It looks the part. The finish you choose, edged clean and matched to the house, so the driveway reads as part of the home, not a grey afterthought.',
    'It’s done once. Old slab out, drainage sorted, new slab in, so you’re not patching it again a few years down the track.',
  ],
  kicker: 'Get those three right and it’s the last driveway you’ll need to pour.',
};

/* ---------- services ---------- */
export interface Service {
  slug: string;
  title: string;
  blurb: string;
  image: ImageMetadata;
  alt: string;
  primary?: boolean;
}
export const services: Service[] = [
  {
    slug: 'driveways',
    title: 'Driveways',
    blurb:
      'Exposed aggregate, broom finish or coloured concrete. We break out the old slab and cart it away, lay steel mesh, and cut proper expansion joints so it doesn’t crack in the first summer.',
    image: svcDriveway,
    alt: 'New residential concrete driveway leading to a double garage, Melbourne',
    primary: true,
  },
  {
    slug: 'pathways',
    title: 'Pathways & side access',
    blurb:
      'Paths, walkways and side access laid to match the driveway. Slip-resistant finishes, clean straight edges, and drainage falls so water runs off the path instead of toward the house.',
    image: svcPathway,
    alt: 'Paved pathway running alongside a flowering garden bed and lawn beside a home',
  },
  {
    slug: 'shed-slabs',
    title: 'Shed & garage slabs',
    blurb:
      'Level, steel-reinforced slabs for sheds, garages, carports and workshops. We set out, box up the formwork and pour to the thickness your build actually needs, not a one-size guess.',
    image: svcShedSlab,
    alt: 'Freshly poured reinforced concrete slab being levelled by the crew',
  },
  {
    slug: 'pool-surrounds',
    title: 'Pool surrounds',
    blurb:
      'Non-slip concrete around the pool that stays cooler underfoot. Exposed aggregate or paving-look finishes that tie the backyard together and shrug off splash, chlorine and sun.',
    image: svcPool,
    alt: 'Concrete pool surround beside a backyard swimming pool',
  },
];

/* ---------- why us (falsifiable trust signals) ---------- */
export const whyUs = {
  eyebrow: 'How we work',
  h2: 'A fixed price, a firm date, and a finish that <span class="hl">lasts</span>.',
  points: [
    {
      title: 'We answer the phone',
      body: 'A real person picks up, usually the same day, and books your on-site quote then and there.',
    },
    {
      title: 'The quote is the price',
      body: 'Once we’ve seen the site, the price goes in writing. That’s the number on the final invoice, start to finish.',
    },
    {
      title: 'We turn up when we say',
      body: 'You get a start date and a finish date up front. If the weather pushes the pour back, we tell you the same day.',
    },
    {
      title: 'We leave it spotless',
      body: 'Drop sheets down, edges tidied, old slab and rubble carted away. The new driveway is the only sign we were there.',
    },
    {
      title: 'Built so it lasts',
      body: 'Steel mesh, the right slab thickness, expansion joints and proper curing. That’s how a driveway makes it well past the first hot summer.',
    },
    {
      title: 'Backed in writing',
      body: 'Every job carries a 10-year workmanship warranty on paper, plus full public liability insurance we can show you on request.', // CONFIRM
    },
  ],
};

/* ---------- process ---------- */
export const process = {
  eyebrow: 'How it works',
  h2: 'Five steps. No mystery, <span class="hl">no chasing</span>.',
  steps: [
    {
      n: '01',
      title: 'Free on-site quote',
      body: 'We come to you, measure up, talk through finishes, and send a fixed price in writing within two business days.',
    },
    {
      n: '02',
      title: 'Prep & formwork',
      body: 'We break out the old driveway, excavate to the right depth, box up the formwork and set the falls for drainage.',
    },
    {
      n: '03',
      title: 'Steel & pour',
      body: 'Steel mesh goes down, then we pour, screed and finish to the look you chose, whether that’s broom, exposed aggregate or colour.',
    },
    {
      n: '04',
      title: 'Cut & cure',
      body: 'We cut control joints and let the slab cure properly. We’ll tell you the exact day it’s safe to drive on.',
    },
    {
      n: '05',
      title: 'Walkthrough & warranty',
      body: 'We walk the finished job with you, clean the site, and hand over a written 10-year workmanship warranty.', // CONFIRM
    },
  ],
};

/* ---------- gallery / recent work ----------
   ⚠️  STOCK PHOTOS used for the demo. Before launch these MUST be
   replaced with the firm's own job photos (see HANDOFF.md). Captions
   are illustrative.                                                  */
export interface Project { image: ImageMetadata; alt: string; }
export const projects: Project[] = [
  { image: gallery1, alt: 'Exposed aggregate concrete driveway at a modern two-storey Glen Waverley home' },
  { image: gallery2, alt: 'Broom-finish concrete driveway and crossover in Balwyn, Melbourne' },
  { image: gallery6, alt: 'Wide concrete driveway leading to a double garage in Doncaster' },
  { image: svcDriveway, alt: 'New concrete driveway and garage approach on a Croydon family home' },
  { image: gallery3, alt: 'Curved concrete path and side access along a Camberwell garden' },
  { image: svcPathway, alt: 'Brushed concrete pathway beside a flowering garden bed in Box Hill' },
  { image: gallery5, alt: 'Concrete pool surround in a landscaped Brighton backyard' },
  { image: gallery7, alt: 'Exposed aggregate concrete pool surround and deck in Bentleigh' },
  { image: gallery8, alt: 'Close-up of a finished exposed aggregate concrete surface, Hawthorn' },
];

/* ---------- testimonials ----------
   ⚠️  SAMPLE testimonials for the demo. Replace with real, permitted
   client quotes before launch (see HANDOFF.md).                      */
export const testimonials = [
  {
    quote:
      'They walked us through the finishes at the quote, started on the day they promised, and the exposed aggregate still looks brand new two summers on. They even hosed the street down before they left.',
    name: 'Sarah & Tom',
    suburb: 'Ringwood',
  },
  {
    quote:
      'The price they quoted was the price we paid, down to the dollar. The new driveway completely changed how the front of the house feels.',
    name: 'David M.',
    suburb: 'Glen Iris',
  },
  {
    quote:
      'They pulled out our cracked old slab and laid exposed aggregate that ties the whole front yard together. Neighbours keep stopping to ask who did it.',
    name: 'Priya K.',
    suburb: 'Doncaster East',
  },
];

/* ---------- service areas ---------- */
export const serviceAreas = [
  'Glen Waverley', 'Mount Waverley', 'Doncaster', 'Box Hill', 'Camberwell',
  'Balwyn', 'Kew', 'Hawthorn', 'Ringwood', 'Croydon', 'Blackburn',
  'Bentleigh', 'Brighton', 'Glen Iris', 'Frankston', 'Berwick',
];

/* ---------- FAQ (also rendered as FAQPage JSON-LD) ---------- */
export const faqs = [
  {
    q: 'How much does a new concrete driveway cost in Melbourne?',
    a: 'It depends on the size, the finish you choose, how easy the site is to get to, and whether we’re removing an old driveway first. We don’t do guess-pricing over the phone. We come out, measure properly, and give you a fixed price in writing, free.',
  },
  {
    q: 'How long until I can walk and drive on it?',
    a: 'You can usually walk on a new driveway after 24 to 48 hours. We ask you to keep vehicles off it for about 7 days so it cures hard. We’ll give you the exact dates for your pour before we start.',
  },
  {
    q: 'Do you remove and cart away the old driveway?',
    a: 'Yes. We break out the old concrete, dig down to the right depth and take the rubble away with us. It’s included in your quote, so there’s no surprise skip-bin bill at the end.',
  },
  {
    q: 'What areas of Melbourne do you cover?',
    a: 'We cover Melbourne’s eastern, south-eastern and bayside suburbs, including Glen Waverley, Doncaster, Camberwell, Bentleigh, Brighton and surrounds. Not sure if you’re in our area? Give us a call and ask.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We carry full public liability insurance and work to Australian Standards. We can show you the paperwork before we start a single thing on your site.', // CONFIRM
  },
  {
    q: 'What finishes can I choose from?',
    a: 'The popular ones are plain, broom finish, exposed aggregate and coloured concrete. We bring samples to the quote so you can see them in your own light, against your own house, before you decide.',
  },
];

/* ---------- contact ---------- */
export const contact = {
  eyebrow: 'Get started',
  h2: 'Get your <span class="hl">free on-site quote</span>',
  sub: 'Tell us about your driveway. We’ll call you back, usually the same day, and book a time to come and measure up. No obligation, no hard sell.',
};
