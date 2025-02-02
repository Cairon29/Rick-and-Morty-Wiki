import { createRoot } from 'react-dom/client'
import { CharacterFilterProvider } from './contexts/CharacterFilterContext'
import { AppRouter } from './router/AppRouter'
import { EpisodeFiltterProvider } from './contexts/EpisodeFilterContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <EpisodeFiltterProvider>
    <CharacterFilterProvider>
      <AppRouter />
    </CharacterFilterProvider>
  </EpisodeFiltterProvider>
)
