
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
const fileName = () => `CV_${CV.nombre.replace(/\s+/g, "_")}_${active === "ats" ? "ATS" : "Visual"}`;

// ATS: se imprime como PDF nativo para conservar el texto seleccionable (los ATS leen texto, no imágenes)
function pdfATS() {
  const old = document.title;
  document.title = fileName();
  window.print();
  setTimeout(() => (document.title = old), 1000);
}

// Visual: se captura como imagen y se reparte en páginas A4 sin cortar bloques a la mitad
async function pdfVisual() {
  await document.fonts.ready;
  window.scrollTo(0, 0);
  const wrap = document.createElement("div");
  wrap.className = "pdf-wrap";
  const clone = $("#visual").cloneNode(true);
  clone.hidden = false; clone.removeAttribute("id"); clone.classList.add("pdf-mode");
  wrap.appendChild(clone); document.body.appendChild(wrap);
  try {
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    const W = clone.offsetWidth, pageH = W * 297 / 210;
    const top = clone.getBoundingClientRect().top;
    const edges = [...clone.querySelectorAll(".t-item, .proj, .v-main > h2, .v-main > p, .certs")]
      .map(el => Math.round(el.getBoundingClientRect().bottom - top)).sort((a, b) => a - b);
    const canvas = await html2canvas(clone, { scale: 2, useCORS: true, backgroundColor: "#ffffff", scrollX: 0, scrollY: 0, windowWidth: W });
    const k = canvas.width / W, total = clone.offsetHeight;
    const pdf = new window.jspdf.jsPDF({ unit: "mm", format: "a4" });
    let start = 0, first = true;
    while (start < total - 1) {
      let end = Math.min(start + pageH, total);
      if (end < total) {
        const fit = edges.filter(e => e > start + pageH * 0.5 && e <= end);
        if (fit.length) end = fit[fit.length - 1];
      }
      const slice = document.createElement("canvas");
      slice.width = canvas.width; slice.height = Math.round((end - start) * k);
      const ctx = slice.getContext("2d");
      ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, slice.width, slice.height);
      ctx.drawImage(canvas, 0, Math.round(start * k), canvas.width, slice.height, 0, 0, canvas.width, slice.height);
      if (!first) pdf.addPage();
      pdf.setFillColor(23, 21, 59);                       // continúa la barra lateral hasta el pie
      pdf.rect(0, 0, 210 * 260 / W, 297, "F");
      pdf.addImage(slice.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, 210, (end - start) / pageH * 297);
      first = false; start = end;
    }
    pdf.save(fileName() + ".pdf");
  } finally { wrap.remove(); }
}

$("#btn-pdf").addEventListener("click", async () => {
  const btn = $("#btn-pdf");
  if (active === "ats") return pdfATS();
  btn.disabled = true; btn.textContent = "Generando PDF...";
  try {
    if (typeof html2canvas === "undefined" || !window.jspdf) throw new Error("Librerías no cargadas");
    await pdfVisual();
  } catch (err) {
    console.error(err);
    alert("No se pudo generar el PDF automáticamente. Se abrirá el diálogo de impresión: elige 'Guardar como PDF'.");
    window.print();
  } finally { btn.disabled = false; btn.textContent = "Descargar PDF"; }
});