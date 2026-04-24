
export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    results: PokemonListItem[];
}

export interface PokemonArtwork {
    front_default: string | null;
}

export interface PokemonSpriteOther {
    'official-artwork'?: PokemonArtwork;
}

export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface PokemonSprites {
    front_default: string | null;
    front_shiny: string | null;
    other?: PokemonSpriteOther;
}

export interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    types: PokemonType[];
    stats: PokemonStat[];
    sprites: PokemonSprites;
}

export interface PokemonCard {
    id: number;
    name: string;
    image: string | null;
    types: string[];
    weight: number;
    height: number;
    baseExperience: number | null;
    stats: PokemonStat[];
}