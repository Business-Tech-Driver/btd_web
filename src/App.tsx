import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { About } from "./components/About";
import { DriverModes } from "./components/DriverModes";
import { ContactNew } from "./components/ContactNew";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#08152E] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Manifesto />
      <About />
      <DriverModes />
      <ContactNew />
      
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