import { useEffect, useState } from "react"
 
 export const useClothingData = () => {
     const [clothingInfo, setClothingInfo] = useState([])
     const [index, setIndex] = useState(0)

     useEffect(() => {
        const storedClothingInfo = localStorage.getItem("clothingInfo")
        if (storedClothingInfo && clothingInfo.length === 0) {
            setClothingInfo(JSON.parse(storedClothingInfo));
          }
     }, [clothingInfo])

     const filterClothingByType = (type) => {
        return clothingInfo.filter((clothing) => clothing.type === type)
     }

     const handleChangeIndex = (length) => {
        setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1))
     }

     return {
        clothingInfo,
        index,
        handleChangeIndex,
        filterClothingByType
     }
 }
 