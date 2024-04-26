import { useEffect, useState } from "react";
import { Clothing } from "../../components/Clothing/Clothing";
import { getAllClothing } from "../../services/clothing";
import "./MyClosetsPage.css";

import images from "../../images.json";

export const MyClosetsPage = () => {
  /* TODO: Poner mejores variables en la función addItem */

  const [imagesPruebas, setImagesPruebas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clothingInfo, setClothingInfo] = useState([]);

  useEffect(() => {
    document.title = "What2Wear | Closets";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllClothing();
        setImagesPruebas(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(imagesPruebas);

  useEffect(() => {
    localStorage.setItem("clothingInfo", JSON.stringify(clothingInfo));
  }, [clothingInfo]);

  const addItem = (item) => {
    setClothingInfo((prevSelectedClothing) => {
      if (
        prevSelectedClothing.find((clothingInfo) => clothingInfo.id === item.id)
      ) {
        return prevSelectedClothing.filter(
          (clothingInfo) => clothingInfo.id !== item.id
        );
      } else {
        return [...prevSelectedClothing, item];
      }
    });
  };

  return (
    <div className="closetpage-container">
      <div className="closetpage-grid-container">
        {imagesPruebas.map((image) => (
          <Clothing key={image.id} clothing={image} addItem={addItem} />
        ))}
      </div>
    </div>
  );
};
