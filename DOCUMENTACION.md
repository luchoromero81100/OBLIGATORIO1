# JobHunter - Documentación Detallada del Proyecto

## Descripción General

JobHunter es una aplicación web para una cartelera de postulaciones laborales. Dos perfiles de usuario:

- **Administrador**: precargado en el sistema. Gestiona ofertas y procesa postulaciones.
- **Postulante**: se registra por la app. Ve ofertas y se postula.

Tecnologías: HTML, CSS y JavaScript vanilla. Datos en arrays JS. Sesión con `localStorage`.

---

## Formatos de ID

- **Ofertas:** `JOB_OFFER_nroAutoincremental` (ej: JOB_OFFER_1, JOB_OFFER_2)
- **Postulaciones:** `JOB_nroAutoincremental` (ej: JOB_1, JOB_2)

---

## Datos requeridos para la entrega final

- 3 administradores precargados
- 15 postulantes precargados
- 10 ofertas laborales precargadas
- 20 postulaciones precargadas

---

## Detalle de cada pantalla HTML

---

### 1. index.html — Página de Inicio

**Título de la pestaña:** JobHunter - Inicio

**Navegación:** Menú estático (no dinámico por rol) con 3 links:
- Iniciar Sesión → login.html
- Crear Cuenta → registro.html
- Caza de Trabajo → ofertas.html

**Contenido visible:**

1. **Sección Hero (card principal):**
   - Título grande: "Tu próximo gran paso, empieza aquí."
   - Subtítulo: "La plataforma donde los mejores talentos encuentran sus recompensas."
   - Párrafo descriptivo: "Gestiona tus postulaciones y descubre ofertas exclusivas. Tu futuro profesional merece un mejor lugar."
   - Botón CTA azul: "¡Empieza ahora gratis!" → lleva a registro.html
   - Imagen ilustrativa a la derecha (img/Imagen1.png)
   - Fondo con degradado gris claro

2. **Sección "Nuestra Visión" (card con borde azul izquierdo):**
   - Emoji 🎯
   - Título: "🚀Nuestra Visión"
   - Texto en itálica con la visión de la empresa

3. **Sección "¿Dudas o consultas?" (card centrada):**
   - Email: 📧 contacto@jobhunter.uy
   - Teléfono: 📱 +598 2 123 4567

4. **Footer:**
   - "© 2026 JobHunter - Todos los derechos reservados."

**Scripts:** Ninguno.

---

### 2. login.html — Iniciar Sesión

**Título de la pestaña:** JobHunter - Iniciar Sesión

**Navegación:** Menú dinámico completo (controlado por nav.js según rol).

**Contenido visible:**

- Card centrada en pantalla con fondo de página gris (clase `pagina-login`)
- Título: "Iniciar Sesión"
- Subtítulo: "Ingresa a tu cuenta para continuar la caza."
- Campo "Usuario:" — input de texto (`id="txtUserLogin"`) con placeholder "Tu nombre de usuario"
- Campo "Contraseña:" — input password (`id="txtPassLogin"`) con placeholder "********"
- Botón verde "Ingresar" (`id="btnLogin"`, clase `btn-principal`)
- Mensaje de error oculto (`id="pErrorLogin"`, `display: none`) — se muestra en rojo centrado si las credenciales fallan: "Usuario o contraseña incorrectos."
- Separador horizontal
- Texto: "¿No tenés cuenta?" con link "Registrate acá" → registro.html

**Scripts:** usuarios.js, login.js, nav.js

**Lógica funcional:**
- Al hacer click en "Ingresar", busca en el array `usuarios` un match de usuario+contraseña.
- Si es admin → guarda en localStorage y redirige a postulaciones_pendientes.html
- Si es postulante → guarda en localStorage y redirige a ofertas.html
- Si no encuentra → muestra el mensaje de error

---

### 3. registro.html — Registro de Postulante

**Título de la pestaña:** JobHunter - Registro

**Navegación:** Menú dinámico completo.

**Contenido visible:**

