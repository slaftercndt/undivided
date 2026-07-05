import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Thesis } from "@/components/Thesis";
import { Approach } from "@/components/Approach";
import { Team } from "@/components/Team";
import { Plan } from "@/components/Plan";
import { Solutions } from "@/components/Solutions";
import { Capabilities } from "@/components/Capabilities";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Thesis />
        <Approach />
        <Team />
        <Plan />
        <Solutions />
        <Capabilities />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
