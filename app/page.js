import HeroSection from "./component/Herosetion";
import Navbar from "./component/Navbar"
import AboutSection from "./component/Aboutsection";
import ProjectsSection from "./component/Projectsection";
import EmailSection from "./component/Emailsection";
import Footer from "./component/footer";
import AchievementsSection from "./component/Achieventsection";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col bg-[#080808] text-[#E0E0E0]">

<Navbar />
      <div className="container px-12 py-4 mx-auto mt-24">
        <HeroSection />
        <AchievementsSection />
        <EmailSection/>
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}