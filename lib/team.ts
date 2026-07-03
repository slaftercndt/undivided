export type Principal = {
  name: string;
  role: string;
  /** The one-line mandate — what this person owns. Tight enough to quote. */
  mandate: string;
  /** Short bio. PLACEHOLDER where marked — swap in final copy. */
  bio: string;
  /** Lineage line, rendered quietly beneath the bio. */
  lineage?: string;
};

export type Partner = {
  name: string;
  role: string;
  /** The one-line mandate — what this person owns. */
  mandate: string;
  /** Short bio. PLACEHOLDER where marked. */
  bio: string;
};

export type Advisor = {
  name: string;
  /** Domain or affiliation — one sharp phrase, not a paragraph. */
  domain: string;
};

/**
 * Team is tiered and data-driven: Principal leads, Partners carry named
 * mandates, Advisors & Collaborators render as a roster. Append to the
 * arrays and the layout reflows — no component changes required.
 */

export const principal: Principal = {
  name: "Founder",
  role: "Founder & Principal",
  mandate: "Sets the thesis. Answers for the work.",
  bio:
    // PLACEHOLDER — replace with final founder bio.
    "Three decades at the seam of culture and economics — building the systems that let economic innovation carry cultural weight. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  lineage:
    "Disciple of Mark Simon — a protégé of Peter Drucker and Tom Patterson.",
};

export const partners: Partner[] = [
  {
    name: "Lynn",
    role: "Partner",
    mandate: "Owns the operating discipline.", // PLACEHOLDER mandate — sharpen to Lynn's actual charge.
    bio:
      // PLACEHOLDER — replace with Lynn's final bio.
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    name: "Dan",
    role: "Partner",
    mandate: "Owns the capital architecture.", // PLACEHOLDER mandate — sharpen to Dan's actual charge.
    bio:
      // PLACEHOLDER — replace with Dan's final bio.
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.",
  },
];

/**
 * The bench: advisors and collaborators, rendered as a roster.
 * PLACEHOLDER entries — replace names/domains, add as many as earned.
 */
export const advisors: Advisor[] = [
  { name: "Advisor Name", domain: "Global markets & sovereign strategy" },
  { name: "Advisor Name", domain: "Agricultural value chains, Africa" },
  { name: "Advisor Name", domain: "Web3 & reward infrastructure" },
  { name: "Advisor Name", domain: "Next-generation education" },
  { name: "Collaborator Name", domain: "Church-anchored development" },
  { name: "Collaborator Name", domain: "Family office & stewardship" },
];
