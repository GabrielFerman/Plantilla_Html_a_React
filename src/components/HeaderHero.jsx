// eslint-disable-next-line react/prop-types
const HeaderHero = ({title, desc, button}) => {
  return (
    <header className="hero">
        <div className="textos-hero">
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href={"#contacto"}>{button}</a>
        </div>
        <div className="svg-hero" style={{height: '150px', overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style={{height: '100%', width: '100%'}}>
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style={{stroke: 'none', fill: '#fff'}}></path>
            </svg></div>
    </header>
  )
}

export default HeaderHero