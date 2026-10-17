export const site = {
  name: "Lorena Carrión",
  brand: "Pilates by Lore",
  profession: "Instructora internacional de Pilates Mat y Reformer",
  service: "Pilates Mat · clases grupales, presenciales y personalizadas",
  location: "Burzaco, Buenos Aires",
  area: "Burzaco y Adrogué",
  duration: "50 minutos",
  paymentMethods: "Efectivo o transferencia",
  // PENDIENTE: confirmar que este número tiene WhatsApp antes de publicar.
  whatsappNumber: "5491161775720",
  instagramUrl: "https://www.instagram.com/pilates_by_lore/",
  logo: "/imagenes/logo.png",
  logoHorizontal: "/imagenes/logo-horizontal.png",
  heroImage: "/imagenes/lorena.jpg",
  studioAddress: "", // PENDIENTE: dirección o indicaciones exactas.
  scheduleDetails: "", // PENDIENTE: horarios de cada turno.
  priceDetails: "", // PENDIENTE: importes y modalidad de pago.
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
