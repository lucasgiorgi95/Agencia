// Configuración de EmailJS usando variables de entorno
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Información de contacto
export const contactInfo = {
  phone: import.meta.env.VITE_PHONE_NUMBER,
  email: import.meta.env.VITE_EMAIL,
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL,
  whatsappMessage: import.meta.env.VITE_WHATSAPP_MESSAGE,
};

// Validación de variables de entorno (solo en desarrollo)
if (import.meta.env.DEV) {
  const requiredEnvVars = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID', 
    'VITE_EMAILJS_PUBLIC_KEY',
    'VITE_PHONE_NUMBER',
    'VITE_EMAIL'
  ];

  const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('⚠️ Variables de entorno faltantes:', missingVars);
    console.warn('📝 Asegúrate de tener un archivo .env con todas las variables necesarias');
  }
}