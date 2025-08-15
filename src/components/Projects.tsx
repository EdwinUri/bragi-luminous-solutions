import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, DollarSign } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "LED", "Mobiliario", "CNC", "Señalética"];

  const projects = [
    {
      id: 1,
      title: "Letrero LED Restaurante El Sazón",
      client: "Restaurante El Sazón",
      category: "LED",
      description: "Letrero LED de alta visibilidad para fachada exterior con iluminación personalizada.",
      solution: "Letrero LED exterior resistente al agua",
      savings: "65% reducción en consumo eléctrico",
      year: "2024",
      sector: "Restaurante"
    },
    {
      id: 2,
      title: "Mobiliario Comercial Farmacia San José",
      client: "Farmacia San José",
      category: "Mobiliario",
      description: "Estantería comercial completa con mostradores y sistema de exhibición.",
      solution: "Mobiliario modular de alta resistencia",
      savings: "Incremento 40% en espacio de exhibición",
      year: "2024",
      sector: "Farmacia"
    },
    {
      id: 3,
      title: "Corte CNC Paneles Decorativos Hotel Luna",
      client: "Hotel Luna",
      category: "CNC",
      description: "Paneles decorativos cortados con precisión CNC para lobby del hotel.",
      solution: "Paneles CNC con diseño personalizado",
      savings: "Instalación 50% más rápida",
      year: "2023",
      sector: "Hotelería"
    },
    {
      id: 4,
      title: "Señalética Corporativa Oficinas Torres",
      client: "Oficinas Torres",
      category: "Señalética",
      description: "Sistema completo de señalización direccional e informativa.",
      solution: "Señalización integral de edificio",
      savings: "Mejora 80% en navegación interna",
      year: "2024",
      sector: "Corporativo"
    },
    {
      id: 5,
      title: "Letrero Neón LED Boutique Fashion",
      client: "Boutique Fashion",
      category: "LED",
      description: "Letrero neón LED interior con efectos dinámicos y colores personalizados.",
      solution: "Neón LED con controlador RGB",
      savings: "70% menos consumo vs neón tradicional",
      year: "2024",
      sector: "Retail"
    },
    {
      id: 6,
      title: "Estantería CNC Librería Central",
      client: "Librería Central",
      category: "CNC",
      description: "Estantería personalizada con cortes CNC precisos para optimizar espacio.",
      solution: "Estantería modular CNC personalizada",
      savings: "30% más capacidad de almacenaje",
      year: "2023",
      sector: "Librería"
    }
  ];

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portafolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-run font-black text-primary mb-6">
            Portafolio de Proyectos
          </h2>
          <p className="text-lg md:text-xl font-century text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubre algunos de nuestros trabajos más destacados en diferentes sectores
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`font-century font-medium ${
                  activeFilter === filter 
                    ? "bg-primary text-white" 
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="brand-card group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="h-16 w-16 text-primary mx-auto mb-2" />
                    <p className="text-sm font-century text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-primary text-white font-century">
                    {project.year}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-run font-bold text-primary mb-2 line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="font-century text-muted-foreground">
                      {project.client} • {project.sector}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm font-century text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs font-century">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                    <span className="font-medium">Solución:</span>
                    <span className="ml-1 text-muted-foreground">{project.solution}</span>
                  </div>
                  <div className="flex items-center text-xs font-century">
                    <DollarSign className="w-3 h-3 text-accent mr-2" />
                    <span className="font-medium">Resultado:</span>
                    <span className="ml-1 text-muted-foreground">{project.savings}</span>
                  </div>
                  <div className="flex items-center text-xs font-century">
                    <Calendar className="w-3 h-3 text-accent mr-2" />
                    <span className="font-medium">Año:</span>
                    <span className="ml-1 text-muted-foreground">{project.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
          <h3 className="text-2xl md:text-3xl font-run font-bold text-primary mb-4">
            ¿Quieres un proyecto así?
          </h3>
          <p className="text-lg font-century text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo está listo para crear la solución perfecta para tu negocio
          </p>
          <Button 
            className="btn-hero"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Iniciar Mi Proyecto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;