# Contexto del proyecto

## Páginas a construir

### 1. Página de exploración y búsqueda

Será la página principal de la plataforma. Permitirá descubrir alojamientos mediante un buscador con destino, fechas y número de huéspedes. Mostrará categorías de estancias, filtros básicos y una cuadrícula de resultados con imágenes, ubicación, valoración, precio por noche y disponibilidad aproximada.

### 2. Página de detalle del alojamiento

Presentará toda la información necesaria para decidir si reservar un alojamiento. Incluirá una galería de fotografías, título, ubicación, valoración, descripción, servicios, normas de la casa, información del anfitrión y un resumen del precio. También tendrá un panel de reserva con selector de fechas, huéspedes, desglose de costes y una acción principal para reservar.

### 3. Página de viajes y cuenta del usuario

Permitirá consultar y administrar la actividad del usuario. Mostrará las reservas próximas y anteriores, el estado de cada viaje, los datos principales de los alojamientos reservados y accesos para modificar o cancelar una reserva cuando sea posible. También incluirá opciones básicas de perfil, preferencias, favoritos y configuración de la cuenta.

## Componentes principales por vista

### Página de exploración y búsqueda

- Barra de navegación con logotipo, enlace para publicar un alojamiento, selector de idioma/moneda y menú de cuenta.
- Buscador principal con destino, fechas de entrada y salida, huéspedes y botón de búsqueda.
- Navegación horizontal de categorías con iconos e imágenes.
- Barra o panel de filtros para precio, tipo de alojamiento, habitaciones, servicios y características especiales.
- Cuadrícula responsive de tarjetas de alojamiento.
- Tarjeta de alojamiento con imagen, favorito, ubicación, fechas, valoración, precio y etiqueta de oferta cuando corresponda.
- Paginación o carga progresiva de resultados.
- Mapa opcional para alternar entre vista de lista y vista geográfica.

### Página de detalle del alojamiento

- Cabecera global y navegación de retorno a los resultados.
- Galería de imágenes del alojamiento con vista ampliada.
- Encabezado con nombre, ubicación, valoración y botón para compartir o guardar en favoritos.
- Resumen del alojamiento con anfitrión, capacidad, dormitorios y camas.
- Secciones de descripción y servicios disponibles.
- Información del anfitrión y datos de verificación.
- Calendario de disponibilidad y selector de huéspedes.
- Tarjeta o panel de reserva fijo con precio por noche, tasas, total y botón de reserva.
- Sección de reseñas con puntuación general, categorías de valoración y comentarios.
- Ubicación aproximada en un mapa y normas de la casa.

### Página de viajes y cuenta del usuario

- Navegación global con acceso al perfil y menú de cuenta.
- Pestañas para viajes próximos, viajes anteriores y cancelaciones.
- Tarjetas de reserva con fotografía, nombre del alojamiento, destino, fechas y estado.
- Acciones para ver detalles, contactar al anfitrión, modificar o cancelar la reserva.
- Resumen de próximos viajes con fechas y datos relevantes.
- Sección de favoritos o listas guardadas.
- Panel de perfil con información personal y preferencias.
- Accesos a configuración, métodos de pago, notificaciones, privacidad y ayuda.

## Usuario y objetivo

El usuario es una persona que busca un alojamiento confiable para un viaje, ya sea por vacaciones, trabajo o una estancia temporal. Quiere comparar opciones de forma rápida, entender el coste total, revisar que el lugar y sus servicios se ajusten a sus necesidades y completar una reserva segura; después, necesita consultar y gestionar sus viajes desde un mismo lugar.

## Especificaciones de componentes obtenidas de la referencia móvil (375 px)

Estas especificaciones se documentan antes de implementar las vistas. La referencia visual adjunta corresponde al patrón móvil de Airbnb: navegación superior compacta, categorías desplazables y buscador agrupado en una superficie con bordes redondeados. Las tres vistas deben usar componentes propios y clases de utilidad de Tailwind; no se usarán librerías de componentes preconstruidas.

