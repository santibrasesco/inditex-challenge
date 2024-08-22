# Inditex Challenge - Aplicación React

Este repositorio contiene una aplicación web desarrollada en React, como parte del desafío técnico de Inditex. La aplicación está desplegada en [https://inditex-challenge.vercel.app/](https://inditex-challenge.vercel.app/). Debido a problemas con la API de Marvel, la aplicación se ha desplegado utilizando datos de prueba en lugar de llamadas a la API real.

## Funcionalidades

- **Búsqueda de Personajes:** Los usuarios pueden buscar personajes por nombre en la página principal. Los resultados se muestran en una lista y los usuarios pueden hacer clic en un personaje para ver más detalles. También es posible filtrar los personajes favoritos.

- **Detalle del Personaje:** Al hacer clic en un personaje desde la página de búsqueda, se accede a una página de detalle donde se muestran información detallada del personaje y los cómics en los que aparece.

- **Agregar a Favoritos:** Los usuarios pueden añadir personajes a sus favoritos tanto desde la página de búsqueda como desde la página de detalle del personaje.

## Tecnologías Utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **Fetch API**

## Server-Side Rendering (SSR) y Client-Side Rendering (CSR)

La aplicación aprovecha las capacidades de Next.js para implementar tanto **Server-Side Rendering (SSR)** como **Client-Side Rendering (CSR)** de manera eficiente:

- **SSR:** Se utiliza para renderizar las páginas en el servidor, proporcionando contenido listo para ser visualizado en el navegador del usuario.

- **CSR:** Se utiliza para manejar la interactividad y las actualizaciones dinámicas en el navegador.

Este enfoque híbrido garantiza un balance entre rendimiento, SEO y experiencia de usuario, siguiendo las mejores prácticas recomendadas por Next.js.


## Arquitectura

La aplicación se ha construido siguiendo el enfoque de arquitectura hexagonal, con una clara separación de responsabilidades y adherencia a principios de diseño sólido y mantenible.

## Estructura del Proyecto

- **`app/`:** Contiene las rutas principales y la estructura de la aplicación.
- **`__test__/`:** Pruebas unitarias y de integración.
- **`(ui)/`:** Contiene las páginas y componentes React, hooks, contexts y todo lo relacionado con la capa de presentación.
- **`adapters/`:** Adaptadores para la comunicación con APIs externas.
- **`core/`:** Entidades y lógica de negocio de la aplicación.
- **`config/`:** Configuraciones globales y manejo de variables de entorno.
- **`fixtures/`:** Datos de ejemplo y mocks para pruebas.
- **`ports/`:** Interfaces para adaptadores y servicios.

## Configuración y Ejecución en Modo Desarrollo

Para ejecutar la aplicación localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local utilizando Git:

   ```
   git clone https://github.com/santibrasesco/inditex-challenge.git
   ```

2. Navega al directorio del proyecto:

   ```
   cd inditex-challenge
   ```

3. Instala las dependencias del proyecto utilizando npm:

   ```
   npm install
   ```
4. Crea un archivo ```.env.local``` en la raíz del proyecto con las siguientes variables de entorno:
 ```
 NEXT_PUBLIC_MARVEL_API_KEY=tu_api_key_publica
MARVEL_PRIVATE_API_KEY=tu_api_key_privada
NEXT_API_URL=https://gateway.marvel.com/v1/public/characters
NEXT_API_LIMIT_CHARACTERS_RESULTS=50
NEXT_API_LIMIT_COMICS_RESULTS=20
NEXT_API_USE_MOCK=false    # Si se establece en true, se utilizarán datos de prueba. (Recomendado debido a problemas con la API de Marvel)
```

5. Ejecuta la aplicación en modo desarrollo:
  ``` npm run dev ```

6. Abre tu navegador web y visita http://localhost:3000 para ver la aplicación en funcionamiento.

## Modo Producción
Para ejecutar la aplicación en modo producción. Sigue estos pasos:

1. Abre una terminal en el directorio raíz de tu proyecto.

2. Ejecuta el siguiente comando para compilar los activos optimizados:
```
 npm run build
 ```

3. Para iniciar la aplicación en modo producción, utiliza:
 ```
  npm start
  ```

## Pruebas
La aplicación incluye pruebas unitarias y de integración utilizando Jest y React Testing Library. Para ejecutar las pruebas, usa el siguiente comando:
``` 
npm run test
 ```

