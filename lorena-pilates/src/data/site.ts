export const site = {
  name: "Lorena Carrión",
  profession: "Instructora internacional de Pilates Mat y Reformer",
  service: "Pilates Mat · clases grupales presenciales",
  location: "Burzaco, Buenos Aires",
  area: "Burzaco y Adrogué",
  days: "Martes y jueves",
  duration: "60 minutos",
  paymentMethods: "Efectivo o transferencia",
  // PENDIENTE: confirmar que este número tiene WhatsApp antes de publicar.
  whatsappNumber: "5491161775720",
  instagramUrl: "", // PENDIENTE: agregar URL cuando esté disponible.
  studioAddress: "", // PENDIENTE: dirección o indicaciones exactas.
  scheduleDetails: "", // PENDIENTE: horarios de cada turno.
  priceDetails: "", // PENDIENTE: importes y modalidad de pago.
  // PENDIENTE: reemplazar la imagen de referencia por fotografía propia autorizada.
  heroImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
