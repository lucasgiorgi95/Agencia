# 📧 Configuración de EmailJS

## 🚀 Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea tu cuenta gratuita
3. Verifica tu email

### 2. Conectar tu servicio de email ✅
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Service ID configurado:** `service_5ewzxody` ✅

### 3. Crear template de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. **Configura el Subject:**
   ```
   Nuevo mensaje desde tu sitio web - {{service_type}}
   ```
4. **Para el contenido del email:**
   - Abre el archivo `src/templates/email-template.html`
   - Copia TODO el contenido HTML
   - Pégalo en el campo "Content" de EmailJS
   - Selecciona "HTML" como tipo de template
5. **Personaliza tu información:**
   - Cambia "tuagencia.com" por tu dominio
   - Cambia "info@tuagencia.com" por tu email
   - Cambia "+54 9 11 1234-5678" por tu teléfono
   - Opcional: Reemplaza la "G" del logo por tu logo real
6. **Guarda el Template ID** que aparece

### 4. Obtener Public Key
1. Ve a "Account" → "General"
2. Copia tu **Public Key**

### 5. Configurar en tu proyecto
1. Abre el archivo `src/config/emailjs.js`
2. Actualiza los valores restantes:

```javascript
export const emailjsConfig = {
  serviceId: 'service_5ewzxody', // ✅ Ya configurado
  templateId: 'TU_TEMPLATE_ID_AQUI', // ⏳ Pendiente
  publicKey: 'TU_PUBLIC_KEY_AQUI' // ⏳ Pendiente
};
```

**Estado actual:**
- ✅ Service ID: `service_5ewzxody` (configurado)
- ⏳ Template ID: Pendiente (crear template HTML)
- ⏳ Public Key: Pendiente (obtener de Account → General)

## ✅ ¡Listo!

Una vez configurado, los formularios de contacto funcionarán automáticamente y recibirás los emails en tu bandeja de entrada.

## 📊 Límites gratuitos
- **200 emails/mes** gratis
- Perfecto para sitios web de agencias pequeñas/medianas

## 🔧 Formularios incluidos
- ✅ Formulario general de contacto
- ✅ Formulario específico por servicio
- ✅ Validación automática
- ✅ Estados de carga y éxito/error
- ✅ Diseño responsive

## 📱 Dónde aparecen los formularios
- Landing Page: Formulario específico para landing pages
- Otras páginas: Se puede agregar fácilmente

## 🎨 Personalización
Puedes personalizar:
- Títulos y subtítulos
- Campos del formulario
- Estilos CSS
- Mensajes de éxito/error