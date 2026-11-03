(function () {
  "use strict";
  const config = window.VAULT_CONFIG || {};
  const $ = (selector) => document.querySelector(selector);

  $("#year").textContent = new Date().getFullYear();

  // Responsive navigation, including Escape and link-click dismissal.
  const toggle = $("#menu-toggle");
  const mobileNav = $("#mobile-nav");
  function setMenu(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    mobileNav.hidden = !isOpen;
  }
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 850) setMenu(false); });

  // Reveal is progressive enhancement: content remains visible when JS is not available.
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.add("js-ready");
    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in-view"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.09, rootMargin: "0px 0px 35px 0px" });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  }

  function validHttpUrl(value) {
    if (typeof value !== "string") return null;
    try { const url = new URL(value.trim()); return ["https:", "http:"].includes(url.protocol) ? url.href : null; } catch { return null; }
  }
  function isRealEmail(value) {
    return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) && !/example\.|your-domain|yourcompany/i.test(value);
  }
  // Keep public contact links in sync with config.js.
  const contactEmail = isRealEmail(config.email) ? config.email.trim() : "";
  if (contactEmail) {
    const emailLink = $("#email-link");
    if (emailLink) emailLink.href = "mailto:" + contactEmail;
    if ($("#email-value")) $("#email-value").textContent = contactEmail;
  }
  if (typeof config.phone === "string" && config.phone.trim()) {
    const phoneLink = $("#phone-link");
    if (phoneLink) phoneLink.href = "tel:" + config.phone.replace(/[^+\d]/g, "");
    if ($("#phone-value")) $("#phone-value").textContent = config.phone.trim();
  }
  if (typeof config.whatsapp === "string" && config.whatsapp.trim()) {
    const whatsapp = $("#whatsapp-link");
    const digits = config.whatsapp.replace(/\D/g, "");
    if (whatsapp && digits.length >= 10 && digits.length <= 15) whatsapp.href = "https://wa.me/" + digits;
  }
  for (const key of ["linkedin", "github", "upwork"]) {
    const value = validHttpUrl(config[key]);
    const link = $("#" + key + "-link");
    if (value && link) { link.href = value; link.hidden = false; }
    if (!value && link) link.hidden = true;
  }

  // Load genuine team headshots only when corresponding files exist.
  // Until then, the initials in each card remain visible.
  document.querySelectorAll(".team-avatar[data-photo]").forEach((avatar) => {
    const photo = new Image();
    photo.decoding = "async";
    photo.alt = "";
    photo.addEventListener("load", () => {
      avatar.textContent = "";
      avatar.appendChild(photo);
      avatar.classList.add("has-photo");
      avatar.setAttribute("aria-label", avatar.getAttribute("aria-label").replace(" — profile photo placeholder", ""));
    }, { once: true });
    photo.src = avatar.dataset.photo;
  });

  function makeEmailBody(data) {
    return [
      "Security assessment enquiry — V.A.U.L.T. Security Hub",
      "",
      "Name: " + data.name,
      "Work email: " + data.email,
      "Organization: " + (data.company || "Not provided"),
      "Requested service: " + data.service,
      "",
      "Project overview:",
      data.details,
      "",
      "Please contact me to discuss a properly authorized scope and a quotation."
    ].join("\n");
  }
  function showFeedback(message, error) {
    const feedback = $("#form-feedback");
    feedback.textContent = message;
    feedback.classList.toggle("error", Boolean(error));
  }
  $("#contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) { showFeedback("Please complete all required fields with a valid work email.", true); return; }
    const fields = new FormData(form);
    const data = Object.fromEntries(fields.entries());
    const body = makeEmailBody(data);
    if (contactEmail) {
      const subject = "Security assessment enquiry — " + (data.company || data.name);
      window.location.href = "mailto:" + contactEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      showFeedback("Your email application should open with a prepared draft. Please review it and press Send. No data has been uploaded from this page.", false);
    } else {
      try {
        if (!navigator.clipboard?.writeText) throw new Error("Clipboard API not available");
        await navigator.clipboard.writeText(body);
        showFeedback("Your enquiry was copied to the clipboard. This preview has no destination email yet; the website owner must set one in config.js before launch.", false);
      } catch {
        showFeedback("This preview has no contact email configured. Add your real email in config.js before launching the site.", true);
      }
    }
  });
})();
