import { useEffect, useState } from "react";
import { Clothing } from "../../components/Clothing/Clothing";
import "./MyClosetsPage.css";

import images from '../../images.json'

export const MyClosetsPage = () => {

  /* TODO: Poner mejores variables en la función addItem */

  const[imagesPruebas, setImagesPruebas] = useState([])
  const[clothingInfo, setClothingInfo] = useState([])

  useEffect(() => {
    document.title = "What2Wear | Closets";
  }, []);
  
  useEffect(() => {
    setImagesPruebas(images)
  }, [])

  useEffect(() => {
    localStorage.setItem('clothingInfo', JSON.stringify(clothingInfo))
  }, [clothingInfo])

  const addItem = (item) => {
    setClothingInfo(prevSelectedClothing => {
      if (prevSelectedClothing.find(clothingInfo => clothingInfo.id === item.id)) {

        return prevSelectedClothing.filter(clothingInfo => clothingInfo.id !== item.id);
      } else {

        return [...prevSelectedClothing, item];
      }
    });
  }
  
  return (

    <div className="closetpage-container">
      {
        imagesPruebas.map((image) => (
          <Clothing key={image.id} clothing={image} addItem={addItem}/>
        ))
      }
    </div>
  );
};
