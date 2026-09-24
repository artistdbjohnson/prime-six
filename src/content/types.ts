export type Stat = { value: string; unit: string; label: string };

export type Chef = {
  name: string;
  image: string;
  alt: string;
};

export type ProofItem = {
  label: string;
  detail: string;
  href: string;
  external?: boolean;
};

export type Product = {
  title: string;
  blurb: string;
  body: string[];
  image: string;
  alt: string;
  orderLabel: string;
  retailers: { name: string; href: string }[];
};

export type CopySection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type Copy = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    whyTitle: string;
    whyDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    grillersTitle: string;
    chefsTitle: string;
    chefsDescription: string;
    sampleTitle: string;
    sampleDescription: string;
    terryTitle: string;
    newsTitle: string;
    newsDescription: string;
    sustainTitle: string;
    contactTitle: string;
    contactDescription: string;
  };
  chrome: {
    openMenu: string;
    closeMenu: string;
    language: string;
    theme: string;
    light: string;
    dark: string;
    sampleCta: string;
    builtBy: string;
    stayInTouch: string;
    subscribe: string;
    subscribeThanks: string;
    emailPlaceholder: string;
    join: string;
    apply: string;
    footerNote: string;
  };
  nav: {
    home: string;
    grillers: string;
    why: string;
    chefs: string;
    about: string;
    biochar: string;
    sample: string;
    news: string;
    sustainability: string;
    contact: string;
  };
  hero: {
    tagline: string[];
    cta: string;
    description: string;
    heading: string[];
    stats: Stat[];
  };
  proof: ProofItem[];
  burn: {
    kicker: string;
    title: string;
    beats: { label: string; title: string; body: string[]; image: string; alt: string }[];
  };
  whyHome: {
    kicker: string;
    title: string;
    lead: string;
    body: string[];
    mission: string;
    link: string;
  };
  audiences: {
    kicker: string;
    title: string;
    hospitality: string;
    hospitalityBody: string;
    pit: string;
    pitBody: string;
  };
  economics: {
    id: string;
    kicker: string;
    title: string;
    fuelQuestion: string;
    fuels: string[];
    weekly: string;
    weeklyHint: string;
    hours: string;
    hoursHint: string;
    refills: string;
    refillsHint: string;
    ceiling: string;
    ceilingHint: string;
    estimate: string;
    estimateBody: string;
    traditional: string;
    traditionalSub: string;
    ceilingCard: string;
    ceilingSub: string;
    withPrime: string;
    withSub: string;
    lbs: string;
    refillsUnit: string;
    hoursUnit: string;
    equivalence: string;
    woodNote: string;
    burnPublished: string;
    smokerPublished: string;
    disclaimer: string[];
    noDollars: string;
  };
  chefsBlock: {
    kicker: string;
    title: string;
    terryName: string;
    terryAward: string;
    terryRole: string;
    terryBody: string;
    interview: string;
    pros: string;
    chefs: Chef[];
  };
  sampleBand: {
    title: string;
    body: string;
    cta: string;
  };
  whyPage: CopySection[];
  whyClose: { title: string; bottom: string };
  woodCompare: {
    title: string;
    without: string[];
    withTitle: string;
    with: string[];
  };
  costList: string[];
  about: {
    kicker: string;
    quote: string;
    quoteBy: string;
    title: string;
    paragraphs: string[];
    partnership: string;
    impactTitle: string;
    impact: string[];
    visit: string;
    sections: CopySection[];
    close: string;
    save: string;
  };
  grillers: {
    kicker: string;
    title: string;
    paragraphs: string[];
    masters: string;
    mastersBody: string[];
    products: Product[];
  };
  pro: {
    kicker: string;
    title: string;
    intro: string;
    frameTitle: string;
    frame: string[];
    embersTitle: string;
    embers: string[];
    closer: string;
    pizzaTitle: string;
    pizza: string[];
    anywhere: string;
  };
  sampleForm: {
    kicker: string;
    title: string;
    steps: [string, string];
    nextTitle: string;
    next: string[];
    eligibleQ: string;
    eligibleYes: string;
    eligibleNo: string;
    blocked: string;
    equipment: string;
    equipmentOptions: string[];
    fuelsQ: string;
    fuels: string[];
    samplesQ: string;
    samples: string[];
    continue: string;
    back: string;
    first: string;
    last: string;
    email: string;
    phone: string;
    restaurant: string;
    url: string;
    address: string;
    distributors: string;
    distributorPlaceholders: [string, string, string];
    submit: string;
    thanks: string;
    required: string;
  };
  terry: {
    kicker: string;
    title: string;
    lead: string;
    paragraphs: string[];
  };
  news: {
    kicker: string;
    title: string;
    lead: string;
    videos: { title: string; time: string }[];
    source: string;
  };
  sustain: {
    kicker: string;
    title: string;
    prompt: string;
    disclaimer: string;
    hub: string;
    live: string;
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    first: string;
    last: string;
    email: string;
    message: string;
    send: string;
    thanks: string;
    company: string;
    address: string[];
    phoneLabel: string;
    phone: string;
  };
};
