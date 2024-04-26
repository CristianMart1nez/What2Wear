import { useEffect, useState } from "react";
import "./MyOutfitsPage.css";

export const MyOutfitsPage = () => {
  const [clothingInfo, setClothingInfo] = useState([]);

  useEffect(() => {
    document.title = "What2Wear | My Outfits";
  }, []);

  useEffect(() => {
    const storedClothingInfo = localStorage.getItem("clothingInfo");
    if (storedClothingInfo) {
      setClothingInfo(JSON.parse(storedClothingInfo));
    }
  }, []);

  console.log(clothingInfo);

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
            {clothingInfo.filter((clothing) => clothing.type === "jumpers")
              .length > 0 ? (
              clothingInfo
                .filter((clothing) => clothing.type === "jumpers")
                .map((clothing) => (
                  <img key={clothing.key} src={clothing.img_url} alt="" />
                ))
            ) : (
              <img
                key={1}
                src="./src/assets/images/outfits_sug_img/clothing1.jpg"
                alt=""
              />
            )}
          </div>
          <div className="final-clothing-2">
          {clothingInfo.filter((clothing) => clothing.type === "upperparts")
              .length > 0 ? (
              clothingInfo
                .filter((clothing) => clothing.type === "upperparts")
                .map((clothing) => (
                  <img key={clothing.key} src={clothing.img_url} alt="" />
                ))
            ) : (
              <img
                key={1}
                src="./src/assets/images/outfits_sug_img/clothing1.jpg"
                alt=""
              />
            )}
          </div>
          <div className="final-clothing-3">
          {clothingInfo.filter((clothing) => clothing.type === "dress")
              .length > 0 ? (
              clothingInfo
                .filter((clothing) => clothing.type === "dress")
                .map((clothing) => (
                  <img key={clothing.key} src={clothing.img_url} alt="" />
                ))
            ) : (
              <img
                key={1}
                src="./src/assets/images/outfits_sug_img/clothing1.jpg"
                alt=""
              />
            )}
          </div>
          <div className="final-clothing-4">
          {clothingInfo.filter((clothing) => clothing.type === "downparts")
              .length > 0 ? (
              clothingInfo
                .filter((clothing) => clothing.type === "downparts")
                .map((clothing) => (
                  <img key={clothing.key} src={clothing.img_url} alt="" />
                ))
            ) : (
              <img
                key={1}
                src="./src/assets/images/outfits_sug_img/clothing1.jpg"
                alt=""
              />
            )}
          </div>
          <div className="final-clothing-5">
          {clothingInfo.filter((clothing) => clothing.type === "shoes")
              .length > 0 ? (
              clothingInfo
                .filter((clothing) => clothing.type === "shoes")
                .map((clothing) => (
                  <img key={clothing.key} src={clothing.img_url} alt="" />
                ))
            ) : (
              <img
                key={1}
                src="./src/assets/images/outfits_sug_img/clothing1.jpg"
                alt=""
              />
            )}
          </div>

          <div className="configure-outfits-container">
            <img
              src="./src/assets/images/outfits_sug_img/img_woman/outfits1.jpg"
              alt=""
            />
          </div>
        </article>
      </section>
    </>
  );
};
