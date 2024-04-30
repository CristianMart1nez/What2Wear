import { useEffect, useState } from "react";
import { getFavouriteOutfit } from "../../services/outfit.js";
import './FavouritePage.css'

export const FavouritePage = () => {
  const [outfitsData, setOutfitsData] = useState([]);

  useEffect(() => {
    document.title = "What2Wear | Favourite";

    const token = localStorage.getItem("token");

    const fetchOutfitData = async () => {
      try {
        const data = await getFavouriteOutfit(token);
        setOutfitsData(data);
      } catch (error) {
        console.log("Error fetchOutfitData :", error);
      }
    };

    fetchOutfitData();
  }, []);

  console.log(outfitsData);

  return (
    <section className="favourite-grid-container">
      {
      outfitsData.map((outfit) => (
        <div key={outfit.id} className="favourite-outfit-container">
          {
          outfit.clothingItems.map((clothingItem) => (
            <img
              key={clothingItem.id}
              src={clothingItem.img_url}
              alt=""
              className="clothing-item-image"
            />
          ))}
        </div>
      ))}
    </section>
  );
};
