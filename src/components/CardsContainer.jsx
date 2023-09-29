// eslint-disable-next-line react/prop-types
const CardsContainer = ({ main_title, title_1, title_2, title_3, desc_1, desc_2, desc_3, cta_1, cta_2, cta_3}) => {
  return (
    <section className="cards contenedor">
          <h2 className="titulo">{main_title}</h2>
          <div className="content-cards">
              <article className="card">
                  <i className="far fa-clone"></i>
                  <h3>{title_1}</h3>
                  <p>{desc_1}</p>
                  <a href="" className="cta">{cta_1}</a>
              </article>
              <article className="card">
                  <i className="fas fa-database"></i>
                  <h3>{title_2}</h3>
                  <p>{desc_2}</p>
                  <a href="" className="cta">{cta_2}</a>
              </article>
              <article className="card">
                  <i className="far fa-object-group"></i>
                  <h3>{title_3}</h3>
                  <p>{desc_3}</p>
                  <a href="" className="cta">{cta_3}</a>
              </article>
          </div>
      </section>
  )
}

export default CardsContainer