import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./MyOutfitsPage.css";
import { favouriteOutfit } from "../../services/outfit";

export const MyOutfitsPage = () => {
  const [clothingInfo, setClothingInfo] = useState([]);
  const [jumpers, setJumpers] = useState([]);
  const [upperparts, setUpperparts] = useState([]);
  const [dress, setDress] = useState([]);
  const [downparts, setDownparts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [indexJumpers, setIndexJumpers] = useState(0);
  const [indexUpperparts, setIndexUpperparts] = useState(0);
  const [indexDress, setIndexDress] = useState(0);
  const [indexDownparts, setIndexDownparts] = useState(0);
  const [indexShoes, setIndexShoes] = useState(0);

  useEffect(() => {
    document.title = "What2Wear | My Outfits";
  }, []);

  useEffect(() => {
    const storedClothingInfo = localStorage.getItem("clothingInfo");
    if (storedClothingInfo && clothingInfo.length === 0) {
      setClothingInfo(JSON.parse(storedClothingInfo));
    }
    setJumpers(clothingInfo.filter((clothing) => clothing.type === "jumpers"));
    setUpperparts(
      clothingInfo.filter((clothing) => clothing.type === "upperparts")
    );
    setDress(clothingInfo.filter((clothing) => clothing.type === "dress"));
    setDownparts(
      clothingInfo.filter((clothing) => clothing.type === "downparts")
    );
    setShoes(clothingInfo.filter((clothing) => clothing.type === "shoes"));
  }, [clothingInfo]);

  console.log(jumpers);

  const handleChangeJumpers = () => {
    if (indexJumpers === jumpers.length - 1) {
      return setIndexJumpers(0);
    } else {
      setIndexJumpers(indexJumpers + 1);
    }
  };

  const handleChangeUpperparts = () => {
    if (indexUpperparts === upperparts.length - 1) {
      return setIndexUpperparts(0);
    } else {
      setIndexUpperparts(indexUpperparts + 1);
    }
  };

  const handleChangeDress = () => {
    if (indexDress === dress.length - 1) {
      return setIndexDress(0);
    } else {
      setIndexDress(indexDress + 1);
    }
  };

  const handleChangeDownparts = () => {
    if (indexDownparts === downparts.length - 1) {
      return setIndexDownparts(0);
    } else {
      setIndexDownparts(indexDownparts + 1);
    }
  };

  const handleChangeShoes = () => {
    console.log("aqui");
    if (indexShoes === shoes.length - 1) {
      return setIndexShoes(0);
    } else {
      setIndexShoes(indexShoes + 1);
    }
  };

  const handleSaved = () => {
    const body = [jumpers[indexJumpers]?.img_url];

    const fetchData = async () => {
      try {
        const data = await favouriteOutfit(body);
        console.log(data);
      } catch (error) {
        console.log("Error handleSaved :", error);
      }
    }

    fetchData()
  }
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
              key={jumpers[indexJumpers]?.id}
              src={jumpers[indexJumpers]?.img_url}
              alt=""
              onClick={handleChangeJumpers}
            />
          </div>

          <div className="final-clothing-2">
            <img
              key={upperparts[indexUpperparts]?.id}
              src={upperparts[indexUpperparts]?.img_url}
              alt=""
              onClick={handleChangeUpperparts}
            />
          </div>

          <div className="final-clothing-3">
            <img
              key={dress[indexDress]?.id}
              src={dress[indexDress]?.img_url}
              alt=""
              onClick={handleChangeDress}
            />
          </div>

          <div className="final-clothing-4">
            <img
              key={downparts[indexDownparts]?.id}
              src={downparts[indexDownparts]?.img_url}
              alt=""
              onClick={handleChangeDownparts}
            />
          </div>

          <div className="final-clothing-5">
            <img
              key={shoes[indexShoes]?.id}
              src={shoes[indexShoes]?.img_url}
              alt=""
              onClick={handleChangeShoes}
            />
          </div>

          <div className="configure-outfits-container">
            <img
              src={jumpers[indexJumpers]?.img_url}
              className="outfits-jumpers"
            />
            <img
              src={upperparts[indexUpperparts]?.img_url}
              className="outfits-upperparts"
            />
            <img src={dress[indexDress]?.img_url} className="outfits-dress" />
            <img
              src={downparts[indexDownparts]?.img_url}
              className="outfits-downparts"
            />
            <img src={shoes[indexShoes]?.img_url} className="outfits-shoes" />
            <FavoriteBorderIcon onClick={handleSaved} />
          </div>
        </article>
      </section>
    </>
  );
};
