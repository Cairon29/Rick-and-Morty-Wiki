import { createRoot } from 'react-dom/client'
import { CharacterFilterProvider } from './contexts/CharacterFilterContext'
import { AppRouter } from './router/AppRouter'
import { EpisodeFiltterProvider } from './contexts/EpisodeFilterContext'
import './index.css'
import { LocationFiltterProvider } from './contexts/LocationFilterContext'

createRoot(document.getElementById('root')!).render(
  <LocationFiltterProvider>
    <EpisodeFiltterProvider>
      <CharacterFilterProvider>
        <AppRouter />
      </CharacterFilterProvider>
    </EpisodeFiltterProvider>
  </LocationFiltterProvider>
)
