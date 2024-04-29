import { useEffect, useState } from "react";
import "./MyOutfitsPage.css";

export const MyOutfitsPage = () => {
  const [clothingInfo, setClothingInfo] = useState([]);
  const [jumpers, setJumpers] = useState([]);
  const [upperparts, setUpperparts] = useState([]);
  const [dress, setDress] = useState([]);
  const [downparts, setDownparts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [index, setIndex] = useState(0);

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

  const handleChangeJumpers = () => {
    if (index === jumpers.length - 1) {
      return setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleChangeUpperparts = () => {
    if (index === jumpers.length - 1) {
      return setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleChangeDress = () => {
    if (index === jumpers.length - 1) {
      return setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleChangeDownparts = () => {
    if (index === jumpers.length - 1) {
      return setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleChangeShoes = () => {
    console.log('aqui')
    if (index === jumpers.length - 1) {
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
            <img
              key={jumpers[index]?.id}
              src={jumpers[index]?.img_url}
              alt=""
              onClick={handleChangeJumpers}
            />
          </div>
          <div className="final-clothing-2">
            <img
              key={upperparts[index]?.id}
              src={upperparts[index]?.img_url}
              alt=""
              onClick={handleChangeUpperparts}
            />
          </div>
          <div className="final-clothing-3">
            <img
              key={dress[index]?.id}
              src={dress[index]?.img_url}
              alt=""
              onClick={handleChangeDress}
            />
          </div>
          <div className="final-clothing-4">
            <img
              key={downparts[index]?.id}
              src={downparts[index]?.img_url}
              alt=""
              onClick={handleChangeDownparts}
            />
          </div>
          <div className="final-clothing-5">
            <img
              key={shoes[index]?.id}
              src={shoes[index]?.img_url}
              alt=""
              onClick={handleChangeShoes}
            />
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
