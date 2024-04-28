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

  console.log(clothingInfo)

  const jumpersArr = clothingInfo.filter((clothing) => clothing.type === "jumpers")
  console.log(jumpersArr[0].type)

  /* const handleClick = () => {
    if(index === jumpersArr.length -1) {
      return setIndex(0)
    } else {
      setIndex(index + 1)
    }
  } */

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

            {/* <img key={jumpersArr[index].id} src={jumpersArr[index].img_url} alt="" /> */}

          </div>
          <div className="final-clothing-2">
            {clothingInfo.filter((clothing) => clothing.type === "upperparts")
              .length > 0 ? (
              clothingInfo
                .filter((clothing) => clothing.type === "upperparts")
                .map((clothing) => (
                  <img key={clothing.id} src={clothing.img_url} alt="" />
                ))
            ) : (
              <img
                key={1001}
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
                  <img key={clothing.id} src={clothing.img_url} alt="" />
                ))
            ) : (
              <img
                key={1002}
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
                  <img key={clothing.id} src={clothing.img_url} alt="" />
                ))
            ) : (
              <img
                key={1003}
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
                  <img key={clothing.id} src={clothing.img_url} alt="" />
                ))
            ) : (
              <img
                key={1004}
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
