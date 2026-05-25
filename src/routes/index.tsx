import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/javier-portrait.jpg";
import office from "@/assets/office.jpg";
import teamwork from "@/assets/teamwork.jpg";
import handshake from "@/assets/handshake.jpg";
import consultation from "@/assets/consultation.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Javier Aliaga Guillén — Asesor en Orientación Profesional y Social" },
      {
        name: "description",
        content:
          "Asesor en orientación profesional y social. Acompañamiento personalizado para tu crecimiento profesional y personal. Reserva una consulta gratuita.",
      },
    ],
  }),
});

const navLinks = [
  { href: "#inicio", label: "INICIO" },
  { href: "#areas", label: "AREAS" },
  { href: "#objetivos", label: "OBJETIVOS" },
  { href: "#contacto", label: "CONTACTO" },
  { href: "#faq", label: "FAQ" },
];

const areas = [
  {
    title: "Desarrollo Profesional-Social",
    text: "Promuevo el crecimiento y el desarrollo tanto profesional como personal de las personas.",
  },
  {
    title: "Intervención Profesional-Social",
    text: "Abordo tanto los problemas y dificultades profesionales como sociales que las personas puedan tener.",
  },
  {
    title: "Innovación Profesional-Social",
    text: "Fomento la creación de soluciones tanto profesionales como personales que cualquier persona pueda tener.",
  },
];

const faqs = [
  {
    q: "¿Cuándo empezamos?",
    a: "Antes de nada, comenzaremos con una consulta gratuita para analizar tu situación y determinar el camino a recorrer.",
  },
  {
    q: "¿Cuáles son mis precios?",
    a: "El precio varía en función del tipo de sesión:\n• Tarifa sesión orientación profesional: 30€\n• Tarifa sesión orientación personal: 15€\n• Tarifa sesión orientación profesional y social: 45€\n\n*Antes de comenzar una sesión siempre te pediré tu aprobación*",
  },
  {
    q: "¿Cuántas sesiones se realizan?",
    a: "El número de sesiones depende de la situación de la persona, pero dedico un mínimo de 6 sesiones a cada cliente, con la posibilidad de realizar cuantas sesiones sean necesarias.",
  },
];

function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary-foreground/20">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-wrap justify-center gap-2 sm:gap-4">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full border-2 border-primary-foreground/80 px-5 py-2 text-sm font-[var(--font-display)] tracking-[0.2em] hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="bg-primary text-primary-foreground"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          JAVIER ALIAGA GUILLÉN
        </h1>
        <p className="mt-6 text-xl sm:text-2xl font-[var(--font-body)] text-primary-foreground/90">
          Asesor en Orientación Profesional y Social
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="p-2 border-2 border-primary-foreground/80 rounded-md">
              <img
                src={portrait}
                alt="Javier Aliaga Guillén, asesor de orientación profesional"
                width={460}
                height={620}
                className="w-[280px] sm:w-[360px] h-auto object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 text-left">
            <p className="text-lg sm:text-xl font-semibold leading-relaxed">
              Ayudo a que las personas sean capaces de tomar decisiones para impulsar
              su crecimiento y desarrollo profesional y/o social.
            </p>
            <QuoteCard
              text="“El liderazgo no se trata de títulos, se trata de inspirar.”"
              author="— Anónimo"
            />
            <QuoteCard
              text="“El éxito es la suma de pequeños esfuerzos repetidos día tras día.”"
              author="— Robert Collier"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteCard({ text, author }: { text: string; author: string }) {
  return (
    <blockquote className="rounded-2xl border-2 border-primary-foreground/80 px-6 py-4">
      <p className="italic font-[var(--font-quote)] text-lg leading-snug">{text}</p>
      <footer className="mt-2 text-right text-sm italic opacity-90">{author}</footer>
    </blockquote>
  );
}

