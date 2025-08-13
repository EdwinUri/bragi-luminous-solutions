import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import ledStrips from "@/assets/led-strips.jpg";
import ledPanels from "@/assets/led-panels.jpg";
import heroImage from "@/assets/hero-led-installation.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Restaurante Gourmet",
      category: "restaurante",
      description: "Transformación completa con tiras LED RGB para crear ambiente cálido y moderno.",
      image: ledStrips,
      client: "La Mesa Dorada",
      solution: "Tiras LED RGB + Paneles empotrados",
      savings: "60% ahorro energético",
      year: "2024"
    },
    {
      id: 2,
      title: "Oficinas Corporativas",
      category: "oficina",
      description: "Instalación de paneles LED para mejorar productividad y reducir fatiga visual.",
      image: ledPanels,
      client: "TechCorp Solutions",
      solution: "Paneles LED 4000K + Control inteligente",
      savings: "75% ahorro energético",
      year: "2024"
    },
    {
      id: 3,
      title: "Centro Comercial",
      category: "retail",
      description: "Iluminación integral para potenciar la experiencia de compra en 3 niveles.",
      image: heroImage,
      client: "Plaza Central",
      solution: "Sistema integral LED + Exterior",
      savings: "80% ahorro energético",
      year: "2023"
    },
    {
      id: 4,
      title: "Hotel Boutique",
      category: "hotel",
      description: "Iluminación decorativa y funcional para crear experiencias únicas.",
      image: ledStrips,
      client: "Hotel Lumière",
      solution: "Decorativas LED + Tiras RGB",
      savings: "65% ahorro energético",
      year: "2023"
    },
    {
      id: 5,
      title: "Tienda de Moda",
      category: "retail",
      description: "Sistema LED que realza productos y crea ambiente sofisticado.",
      image: ledPanels,
      client: "Fashion Forward",
      solution: "Rieles LED + Spots direccionales",
      savings: "70% ahorro energético",
      year: "2024"
    },
    {
      id: 6,
      title: "Clínica Dental",
      category: "oficina",
      description: "Iluminación especializada para consultorio con luz natural optimizada.",
      image: heroImage,
      client: "Dental Care Plus",
      solution: "Paneles médicos + Luz regulable",
      savings: "85% ahorro energético",
      year: "2024"
    }
  ];

  const filters = [
    { id: "todos", label: "Todos los Proyectos" },
    { id: "restaurante", label: "Restaurantes" },
    { id: "oficina", label: "Oficinas" },
    { id: "retail", label: "Retail" },
    { id: "hotel", label: "Hoteles" }
  ];

  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="proyectos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium">Casos de Éxito</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Proyectos</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Realizados
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo hemos transformado espacios comerciales de diferentes 
            sectores con nuestras soluciones LED personalizadas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glow-card group overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 text-primary text-sm font-medium">
                    {project.year}
                  </div>

                  {/* View Project Button */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">{project.client}</p>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Solución:</span>
                      <span className="text-foreground font-medium">{project.solution}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ahorro:</span>
                      <span className="text-green-500 font-medium">{project.savings}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn">
                    Ver Detalles
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Quieres que tu proyecto sea el siguiente?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos y descubre cómo podemos transformar tu espacio comercial 
              con soluciones LED innovadoras y eficientes.
            </p>
            <Button className="btn-hero">
              Iniciar Proyecto
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;