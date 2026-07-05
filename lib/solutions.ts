export type Solution = {
  /** Name of the solution */
  name: string;
  /** The category / class of problem it solves */
  category: string;
  /** One-line description — kept tight enough to quote */
  description: string;
  /** Optional external link */
  href?: string;
  /** Optional standing/relationship label (e.g. "Founding member") */
  standing?: string;
};

/**
 * Solutions are data-driven and easily extensible — this is "including but
 * not limited to." New solutions (Humara, Kingdom Chicken Africa, and future
 * work) slot in by appending to this array; no layout changes required.
 */
export const solutions: Solution[] = [
  {
    name: "The UP Movement",
    category: "Hub-based systems",
    description:
      "A framework that scales hubs to uplift nations — economic anchors in agriculture, construction, and mining set alongside church-anchored community development, next-generation education, and value-chain enrichment.",
    href: "https://theupmovement.org",
    standing: "Active hubs across several African countries",
  },
  {
    name: "Conduit Network",
    category: "Web3 infrastructure",
    description:
      "A new operating system for commerce — reward infrastructure engineered to create mutuality between the parties who build and use it.",
    href: "https://cndt.io",
    standing: "Founding member",
  },
  {
    name: "GiveSendGo Charities",
    category: "Collaborative giving funds",
    description:
      "Meeting urgent need and sharing the hope of Jesus through generosity — collaborative funds moving where the need is greatest.",
    href: "https://givesendgo.org",
    standing: "Multiple funds across 75 countries",
  },
  {
    name: "The Giver Army",
    category: "Collaborative generosity",
    description:
      "A global movement of givers mobilized to meet urgent need — generosity organized as infrastructure, not impulse.",
    href: "https://giver.army",
  },
  {
    name: "Global Commerce",
    category: "Multinational commerce",
    description:
      "Active engagements in multinational commerce — anchoring culture and economics in markets where both must move together.",
  },
];