### Vista 1: explorar y buscar

**Composición de layout:** `ExplorePage` organiza una columna de ancho completo. `MobileHeader` queda arriba; debajo, `SearchBar` se mantiene visible como control principal; `CategoryRail` ocupa una fila horizontal desplazable; `FilterRow` contiene acciones compactas; `ListingGrid` apila `ListingCard` en una sola columna en 375 px. La navegación inferior `MobileTabBar` queda fija al borde inferior.

- `ExplorePage`
	- Props: `categories: Category[]`, `listings: Listing[]`, `activeCategoryId?: string`, `search: SearchState`.
	- Layout: contenedor raíz vertical; compone header, búsqueda, categorías, filtros, resultados y navegación inferior.
- `MobileHeader`
	- Props: `brandName: string`, `onMenuClick: () => void`, `onProfileClick: () => void`.
	- Layout: fila superior con marca a la izquierda y acciones circulares a la derecha; no depende del contenido de las tarjetas.
- `SearchBar`
	- Props: `destination?: string`, `datesLabel?: string`, `guestsLabel?: string`, `onSearch: (search: SearchState) => void`.
	- Layout: superficie horizontal o apilada según el ancho; contiene tres campos visuales y un botón de búsqueda destacado.
- `CategoryRail`
	- Props: `items: Category[]`, `activeId?: string`, `onSelect: (id: string) => void`.
	- Layout: lista horizontal con overflow; cada `CategoryItem` conserva un ancho estable y muestra icono, etiqueta y estado activo.
- `FilterRow`
	- Props: `filters: FilterOption[]`, `onFilterChange: (filterId: string) => void`, `onMapToggle: () => void`.
	- Layout: fila horizontal desplazable entre categorías y resultados; cada botón tiene icono y texto corto.
- `ListingGrid`
	- Props: `listings: Listing[]`, `onSelect: (listingId: string) => void`.
	- Layout: grid de una columna en móvil y varias columnas en pantallas mayores.
- `ListingCard`
	- Props: `listing: Listing`, `isFavorite?: boolean`, `onFavoriteToggle: (listingId: string) => void`, `onSelect: (listingId: string) => void`.
	- Layout: imagen con relación de aspecto fija y favorito superpuesto; metadatos debajo en bloques de ubicación, valoración, fechas y precio.
- `MobileTabBar`
	- Props: `items: TabItem[]`, `activeId: string`, `onChange: (id: string) => void`.
	- Layout: barra fija inferior con cuatro o cinco destinos, icono encima y etiqueta debajo.

### Vista 2: detalle del alojamiento

**Composición de layout:** `ListingDetailPage` es una columna. `DetailHeader` permanece arriba; `PhotoGallery` ocupa el primer bloque; `ListingSummary`, `AmenitiesSection`, `ReviewsSection` y `LocationSection` se apilan con separadores. `BookingBar` queda fija en la parte inferior para mantener la acción principal disponible sin ocultar el contenido.

- `ListingDetailPage`
	- Props: `listing: ListingDetail`, `availability: Availability`, `reviews: Review[]`.
	- Layout: página vertical con contenido desplazable y barra de reserva fija independiente.
- `DetailHeader`
	- Props: `title: string`, `onBack: () => void`, `onShare: () => void`, `onSave: () => void`, `isSaved: boolean`.
	- Layout: fila con volver a la izquierda y compartir/guardar a la derecha; el título completo se presenta en el bloque siguiente.
- `PhotoGallery`
	- Props: `images: ListingImage[]`, `onImageSelect: (imageId: string) => void`.
	- Layout: imagen principal a ancho completo con miniaturas o indicador de páginas superpuesto; mantiene una proporción fija.
- `ListingSummary`
	- Props: `title: string`, `location: string`, `rating: number`, `host: Host`, `guestCapacity: number`, `bedrooms: number`, `beds: number`.
	- Layout: encabezado, puntuación y datos de capacidad en bloques verticales separados por espacio y bordes.
