# Lorena Carrión · Pilates Mat

Sitio de presentación estático para clases grupales presenciales de Pilates Mat en Burzaco, Buenos Aires.

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

## Datos pendientes antes de publicar
Buscar `PENDIENTE:` en el proyecto. No publicar hasta revisar:
- Horarios exactos de martes y jueves
- Dirección exacta o indicaciones del estudio en Burzaco
- Enlace de Instagram
- Política de precios: se acepta efectivo y transferencia, pero faltan los importes y modalidad (por clase/abono)
- Confirmar que la fotografía de portada representa a Lorena o reemplazarla por una foto propia autorizada

## WhatsApp
El teléfono provisto se normaliza como `5491161775720` para el enlace internacional de WhatsApp. Confirmar que ese número tiene WhatsApp y que está escrito correctamente antes de publicar.
El enlace incluye un mensaje precargado, no envía nada automáticamente.

## Publicar en GitHub
1. Creá un repositorio vacío en GitHub llamado `lorena-pilates` (sin README ni licencia para evitar conflictos).
2. En esta carpeta ejecutá:
   ```bash
   git init
   git add .
   git commit -m "Initial Pilates Mat landing page"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/lorena-pilates.git
   git push -u origin main
   ```
3. Reemplazá `TU-USUARIO` por tu usuario de GitHub.

## Publicar en Vercel
1. Entrá en Vercel e iniciá sesión con GitHub.
2. Elegí **Add New → Project** y seleccioná `lorena-pilates`.
3. Vercel debería detectar Astro automáticamente.
4. Configuración estándar:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
5. Hacé clic en Deploy. Vercel generará una URL de subdominio `*.vercel.app`.
6. Cada push a `main` actualizará la web de producción; las ramas y pull requests pueden generar previews.

## Antes del lanzamiento
- [ ] Completar horarios exactos.
- [ ] Confirmar dirección y cómo llegar, sin publicar domicilio privado sin autorización.
- [ ] Añadir Instagram correcto cuando exista/esté confirmado.
- [ ] Sustituir imágenes de referencia por fotos propias autorizadas.
- [ ] Verificar WhatsApp desde un teléfono.
- [ ] Revisar texto, contraste, móvil y enlaces.
- [ ] Confirmar política de privacidad si se agregan analíticas o formularios.
