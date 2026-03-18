import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ClubsSection from "@/components/ClubsSection";
import ContactSection from "@/components/ContactSection";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-12">
      <div className="crt-overlay" />
      <Navbar />
      <main className="pt-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ClubsSection />
        <ContactSection />
      </main>
      <StatusBar />
    </div>
  );
};

export default Index;
