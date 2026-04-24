import type {
    PokemonCard,
    PokemonDetail,
    PokemonListResponse,
} from '../types/pokemon'

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2'

async function requestJson<T>(path: string, signal?: AbortSignal): Promise<T> {
    const response = await fetch(`${POKEAPI_BASE_URL}${path}`, { signal })

    if (!response.ok) {
        throw new Error('No se pudo obtener información de PokeAPI')
    }

    return response.json() as Promise<T>
}

function mapPokemonDetail(detail: PokemonDetail): PokemonCard {
    const artwork = detail.sprites.other?.['official-artwork']?.front_default

    return {
        id: detail.id,
        name: detail.name,
        image: artwork ?? detail.sprites.front_default ?? detail.sprites.front_shiny,
        types: detail.types.map((entry) => entry.type.name),
        weight: detail.weight,
        height: detail.height,
        baseExperience: detail.base_experience,
        stats: detail.stats,
    }
}

async function fetchPokemonDetailByUrl(url: string, signal?: AbortSignal) {
    const response = await fetch(url, { signal })

    if (!response.ok) {
        throw new Error('No se pudo obtener el detalle del Pokémon')
    }

    const detail = (await response.json()) as PokemonDetail

    return mapPokemonDetail(detail)
}

export async function fetchPokemonCatalog(limit = 12, signal?: AbortSignal) {
    const list = await requestJson<PokemonListResponse>(
        `/pokemon?limit=${limit}&offset=0`,
        signal,
    )

    const details = await Promise.all(
        list.results.map((entry) => fetchPokemonDetailByUrl(entry.url, signal)),
    )

    return details.sort((left, right) => left.id - right.id)
}

export async function fetchPokemonByName(name: string, signal?: AbortSignal) {
    const detail = await requestJson<PokemonDetail>(
        `/pokemon/${encodeURIComponent(name.toLowerCase())}`,
        signal,
    )

    return mapPokemonDetail(detail)
}