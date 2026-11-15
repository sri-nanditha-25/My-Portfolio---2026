import { Header } from "@/components/header";
import { HeroAbout } from "@/components/hero-about";
import { Experience } from "@/components/experience";
import { CoreSkills } from "@/components/core-skills";
import { Footer } from "@/components/footer";
import { SocialSidebar } from "@/components/social-sidebar";
import { EmailSidebar } from "@/components/email-sidebar";
import { CursorRing } from "@/components/cursor-ring";

// This page is automatically statically generated at build time
// Next.js will pre-render this page and all its components statically

export default function Home() {
  return (
    <div className="relative">
      <CursorRing />
      <Header />
      <SocialSidebar />
      <EmailSidebar />
      <HeroAbout>
        <Experience />
        <CoreSkills />
        {/* <Projects /> */}
      </HeroAbout>
      <Footer />
    </div>
  );
}
