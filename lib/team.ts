export type Member = {
  /** Full name */
  name: string;
  /** Role within the firm */
  role: string;
  /**
   * Short bio. PLACEHOLDER copy where marked — swap in final bios.
   * The point of this section is to signal a firm, not a solo practitioner.
   */
  bio: string;
};

/**
 * Team is data-driven — add a member by appending to this array and the
 * card grid reflows automatically. No layout changes required.
 */
export const team: Member[] = [
  {
    name: "Founder",
    role: "Founder & Principal",
    bio:
      // PLACEHOLDER — replace with final founder bio.
      "A disciple of Mark Simon — himself a protégé of Peter Drucker and Tom Patterson — the founder works where grand strategy meets execution, building the systems that let economic innovation carry cultural weight. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Lynn",
    role: "Partner",
    bio:
      // PLACEHOLDER — replace with Lynn's final bio.
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Dan",
    role: "Partner",
    bio:
      // PLACEHOLDER — replace with Dan's final bio.
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
];
