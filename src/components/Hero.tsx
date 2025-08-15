import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bragi-led-furniture.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-run font-black mb-6 leading-tight">
            Letreros LED, mobiliario y corte CNC para impulsar tu negocio
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl font-century mb-8 text-white/90 max-w-3xl mx-auto">
            Diseñamos, fabricamos e instalamos soluciones a la medida con acabados profesionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-hero text-lg px-8 py-6"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Cotización
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Portafolio
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-run font-black text-accent">500+</div>
              <div className="text-sm md:text-base font-century text-white/80 mt-2">Proyectos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-run font-black text-accent">15+</div>
              <div className="text-sm md:text-base font-century text-white/80 mt-2">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-run font-black text-accent">24/7</div>
              <div className="text-sm md:text-base font-century text-white/80 mt-2">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full float opacity-60" />
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-accent rounded-full float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-8 w-3 h-3 bg-accent rounded-full float opacity-50" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;