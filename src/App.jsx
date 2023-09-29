import './App.css'
import HeaderHero from './components/HeaderHero'
import LearnMore from './components/LearnMore'
import Info from './components/Info'
import CardsContainer from './components/CardsContainer'
import Galeria from './components/Galeria'
import LastSection from './components/LastSection'
import Footer from './components/Footer'


function App() {

  return (
    <div className='App'>
      <HeaderHero
        title='Hola desde JSX' 
        desc='Acabamos de aprender como pasar HTML a JSX y hacerlo dinamico con props' 
        button='Escribeme'
       />
      <LearnMore 
        title='React es cool' 
        desc='Puedo hacer componentes muy facilmente' 
        cta='¡Aprende ahora!'
      />
      <LearnMore 
        title='Vite es lo maximo' 
        desc='Duplico componentes' 
        cta='¡Bien facil!'
      />
      <Info 
        title='Componente informativo' 
        desc='Este nuevo componente contiene la informacion que debe de ir en la pagina' 
      />
      <CardsContainer
        main_title='Este componente contiene la propuesta de la pagina o empresa' 
        title_1='Esta es la primera carta' title_2='Esta es la segunda carta' title_3='Esta es la tercera carta'
        desc_1='Esta es la descripcion 1' desc_2='Esta es la descripcion 2' desc_3='Esta es la descripcion 3'
        cta_1='¡Aprende mas!' cta_2='¡Aprende mas!' cta_3='Aprende mas'
      />
      <Galeria 
        title='Este componente muestra la galeria de imagenes de la pagina'
      />
      <LastSection 
        title='Ultima funcion'
        desc='Este componente contiene la ultima parte de la pagina sin ser el footer'
        cta='Contactanos'
      />
      <Footer 
        title='Contactanos lo antes posible'
      />
    </div>
  )
}

export default App
