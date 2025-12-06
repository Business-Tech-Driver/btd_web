import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, ShoppingBag, Shield, Truck, CreditCard, Briefcase, Heart } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
}

interface Sector {
  id: string;
  name: string;
  icon: any;
  projects: Project[];
}

const sectors: Sector[] = [
  {
    id: "mineria",
    name: "Minería",
    icon: Building2,
    projects: [
      {
        title: "Automatización de Reportes Operacionales",
        description:
          "Sistema de reporte automático de producción diaria y gestión de indicadores KPI en tiempo real.",
        technologies: ["Power BI", "Python", "Azure"],
        impact: "Reducción del 60% en tiempo de reportería",
      },
      {
        title: "Optimización de Mantenimiento Predictivo",
        description:
          "Modelo de ML para predicción de fallas en equipos críticos de extracción.",
        technologies: ["Machine Learning", "IoT", "AWS"],
        impact: "40% menos downtime no planificado",
      },
    ],
  },
  {
    id: "banca",
    name: "Banca",
    icon: Briefcase,
    projects: [
      {
        title: "Motor de Decisión de Créditos",
        description:
          "Sistema automatizado de evaluación crediticia con reglas de negocio y scoring predictivo.",
        technologies: ["Decision Engine", "API REST", "PostgreSQL"],
        impact: "Aprobación en menos de 2 minutos",
      },
      {
        title: "Onboarding Digital Completo",
        description:
          "Proceso end-to-end de apertura de cuentas con validación biométrica y firma digital.",
        technologies: ["React", "Node.js", "Blockchain"],
        impact: "85% de clientes completados digitalmente",
      },
    ],
  },
  {
    id: "seguros",
    name: "Seguros",
    icon: Shield,
    projects: [
      {
        title: "Automatización de Siniestros",
        description:
          "Workflow inteligente para gestión de reclamos con OCR y validación automática de documentos.",
        technologies: ["OCR", "RPA", "Workflow Engine"],
        impact: "70% de casos resueltos sin intervención manual",
      },
      {
        title: "Cotizador Inteligente",
        description:
          "Sistema de cotización dinámica basado en perfiles de riesgo y data histórica.",
        technologies: ["Python", "Redis", "Vue.js"],
        impact: "5x más cotizaciones por día",
      },
    ],
  },
  {
    id: "consumo",
    name: "Consumo Masivo",
    icon: ShoppingBag,
    projects: [
      {
        title: "Optimización de Cadena de Suministro",
        description:
          "Sistema predictivo de demanda y optimización de inventarios multi-almacén.",
        technologies: ["Forecasting", "SAP Integration", "Tableau"],
        impact: "Reducción de 30% en stock obsoleto",
      },
      {
        title: "Plataforma B2B de Pedidos",
        description:
          "App móvil para vendedores con integración directa a ERP y catálogo dinámico.",
        technologies: ["React Native", "GraphQL", "MongoDB"],
        impact: "200% más pedidos digitales",
      },
    ],
  },
  {
    id: "pagos",
    name: "Pasarelas de Pago",
    icon: CreditCard,
    projects: [
      {
        title: "Motor Antifraude en Tiempo Real",
        description:
          "Sistema de detección de transacciones sospechosas con ML y reglas configurables.",
        technologies: ["Real-time ML", "Kafka", "Redis"],
        impact: "Fraude reducido en 85%",
      },
      {
        title: "Reconciliación Automática Multi-canal",
        description:
          "Proceso automatizado de conciliación entre adquirentes, bancos y comercios.",
        technologies: ["ETL", "PostgreSQL", "Airflow"],
        impact: "De 3 días a 4 horas en reconciliación",
      },
    ],
  },
  {
    id: "profesionales",
    name: "Servicios Profesionales",
    icon: Truck,
    projects: [
      {
        title: "ERP Vertical para Consultoría",
        description:
          "Sistema de gestión de proyectos, timesheet y facturación integrado.",
        technologies: ["Laravel", "PostgreSQL", "Docker"],
        impact: "Control de 100% proyectos en tiempo real",
      },
      {
        title: "Asistente de Propuestas con IA",
        description:
          "Herramienta que genera borradores de propuestas basados en RFPs y casos previos.",
        technologies: ["GPT-4", "Vector DB", "FastAPI"],
        impact: "Propuestas 5x más rápidas",
      },
    ],
  },
  {
    id: "salud",
    name: "Salud",
    icon: Heart,
    projects: [
      {
        title: "Sistema de Gestión de Citas Inteligente",
        description:
          "Plataforma de agendamiento automático con recordatorios y teleconsulta integrada.",
        technologies: ["React", "WebRTC", "MongoDB"],
        impact: "Reducción de 45% en ausentismo",
      },
      {
        title: "Historias Clínicas Digitales",
        description:
          "Sistema centralizado de historias clínicas con acceso multi-sede y cumplimiento normativo.",
        technologies: ["FHIR", "Blockchain", "AWS"],
        impact: "Acceso instantáneo desde cualquier sede",
      },
    ],
  },
];

export function Projects() {
  const [selectedSector, setSelectedSector] = useState<string>(sectors[0].id);

  const activeSector = sectors.find((s) => s.id === selectedSector);

  return (
    <section className="py-24 bg-gradient-to-br from-[#08152E] to-[#0a1a3a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C7A86A] tracking-widest text-sm uppercase">
            Proyectos
          </span>
          <h2 className="text-white text-4xl mt-3">
            Casos de éxito por sector
          </h2>
        </motion.div>

        {/* Sector Menu */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            const isActive = selectedSector === sector.id;

            return (
              <motion.button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#C7A86A] text-white shadow-lg shadow-[#C7A86A]/30"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{sector.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {activeSector && (
            <motion.div
              key={activeSector.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {activeSector.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
                >
                  {/* Title */}
                  <h3 className="text-white text-xl mb-3 group-hover:text-[#C7A86A] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#C7A86A]/10 text-[#C7A86A] px-3 py-1 rounded-full border border-[#C7A86A]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-cyan-400 text-sm">
                      <span className="text-white/50">Impacto: </span>
                      {project.impact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
