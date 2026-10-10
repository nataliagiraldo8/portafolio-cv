/* ====== DATOS: edita solo este objeto ====== */
const CV = {
  nombre: "Natalia Giraldo Rojas",
  titulo: "Técnica profesional en páginas web",
  foto: window.FOTO_DATA || "img/natalia-giraldo-rojas.jpg",
  contacto: {
    email: "natagiraldo527@gmail.com",
    tel: "+57 314 646 6284",
    ubicacion: "Manizales, Colombia",
    linkedin: "linkedin.com/in/natagiraldo",
    github: "github.com/nataliagiraldo8"
  },
  resumen: "Técnica profesional en desarrollo de páginas web, en búsqueda de mi primera oportunidad laboral. Manejo Python, HTML, CSS, JavaScript y Git, aprendo rápido y me gusta trabajar en equipo.",
  habilidades: {
    "Lenguajes": ["Python", "HTML", "CSS", "JavaScript"],
    "Herramientas": ["Git"]
  },
  niveles: [],
  experiencia: [],
  proyectos: [],
  educacion: [{ titulo: "Técnica profesional en páginas web", inst: "Universidad de Caldas", periodo: "2024 - 2025" }],
  certificaciones: [],
  idiomas: [["Español", "Nativo"], ["Inglés", "Avanzado (B1)"]]
};

/* ====== RENDER ====== */
const $ = (s) => document.querySelector(s);
const c = CV.contacto;
const list = (a) => (Array.isArray(a) ? a : []);
const exp = list(CV.experiencia), proyectos = list(CV.proyectos), certs = list(CV.certificaciones), niveles = list(CV.niveles);
const tech = (p) => (p.tech ? ` Tecnologías: ${p.tech}.` : "");

$("#ats").innerHTML = `
  <h1>${CV.nombre}</h1>
  <p class="role">${CV.titulo}</p>
  <p class="contact">${c.ubicacion} | ${c.tel} | ${c.email}<br>${c.linkedin} | ${c.github}</p>
  <h2>Resumen Profesional</h2><p>${CV.resumen}</p>
  <h2>Habilidades Técnicas</h2>
  <ul class="plain">${Object.entries(CV.habilidades).map(([k, v]) => `<li><strong>${k}:</strong> ${v.join(", ")}</li>`).join("")}</ul>
  ${exp.length ? `<h2>Experiencia Laboral</h2>${exp.map(e => `
    <div class="item"><h3>${e.cargo} - ${e.empresa}</h3><p class="meta">${e.periodo}</p>
    <ul>${list(e.logros).map(l => `<li>${l}</li>`).join("")}</ul></div>`).join("")}` : ""}
  ${proyectos.length ? `<h2>Proyectos</h2>${proyectos.map(p => `<div class="item"><h3>${p.nombre}</h3><p>${p.desc}${tech(p)}</p></div>`).join("")}` : ""}
  <h2>Educación</h2>
  ${list(CV.educacion).map(e => `<div class="item"><h3>${e.titulo} - ${e.inst}</h3><p class="meta">${e.periodo}</p></div>`).join("")}
  ${certs.length ? `<h2>Certificaciones</h2><ul>${certs.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
  <h2>Idiomas</h2><p>${list(CV.idiomas).map(i => `${i[0]}: ${i[1]}`).join(" | ")}</p>`;

const initials = CV.nombre.split(" ").slice(0, 2).map(w => w[0]).join("");
$("#visual").innerHTML = `
  <div class="v-grid">
    <aside class="v-side">
      <div class="photo"><b>${initials}</b></div>
      <h2>Contacto</h2>
      <ul class="v-contact">
        <li>${c.email}</li><li>${c.tel}</li><li>${c.ubicacion}</li><li>${c.linkedin}</li><li>${c.github}</li>
      </ul>
      ${niveles.length ? `<h2>Nivel técnico</h2>${niveles.map(([n, v]) => `<div class="bar"><span>${n}</span><i style="--w:${v}%"></i></div>`).join("")}` : ""}
      <h2>Habilidades</h2>
      <div class="chips">${Object.values(CV.habilidades).flat().map(s => `<span>${s}</span>`).join("")}</div>
      <h2>Idiomas</h2>
      <ul class="v-contact">${list(CV.idiomas).map(i => `<li>${i[0]}: ${i[1]}</li>`).join("")}</ul>
    </aside>
    <section class="v-main">
      <div class="v-head"><h1>${CV.nombre}</h1><p>${CV.titulo}</p></div>
      <h2>Perfil</h2><p>${CV.resumen}</p>
      ${exp.length ? `<h2>Experiencia</h2><div class="timeline">${exp.map(e => `
        <div class="t-item"><h3>${e.cargo}</h3><p class="meta">${e.empresa} · ${e.periodo}</p>
        <ul>${list(e.logros).map(l => `<li>${l}</li>`).join("")}</ul></div>`).join("")}</div>` : ""}
      <h2>Formación</h2>
      <div class="timeline">${list(CV.educacion).map(e => `
        <div class="t-item"><h3>${e.titulo}</h3><p class="meta">${e.inst} · ${e.periodo}</p></div>`).join("")}</div>
      ${proyectos.length ? `<h2>Proyectos</h2>
      <div class="proj">${proyectos.map(p => `<div><h3>${p.nombre}</h3><p>${p.desc}</p>${p.tech ? `<small>${p.tech}</small>` : ""}</div>`).join("")}</div>` : ""}
      ${certs.length ? `<h2>Certificaciones</h2><ul class="certs">${certs.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
    </section>
  </div>`;

/* ====== FOTO (estática, desde carpeta img/) ====== */
(function loadPhoto() {
  if (!CV.foto) return;
  const el = $("#visual .photo"), img = new Image();
  img.onload = () => {
    el.classList.add("has-img");
    el.style.backgroundImage = `linear-gradient(to bottom, rgba(23,21,59,0) 62%, #17153B 100%), url("${CV.foto}")`;
  };
  img.onerror = () => console.warn("No se encontró la foto: " + CV.foto + " (se muestran las iniciales)");
  img.src = CV.foto;
})();

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