- `AmenitiesSection`
	- Props: `amenities: Amenity[]`, `onShowAll: () => void`.
	- Layout: cuadrícula de dos columnas con icono y texto; botón secundario al final.
- `ReviewsSection`
	- Props: `rating: number`, `categoryRatings: CategoryRating[]`, `reviews: Review[]`, `onShowAll: () => void`.
	- Layout: resumen de puntuación seguido de reseñas resumidas; evita tablas anchas en 375 px.
- `LocationSection`
	- Props: `locationLabel: string`, `coordinates: Coordinates`, `description?: string`.
	- Layout: título, texto breve y mapa visual de ancho completo con altura estable.
- `BookingBar`
	- Props: `pricePerNight: number`, `totalPrice?: number`, `onReserve: (booking: BookingDraft) => void`.
	- Layout: barra fija inferior con precio a la izquierda y botón primario a la derecha; abre `BookingSheet` para fechas y huéspedes.
- `BookingSheet`
	- Props: `open: boolean`, `availability: Availability`, `initialGuests: number`, `onClose: () => void`, `onConfirm: (booking: BookingDraft) => void`.
	- Layout: panel inferior modal con calendario, selector de huéspedes, desglose y confirmación.

### Vista 3: viajes y cuenta

**Composición de layout:** `TripsPage` organiza una columna de ancho completo. `AccountHeader` introduce la vista; `TripTabs` controla el estado de la colección; `TripList` apila `TripCard`; debajo aparecen `SavedLists` y `AccountMenu`. `MobileTabBar` conserva la navegación global en el borde inferior.

- `TripsPage`
	- Props: `user: User`, `upcomingTrips: Trip[]`, `pastTrips: Trip[]`, `savedLists: SavedList[]`.
	- Layout: columna con cabecera, tabs, contenido de viajes y secciones de cuenta; el estado activo decide la lista mostrada.
- `AccountHeader`
	- Props: `user: User`, `onProfileClick: () => void`, `onSettingsClick: () => void`.
	- Layout: fila con saludo y avatar; las acciones se mantienen agrupadas y no desplazan el título.
- `TripTabs`
	- Props: `tabs: TabItem[]`, `activeId: string`, `onChange: (id: string) => void`.
	- Layout: control de pestañas horizontal con indicador inferior; permite desplazamiento si las etiquetas no caben.
- `TripList`
	- Props: `trips: Trip[]`, `emptyMessage: string`, `onTripSelect: (tripId: string) => void`.
	- Layout: columna de tarjetas con separación consistente; muestra estado vacío cuando no hay viajes.
- `TripCard`
	- Props: `trip: Trip`, `onOpen: (tripId: string) => void`, `onManage: (tripId: string) => void`.
	- Layout: imagen a la izquierda en móvil, información y estado a la derecha; las acciones quedan debajo sin desbordar.
- `SavedLists`
	- Props: `lists: SavedList[]`, `onListSelect: (listId: string) => void`.
	- Layout: fila horizontal de miniaturas o lista apilada según cantidad; aparece después de los viajes.
- `AccountMenu`
	- Props: `items: AccountMenuItem[]`, `onItemSelect: (itemId: string) => void`.
	- Layout: lista vertical de accesos con iconos, etiquetas y chevron; separa preferencias, pagos, ayuda y privacidad.
- `MobileTabBar`
	- Props: `items: TabItem[]`, `activeId: string`, `onChange: (id: string) => void`.
	- Layout: barra fija compartida con la vista de exploración para conservar el modelo de navegación móvil.

### Contratos compartidos

Los tipos `Listing`, `Booking`, `Category`, `SearchState`, `ListingDetail`, `Review`, `Trip`, `User`, `TabItem` y sus tipos auxiliares deben vivir en `/types`. Las piezas visuales reutilizables deben vivir en `/components`; las rutas y composición de cada pantalla deben vivir en `/app`. Todas las variantes visuales se resolverán con clases Tailwind propias, sin shadcn/ui, MUI, Ant Design, Chakra ni otra librería de componentes.
