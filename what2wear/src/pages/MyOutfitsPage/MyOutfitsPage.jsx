import { useEffect, useState } from "react";
import "./MyOutfitsPage.css";
import { ClothingItem } from "../../components/ClothingItem/ClothingItem";

export const MyOutfitsPage = () => {

  const [clothingInfo, setClothingInfo] = useState([]);
  const [jumpers, setJumpers] = useState([]);
  const [upperparts, setUpperparts] = useState([]);
  const [dress, setDress] = useState([]);
  const [downparts, setDownparts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [index, setIndex] = useState(0);
  const [indexJumpers, setIndexJumpers] = useState(0)

  useEffect(() => {
    document.title = "What2Wear | My Outfits";
  }, []);

  useEffect(() => {
    const storedClothingInfo = localStorage.getItem("clothingInfo");
    if (storedClothingInfo && clothingInfo.length === 0) {
      setClothingInfo(JSON.parse(storedClothingInfo));
    }
    setJumpers(clothingInfo.filter((clothing) => clothing.type === "jumpers"));
    setUpperparts(clothingInfo.filter((clothing) => clothing.type === "upperparts"));
    setDress(clothingInfo.filter((clothing) => clothing.type === "dress"));
    setDownparts(clothingInfo.filter((clothing) => clothing.type === "downparts"));
    setShoes(clothingInfo.filter((clothing) => clothing.type === "shoes"));
  }, [clothingInfo]);

  console.log(jumpers)

  const handleChangeJumpers = () => {
    if (indexJumpers === jumpers.length - 1) {
      return setIndexJumpers(0);
    } else {
      setIndexJumpers(indexJumpers + 1);
    }
  };

  const handleChangeUpperparts = () => {
    if (index === upperparts.length - 1) {
      return setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleChangeDress = (dress) => {
    if (index === dress.length - 1) {
      return setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleChangeDownparts = () => {
    if (index === downparts.length - 1) {
      return setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleChangeShoes = () => {
    console.log('aqui')
    if (index === shoes.length - 1) {
      return setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

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
            <ClothingItem clothingType={jumpers} />
          </div>

          <div className="final-clothing-2">
            <ClothingItem clothingType={upperparts} />
          </div>

          <div className="final-clothing-3">
            <ClothingItem clothingType={dress} />
          </div>
          
          <div className="final-clothing-4">
          <ClothingItem clothingType={downparts} />
          </div>

          <div className="final-clothing-5">
          <ClothingItem clothingType={shoes} />
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
