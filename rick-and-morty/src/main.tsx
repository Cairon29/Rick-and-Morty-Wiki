import { createRoot } from 'react-dom/client'
import { CharacterFilterProvider } from './contexts/CharacterFilterContext'
import { AppRouter } from './router/AppRouter'
import './index.css'
import { EpisodeFiltterProvider } from './contexts/EpisodeFiltterContext'

createRoot(document.getElementById('root')!).render(
  <EpisodeFiltterProvider>
    <CharacterFilterProvider>
      <AppRouter />
    </CharacterFilterProvider>
  </EpisodeFiltterProvider>
)
