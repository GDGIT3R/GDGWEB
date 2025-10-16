import { Route, Routes, useLocation } from "react-router-dom";
import CommunityImpactSection from "./../pages/CommunityEvents";
import FlagshipProgramsSection from "./../pages/FlagShipProg";
import HomeSection from "./../pages/Home";
import AboutSection from "./../pages/About";
import OurTeam from "./../pages/OurTeam";
import PastEvents from "./../pages/PastEvent";
import PlanOfAction from "./../pages/PlanOfAction";
import SignatureEventsSection from "./../pages/SignatureEvents";
import WeeklyCadenceSection from "./../pages/WeeklyCadence";
import WorkshopsSection from "./../pages/WorkShop";
import Footer from "./../ui/Footer";
import Navigation from "./../ui/Navigation";
import GlassNavbar from "./../ui/GlassNavbar";
import sections from "./RouteLinkSession";
import Contact from "../pages/Contact";



function AppLayout() {
  const location = useLocation();

  const getCurrentPage = () => {
    const path = location.pathname;
    const section = sections.find((s) => s.path === path);
    return section ? section.id : "home";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <GlassNavbar />
  <Navigation sections={sections} currentPage={getCurrentPage()} />

  <main className="pt-24 md:pt-28">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/plan-of-action" element={<PlanOfAction />} />
          <Route
            path="/flagship-programs"
            element={<FlagshipProgramsSection />}
          />
          <Route path="/workshops" element={<WorkshopsSection />} />
          <Route path="/weekly-cadence" element={<WeeklyCadenceSection />} />
          <Route
            path="/signature-events"
            element={<SignatureEventsSection />}
          />
          <Route
            path="/community-impact"
            element={<CommunityImpactSection />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
