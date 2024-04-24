import './HomePage.css'

export const HomePage = () => {
  return (

    <section className='home-container'>
    {  <div className='images-container'>
        <h2>Personal Stylist</h2>

        <article className='img-container'>
          <img src="./src/assets/images/capa.jpg" alt="" />
        </article>

        <article className='img-container'>
          <img src="./src/assets/images/capa.jpg" alt="" />
        </article>

        <article className='img-container'>
          <img src="./src/assets/images/capa.jpg" alt="" />
        </article>

        <article className='img-container'>
          <img src="./src/assets/images/capa.jpg" alt="" />
        </article>

        <button className='btn btn-home'>Create your style now</button>

      </div>}

    </section>
    
  )
}
