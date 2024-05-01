import { useEffect, useState } from "react";
import { deleteOutfitById, getFavouriteOutfit } from "../../services/outfit.js";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./FavouritePage.css";
import { BinIcon } from "../../components/Icons/BinIcon/BinIcon.jsx";

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

  const handleDeleteOutfit = (id) => {
    const deleteOutfit = async () => {

      try {
        await deleteOutfitById(id);

        const token = localStorage.getItem('token')
        const updateData = await getFavouriteOutfit(token)
        setOutfitsData(updateData)

      } catch (error) {
        console.log("Error handleSaved :", error);
      }
    };

    deleteOutfit();

  };

  return (
    <section className="favourite-grid-container">
      {outfitsData.map((outfit) => (
        <div key={outfit.id} className="favourite-outfit-container">
          {outfit.clothingItems.map((clothingItem) => (
            <>
              <img
                key={clothingItem.id}
                src={clothingItem.img_url}
                alt=""
                className={`clothing-item-image-${clothingItem.type}`}
              />
            </>
          ))}
          <BinIcon onClick={() => handleDeleteOutfit(outfit.id)}  />
        </div>
      ))}
    </section>
  );
};
