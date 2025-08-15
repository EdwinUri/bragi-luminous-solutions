import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuánto dura un letrero LED?",
      answer: "Nuestros letreros LED tienen una vida útil de 50,000 a 100,000 horas, equivalente a 10-15 años de uso continuo con garantía de 2 años."
    },
    {
      question: "¿Los letreros son resistentes para exterior/interior?",
      answer: "Sí, ofrecemos opciones tanto para interior como exterior con certificación IP65 para resistencia al agua y condiciones climáticas adversas."
    },
    {
      question: "¿Cuáles son los tiempos de producción e instalación?",
      answer: "Los tiempos varían según el proyecto: letreros LED (7-10 días), mobiliario comercial (10-15 días), corte CNC (3-7 días). La instalación se programa según disponibilidad."
    },
    {
      question: "¿Qué formas de pago y facturación manejan?",
      answer: "Aceptamos efectivo, transferencias bancarias, tarjetas de crédito y débito. Manejamos facturación fiscal con todos los requisitos legales."
    },
    {
      question: "¿Ofrecen diseños personalizados y muestras digitales?",
      answer: "Sí, nuestro equipo de diseño crea propuestas personalizadas con renders 3D y muestras digitales antes de la producción final."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-run font-black text-primary mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg md:text-xl font-century text-muted-foreground max-w-3xl mx-auto">
            Resolvemos tus dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-run font-bold text-primary hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-century text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;