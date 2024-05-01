import { useEffect, useState } from "react";
import { Clothing } from "../../components/Clothing/Clothing";
import { getAllClothing } from "../../services/clothing";
import "./MyClosetsPage.css";

export const MyClosetsPage = () => {
  /* TODO: Poner mejores variables en la función addItem 
    TODO 2: Arreglar renderización localStorage. Un artículo se queda guardado y no se marca visualmente
    TODO 3: crear estilos en los botones del filtro .active
  */

  const [imagesPruebas, setImagesPruebas] = useState([]);
  const [clothingInfo, setClothingInfo] = useState([]);
  const [clothingFiltered, setClothingFiltered] = useState([])

  useEffect(() => {
    document.title = "What2Wear | Closets";

    const fetchData = async () => {
      try {
        const data = await getAllClothing();
        setImagesPruebas(data.filter((clothing) => clothing.type !== "dress"));
        setClothingFiltered(data)
      } catch (error) {
        console.log("Error fetchDataAllClothing :", error);
      }
    };

    fetchData();

    const storedData = localStorage.getItem("clothingInfo");

    if (storedData) {
      setClothingInfo(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("clothingInfo", JSON.stringify(clothingInfo));
  }, [clothingInfo]);

  console.log(imagesPruebas);

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

  const handleFilterType = (type) => {
    if(type === "all") {
      return setClothingFiltered(imagesPruebas)
    } else {
      return setClothingFiltered(imagesPruebas.filter((clothing) => clothing.type === type))
    }
  }

  return (
    <>
      <section className="closetpage-container">
      <div className="closetpage-btn-filters">
        <button className="closetpage-btn" onClick={(e) => handleFilterType(e.target.textContent.toLowerCase())}>All</button>
        <button className="closetpage-btn" onClick={(e) => handleFilterType(e.target.textContent.toLowerCase())}>Jumpers</button>
        <button className="closetpage-btn" onClick={(e) => handleFilterType(e.target.textContent.toLowerCase())}>Upperparts</button>
        <button className="closetpage-btn" onClick={(e) => handleFilterType(e.target.textContent.toLowerCase())}>Downparts</button>
        <button className="closetpage-btn" onClick={(e) => handleFilterType(e.target.textContent.toLowerCase())}>Shoes</button>
      </div>
        <div className="closetpage-grid-container">
          {clothingFiltered.map((image) => (
            <Clothing
              key={image.id}
              clothing={image}
              addItem={addItem}
              isSaved={clothingInfo[image.id]}
            />
          ))}
        </div>
      </section>
    </>
  );
};
