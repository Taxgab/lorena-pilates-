export const site = {
  name: "Lorena Carrión",
  brand: "Pilates by Lore",
  profession: "Instructora de Pilates Mat y Reformer",
  experience: "8 años de experiencia",
  lastUpdated: "2026-10-22",
  service: "Pilates Mat · clases grupales, presenciales y personalizadas",
  location: "Adrogué y Burzaco, Buenos Aires",
  area: "Adrogué y Burzaco",
  duration: "50 minutos",
  paymentMethods: "Efectivo o transferencia",
  // PENDIENTE: confirmar que este número tiene WhatsApp antes de publicar.
  whatsappNumber: "5491161775720",
  instagramUrl: "https://www.instagram.com/pilates_by_lore/",
  email: "carrionln@gmail.com",
  logo: "/imagenes/logo.png",
  logoHorizontal: "/imagenes/logo-horizontal.png",
  heroImage: "/imagenes/lorena.jpg",
  studioAddress: "", // PENDIENTE: dirección o indicaciones exactas.
  scheduleDetails: "", // PENDIENTE: horarios de cada turno.
  priceDetails: "", // PENDIENTE: importes y modalidad de pago.
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
