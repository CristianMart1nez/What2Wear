import { useEffect } from "react";
import "./MyOutfitsPage.css";

export const MyOutfitsPage = () => {

  useEffect(() => {
    document.title = "What2Wear | My Outfits"
  }, [])
  

  return (
    <>
      <section className="myoutfits-container">
        <div className="myoutfits-info-container">
          <h1>My Outfits</h1>
          <p>
            Don&apos;t be into trends. Don&apos;t make fashion own you, but you
            decide what you are
          </p>
        </div>

          <article className="outfits-container">

            <div className="final-clothing-1">
              <img src="./src/assets/images/outfits_sug_img/clothing1.jpg" alt="" />
            </div>
             <div className="final-clothing-2">
              <img src="./src/assets/images/outfits_sug_img/clothing1.jpg" alt="" />
            </div>
            <div className="final-clothing-3">
              <img src="./src/assets/images/outfits_sug_img/clothing1.jpg" alt="" />
            </div>
            <div className="final-clothing-4">
              <img src="./src/assets/images/outfits_sug_img/clothing1.jpg" alt="" />
            </div>
            <div className="final-clothing-5">
              <img src="./src/assets/images/outfits_sug_img/clothing1.jpg" alt="" />
            </div>
            
            <div className="configure-outfits-container">
              <img src="./src/assets/images/outfits_sug_img/img_woman/outfits1.jpg" alt="" />
            </div>
          </article>

      </section>
    </>
  );
};
