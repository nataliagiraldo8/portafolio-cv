/* ====== DATOS: edita solo este objeto ====== */
const CV = {
  nombre: "Alex Morales",
  titulo: "Desarrollador de Software Full Stack",
  contacto: {
    email: "alex.morales@correo.com",
    tel: "+57 300 123 4567",
    ubicacion: "Bogotá, Colombia",
    linkedin: "linkedin.com/in/alexmorales",
    github: "github.com/alexmorales"
  },
  resumen: "Desarrollador Full Stack con 5 años de experiencia construyendo aplicaciones web escalables con JavaScript, TypeScript, React y Node.js. Reduje tiempos de carga en 40% y lideré la migración de un monolito a microservicios en AWS. Trabajo en equipos ágiles y me enfoco en código limpio, pruebas y entrega continua.",
  habilidades: {
    "Lenguajes": ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
    "Frontend": ["React", "Next.js", "Vue.js", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Express", "NestJS", "Django", "REST", "GraphQL"],
    "Datos y nube": ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"],
    "Herramientas": ["Git", "GitHub Actions", "Jest", "Cypress", "Jira", "Figma"]
  },
  niveles: [["JavaScript / TypeScript", 92], ["React / Next.js", 90], ["Node.js", 85], ["Bases de datos", 80], ["AWS / Docker", 72]],
  experiencia: [
    { cargo: "Desarrollador Full Stack Senior", empresa: "TechNova S.A.S.", periodo: "Mar 2023 - Actualidad",
      logros: ["Lideré la migración de un monolito a microservicios en AWS, reduciendo costos de infraestructura en 30%.",
               "Diseñé APIs REST y GraphQL que atienden más de 200.000 solicitudes diarias.",
               "Implementé pipelines CI/CD con GitHub Actions y bajé el tiempo de despliegue de 40 a 8 minutos.",
               "Mentoría a 4 desarrolladores junior y revisión semanal de código."] },
    { cargo: "Desarrollador Frontend", empresa: "Pixel Labs", periodo: "Ene 2021 - Feb 2023",
      logros: ["Construí una plataforma de e-commerce en React que aumentó la conversión en 18%.",
               "Optimicé el rendimiento web (Core Web Vitals) y reduje el tiempo de carga en 40%.",
               "Alcancé 85% de cobertura de pruebas con Jest y Cypress."] },
    { cargo: "Desarrollador Junior", empresa: "Soluciones Digitales Ltda.", periodo: "Jun 2019 - Dic 2020",
      logros: ["Desarrollé módulos de facturación en Node.js y PostgreSQL para 50 clientes.",
               "Automaticé reportes con Python que ahorraron 15 horas semanales al equipo."] }
  ],
  proyectos: [
    { nombre: "TaskFlow", desc: "Gestor de tareas colaborativo en tiempo real con WebSockets, usado por más de 2.000 usuarios.", tech: "React, Node.js, MongoDB" },
    { nombre: "FinTrack", desc: "Panel de finanzas personales con gráficos interactivos y autenticación segura con JWT.", tech: "Next.js, PostgreSQL, Docker" }
  ],
  educacion: [{ titulo: "Ingeniería de Sistemas", inst: "Universidad Nacional de Colombia", periodo: "2014 - 2019" }],
  certificaciones: ["AWS Certified Cloud Practitioner (2023)", "Meta Front-End Developer Professional Certificate (2022)", "Scrum Fundamentals Certified (2021)"],
  idiomas: [["Español", "Nativo"], ["Inglés", "Avanzado (B2)"]]
};

/* ====== RENDER ====== */
const $ = (s) => document.querySelector(s);
const c = CV.contacto;
const jobsATS = CV.experiencia.map(e => `
  <div class="item"><h3>${e.cargo} - ${e.empresa}</h3><p class="meta">${e.periodo}</p>
  <ul>${e.logros.map(l => `<li>${l}</li>`).join("")}</ul></div>`).join("");

$("#ats").innerHTML = `
  <h1>${CV.nombre}</h1>
  <p class="role">${CV.titulo}</p>
  <p class="contact">${c.ubicacion} | ${c.tel} | ${c.email}<br>${c.linkedin} | ${c.github}</p>
  <h2>Resumen Profesional</h2><p>${CV.resumen}</p>
  <h2>Habilidades Técnicas</h2>
  <ul class="plain">${Object.entries(CV.habilidades).map(([k, v]) => `<li><strong>${k}:</strong> ${v.join(", ")}</li>`).join("")}</ul>
  <h2>Experiencia Laboral</h2>${jobsATS}
  <h2>Proyectos</h2>
  ${CV.proyectos.map(p => `<div class="item"><h3>${p.nombre}</h3><p>${p.desc} Tecnologías: ${p.tech}.</p></div>`).join("")}
  <h2>Educación</h2>
  ${CV.educacion.map(e => `<div class="item"><h3>${e.titulo} - ${e.inst}</h3><p class="meta">${e.periodo}</p></div>`).join("")}
  <h2>Certificaciones</h2><ul>${CV.certificaciones.map(x => `<li>${x}</li>`).join("")}</ul>
  <h2>Idiomas</h2><p>${CV.idiomas.map(i => `${i[0]}: ${i[1]}`).join(" | ")}</p>`;

const initials = CV.nombre.split(" ").map(w => w[0]).join("");
$("#visual").innerHTML = `
  <div class="v-grid">
    <aside class="v-side">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <h2>Contacto</h2>
      <ul class="v-contact">
        <li>${c.email}</li><li>${c.tel}</li><li>${c.ubicacion}</li><li>${c.linkedin}</li><li>${c.github}</li>
      </ul>
      <h2>Nivel técnico</h2>
      ${CV.niveles.map(([n, v]) => `<div class="bar"><span>${n}</span><i style="--w:${v}%"></i></div>`).join("")}
      <h2>Stack</h2>
      <div class="chips">${Object.values(CV.habilidades).flat().map(s => `<span>${s}</span>`).join("")}</div>
      <h2>Idiomas</h2>
      <ul class="v-contact">${CV.idiomas.map(i => `<li>${i[0]}: ${i[1]}</li>`).join("")}</ul>
    </aside>
    <section class="v-main">
      <div class="v-head"><h1>${CV.nombre}</h1><p>${CV.titulo}</p></div>
      <h2>Perfil</h2><p>${CV.resumen}</p>
      <h2>Experiencia</h2>
      <div class="timeline">${CV.experiencia.map(e => `
        <div class="t-item"><h3>${e.cargo}</h3><p class="meta">${e.empresa} · ${e.periodo}</p>
        <ul>${e.logros.map(l => `<li>${l}</li>`).join("")}</ul></div>`).join("")}</div>
      <h2>Proyectos destacados</h2>
      <div class="proj">${CV.proyectos.map(p => `<div><h3>${p.nombre}</h3><p>${p.desc}</p><small>${p.tech}</small></div>`).join("")}</div>
      <h2>Formación</h2>
      ${CV.educacion.map(e => `<p><strong>${e.titulo}</strong><br>${e.inst}, ${e.periodo}</p>`).join("")}
      <ul class="certs">${CV.certificaciones.map(x => `<li>${x}</li>`).join("")}</ul>
    </section>
  </div>`;

/* ====== PESTAÑAS ====== */
let active = "ats";
const hints = {
  ats: "Texto plano y una sola columna: lo leen sin errores los sistemas de selección.",
  visual: "Diseño con color y jerarquía visual, ideal para enviar a personas o portafolios."
};
document.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => {
  active = t.dataset.target;
  document.querySelectorAll(".tab").forEach(b => {
    const on = b === t;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", on);
  });
  $("#ats").hidden = active !== "ats";
  $("#visual").hidden = active !== "visual";
  $("#hint").textContent = hints[active];
  window.scrollTo({ top: 0 });
}));

/* ====== DESCARGA PDF ====== */
$("#btn-pdf").addEventListener("click", async () => {
  const btn = $("#btn-pdf");
  if (typeof html2pdf === "undefined") { window.print(); return; }
  btn.disabled = true; btn.textContent = "Generando PDF...";
  // Clon con ancho A4 fijo para que el PDF sea igual en celular y escritorio
  const wrap = document.createElement("div");
  wrap.className = "pdf-wrap";
  const clone = $("#" + active).cloneNode(true);
  clone.hidden = false; clone.classList.add("pdf-mode");
  wrap.appendChild(clone); document.body.appendChild(wrap);
  const file = `CV_${CV.nombre.replace(/\s+/g, "_")}_${active === "ats" ? "ATS" : "Visual"}.pdf`;
  try {
    await html2pdf().set({
      margin: active === "ats" ? [10, 10, 10, 10] : 0,
      filename: file,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, windowWidth: 794 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"], avoid: [".item", ".t-item", "li"] }
    }).from(clone).save();
  } finally {
    wrap.remove(); btn.disabled = false; btn.textContent = "Descargar PDF";
  }
});