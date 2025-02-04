import { Header } from '../header/Header'
import { Filter } from './stateful/Filter'
import { LocationSection } from './stateful/LocationSection'
import { Footer } from '../footer/Footer'
import './styles/locations-styles.css'
import './styles/filter-styles.css'

export const Locations = () => {
  return (
    <>
        <Header/>
        <Filter/>
        <LocationSection/>
        <Footer/>
    </>
  )
}
