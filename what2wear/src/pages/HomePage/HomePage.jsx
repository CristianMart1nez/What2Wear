import './HomePage.css'

export const HomePage = () => {
  return (
    <>
    <div className= 'Personal-Stylist'>
       <h2>Personal Stylist</h2>
    </div>
    <section className='Main_Frame'>
      <div id='img-container'>
        <img src="./src/assets/images/capa.jpg" alt="" />
      </div>
      <div id='img-container'>
        <img src="./src/assets/images/capa.jpg" alt="" />
      </div>
      <div id='img-container'>
        <img src="./src/assets/images/capa.jpg" alt="" />
      </div>
      <div id='img-container'>
        <img src="./src/assets/images/capa.jpg" alt="" />
      </div>
    
      <button className='btn'> 
         Create your style now
        </button>
      
     
        
    </section>

    
    </>
  )
}
