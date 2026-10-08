import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu, X, MessageCircle, ArrowRight, Send, MapPin,
  ShieldCheck, Code2, RadioTower, Sun, Wrench, Network,
  CheckCircle2, Monitor, Camera, Wifi, Zap
} from "lucide-react";
import "./styles.css";

const WHATSAPP = "573187621921";

const services = [
  {
    title: "COMPUTADORES Y REDES DE DATOS",
    short: "Computadores y redes de datos",
    text: "Venta, instalación, configuración y soporte de equipos de cómputo y redes de datos.",
    icon: Network,
    tone: "blue",
    image: "/images/computadores.png"
  },
  {
    title: "CÁMARAS Y ALARMAS DE SEGURIDAD",
    short: "Cámaras y alarmas de seguridad",
    text: "Instalación de cámaras, alarmas, control de acceso y sistemas de seguridad.",
    icon: ShieldCheck,
    tone: "red",
    image: "/images/camaras.png"
  },
  {
    title: "DESARROLLO DE SOFTWARE",
    short: "Desarrollo de software",
    text: "Soluciones web y aplicaciones a la medida para tu negocio.",
    icon: Code2,
    tone: "purple",
    image: "/images/software.png"
  },
  {
    title: "MANTENIMIENTO ELECTRÓNICO",
    short: "Mantenimiento electrónico",
    text: "Diagnóstico y reparación de equipos electrónicos.",
    icon: Wrench,
    tone: "orange",
    image: "/images/electronica.png"
  },
  {
    title: "INTERNET RURAL Y COMUNICACIONES INALÁMBRICAS",
    short: "Internet rural y comunicaciones inalámbricas",
    text: "Enlaces inalámbricos, redes rurales y soluciones de conectividad.",
    icon: RadioTower,
    tone: "green",
    image: "/images/rural.png"
  },
  {
    title: "SISTEMAS DE ENERGÍA SOLAR",
    short: "Sistemas de energía solar",
    text: "Diseño e instalación de sistemas fotovoltaicos para hogares y empresas.",
    icon: Sun,
    tone: "yellow",
    image: "/images/solar.png"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [sent, setSent] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openWhatsApp = (service = "") => {
    const text = service
      ? `Hola Wilmar, estoy interesado en ${service} de CompuTics.`
      : "Hola Wilmar, quiero información sobre los servicios de CompuTics.";
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="site">

      <header className="topbar">
        <div className="nav-wrap">
          <button className="brand" onClick={() => scrollTo("inicio")}>
            <img className="brand-image" src="/images/logo.png" alt="CompuTics" />
          </button>

          <nav className={menuOpen ? "nav-links show" : "nav-links"}>
            <button onClick={() => scrollTo("inicio")}>Inicio</button>
            <button onClick={() => scrollTo("servicios")}>Servicios</button>
            <button onClick={() => scrollTo("nosotros")}>Nosotros</button>
            <button onClick={() => scrollTo("proyectos")}>Proyectos</button>
            <button onClick={() => scrollTo("solicitud")}>Solicitar Servicio</button>
            <button onClick={() => scrollTo("contacto")}>Contacto</button>
          </nav>

          <button className="wa-top" onClick={() => openWhatsApp()}>
            <MessageCircle size={18} />
            318 762 1921
          </button>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="circuit-bg"></div>
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-brand">
                <div className="hero-mark">
                  <span>C</span><i>•</i>
                </div>
                <div>
                  <div className="mini-brand">ELECTRÓNICA Y<br/>TELECOMUNICACIONES</div>
                  <h1>Compu<span>Tics</span></h1>
                </div>
              </div>

              <div className="hero-subtitle">SOLUCIONES TECNOLÓGICAS A TU ALCANCE</div>

              <p>
                Venta, instalación, configuración y soporte en soluciones
                tecnológicas para hogares, empresas y zonas rurales.
              </p>

              <div className="hero-actions">
                <button className="btn-primary" onClick={() => scrollTo("solicitud")}>
                  <Send size={18}/> Solicitar Servicio
                </button>
                <button className="btn-wa" onClick={() => openWhatsApp()}>
                  <MessageCircle size={19}/> 318 762 1921
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <img src="/images/hero-tech.png" alt="Soluciones tecnológicas CompuTics" />
            </div>
          </div>
        </section>

        <section id="servicios" className="services-section">
          <div className="section-heading">
            <h2>NUESTROS SERVICIOS</h2>
            <p>Soluciones tecnológicas para cada necesidad</p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className={`service-card ${service.tone}`} key={service.title}>
                  <div className="card-image">
                    <img src={service.image} alt={service.short}/>
                  </div>
                  <div className="card-content">
                    <div className="service-icon"><Icon size={24}/></div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <button onClick={() => setSelected(service)}>
                      Ver más <ArrowRight size={15}/>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="nosotros" className="about-section">
          <div className="about-inner">
            <div className="about-copy">
              <span className="eyebrow">COMPuTICS</span>
              <h2>Tecnología que conecta tus ideas con soluciones reales.</h2>
              <p>
                Integramos informática, telecomunicaciones, electrónica,
                seguridad y energía para hogares, empresas y proyectos.
              </p>
              <div className="feature-row">
                <div><CheckCircle2/> Atención personalizada</div>
                <div><CheckCircle2/> Soluciones a tu medida</div>
                <div><CheckCircle2/> Soporte técnico</div>
              </div>
            </div>

            <div className="profile-card">
              <div className="profile-avatar">WR</div>
              <div>
                <small>PROFESIONAL</small>
                <h3>Wilmar Rojas</h3>
                <p>Ingeniero de Telecomunicaciones</p>
              </div>
              <button onClick={() => openWhatsApp()}>
                Contactar <MessageCircle size={17}/>
              </button>
            </div>
          </div>
        </section>

        <section id="proyectos" className="projects-section">
          <div className="section-heading">
            <h2>PROYECTOS Y SOLUCIONES</h2>
            <p>Implementaciones tecnológicas para hogares, empresas y zonas rurales.</p>
          </div>
          <div className="project-strip">
            <div><Monitor/><b>Infraestructura TI</b><span>Redes y computadores</span></div>
            <div><Camera/><b>Seguridad electrónica</b><span>Cámaras y alarmas</span></div>
            <div><Wifi/><b>Conectividad</b><span>Enlaces inalámbricos</span></div>
            <div><Zap/><b>Energía</b><span>Sistemas solares</span></div>
          </div>
        </section>

        <section id="solicitud" className="request-section">
          <div className="request-inner">
            <div className="request-copy">
              <span className="eyebrow">SOLICITA TU SERVICIO</span>
              <h2>Cuéntanos qué necesitas y te contactaremos lo más pronto posible.</h2>
              <p>Déjanos tus datos y una descripción del servicio. Este formulario queda listo para Netlify Forms.</p>
              <div className="contact-points">
                <div><MessageCircle/> 318 762 1921</div>
                <div><MapPin/> Bucaramanga, Santander</div>
              </div>
            </div>

            <form
              className="service-form"
              name="solicitud-servicio"
              method="POST"
              data-netlify="true"
              onSubmit={submitForm}
            >
              <input type="hidden" name="form-name" value="solicitud-servicio"/>
              <label>Nombre completo<input required name="nombre" placeholder="Nombre completo"/></label>
              <label>Teléfono / WhatsApp<input required name="telefono" placeholder="318 762 1921"/></label>
              <label>Correo electrónico<input type="email" name="email" placeholder="correo@ejemplo.com"/></label>
              <label>Selecciona un servicio
                <select required name="servicio">
                  <option value="">Selecciona un servicio</option>
                  {services.map(s => <option key={s.title}>{s.short}</option>)}
                </select>
              </label>
              <label>Descripción del servicio<textarea required name="mensaje" rows="4" placeholder="Cuéntanos qué necesitas..."></textarea></label>
              <button className="btn-primary full" type="submit"><Send size={18}/> Enviar solicitud</button>
              {sent && <div className="success"><CheckCircle2/> Solicitud enviada correctamente.</div>}
            </form>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div>
            <span className="eyebrow">CONTACTO</span>
            <h2>¿Necesitas una solución tecnológica?</h2>
            <p>Escríbenos por WhatsApp para cotizaciones y asesoría.</p>
          </div>
          <button className="btn-wa large" onClick={() => openWhatsApp()}>
            <MessageCircle/> 318 762 1921
          </button>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">Compu<span>Tics</span><small>Electrónica y Telecomunicaciones</small></div>
          <div>© 2026 CompuTics · Bucaramanga, Santander</div>
          <div>WhatsApp: <b>318 762 1921</b></div>
        </div>
      </footer>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className={`modal ${selected.tone}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}><X/></button>
            <img src={selected.image} alt={selected.short}/>
            <div className="modal-body">
              <span className="modal-kicker">SERVICIO COMPUTICS</span>
              <h2>{selected.short}</h2>
              <p>{selected.text}</p>
              <button className="btn-primary full" onClick={() => openWhatsApp(selected.short)}>
                Solicitar por WhatsApp <MessageCircle size={18}/>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
