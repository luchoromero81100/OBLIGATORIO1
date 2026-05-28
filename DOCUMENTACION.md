# JobHunter - Documentación del Proyecto

## Descripción General

JobHunter es una aplicación web para una cartelera de postulaciones laborales desarrollada para el obligatorio de Programación 1. Tiene dos perfiles de usuario:

- **Administrador**: precargado en el sistema. Gestiona ofertas laborales y procesa postulaciones.
- **Postulante**: se registra a través de la aplicación. Ve ofertas disponibles y se postula.

La aplicación está construida con HTML, CSS y JavaScript vanilla. Los datos se almacenan en arrays de JavaScript. El estado de sesión se maneja con `localStorage`.

---

## Formatos de ID requeridos

- **Ofertas laborales:** `JOB_OFFER_nroAutoincremental` (ej: JOB_OFFER_1, JOB_OFFER_2, ...)
- **Postulaciones:** `JOB_nroAutoincremental` (ej: JOB_1, JOB_2, ...)

---

## Datos requeridos para la entrega final

- 3 administradores precargados
- 15 postulantes precargados
- 10 ofertas laborales precargadas
- 20 postulaciones precargadas

*(Actualmente el proyecto tiene datos de prueba parciales. Se completarán para la entrega final.)*

---

## Pantallas del Sistema

---

### 1. index.html — Página de Inicio

**Acceso:** Público

**Contenido:** Página de bienvenida con enlaces a Iniciar Sesión y Crear Cuenta.

---

### 2. login.html — Iniciar Sesión

**Acceso:** Público

**Campos:**
- Usuario (`txtUserLogin`)
- Contraseña (`txtPassLogin`)

**Botones:**
- **Ingresar** → Valida credenciales. Admin va a Postulaciones Pendientes. Postulante va a Ofertas disponibles.

**Lógica:** Implementada. Guarda usuario y rol en localStorage.

---

### 3. registro.html — Registro de Postulante

**Acceso:** Público (solo para postulantes, los administradores son precargados)

**Campos:**
- Nombre Completo (`txtNombreCompleto`)
- Nombre de Usuario (`txtUsuario`) — mínimo 5 caracteres, único, case-insensitive
- Contraseña (`txtPassword`) — mínimo 5 caracteres, al menos una mayúscula, una minúscula y un número
- Nivel de Experiencia (`slcNivel`): Junior, Semi-Senior, Senior
- Área de Interés (`slcArea`): Tecnología, Diseño, Marketing, Administración, Otros

**Botones:**
- **Registrarme** → Pendiente de implementación completa.

**Requisitos:** Todos los campos son obligatorios.

---

### 4. ofertas.html — Ofertas Disponibles (Postulante)

**Acceso:** Postulante

**Descripción:** Muestra ofertas a las que el postulante puede postularse. Según la consigna, las ofertas visibles deben cumplir:
- La oferta está activa.
- La oferta es compatible con el nivel de experiencia del postulante.
- El postulante no se postuló previamente a esa oferta.
- Por defecto se muestran ofertas del área de interés del postulante.
- El postulante puede expandir para ver todas las ofertas compatibles.

**Elementos:**
- Checkbox "Ver todas las ofertas compatibles (sin filtrar por mi área)" (`chkVerTodasOfertas`)
- Buscador por título o empresa (`buscadorOfertas`)
- Tabla con columnas: Título, Empresa, Descripción, Nivel, Área, Acción
- Botón "Postularme" en cada fila

**Botones:**
- **Postularme** → Muestra mensaje placeholder: "Postulación registrada como pendiente." La implementación completa creará una postulación con ID formato `JOB_nroAutoincremental` y estado "Pendiente".

**Estado:** Filtrado por nivel/área/postulaciones previas pendiente de implementación. El botón Postularme tiene comportamiento placeholder.

---

### 5. ofertas_destacadas.html — Ofertas Destacadas (Postulante)

**Acceso:** Postulante

**Descripción:** Muestra solo ofertas marcadas como destacadas que estén activas.

**Columnas:** Título, Empresa, Nivel requerido, Descripción, Acción

**Botones:**
- **Postularme** → Mismo comportamiento placeholder que en ofertas.html.

---

### 6. mis_postulaciones.html — Mis Postulaciones (Postulante)

**Acceso:** Postulante

**Descripción:** Muestra todas las postulaciones del postulante logueado.

