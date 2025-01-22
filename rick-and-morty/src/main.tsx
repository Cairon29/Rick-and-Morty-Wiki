import { createRoot } from 'react-dom/client'
import { CharacterFilterProvider } from './contexts/CharacterFilterContext'
import { AppRouter } from './router/AppRouter'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <CharacterFilterProvider>
    <AppRouter />
  </CharacterFilterProvider>
)
