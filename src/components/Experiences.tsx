import { motion } from "motion/react";
import { TrendingUp, Clock, Star, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// LOGOS LOCALES
import alicorpLogo from "../assets/logos/alicorp.png";
import cognitaLogo from "../assets/logos/cognita.jpg";
import allemantLogo from "../assets/logos/allemant.png";
import hciLogo from "../assets/logos/hci.jpg";
import mycalLogo from "../assets/logos/mycal.jpg";
import myhLogo from "../assets/logos/myh.png";
import vertixLogo from "../assets/logos/vertix.webp";
import stellamarisLogo from "../assets/logos/stellamaris.png";

const metricas = [
  { icon: TrendingUp, valor: "+30", label: "Proyectos desarrollados", color: "from-cyan-400 to-cyan-600" },
  { icon: Clock, valor: "+70,000", label: "Horas hombre ahorradas en 2025", color: "from-[#C7A86A] to-[#b89960]" },
  { icon: Star, valor: "4.4/5", label: "Nota promedio - encuesta de satisfacción", color: "from-[#C7A86A] to-cyan-500" },
  { icon: Zap, valor: "70%", label: "Proyectos generan valor en los primeros 30 días", color: "from-cyan-500 to-blue-600" },
];

const sectores = [
  "Minería", "Banca", "Seguros", "Salud",
  "Consumo Masivo", "Pasarelas de Pago", "Servicios Profesionales"
];

const clienteLogos = [
  { logo: alicorpLogo, alt: "Alicorp" },
  { logo: cognitaLogo, alt: "Cognita Group" },
  { logo: allemantLogo, alt: "Allemant" },
  { logo: hciLogo, alt: "HCI" },
  { logo: mycalLogo, alt: "MyCal" },
  { logo: myhLogo, alt: "MYH" },
  { logo: vertixLogo, alt: "Vertix" },
  { logo: stellamarisLogo, alt: "Colegio Stella Maris" },
];

export function Experiences() {
  return (
    <section id="experiencias" className="relative py-24 md:py-32 bg-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C7A86A]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C7A86A] tracking-widest text-xs uppercase px-4 py-2 border border-[#C7A86A]/30 rounded-full inline-block mb-6">
            Experiencias
          </span>
          <h2 className="text-[#08152E] text-5xl md:text-6xl mb-6">
            ¿Qué nos respalda<span className="text-[#C7A86A]">?</span>
          </h2>
        </motion.div>

        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metricas.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:border-[#C7A86A]/50"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl text-[#08152E] mb-2 group-hover:text-[#C7A86A] transition-colors">
                  {m.valor}
                </div>
                <p className="text-gray-600 text-sm leading-tight">
                  {m.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Sectores */}
        <div className="mb-12 text-center">
          <h3 className="text-[#08152E] text-xl md:text-2xl mb-6">
            Tenemos experiencia en los rubros:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {sectores.map(s => (
              <div key={s} className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Clientes */}
        <h3 className="text-[#08152E] text-xl md:text-2xl text-center mb-8">
          Hemos colaborado con:
        </h3>

        {/* Carousel */}
        <div className="relative overflow-hidden py-8">
          <div className="carousel-container">
            <div className="carousel-track">

              {clienteLogos.map((c, i) => (
                <ImageWithFallback key={`f-${i}`} src={c.logo} alt={c.alt} className="carousel-logo" />
              ))}

              {clienteLogos.map((c, i) => (
                <ImageWithFallback key={`s-${i}`} src={c.logo} alt={c.alt} className="carousel-logo" />
              ))}

            </div>
          </div>
        </div>

      </div>

      {/* STYLES FINALES */}
      <style>{`
        .carousel-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .carousel-track {
          display: flex;
          width: max-content;
          animation: scroll-carousel 40s linear infinite;
        }

        .carousel-logo {
          height: 60px;
          margin: 0 80px;
          max-width: 150px;
          object-fit: contain;
          background: transparent;

          filter: grayscale(100%) opacity(0.6);
          transition: filter 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .carousel-logo:hover {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.05);
        }

        @keyframes scroll-carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .carousel-container:hover .carousel-track {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .carousel-logo {
            height: 50px;
            margin: 0 40px;
            max-width: 120px;
          }
        }
      `}</style>

    </section>
  );
}
