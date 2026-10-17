# Lorena Carrión · Pilates Mat

Sitio de presentación estático para clases grupales, presenciales y personalizadas de Pilates Mat en Burzaco, Buenos Aires.

## Stack
- Astro
- TypeScript
- Tailwind CSS v4 mediante `@tailwindcss/vite`
- Despliegue recomendado: Vercel conectado a GitHub
- Contacto: enlace directo a WhatsApp (sin backend)

## Requisitos
- Node.js LTS instalado
- Git instalado (opcional para iniciar localmente, recomendado para GitHub)

## Desarrollo local
```bash
npm install
npm run dev
```
Abrí la URL local que muestra Astro en la terminal.

## Validación y build
```bash
npm run check
npm run build
npm run preview
```

La imagen de Open Graph (`public/og-image.jpg`) se regenera con `npm run og`.

## Datos pendientes antes de publicar
Buscar `PENDIENTE:` en el proyecto. No publicar hasta revisar:
- Horarios exactos y disponibilidad de cada grupo
- Dirección exacta o indicaciones del estudio en Burzaco
- Política de precios: se acepta efectivo y transferencia, pero faltan los importes y modalidad (por clase/abono)

## WhatsApp
El teléfono provisto se normaliza como `5491161775720` para el enlace internacional de WhatsApp. Confirmar que ese número tiene WhatsApp y que está escrito correctamente antes de publicar.
El enlace incluye un mensaje precargado, no envía nada automáticamente.

## Instagram
Perfil: `https://www.instagram.com/pilates_by_lore/` (configurado en `src/data/site.ts`).

## Repositorio

El proyecto ya está versionado en GitHub:
`https://github.com/Taxgab/lorena-pilates-`

La aplicación vive en la subcarpeta `lorena-pilates/` dentro del repositorio.

## Publicar en Vercel
1. Entrá en Vercel e iniciá sesión con GitHub.
2. Elegí **Add New → Project** y seleccioná el repositorio `lorena-pilates-`.
3. **Importante — Root Directory:** el proyecto está dentro de la subcarpeta `lorena-pilates`, así que en *Root Directory* elegí `lorena-pilates`. Sin este paso Vercel no encuentra `package.json` y **no detecta Astro**.
4. Con el Root Directory configurado, Vercel detecta Astro automáticamente. Configuración esperada:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
5. Hacé clic en Deploy. Vercel generará una URL de subdominio `*.vercel.app`.
6. Cada push a `main` actualizará la web de producción; las ramas y pull requests pueden generar previews.
7. Cuando confirmes la URL final, verificá que coincida con `site` en `astro.config.mjs` (hoy `https://lorena-pilates.vercel.app`). Si difiere, actualizala para que `canonical`, `sitemap` y `og:image` apunten al dominio correcto.

## Antes del lanzamiento
- [ ] Completar horarios exactos y disponibilidad.
- [ ] Confirmar dirección y cómo llegar, sin publicar domicilio privado sin autorización.
- [x] Instagram agregado (`https://www.instagram.com/pilates_by_lore/`).
- [x] Imágenes propias (logo y foto) integradas.
- [ ] Verificar WhatsApp desde un teléfono.
- [ ] Revisar texto, contraste, móvil y enlaces.
- [ ] Confirmar política de privacidad si se agregan analíticas o formularios.
