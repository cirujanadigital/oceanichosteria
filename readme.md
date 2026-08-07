<div align="center">
<img src="https://capsule-render.vercel.app/api?type=soft&color=03658C&height=200&section=header&text=Hosteria%20Oceanic&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Frente%20al%20mar%20en%20Puerto%20Lopez%2C%20Ecuador&descAlignY=58&descColor=7fdbff&descSize=16" />
</div>

---

## Sobre el proyecto

Sitio web oficial de **Hostería Oceanic**, hospedaje familiar frente al Pacífico en el sector norte del malecón de Puerto López, Manabí, Ecuador. 14 cabañas y habitaciones, restaurante de cocina manabita y programa de retiros holísticos.

Sitio estático (HTML/CSS/JS puro, sin dependencias ni CMS), diseñado y desarrollado por **[Cirujana Digital](https://cirujanadigital.com)** — infraestructura digital orientada a velocidad, SEO local y conversión directa por WhatsApp.

→ **[oceanichosteria.com](https://oceanichosteria.com)**

---

## Stack técnico

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Cloudflare](https://img.shields.io/badge/Cloudflare-%23F38020.svg?style=for-the-badge&logo=cloudflare&logoColor=white)
![Hostinger](https://img.shields.io/badge/Hostinger-%236937C5.svg?style=for-the-badge&logo=hostinger&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp%20Business-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

</div>

- **Sin frameworks ni build step** — HTML, CSS y JS servidos directo, sin dependencias pesadas.
- **Imágenes en WebP** con conversión automática vía `convertir-webp.sh` (originales `.jpg/.png` excluidos del repo).
- **Deploy automático** desde este repositorio hacia Hostinger (rama `main`).
- **CDN y DNS** gestionados con Cloudflare.
- **Bilingüe** — versión en español (`/`) e inglés (`/en/`).

---

## Estructura

```
/
├── index.html                          → página principal
├── en/                                  → versión en inglés
├── retiros-holisticos-puerto-lopez/    → landing de retiros holísticos
│   └── en/                              → versión en inglés
├── img/                                 → imágenes optimizadas (.webp)
├── style.css                            → estilos globales
├── script.js                            → JS principal
├── sitemap.xml / robots.txt
└── .htaccess                            → caché, headers y compresión
```

---

## Rendimiento y SEO

- **Lighthouse 90+** en mobile y desktop (criterio de entrega no negociable).
- Schema JSON-LD: `LodgingBusiness`, `Hotel`, `FAQPage`, `BreadcrumbList`.
- Meta tags Open Graph y Twitter Card completos, con imagen OG dedicada.
- Compresión (Deflate/Brotli) y cache-control agresivo vía `.htaccess`.
- Sitemap enviado a Google Search Console.

---

## Contacto del hospedaje

<div align="center">

[![Web](https://img.shields.io/badge/oceanichosteria.com-03658C.svg?style=for-the-badge&logo=google-chrome&logoColor=white)](https://oceanichosteria.com)
[![WhatsApp](https://img.shields.io/badge/Reservas%20WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/593995930635)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/oceanichosteria/)
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/oceanichosteria)

</div>

---

## Desarrollo

<div align="center">

Diseñado y desarrollado por **[Cirujana Digital](https://cirujanadigital.com)**
Precisión quirúrgica aplicada al código

[![Web](https://img.shields.io/badge/cirujanadigital.com-%2300a7a9.svg?style=for-the-badge&logo=google-chrome&logoColor=white)](https://cirujanadigital.com)
[![Email](https://img.shields.io/badge/info@cirujanadigital.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:info@cirujanadigital.com)

</div>

---

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=03658C&height=100&section=footer" />
</div>
