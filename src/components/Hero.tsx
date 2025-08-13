import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-led-installation.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Instalación LED profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Animated LED strips */}
      <div className="absolute top-0 left-0 w-full">
        <div className="led-strip" />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="led-strip" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium">Tecnología LED de Última Generación</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Iluminamos
              </span>
              <br />
              <span className="text-foreground">tu negocio</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-4xl">
                con tecnología LED
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Transformamos espacios comerciales con soluciones de iluminación LED 
              que combinan eficiencia energética, diseño moderno y máxima durabilidad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="btn-hero group">
                Ver Productos
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                <Play className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                Pedir Instalación
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">85%</div>
                <div className="text-muted-foreground">Ahorro Energético</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Soporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full float opacity-60" />
      <div className="absolute bottom-32 right-32 w-6 h-6 bg-secondary rounded-full float opacity-40" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-16 w-3 h-3 bg-primary rounded-full float opacity-50" style={{ animationDelay: "4s" }} />
    </section>
  );
};

export default Hero;