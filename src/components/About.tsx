import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Wrench } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Calidad Garantizada",
      description: "Materiales de primera calidad y acabados profesionales en cada proyecto."
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      description: "Profesionales con más de 15 años de experiencia en el sector."
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Cumplimos con todos los estándares de calidad y seguridad industriales."
    },
    {
      icon: Wrench,
      title: "Servicio Integral",
      description: "Desde el diseño hasta la instalación y mantenimiento post-venta."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-run font-black text-primary mb-6">
            Nosotros
          </h2>
          <p className="text-lg md:text-xl font-century text-muted-foreground max-w-3xl mx-auto">
            Especialistas en remodelación comercial e implementación visual
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-run font-bold text-primary mb-6">
              Transformamos espacios comerciales con tecnología de vanguardia
            </h3>
            <div className="space-y-4 font-century text-muted-foreground">
              <p>
                En <strong className="text-primary">Bragi</strong>, somos especialistas en crear soluciones 
                visuales que potencian la identidad de tu negocio. Con más de 15 años de experiencia, 
                hemos ayudado a cientos de empresas a destacar en el mercado.
              </p>
              <p>
                Nuestro equipo combina creatividad, tecnología y precisión técnica para ofrecer 
                resultados que superan las expectativas. Desde letreros LED hasta mobiliario 
                comercial personalizado, cada proyecto es único.
              </p>
              <p>
                Contamos con tecnología CNC de última generación y un taller especializado que 
                nos permite mantener los más altos estándares de calidad en tiempos de entrega 
                competitivos.
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-run font-black text-primary mb-2">500+</div>
                  <div className="text-sm font-century text-muted-foreground">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-run font-black text-primary mb-2">15+</div>
                  <div className="text-sm font-century text-muted-foreground">Años</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-run font-black text-primary mb-2">98%</div>
                  <div className="text-sm font-century text-muted-foreground">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-run font-black text-primary mb-2">24/7</div>
                  <div className="text-sm font-century text-muted-foreground">Soporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="brand-card text-center group">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-run font-bold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm font-century text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center bg-secondary/30 rounded-lg p-8">
          <h3 className="text-xl font-run font-bold text-primary mb-4">
            Certificaciones y Garantías
          </h3>
          <p className="font-century text-muted-foreground mb-6">
            Todos nuestros productos cuentan con garantía extendida y certificaciones de calidad
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-century">
            <span className="bg-card px-4 py-2 rounded-lg border">Garantía 2 años</span>
            <span className="bg-card px-4 py-2 rounded-lg border">ISO 9001</span>
            <span className="bg-card px-4 py-2 rounded-lg border">CE Marking</span>
            <span className="bg-card px-4 py-2 rounded-lg border">Instalación Certificada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;