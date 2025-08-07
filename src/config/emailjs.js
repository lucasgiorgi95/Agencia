// Configuración de EmailJS
// IMPORTANTE: Reemplaza estos valores con los tuyos de EmailJS

export const emailjsConfig = {
  // Tu Service ID de EmailJS
  serviceId: "service_5ewzxod",

  // Tu Template ID de EmailJS
  templateId: "template_memmxj3",

  // Tu Public Key de EmailJS
  publicKey: "NuX9aYQrQapQBf5Pk",
};

// Instrucciones para configurar EmailJS:
// 1. Ve a https://www.emailjs.com/
// 2. Crea una cuenta gratuita
// 3. Conecta tu servicio de email (Gmail, Outlook, etc.)
// 4. Crea un template de email usando el HTML de src/templates/email-template.html
// 5. Obtén tu Service ID, Template ID y Public Key
// 6. Reemplaza los valores arriba

/* 
TEMPLATE HTML PROFESIONAL CREADO:

📧 Ubicación: src/templates/email-template.html

✅ Características del template:
- Diseño profesional con los colores de tu marca (#0f172a, #6366f1)
- Logo placeholder (puedes cambiarlo por tu logo real)
- Información del cliente bien organizada
- Mensaje destacado
- Botón CTA para responder
- Footer con tu información de contacto
- Totalmente responsive para móviles

🎨 Colores utilizados:
- Primario: #0f172a (azul oscuro de tu marca)
- Secundario: #6366f1 (azul de acento)
- Fondo: #f8fafc (gris claro)
- Texto: #374151 (gris oscuro)

📱 Variables del template:
- {{user_name}} - Nombre del cliente
- {{user_email}} - Email del cliente  
- {{user_phone}} - Teléfono del cliente
- {{service_type}} - Tipo de servicio solicitado
- {{message}} - Mensaje del cliente

🔧 Para usar:
1. Copia el contenido de src/templates/email-template.html
2. Pégalo en EmailJS como template HTML
3. Configura el subject: "Nuevo mensaje desde tu sitio web - {{service_type}}"
*/
