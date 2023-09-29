import ilustracion1 from '../assets/img/ilustracion1.svg'

// eslint-disable-next-line react/prop-types
const LearnMore = ({title, desc, cta}) => {
  return (
    <section className="wave-contenedor website">
          <img src={ilustracion1} alt=""/>{/*En react no se ponen las imagenes completas solo se ponen las importaciones*/}  
          <div className="contenedor-textos-main">
              <h2 className="titulo left">{title}</h2>
              <p className="parrafo">{desc}</p>
              <a href="" className="cta">{cta}</a>
          </div>
      </section>
  )
}

export default LearnMore