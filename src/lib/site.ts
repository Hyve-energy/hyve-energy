export const site = {
  name: "Hyve Energy",
  legalName: "Hyve Energy",
  tagline: "Engineering Rugged Electrification",
  description:
    "Hyve Energy designs and manufactures rugged lithium battery systems for demanding industrial applications — from custom NRE programs to validated, field-ready battery platforms for construction, mining, marine, defense, and robotics.",
  url: "https://hyveenergy.co",
  emails: {
    sales: "sales@hyveenergy.co",
    contact: "contact@hyveenergy.co",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/capabilities/", label: "Capabilities" },
  { href: "/industries/", label: "Industries" },
  { href: "/technology/", label: "Technology" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export type Capability = {
  id: string;
  index: string;
  title: string;
  summary: string;
  points: string[];
};

export const capabilities: Capability[] = [
  {
    id: "battery-design",
    index: "01",
    title: "Battery Design",
    summary:
      "Cell-to-pack architecture built around your duty cycle, envelope, and mission profile — not a catalog part force-fit to your application.",
    points: [
      "Cell selection & chemistry trade studies (NMC, LFP, LTO)",
      "Pack architecture & energy/power balancing",
      "Duty-cycle and mission-profile modeling",
      "Design-for-manufacture from the first sketch",
    ],
  },
  {
    id: "mechanical-design",
    index: "02",
    title: "Mechanical Design",
    summary:
      "Enclosures and structures engineered for shock, vibration, ingress, and the abuse of real jobsites — validated before they ever ship.",
    points: [
      "IP66/67/68 sealed enclosure design",
      "Shock & vibration analysis to MIL-STD-810",
      "Structural FEA & fatigue modeling",
      "Serviceable, field-repairable mechanical layouts",
    ],
  },
  {
    id: "electrical-integration",
    index: "03",
    title: "Electrical Integration",
    summary:
      "High-voltage architecture, harnessing, and system integration engineered to work the first time it's plugged into your machine.",
    points: [
      "HV/LV system architecture & harness design",
      "Contactor & fusing strategy",
      "CAN / J1939 / vehicle-network integration",
      "EMI/EMC-conscious layout",
    ],
  },
  {
    id: "thermal-management",
    index: "04",
    title: "Thermal Management",
    summary:
      "Thermal systems tuned to chemistry and climate — keeping packs in their performance window from arctic cold starts to desert duty cycles.",
    points: [
      "Air, cold-plate, and liquid thermal architectures",
      "Thermal simulation across full duty cycle",
      "Cell-to-cell propagation-safe design",
      "Extreme-climate performance validation",
    ],
  },
  {
    id: "dfmea",
    index: "05",
    title: "DFMEA",
    summary:
      "Systematic failure-mode analysis built into the design process, not bolted on after — because field failures cost more than engineering hours.",
    points: [
      "Design & process FMEA facilitation",
      "Failure-mode traceability to design controls",
      "Risk-priority-driven design iteration",
      "Documentation ready for customer & regulatory review",
    ],
  },
  {
    id: "validation",
    index: "06",
    title: "Validation",
    summary:
      "Requirements-driven validation plans that prove the pack does what the spec says it does — under the conditions it will actually see.",
    points: [
      "Requirements & verification matrix development",
      "Environmental & performance test planning",
      "Abuse & safety testing coordination",
      "Root-cause analysis on test anomalies",
    ],
  },
  {
    id: "testing",
    index: "07",
    title: "Testing",
    summary:
      "In-house and partner test capability spanning electrical performance, environmental stress, and safety — data you can put in front of a customer.",
    points: [
      "Cell & pack-level electrical characterization",
      "Environmental chamber & vibration testing",
      "Cycle life & calendar life testing",
      "Full data reporting & traceability",
    ],
  },
  {
    id: "manufacturing-support",
    index: "08",
    title: "Manufacturing Support",
    summary:
      "Designs that transition cleanly from prototype to production, with process controls and supplier partnerships built in from day one.",
    points: [
      "DFM/DFA review at every design gate",
      "Process FMEA & production test-plan development",
      "Supply-chain qualification & dual-sourcing strategy",
      "Line-side fixture & jig design",
    ],
  },
  {
    id: "rapid-prototyping",
    index: "09",
    title: "Rapid Prototyping",
    summary:
      "Working hardware in weeks, not quarters — so your team can validate integration and performance before committing to tooling.",
    points: [
      "A/B sample builds on compressed timelines",
      "3D-printed & CNC mechanical iterations",
      "Bench-level BMS & firmware bring-up",
      "Fast design-test-redesign loops",
    ],
  },
  {
    id: "certification-support",
    index: "10",
    title: "Certification Support",
    summary:
      "Engineering documentation and test coordination structured around the standards your program actually has to clear.",
    points: [
      "UN 38.3 transport testing coordination",
      "IEC 62133 / IEC 62619 readiness",
      "MIL-STD-810 environmental qualification support",
      "Technical file & documentation packages",
    ],
  },
];

export type Industry = {
  id: string;
  title: string;
  eyebrow: string;
  problem: string;
  solution: string;
  benefits: string[];
};

export const industries: Industry[] = [
  {
    id: "construction",
    title: "Construction Equipment",
    eyebrow: "Jobsite Electrification",
    problem:
      "Electrified construction equipment lives in dust, mud, vibration, and temperature swings that consumer battery packs were never designed to survive — and downtime on a jobsite is measured in dollars per hour.",
    solution:
      "Hyve engineers sealed, structurally rated packs matched to your machine's duty cycle, with thermal and mechanical margin built in for the conditions equipment actually sees in the field.",
    benefits: [
      "IP66/67 sealed enclosures rated for jobsite ingress",
      "Shock & vibration validated to off-highway standards",
      "Fast-charge architecture to protect utilization rates",
      "Service-friendly design to minimize downtime",
    ],
  },
  {
    id: "mining",
    title: "Mining",
    eyebrow: "Underground & Surface Operations",
    problem:
      "Mining equipment demands energy density and thermal headroom in confined, high-heat, high-vibration environments where a battery failure can mean a safety incident, not just a maintenance ticket.",
    solution:
      "We design propagation-safe, thermally managed packs with the mechanical robustness and safety documentation mining operators and regulators require.",
    benefits: [
      "Cell-to-cell thermal propagation containment",
      "High-vibration and shock-rated structural design",
      "Explosive-atmosphere-conscious engineering practices",
      "Documentation built for safety-case review",
    ],
  },
  {
    id: "marine",
    title: "Marine",
    eyebrow: "Vessel Power Systems",
    problem:
      "Marine environments combine constant vibration, salt-air corrosion, and zero tolerance for thermal events on a vessel where crew safety and mission uptime are non-negotiable.",
    solution:
      "Hyve builds corrosion-resistant, propagation-safe pack architectures — including LTO platforms for applications where cycle life and safety margin outweigh raw energy density.",
    benefits: [
      "Corrosion-resistant materials & sealing strategy",
      "LTO options for high cycle-life, high-safety duty",
      "Class-society documentation support",
      "Redundant architecture for mission-critical loads",
    ],
  },
  {
    id: "robotics",
    title: "Robotics",
    eyebrow: "Mobile & Field Robotics",
    problem:
      "Robotics platforms need energy-dense, tightly packaged power that integrates with sophisticated control systems — while surviving drops, dust, and continuous duty cycling.",
    solution:
      "We engineer compact, high-power-density modules with CAN-based BMS integration designed to talk directly to your robot's control stack.",
    benefits: [
      "High energy and power density for compact platforms",
      "CAN/J1939 BMS integration out of the box",
      "Hot-swap and rapid-charge architectures available",
      "Rugged mechanical design for repeated field cycling",
    ],
  },
  {
    id: "defense",
    title: "Defense",
    eyebrow: "Mission-Critical Power",
    problem:
      "Defense programs require domestic, traceable supply chains, extreme environmental qualification, and documentation rigor that commercial battery suppliers aren't built to provide.",
    solution:
      "Hyve engineers to MIL-STD environmental requirements with full design traceability, positioning our platforms for programs where supply chain assurance is as important as performance.",
    benefits: [
      "MIL-STD-810 environmental qualification pathway",
      "Design traceability & configuration control",
      "SCOMET-conscious export compliance awareness",
      "NRE engineering model built for program requirements",
    ],
  },
  {
    id: "autonomous-vehicles",
    title: "Autonomous Vehicles",
    eyebrow: "Unmanned Ground & Air Systems",
    problem:
      "Autonomous platforms operate unattended, often far from service support, and can't tolerate the weight, thermal, or reliability compromises of off-the-shelf battery hardware.",
    solution:
      "We design lightweight, high-reliability packs with predictive BMS telemetry, so operators get state-of-health visibility even when the platform is out of reach.",
    benefits: [
      "Weight-optimized structural and cell architecture",
      "Telemetry-enabled BMS for remote state-of-health data",
      "Redundant safety architecture for unattended operation",
      "DGCA / UAV acceptance testing support pathway",
    ],
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    eyebrow: "Factory & Process Power",
    problem:
      "Automated guided vehicles and industrial equipment run continuous multi-shift duty cycles where charge time and cycle life directly determine throughput economics.",
    solution:
      "Hyve engineers high-cycle-life modules and fast-charge architectures sized to your operation's shift patterns, backed by service contracts that protect uptime.",
    benefits: [
      "High cycle-life cell chemistries for continuous duty",
      "Fast-charge & opportunity-charge architectures",
      "Fleet-level telemetry & predictive maintenance data",
      "Annual service contracts to protect uptime",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Requirements",
    description:
      "We start with your duty cycle, envelope, environment, and mission profile — translated into a formal system requirements document before a single cell is selected.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Cell chemistry, pack topology, thermal strategy, and BMS architecture are traded off against performance, cost, and manufacturability targets.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Mechanical, electrical, and thermal design proceed in parallel with DFMEA built into every design review gate, not bolted on at the end.",
  },
  {
    step: "04",
    title: "Prototype",
    description:
      "Working A/B samples in weeks — fast enough to validate integration on your platform before committing to tooling or production volume.",
  },
  {
    step: "05",
    title: "Validate",
    description:
      "Electrical, environmental, and safety testing against a requirements verification matrix, with full data traceability and reporting.",
  },
  {
    step: "06",
    title: "Manufacture",
    description:
      "A design that transitions cleanly to production, with qualified supply chain, process controls, and service contracts to support fielded units.",
  },
];

export const whyHyve = [
  {
    title: "Engineering-First",
    description:
      "We are an engineering organization that manufactures batteries — not a battery reseller with an engineering veneer. Every program starts with your requirements, not our catalog.",
  },
  {
    title: "Built For Abuse",
    description:
      "Shock, vibration, ingress, thermal extremes — our design margin assumes the field, not the lab. Validation happens before delivery, not after a failure.",
  },
  {
    title: "Modular Architecture",
    description:
      "A common mechanical and electrical platform scales across voltage and capacity requirements, so custom doesn't mean starting from zero every time.",
  },
  {
    title: "Full Traceability",
    description:
      "Design controls, DFMEA records, and test data are documented and traceable — the rigor procurement and safety teams need to sign off with confidence.",
  },
];