function Areas() {
  return (
    <section id="areas" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={office}
          alt="Sala de reuniones para sesiones de orientación"
          loading="lazy"
          width={1024}
          height={768}
          className="rounded-3xl shadow-lg object-cover w-full h-full"
        />
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Mis áreas de acción
          </h2>
          <div className="mt-8 space-y-6">
            {areas.map((a) => (
              <div key={a.title} className="border-l-4 border-primary pl-5">
                <h3 className="text-xl font-semibold text-primary-deep" style={{ color: "var(--primary-deep)" }}>
                  {a.title}
                </h3>
                <p className="mt-1 text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Objetivos() {
  return (
    <section id="objetivos" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Mi Objetivo</h2>
          <p className="mt-6 text-lg text-foreground/90 leading-relaxed">
            Ayudarte a ser capaz de tomar decisiones sobre tu crecimiento y desarrollo
            tanto profesional como personal, a través de un acompañamiento y una guía
            personalizada.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-foreground">¿Qué te ofrezco?</h3>
          <p className="mt-3 text-foreground/80">
            Un servicio de acompañamiento en tu orientación profesional como personal.
          </p>
          <p className="mt-3 text-foreground/80">
            Quiero ser tu guía, el que te ayuda en la toma de tus decisiones profesionales
            y personales para ayudarte a recorrer con éxito tu propio camino.
          </p>
        </div>
        <img
          src={teamwork}
          alt="Trabajo en equipo, acompañamiento hacia la cima"
          loading="lazy"
          width={1024}
          height={768}
          className="order-1 md:order-2 rounded-3xl shadow-lg object-cover w-full h-full"
        />
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-primary text-primary-foreground py-20" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={handshake}
          alt="Reserva tu consulta introductoria"
          loading="lazy"
          width={1024}
          height={1024}
          className="rounded-3xl shadow-2xl object-cover w-full h-full"
        />
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide">
            ¡Contáctame!
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
            Programa una sesión introductoria gratuita individualizada conmigo para
            analizar tu situación actual y necesidades.
          </p>
          <a
            href="mailto:contacto@javieraliaga.com"
            className="inline-block mt-8 rounded-full bg-primary-foreground text-primary px-8 py-4 font-[var(--font-display)] tracking-[0.2em] text-sm hover:bg-primary-foreground/90 transition-colors shadow-lg"
          >
            RESERVAR CONSULTA
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground">
          PREGUNTAS FRECUENTES
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-foreground">{f.q}</span>
                  <span
                    className="text-3xl text-primary font-light transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground whitespace-pre-line leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={consultation}
          alt="Sesión de asesoramiento personalizado"
          loading="lazy"
          width={1024}
          height={768}
          className="rounded-3xl shadow-lg object-cover w-full h-full"
        />
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Acerca de mí</h2>
          <p className="mt-6 text-foreground/90 leading-relaxed">
            Soy Graduado Social, colegiado número 5294 en el Colegio de Graduados Sociales
            de Valencia.
          </p>
          <p className="mt-4 font-semibold text-foreground">
            Mis más de 9 años de trayectoria laboral han sido:
          </p>
          <ul className="mt-3 space-y-2 text-foreground/85">
            <li>• Año y medio como técnico de empleo y formación</li>
            <li>• Año y medio como técnico de RRHH en selección y reclutamiento</li>
            <li>• Cuatro años como asesor laboral</li>
            <li>
              • Dos años y medio como coordinador de proyectos de voluntariado con
              empresas, agrupaciones y entidades sociales (actualmente sigo trabajando)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ClosingQuotes() {
  return (
    <section className="bg-primary text-primary-foreground py-16" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-4xl px-6 space-y-6">
        <QuoteCard
          text="“Si se cree y se trabaja: se puede.”"
          author="— Diego Pablo Simeone"
        />
        <QuoteCard
          text="“Solo tú puedes decidir qué hacer con el tiempo que se te ha dado.”"
          author="— Ian McKellen"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground py-8" style={{ backgroundColor: "var(--primary-deep)" }}>
      <div className="mx-auto max-w-6xl px-6 text-center text-sm opacity-90">
        © {new Date().getFullYear()} Javier Aliaga Guillén — Asesor en Orientación Profesional y Social
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <Areas />
      <Objetivos />
      <Contacto />
      <FAQ />
      <About />
      <ClosingQuotes />
      <Footer />
    </main>
  );
}
