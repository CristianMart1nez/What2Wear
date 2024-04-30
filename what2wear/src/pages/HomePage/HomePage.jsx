import { useEffect } from 'react'
import './HomePage.css'

export const HomePage = () => {

  useEffect(() => {
    document.title = "What2Wear"
  }, [])
  
  return (
    <section className='home-container'>
      <div className='images-container'>
        <h2>Personal Stylist</h2>

        <article className='img-container slider'> 

          <div className="slide-track">

            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-1.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-2.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-3.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-1.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-2.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-3.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-1.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-2.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-3.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-1.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-2.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-3.png" alt="" />
            </div>
            <div className="slide">
              <img src="./src/assets/images/Fotos-rotativas/Foto-rotativa-1.png" alt="" />
            </div>
          </div>

        </article>

        <article className='img-container'>
          <img src="./src/assets/images/cover_img/cover2.jpg" alt="" />
        </article>

        <article className='img-container'>
          <img src="./src/assets/images/cover_img/cover3.jpg" alt="" />
        </article>

        <article className='img-container'>
          <img src="./src/assets/images/cover_img/cover4.jpg" alt="" />
        </article>

        <button className='btn btn-home'>Create your style now</button>

      </div>

    </section>

  )
}
