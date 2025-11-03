import { Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import React, { useRef, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import aboutPhoto from "@/assets/about-photo.jpg";
import photoFood from "@/assets/photo-food.jpg";
import photoBeauty from "@/assets/photo-beauty.jpg";
import photoLifestyle from "@/assets/photo-lifestyle.jpg";
import photoBusiness from "@/assets/photo-business.jpg";
import { RiTiktokLine } from "react-icons/ri";

import dunkindonuts from "@/assets/videos/dunkindonuts.mp4";
import kampaoh from "@/assets/videos/kampaoh.mp4";
import llaollao from "@/assets/videos/llaollao.mp4";
import padel1 from "@/assets/videos/padel1.mp4";
import sushi from "@/assets/videos/sushi.mp4";
import AutoPosterVideo from "@/components/AutoPosterVideo";

import emailjs from "@emailjs/browser";

const Index = () => {
  // -------- EmailJS --------
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // (opcional) honeypot anti-bots
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return;

    setSending(true);
    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // debug opcional
      console.log("EmailJS OK:", res.status, res.text);

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactar. Te responderé pronto.",
      });
      formRef.current?.reset();
    } catch (err) {
      console.error("EmailJS ERROR:", err);
      toast({
        title: "Error al enviar",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      });
    } finally {
      setSending(false);
    }

    console.log("svc", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("tpl", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("pub", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  };
  // -------------------------

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const categories = [
    {
      id: "beauty",
      title: "Beauty 💄",
      bgColor: "bg-secondary",
      poster: photoBeauty,
      videos: [],
    },
    {
      id: "food",
      title: "Comida 🍽️",
      bgColor: "bg-muted",
      poster: photoFood,
      videos: [llaollao, sushi, dunkindonuts],
    },
    {
      id: "lifestyle",
      title: "Entrevistas 🎤",
      bgColor: "bg-secondary",
      poster: photoLifestyle,
      videos: [padel1],
    },
    {
      id: "business",
      title: "Viajes ✈️",
      bgColor: "bg-muted",
      poster: photoBusiness,
      videos: [kampaoh],
    },
  ];

  return (
    <div className="min-h-screen bg-transparent scroll-smooth overflow-x-hidden flex flex-col">
      {/* Hero Section */}
      <header className="gradient-autumn min-h-screen flex items-center justify-center px-4 pt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Name and Social Links */}
            <div className="text-center md:text-left space-y-6 animate-fade-in-up overflow-hidden">
              <h1 className="text-7xl md:text-8xl font-bold text-foreground handwriting typewriter text-center md:text-left">
                  <span className="block md:inline">Cristina </span> {}
                  <span className="text-primary block md:inline">Yules</span> {}
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground">
                Creadora de Contenido UGC
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/cristiugc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover-lift shadow-soft"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/cristina-yules-núñez-686548203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover-lift shadow-soft"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@cristiyules"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover-lift shadow-soft"
                  aria-label="TikTok"
                >
                  <RiTiktokLine className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Profile Photo */}
            <div className="flex justify-center md:justify-end animate-fade-in-up">
              <div className="relative w-64 h-64 md:w-[24rem] md:h-[24rem] rounded-full overflow-hidden shadow-hover border-8 border-card">
                <img
                  src={profilePhoto}
                  alt="Cristina Yules - UGC Creator"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Sobre mí
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <ScrollReveal delay={100}>
              <div className="hover-zoom rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={aboutPhoto}
                  alt="Cristina Yules lifestyle portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Right: Bio */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Soy creadora de contenido UGC apasionada por conectar marcas
                  con su público de forma auténtica. Mi experiencia combina
                  creatividad, storytelling y estrategia digital.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Cada proyecto es una oportunidad para dar vida a historias
                  únicas que resonan con las audiencias y generan resultados
                  reales.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

              {/* Videos Section */}
        <section className="py-20 px-4 gradient-warm">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
                Mis vídeos
              </h2>
            </ScrollReveal>
        
            {/* Category Navigation */}
            <ScrollReveal delay={100}>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className="px-8 py-3 rounded-full font-semibold text-lg transition-smooth bg-card text-foreground hover:bg-primary hover:text-primary-foreground"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </ScrollReveal>
        
            {/* All Video Categories */}
            <div className="space-y-20">
              {categories.map((category, categoryIndex) => (
                <ScrollReveal key={category.id} delay={categoryIndex * 100}>
                  <div id={category.id} className="scroll-mt-24">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
                      {category.title}
                    </h3>
        
                    {/* --- INICIO DEL CAMBIO: Contenedor Flexbox Centrado --- */}
                    <div className="flex justify-center">
                      {/* Contenedor de Videos: Flexbox en móvil, Grid de 5 en desktop */}
                      <div className="flex flex-wrap justify-center gap-4 md:grid md:grid-cols-5 md:max-w-none">
                        {category.videos.map((videoSrc, i) => (
                          <div
                            key={i}
                            /* w-[calc(50%-0.5rem)] asegura que 2 caben en móvil con gap-4 (1rem) */
                            className={`w-[calc(50%-0.5rem)] md:w-full aspect-[9/16] rounded-xl ${category.bgColor} shadow-soft hover-lift overflow-hidden relative`}
                          >
                            <AutoPosterVideo
                              src={videoSrc}
                              className="w-full h-full object-cover"
                              fallbackPoster={category.poster}
                              autoPlayOnHover={false}
                              muted={false}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* --- FIN DEL CAMBIO --- */}
        
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

      {/* Photos Section */}
      <section className="py-20 px-4 bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Fotos UGC
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              photoFood,
              photoBeauty,
              photoLifestyle,
              photoBusiness,
              photoFood,
              photoBeauty,
              photoLifestyle,
              photoBusiness,
            ].map((photo, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden shadow-soft hover-zoom"
              >
                <img
                  src={photo}
                  alt={`UGC content ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Empresas que han confiado en mí
            </h2>
          </ScrollReveal>

          <div className="bg-card rounded-3xl shadow-soft p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {[
                "Freshly",
                "Derma Protect",
                "FitPlanet",
                "Kampaoh",
                "Llaollao",
                "Incept Coffee",
                "Petroni",
                "BRO",
                "Klayful",
                "Gelled",
                "Dunkin Donuts",
                "Junta de Andalucia",
              ].map((brand) => (
                <div
                  key={brand}
                  className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-smooth"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Escríbeme y hagamos crecer tu marca.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-6"
            >
              {/* honeypot anti-bots */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Tu nombre"
                  className="bg-card border-border"
                  required
                />
                <Input
                  type="email"
                  name="from_email"
                  placeholder="Tu email"
                  className="bg-card border-border"
                  required
                />
              </div>
              <Input
                type="text"
                name="subject"
                placeholder="Asunto"
                className="bg-card border-border"
                required
              />

              <Textarea
                name="message"
                placeholder="Tu mensaje"
                rows={6}
                className="bg-card border-border resize-none"
                required
              />
              <Button
                variant="cta"
                size="lg"
                className="w-full md:w-auto px-12"
                type="submit"
                disabled={sending}
              >
                <Mail className="mr-2 h-5 w-5" />
                {sending ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 gradient-autumn border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground mb-4">
            © 2025 Cristina Yules. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.instagram.com/cristiugc"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/cristina-yules-núñez-686548203/"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              LinkedIn
            </a>
            <a
              href="https://www.tiktok.com/@cristiyules"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