- Título centrado: "Registro de Postulante"
- Subtítulo: "Crea tu cuenta de postulante. Los administradores son precargados en el sistema y no se registran por esta vía."
- Nota en rojo: "* Todos los campos son obligatorios."
- Card con formulario centrado (clase `form-card`):
  - Subtítulo: "Crear cuenta"
  - Campo "Nombre Completo" — input texto (`id="txtNombreCompleto"`) placeholder "Ej: Juan Pérez"
  - Campo "Nombre de Usuario" — input texto (`id="txtUsuario"`) placeholder "usuario123"
    - Ayuda: "Mínimo 5 caracteres. Debe ser único (no distingue mayúsculas de minúsculas)."
  - Campo "Contraseña" — input password (`id="txtPassword"`) placeholder "********"
    - Ayuda: "Mínimo 5 caracteres. Debe incluir al menos una mayúscula, una minúscula y un número."
  - Fila con 2 selects lado a lado:
    - "Nivel de Experiencia" (`id="slcNivel"`): Junior, Semi-Senior, Senior
    - "Área de Interés" (`id="slcArea"`): Tecnología, Diseño, Marketing, Administración, Otros
  - Botón verde "Registrarme" (`id="btnRegistrar"`, clase `btn-principal`)
  - Párrafo para mensajes (`id="pMensajeRegistro"`)
  - Separador
  - Texto: "¿Ya tienes cuenta?" con link "Inicia sesión aquí" → login.html

**Scripts:** datos.js, nav.js

**Estado:** Formulario visual completo. Lógica de registro pendiente de implementación.

---

### 4. ofertas.html — Ofertas Disponibles (Postulante)

**Título de la pestaña:** JobHunter - Ofertas Laborales

**Navegación:** Menú dinámico completo.

**Contenido visible:**

- Título: "Ofertas disponibles"
- Subtítulo: "Se muestran ofertas activas, compatibles con tu nivel de experiencia y a las que aún no te postulaste. Por defecto se filtran por tu área de interés."
- Card con checkbox: "Ver todas las ofertas compatibles (sin filtrar por mi área)" (`id="chkVerTodasOfertas"`)
- Buscador de texto (`id="buscadorOfertas"`) placeholder "Buscar por puesto o empresa..." — filtra en tiempo real al escribir
- Card con tabla:
  - Columnas: Título | Empresa | Descripción | Nivel | Área | Acción
  - tbody dinámico (`id="tbodyOfertasPostulante"`) — se llena desde el array `ofertasLaborales`
  - Solo muestra ofertas con estado "Activa"
  - Cada fila tiene botón "Postularme" (clase `btn-postularme`)
- Párrafo para mensajes (`id="pMensajePostulacion"`) — al hacer click en Postularme muestra: "Postulación registrada como pendiente. (ID formato: JOB_nroAutoincremental)" en verde

**Scripts:** ofertas.js, nav.js

**Lógica funcional:**
- Tabla generada dinámicamente con for loop
- Buscador filtra filas por título/empresa (keyup)
- Botón Postularme muestra mensaje placeholder

---

### 5. ofertas_destacadas.html — Ofertas Destacadas (Postulante)

**Título de la pestaña:** JobHunter - Ofertas Destacadas

**Navegación:** Menú dinámico completo.

