import { useEffect } from "react";
import "./TrendingPage.css";

const images = [
  './src/assets/images/trending/trending-2.jpg',
  './src/assets/images/trending/trending-4.jpg',
  './src/assets/images/trending/trending-6.jpg',
  './src/assets/images/trending/trending-8.jpg',
  // Agrega más imágenes según sea necesario
];

export const TrendingPage = () => {
  useEffect(() => {
    document.title = "What2Wear | Trending";
  }, []);

  return (

    <section className='trending-container'>
    <div className='trending-images-container'>
      <h2>SO COOL! CHECK OUR WHAT IS TRENDIND!!</h2>

      <article className='trending-img-container2'>    
      <img src="/src/assets/images/trending/02879482808-p.jpg" alt="" />
      <img src="./src/assets/images/trending/02906204330-p.jpg" alt=""/>
      </article>

      <article className='trending-img-container2'>
      <img src="./src/assets/images/trending/08741062711-015-p.jpg" alt=""/>
      <img src="./src/assets/images/trending/00881332800-a1.jpg" alt="" />

 </article>

 <article className='trending-img-container2'>    
 <img src="./src/assets/images/trending/03203722044-p.jpg" alt="" />
     <img src="./src/assets/images/trending/02565098330-p.jpg" alt="" />
 </article>

      <article className='trending-img-container2'>
     <img src="./src/assets/images/trending/2457806330_1_1_1.jpg"  alt="" />
     <img src="./src/assets/images/trending/09878100330-p.jpg" alt="" />

</article>

    </div>

  </section> )
}
 
