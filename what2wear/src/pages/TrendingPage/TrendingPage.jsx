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
    <div className="container-scroll-animation">
      <section className="one">
        <img src="./src/assets/images/trending/trending-2.jpg" alt="" />
      </section>
      <section className="two">
        <h1>Second Image</h1>
      </section>
      <section className="three">
        <h1>Three Image</h1>
      </section>
      <section className="four">
        <h1>Four Image</h1>
      </section>
    </div>
  );
}
