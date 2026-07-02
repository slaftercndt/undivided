import { navLinks } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-parchment px-6 py-16 sm:px-8">
      <div className="container-editorial">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-serif text-2xl font-medium tracking-tight text-ink"
            >
              Undivided<span className="text-gold">.</span>
            </a>
            <p className="mt-4 text-base leading-relaxed text-stone">
              Culture and economics, unified — one system, managed as one.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks
                .filter((l) =>
                  ["#thesis", "#solutions", "#capabilities", "#connect"].includes(
                    l.href,
                  ),
                )
                .map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink/70 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink/10 pt-8 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Undivided. All rights reserved.</p>
          <a
            href="https://undivided.global"
            className="text-gold transition-opacity hover:opacity-70"
          >
            undivided.global
          </a>
        </div>
      </div>
    </footer>
  );
}