**Estilos específicos en la página:**
- `.card-destacada`: borde amarillo (#ffcc00), fondo crema (#fffdf0), sombra, border-radius 8px
- `.etiqueta-urgente`: badge rojo (#ff4d4d) con texto blanco bold

**Contenido visible:**

- Título: "⭐ Ofertas destacadas"
- Subtítulo: "Estas ofertas fueron marcadas como destacadas por el administrador."
- Contenedor dinámico (`id="listaDestacadas"`) que muestra cards individuales por cada oferta destacada.

**Cada card destacada muestra:**
- Etiqueta "⭐ DESTACADA" (badge rojo)
- Título de la oferta (h3)
- ID de la oferta (ej: JOB_OFFER_1)
- Empresa
- Descripción
- Nivel requerido
- Área
- Vacantes
- Límite de postulaciones
- Destacada: Sí
- Botón "Postularme" (clase `btn-postularme-destacada`)

**Filtro aplicado:** Solo muestra ofertas donde:
- destacada == "Sí"
- estado == "Activa"
- vacantes > 0
- limitePostulaciones > 0

**Si no hay ofertas destacadas:** Muestra "No hay ofertas destacadas disponibles."

- Párrafo para mensajes (`id="pMensajePostulacionDestacada"`) — al hacer click en Postularme muestra mensaje placeholder en verde
- Link "← Volver al listado general" → ofertas.html

**Scripts:** ofertas.js, nav.js

---

### 6. mis_postulaciones.html — Mis Postulaciones (Postulante)

**Título de la pestaña:** Mis Postulaciones - Cartelera Laboral

**Navegación:** Menú dinámico completo.

**Contenido visible:**

- Título: "Mis Postulaciones"
- Subtítulo: "Historial de todas tus postulaciones. El estado puede ser: Pendiente, Aceptada o Rechazada."
- Card con tabla:
  - Columnas: ID Postulación | Oferta | Empresa | Estado
  - Datos hardcodeados (7 filas de ejemplo):

| ID | Oferta | Empresa | Estado |
|----|--------|---------|--------|
| JOB_1 | Pasante Backend | Sabre | Pendiente |
| JOB_2 | Desarrollador Full Stack | Globant | Pendiente |
| JOB_3 | Analista de Datos | Mercado Libre | Pendiente |
| JOB_4 | Diseñador UX/UI | PedidosYa | Aceptada |
| JOB_5 | Desarrollador Web | Tech Corp | Rechazada |
| JOB_6 | Community Manager | Data INC | Rechazada |
| JOB_7 | QA Tester | Globant | Aceptada |

**Scripts:** nav.js

**Estado:** Datos hardcodeados. Pendiente de generar dinámicamente desde el array de postulaciones.

---

### 7. gestion_ofertas.html — Gestionar Ofertas (Administrador)

**Título de la pestaña:** Gestión de Ofertas - Administrador

**Navegación:** Menú dinámico completo.

**Contenido visible:**

- Título: "Gestionar ofertas laborales"
- Subtítulo: "Listado completo de ofertas (activas, inactivas y cerradas)."
- Botón/link verde: "+ Crear nueva oferta" → crear_oferta.html
- Buscador de texto (`id="buscadorOfertas"`) placeholder "Buscar por puesto o empresa..." — filtra en tiempo real
- Tabla con todas las ofertas:
  - Columnas: ID | Puesto | Empresa | Nivel | Área | Límite Postulaciones | Vacantes | Destacada | Estado | Acción
  - tbody dinámico (`id="tbodyOfertasAdmin"`) — muestra TODAS las ofertas (activas, inactivas, cerradas)
  - Cada fila tiene:
    - Link "Editar" → editar_oferta.html
    - Botón "Cerrar oferta" (clase `btn-cerrar-oferta`) — cambia estado a "Cerrada" (borrado lógico)

**Scripts:** ofertas.js, nav.js

**Lógica funcional:**
- Tabla generada dinámicamente
- Buscador filtra por ID/puesto/empresa
- Botón "Cerrar oferta" cambia el estado en el array y refresca la tabla

---

### 8. crear_oferta.html — Crear Oferta (Administrador)

**Título de la pestaña:** Crear oferta - Administrador

**Navegación:** Menú dinámico completo.

**Contenido visible:**

- Título: "Crear oferta laboral"
- Subtítulo: "Completa el formulario para publicar una nueva oferta. El ID se genera con el formato JOB_OFFER_nroAutoincremental."
- Card con formulario:
  - "Título de la oferta:" — input texto (`id="txtTituloOferta"`)
  - "Nombre de la empresa:" — input texto (`id="txtEmpresaOferta"`)
  - "Descripción de la oferta:" — textarea (`id="txtDescripcionOferta"`)
  - "Nivel requerido:" — select (`id="slcNivelOferta"`): Junior, Semi-Senior, Senior
  - "Área:" — select (`id="slcAreaOferta"`): Tecnología, Diseño, Marketing, Administración, Otros
  - "Límite de postulaciones:" — input number (`id="txtLimitePostulaciones"`)
  - "Cantidad de vacantes:" — input number (`id="txtCantidadVacantes"`)
  - Checkbox "Oferta destacada" (`id="chkOfertaDestacada"`)
  - Botón azul "Crear oferta" (`id="btnCrearOferta"`)
  - Párrafo para mensajes (`id="pMensajeOferta"`) — muestra "Oferta creada correctamente." al crear
  - Separador
  - Link "← Volver a Gestionar Ofertas" → gestion_ofertas.html

**Scripts:** ofertas.js, nav.js

**Lógica funcional:**
- Lee todos los campos, crea objeto con ID autoincremental (JOB_OFFER_N), estado "Activa"
- Lo agrega al array `ofertasLaborales`
- Limpia el formulario
- Refresca las tablas

---

### 9. editar_oferta.html — Editar Oferta (Administrador)

**Título de la pestaña:** Editar oferta - Administrador

**Navegación:** Menú dinámico completo.

**Contenido visible:**

- Título: "Editar oferta laboral"
- Subtítulo: "Modifica los datos de la oferta seleccionada. El ID no es editable."
- Card con formulario (mismos campos que crear, pero con sufijo "Editar" en los IDs):
  - "ID de la oferta:" — input readonly (`id="txtIdOfertaEditar"`) valor: "JOB_OFFER_1"
  - "Título de la oferta:" — input (`id="txtTituloOfertaEditar"`) valor: "Pasante Backend"
  - "Nombre de la empresa:" — input (`id="txtEmpresaOfertaEditar"`) valor: "Sabre"
  - "Descripción:" — textarea (`id="txtDescripcionOfertaEditar"`) con texto precargado
  - "Nivel requerido:" — select (`id="slcNivelOfertaEditar"`)
  - "Área:" — select (`id="slcAreaOfertaEditar"`)
  - "Límite de postulaciones:" — input number (`id="txtLimitePostulacionesEditar"`) valor: 20
  - "Cantidad de vacantes:" — input number (`id="txtCantidadVacantesEditar"`) valor: 2
  - Checkbox "Oferta destacada" (`id="chkOfertaDestacadaEditar"`) marcado
  - Botón azul "Guardar cambios" (`id="btnGuardarOferta"`)
  - Link "Cancelar" → gestion_ofertas.html
  - Párrafo para mensajes (`id="pMensajeEdicion"`)

**Scripts:** editar_oferta.js, nav.js

**Estado:** Placeholder. Muestra "Cambios guardados (placeholder)." pero no modifica el array. Siempre muestra la misma oferta hardcodeada.

---

### 10. postulaciones_pendientes.html — Postulaciones Pendientes (Administrador)

**Título de la pestaña:** Postulaciones pendientes - Administrador

**Navegación:** Menú dinámico completo.

**Contenido visible:**

- Título: "Postulaciones pendientes"
- Subtítulo: "Listado de postulaciones que aún tenés que procesar."
- Card con tabla:
  - Columnas: ID Postulación | Postulante | Oferta | Empresa | Estado | Acción
  - tbody dinámico (`id="tbodyPostulacionesPendientes"`) — solo muestra postulaciones con estado "Pendiente"
  - Cada fila tiene link "Procesar" → procesar_postulacion.html

**Scripts:** postulaciones.js, nav.js

**Lógica funcional:**
- Tabla generada dinámicamente filtrando postulaciones con estado == "Pendiente"

---

### 11. procesar_postulacion.html — Procesar Postulación (Administrador)

**Título de la pestaña:** Procesar postulación - Administrador

**Navegación:** Menú dinámico completo.

**Contenido visible:**

- Título: "Procesar postulación"
- Subtítulo: "Revisa la información y aprobá o rechazá la postulación."
- Card con datos de la postulación:
  - **ID Postulación:** JOB_1 (`id="lblIdPostulacion"`)
  - **Postulante:** usuario1 (`id="lblPostulante"`)
  - **Oferta:** Pasante Backend (`id="lblOferta"`)
  - **Empresa:** Sabre (`id="lblEmpresa"`)
  - **Estado actual:** Pendiente (`id="lblEstado"`)
  - Separador
  - Botón azul "Aprobar postulación" (`id="btnAprobarPostulacion"`)
  - Botón secundario "Rechazar postulación" (`id="btnRechazarPostulacion"`)
  - Párrafo para mensajes (`id="pMensajeProcesar"`)
  - Separador
  - Link "← Volver a Postulaciones pendientes" → postulaciones_pendientes.html

**Scripts:** procesar_postulacion.js, nav.js

**Lógica funcional (placeholder):**
- "Aprobar" → cambia el texto del label estado a "Aceptada" y muestra "La postulación fue aprobada (placeholder)."
- "Rechazar" → cambia el texto del label estado a "Rechazada" y muestra "La postulación fue rechazada (placeholder)."
- No modifica el array real de postulaciones.

---

### 12. estadisticas.html — Estadísticas (Administrador)

**Título de la pestaña:** Estadísticas - Administrador

**Navegación:** Menú dinámico completo.

**Contenido visible:**

- Título: "Estadísticas del sistema"
- Subtítulo: "Datos generales del sistema. Estas estadísticas son solo de lectura."

**Sección A — Tabla "Postulaciones por oferta":**
- Buscador (`id="buscadorEstadisticas"`) placeholder "Buscar por título de oferta..." — filtra filas en tiempo real
- Tabla (`id="tablaEstadisticas"`) con columnas: Oferta | Pendientes | Aceptadas | Rechazadas | Total postulaciones
- 10 filas con datos de cada oferta

**Sección B — "Total de ofertas por estado":**
- Activas: 8
- Inactivas: 1
- Cerradas: 1

**Sección C — "Porcentaje de vacantes cubiertas":**
- Vacantes cubiertas / Total de vacantes ofrecidas: 4 / 22 = 18%

**Sección D — "Postulante con más postulaciones activas":**
- usuario1 — 3 postulaciones en estado Pendiente

**Scripts:** estadisticas.js, nav.js

**Estado:** Todos los datos son hardcodeados. Pendiente de calcular dinámicamente.

---

## Archivos JavaScript

| Archivo | Responsabilidad |
|---------|----------------|
| `js/usuarios.js` | Array de usuarios precargados (3 admins, 5 postulantes) |
| `js/login.js` | Lógica de login: valida credenciales, guarda en localStorage, redirige según rol |
| `js/nav.js` | Control de navegación: muestra/oculta menú según rol, bloquea acceso no autorizado, cerrar sesión limpia localStorage |
| `js/ofertas.js` | Array de 10 ofertas, crear oferta, mostrar tablas (admin/postulante/destacadas), cerrar oferta, buscador, placeholder postularme |
| `js/postulaciones.js` | Array de 7 postulaciones, mostrar pendientes en tabla, función crearPostulacion preparada |
| `js/editar_oferta.js` | Placeholder: muestra mensaje al guardar |
| `js/procesar_postulacion.js` | Placeholder: cambia labels al aprobar/rechazar |
| `js/estadisticas.js` | Buscador/filtro para la tabla de estadísticas |
| `js/datos.js` | Array legacy (deprecado, no se usa activamente) |

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

## Funcionalidades completamente implementadas

- Login con validación de credenciales y redirección por rol
- Control de acceso por rol (nav.js bloquea páginas no autorizadas)
- Cerrar sesión (limpia localStorage)
- Crear oferta laboral con ID autoincremental JOB_OFFER_N
- Mostrar ofertas en tabla admin (todas: activas, inactivas, cerradas)
- Mostrar ofertas en tabla postulante (solo activas)
- Mostrar ofertas destacadas en cards (activas + destacada=Sí + vacantes>0 + limite>0)
- Cerrar oferta (borrado lógico, cambia estado a "Cerrada")
- Buscador/filtro en tablas de ofertas y estadísticas
- Mostrar postulaciones pendientes en tabla (filtro estado=="Pendiente")
- Placeholder de Postularme (muestra mensaje)
- Placeholder de Aprobar/Rechazar (cambia label)

---

## Funcionalidades pendientes de implementación

- Registro de postulante con validaciones completas
- Filtrado de ofertas por nivel, área y postulaciones previas del postulante
- Checkbox "Ver todas las ofertas compatibles" con lógica real
- Botón "Postularme" con creación real de postulación (JOB_nroAutoincremental)
- Editar oferta conectado a la oferta específica del array
- Aprobar/Rechazar con persistencia real en el array de postulaciones
- Mis Postulaciones generado dinámicamente desde el array
- Estadísticas calculadas dinámicamente desde los arrays
- Completar datos de prueba (15 postulantes, 20 postulaciones)
