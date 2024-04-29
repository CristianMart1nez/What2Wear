import { useEffect, useState } from "react";
import { Clothing } from "../../components/Clothing/Clothing";
import { getAllClothing } from "../../services/clothing";
import "./MyClosetsPage.css";

export const MyClosetsPage = () => {
  /* TODO: Poner mejores variables en la función addItem 
    TODO 2: Arreglar renderización localStorage. Un artículo se queda guardado y no se marca visualmente
  */

  const [imagesPruebas, setImagesPruebas] = useState([]);
  const [clothingInfo, setClothingInfo] = useState([]);

  useEffect(() => {
    document.title = "What2Wear | Closets"

    const fetchData = async () => {
      try {
        const data = await getAllClothing();
        setImagesPruebas(data);

      } catch (error) {
        console.log("Error fetchDataAllClothing :", error)
      }
    };

    fetchData();

    const storedData = localStorage.getItem("clothingInfo")

    if(storedData) {
      setClothingInfo(JSON.parse(storedData))
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("clothingInfo", JSON.stringify(clothingInfo));
  }, [clothingInfo]);

  console.log(clothingInfo)

  const addItem = (item) => {
    setClothingInfo((prevSelectedClothing) => {
      if (prevSelectedClothing.find((clothingInfo) => clothingInfo.id === item.id)) {
        
        return prevSelectedClothing.filter(
          (clothingInfo) => clothingInfo.id !== item.id)

      } else {
        return [...prevSelectedClothing, item];
      }
    });
  };

  return (
    <div className="closetpage-container">
      <div className="closetpage-grid-container">
        {imagesPruebas.map((image) => (
          <Clothing key={image.id} clothing={image} addItem={addItem} isSaved={clothingInfo[image.id]}/>
        ))}
      </div>
    </div>
  );
};
