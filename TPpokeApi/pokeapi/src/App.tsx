import { useEffect, useState } from 'react'
import { fetchPokemonByName, fetchPokemonCatalog } from './api/pokeapi'
import type { PokemonCard } from './types/pokemon'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [catalog, setCatalog] = useState<PokemonCard[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonCard | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState('Cargando pokémon destacados...')

  useEffect(() => {
    const controller = new AbortController()

    async function loadFeaturedPokemon() {
      setIsLoading(true)
      setError(null)

      try {
        const nextCatalog = await fetchPokemonCatalog(12, controller.signal)

        if (controller.signal.aborted) {
          return
        }

        setCatalog(nextCatalog)
        setSelectedPokemon(nextCatalog[0] ?? null)
        setStatusMessage(`Mostrando ${nextCatalog.length} pokémon destacados`)
      } catch {
        if (!controller.signal.aborted) {
          setError('No se pudo cargar el catálogo inicial. Probá nuevamente.')
          setStatusMessage('La carga inicial falló')
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    void loadFeaturedPokemon()

    return () => controller.abort()
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalizedQuery = query.trim()

    if (!normalizedQuery) {
      setStatusMessage('Escribí un nombre para buscar un Pokémon')
      return
    }

    const controller = new AbortController()

    setIsLoading(true)
    setError(null)

    try {
      const pokemon = await fetchPokemonByName(normalizedQuery, controller.signal)

      if (controller.signal.aborted) {
        return
      }

      setCatalog([pokemon])
      setSelectedPokemon(pokemon)
      setStatusMessage(`Resultado encontrado para ${normalizedQuery.toLowerCase()}`)
    } catch {
      if (!controller.signal.aborted) {
        setError(`No encontramos "${normalizedQuery}" en la Pokédex.`)
        setStatusMessage('La búsqueda no devolvió resultados')
      }
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false)
      }
    }
  }

  async function handleResetCatalog() {
    const controller = new AbortController()

    setIsLoading(true)
    setError(null)
    setQuery('')

    try {
      const nextCatalog = await fetchPokemonCatalog(12, controller.signal)

      if (controller.signal.aborted) {
        return
      }

      setCatalog(nextCatalog)
      setSelectedPokemon(nextCatalog[0] ?? null)
      setStatusMessage('Volvimos al catálogo destacado')
    } catch {
      if (!controller.signal.aborted) {
        setError('No se pudo restaurar el catálogo destacado.')
        setStatusMessage('El reinicio falló')
      }
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false)
      }
    }
  }

  const totalTypes = selectedPokemon?.types.length ?? 0
  const selectedTypeLabel = totalTypes === 1 ? 'tipo' : 'tipos'

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <h1>PokéAPI</h1>
          <hr />
          <br />
        </div>

        <form className="search-bar" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="pokemon-search">
            Buscar Pokémon por nombre
          </label>
          <input
            id="pokemon-search"
            name="pokemon-search"
            type="search"
            placeholder="Buscar por nombre, por ejemplo: pikachu"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            Buscar
          </button>
          <button type="button" className="secondary" onClick={() => void handleResetCatalog()} disabled={isLoading}>
            Ver destacados
          </button>
        </form>

        <div className="status-row" aria-live="polite">
          <span>{statusMessage}</span>
          <span>{catalog.length} visibles</span>
        </div>
      </section>

      <section className="content-grid">
        <section className="catalog-panel" aria-label="Catálogo de Pokémon">
          <div className="panel-header">
            <div>
              <p className="section-label">Catálogo</p>
              <h2>{isLoading ? 'Cargando...' : 'Pokémon destacados'}</h2>
            </div>
            <span className="panel-badge">{catalog.length}</span>
          </div>

          {error ? <p className="error-banner">{error}</p> : null}

          <div className="pokemon-grid">
            {catalog.map((pokemon) => {
              const isSelected = selectedPokemon?.id === pokemon.id

              return (
                <button
                  key={pokemon.id}
                  type="button"
                  className={`pokemon-card${isSelected ? ' selected' : ''}`}
                  onClick={() => setSelectedPokemon(pokemon)}
                >
                  <div className="pokemon-card__header">
                    <span>#{String(pokemon.id).padStart(3, '0')}</span>
                    <span>{pokemon.baseExperience ?? 0} exp</span>
                  </div>

                  <img src={pokemon.image ?? '/favicon.svg'} alt={pokemon.name} loading="lazy" />

                  <div className="pokemon-card__body">
                    <h3>{pokemon.name}</h3>
                    <div className="type-row">
                      {pokemon.types.map((type) => (
                        <span key={type} className="type-pill">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        <aside className="detail-panel" aria-label="Detalle del Pokémon seleccionado">
          {selectedPokemon ? (
            <>
              <div className="detail-hero">
                <div>
                  <p className="section-label">Detalle</p>
                  <h2>{selectedPokemon.name}</h2>
                  <p>
                    #{String(selectedPokemon.id).padStart(3, '0')} · {totalTypes} {selectedTypeLabel}
                  </p>
                </div>
                <img src={selectedPokemon.image ?? '/favicon.svg'} alt={selectedPokemon.name} />
              </div>

              <div className="detail-stats">
                <div>
                  <span>Altura</span>
                  <strong>{(selectedPokemon.height / 10).toFixed(1)} m</strong>
                </div>
                <div>
                  <span>Peso</span>
                  <strong>{(selectedPokemon.weight / 10).toFixed(1)} kg</strong>
                </div>
                <div>
                  <span>Experiencia</span>
                  <strong>{selectedPokemon.baseExperience ?? 'N/A'}</strong>
                </div>
              </div>

              <div className="detail-block">
                <h3>Tipos</h3>
                <div className="type-row">
                  {selectedPokemon.types.map((type) => (
                    <span key={type} className="type-pill accent">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="detail-block">
                <h3>Estadísticas</h3>
                <ul className="stat-list">
                  {selectedPokemon.stats.map((stat) => (
                    <li key={stat.stat.name}>
                      <span>{stat.stat.name}</span>
                      <strong>{stat.base_stat}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="detail-empty">
              <p className="section-label">Detalle</p>
              <h2>No hay selección</h2>
              <p>Elegí un Pokémon del catálogo para ver su información.</p>
            </div>
          )}
        </aside>
      </section>

      <footer className="footer-note">Datos servidos desde PokeAPI.</footer>
    </main>
  )
}

export default App