**Columnas:** ID Postulación (formato JOB_nroAutoincremental), Oferta, Empresa, Estado (Pendiente/Aceptada/Rechazada)

**Estado:** Actualmente con datos hardcodeados. Se conectará dinámicamente al array de postulaciones en la implementación final.

---

### 7. gestion_ofertas.html — Gestionar Ofertas (Administrador)

**Acceso:** Administrador

**Descripción:** Muestra TODAS las ofertas (activas, inactivas y cerradas).

**Elementos:**
- Link "+ Crear nueva oferta" → `crear_oferta.html`
- Buscador por ID, puesto o empresa
- Tabla con columnas: ID, Puesto, Empresa, Nivel, Área, Límite Postulaciones, Vacantes, Destacada, Estado, Acción

**Botones por fila:**
- **Editar** → Navega a `editar_oferta.html` (placeholder, pendiente de conectar con la oferta específica)
- **Cerrar oferta** → Borrado lógico: cambia estado a "Cerrada". **Funcional.**

---

### 8. crear_oferta.html — Crear Oferta (Administrador)

**Acceso:** Administrador

**Campos:** Título, Empresa, Descripción, Nivel requerido, Área, Límite de postulaciones, Cantidad de vacantes, Oferta destacada (checkbox)

**Botones:**
- **Crear oferta** → Crea la oferta con ID `JOB_OFFER_nroAutoincremental` y estado "Activa". **Funcional.**

---

### 9. editar_oferta.html — Editar Oferta (Administrador)

**Acceso:** Administrador

**Descripción:** Formulario para modificar una oferta existente. El ID no es editable.

**Botones:**
- **Guardar cambios** → Placeholder. Muestra mensaje pero no persiste cambios todavía.
- **Cancelar** → Vuelve a gestión de ofertas.

**Estado:** Pendiente de implementación completa.

---

### 10. postulaciones_pendientes.html — Postulaciones Pendientes (Administrador)

**Acceso:** Administrador

**Descripción:** Muestra solo postulaciones con estado "Pendiente".

**Columnas:** ID Postulación, Postulante, Oferta, Empresa, Estado, Acción

**Botones:**
- **Procesar** → Navega a `procesar_postulacion.html`.

---

### 11. procesar_postulacion.html — Procesar Postulación (Administrador)

**Acceso:** Administrador

**Datos mostrados:** ID Postulación (formato JOB_nroAutoincremental), Postulante, Oferta, Empresa, Estado actual.

**Botones:**
- **Aprobar postulación** → Cambia estado a "Aceptada" (placeholder visual).
- **Rechazar postulación** → Cambia estado a "Rechazada" (placeholder visual).

**Estado:** Placeholder. Pendiente de conectar con el array real de postulaciones.

---

### 12. estadisticas.html — Estadísticas (Administrador)

**Acceso:** Administrador

**Secciones:**

A) **Tabla de postulaciones por oferta** con columnas: Oferta, Pendientes, Aceptadas, Rechazadas, Total postulaciones. Incluye buscador por título de oferta.

B) **Total de ofertas por estado:** Activas, Inactivas, Cerradas.

C) **Porcentaje de vacantes cubiertas** sobre el total de vacantes ofrecidas.

D) **Postulante con más postulaciones activas.**

**Estado:** Datos actualmente hardcodeados. Se calcularán dinámicamente desde los arrays en la implementación final.

---

## Navegación según rol

| Sin sesión | Postulante | Administrador |
|------------|-----------|---------------|
| Iniciar Sesión | Ofertas disponibles | Postulaciones Pendientes |
| Crear Cuenta | Ofertas Destacadas | Gestionar Ofertas |
| | Mis Postulaciones | Crear Oferta |
| | Cerrar Sesión | Estadísticas |
| | | Cerrar Sesión |

---

## Funcionalidades pendientes de implementación completa

- Registro de postulante (validaciones y persistencia)
- Filtrado de ofertas por nivel, área y postulaciones previas
- Checkbox "Ver todas las ofertas compatibles"
- Botón "Postularme" con creación real de postulación (ID: JOB_nroAutoincremental)
- Editar oferta conectado a la oferta específica
- Aprobar/Rechazar postulación con persistencia en el array
- Mis Postulaciones generado dinámicamente
- Estadísticas calculadas dinámicamente
- Completar datos de prueba (15 postulantes, 20 postulaciones)
