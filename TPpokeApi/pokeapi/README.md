# TPpokeApi

Frontend en React + TypeScript para explorar la [PokeAPI](https://pokeapi.co/). La app muestra un catálogo destacado de Pokémon, permite buscar por nombre y abre un panel de detalle con tipos, altura, peso y estadísticas.

## Stack

- React 19
- TypeScript
- Vite
- CSS moderno sin framework visual adicional

## Funcionalidades

- Carga inicial de Pokémon destacados desde PokeAPI.
- Búsqueda por nombre.
- Selección de tarjeta para ver detalle.
- Estados de carga y error.
- UI responsive pensada para desktop y móvil.

## Estructura

- [src/App.tsx](src/App.tsx): componente principal y flujo de datos.
- [src/api/pokeapi.ts](src/api/pokeapi.ts): helpers de acceso a la API.
- [src/types/pokemon.ts](src/types/pokemon.ts): contratos de datos.
- [src/App.css](src/App.css): estilos de la interfaz.
- [src/index.css](src/index.css): estilos globales.

## Requisitos

- Node.js 18 o superior.
- npm o pnpm.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Notas

- La información se obtiene directamente desde PokeAPI.
- Si querés publicar el proyecto en GitHub, este README ya está listo para funcionar como portada del repositorio.
