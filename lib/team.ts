export type Principal = {
  name: string;
  role: string;
  /** The one-line mandate — what this person owns. Tight enough to quote. */
  mandate: string;
  /** Short bio. */
  bio: string;
};

export type Partner = {
  name: string;
  /** One sharp line — who they are and what they carry. */
  line: string;
};

export type Advisor = {
  name: string;
  /** Domain or affiliation — one sharp phrase, not a paragraph. */
  domain: string;
};

/**
 * Team is tiered and data-driven: Principal leads, Partners carry the work,
 * Advisors & Collaborators render as a roster. Append to the arrays and the
 * layout reflows — no component changes required.
 */

export const principal: Principal = {
  name: "Founder", // PLACEHOLDER — replace with the founder's name.
  role: "Founder & Principal",
  mandate: "Sets the thesis. Answers for the work.",
  bio: "Three decades at the intersection of culture, economics, generosity, and Web3 — building integrated systems where strategy, capital, and conviction move together. A StratOP practitioner and meta-strategist in the lineage of Mark Simon (himself a disciple of Peter Drucker and Tom Patterson). Finance Sector Lead for The UP Movement, architect of the Giver Army through GiveSendGo Charities, and a founding partner in Web3 commerce infrastructure. The through-line across every mandate: inspire hope and belonging so that communities flourish.",
};

export const partners: Partner[] = [
  {
    name: "Mark Simon",
    line: "Strategist and mentor; former board chair of a major denomination and industrial real estate leader; protégé of Peter Drucker and Tom Patterson.",
  },
  {
    name: "Mike Larkin, PhD",
    line: "Former leader of an international mission movement and university president; institutional leadership and organizational scale.",
  },
  {
    name: "Lynn",
    line: "International leadership consultant; marketing strategist and finance leader.",
  },
  {
    name: "Dan",
    line: "Strategic development and management consultant; culture and organizational strategy.",
  },
];

/** The bench: advisors and collaborators, rendered as a roster. */
export const advisors: Advisor[] = [
  { name: "David Ziyambi", domain: "Global markets & sovereign strategy" },
  { name: "Will Fobbs", domain: "Impact funding & infrastructure bonds" },
  { name: "Alexander Karam", domain: "Agricultural value chains, Africa" },
  { name: "Joel Cunningham", domain: "Agricultural value chains, Africa" },
  { name: "James Kramer", domain: "Web3 & reward infrastructure" },
  { name: "Rene Cunningham", domain: "Next-generation education" },
  { name: "Beat Baumann", domain: "Church-anchored development" },
  { name: "Colby Gilmore", domain: "Family office & stewardship" },
  { name: "Richard Lackey", domain: "International finance & agricultural stewardship" },
  { name: "Jason Fisher", domain: "Agritech & Open.Ag AI" },
];
