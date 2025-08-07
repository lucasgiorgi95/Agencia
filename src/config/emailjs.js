// Configuración de EmailJS usando variables de entorno
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Información de contacto
export const contactInfo = {
  phone: import.meta.env.VITE_PHONE_NUMBER, // Variable de entorno (sensible)
  email: "giorgi.dev.ok@gmail.com", // Dato público
  linkedinUrl: "https://www.linkedin.com/in/lucasmartingiorgi/", // Dato público
  whatsappMessage:
    "¡Hola! Me interesa conocer más sobre sus servicios de desarrollo web.", // Dato público
};

// Validación de variables de entorno (solo en desarrollo)
if (import.meta.env.DEV) {
  const requiredEnvVars = [
    "VITE_EMAILJS_SERVICE_ID",
    "VITE_EMAILJS_TEMPLATE_ID",
    "VITE_EMAILJS_PUBLIC_KEY",
    "VITE_PHONE_NUMBER",
  ];

  const missingVars = requiredEnvVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn("⚠️ Variables de entorno faltantes:", missingVars);
    console.warn(
      "📝 Asegúrate de tener un archivo .env con las variables necesarias"
    );
  }
}
