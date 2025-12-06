import { useState, useEffect } from "react";
import { NavbarWithDropdown } from "./components/NavbarWithDropdown";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { DriverModes } from "./components/DriverModes";
import { Experiences } from "./components/Experiences";
import { ContactNew } from "./components/ContactNew";
import { FloatingContact } from "./components/FloatingContact";
import { ProcessDriverMode } from "./pages/ProcessDriverMode";
import { DecisionDriverMode } from "./pages/DecisionDriverMode";
import { PeopleDriverMode } from "./pages/PeopleDriverMode";
import { DriverModePage } from "./pages/DriverModePage";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <DriverModes />
      <Experiences />
      <ContactNew />
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    // Simple router based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "/";
      
      // Check if it's an anchor link (starts with #)
      if (hash.startsWith("#")) {
        // It's an anchor within the page
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (hash.includes("#")) {
        // It's a page route with an anchor (e.g., /#contacto)
        const [page, anchor] = hash.split("#");
        setCurrentPage(page || "/");
        
        // Wait for page to render, then scroll to anchor
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        // Regular page navigation
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update all hrefs to use hash routing
  useEffect(() => {
    const updateLinks = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && !href.startsWith("/#")) {
          link.setAttribute("href", `#${href}`);
        }
      });
    };
    
    updateLinks();
    const observer = new MutationObserver(updateLinks);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "/process-driver-mode":
        return <ProcessDriverMode />;
      case "/decision-driver-mode":
        return <DecisionDriverMode />;
      case "/people-driver-mode":
        return <PeopleDriverMode />;
      case "/driver-mode":
        return <DriverModePage />;
      case "/about-us":
        return <AboutUs />;
      case "/contact":
        return <Contact />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08152E] overflow-x-hidden">
      <NavbarWithDropdown />
      {renderPage()}
      <FloatingContact />
      
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  );
}