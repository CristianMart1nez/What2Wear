import { useEffect, useState } from 'react'
import { getAllClothing, getOneClothing } from '../../services/clothing'
import './AboutUsPage.css'

export const AboutUsPage = () => {

  const [clothingData, setClothingData] = useState([])
  const [oneClothingData, setOneClothingData] = useState([])

  useEffect(() => {
    const allClothingFetch = async() => {
      try {
        const data = await getAllClothing()
        setClothingData(data)
      } catch (error) {
        console.log('Error clothing data: ', error)
      }
    }

    allClothingFetch()
  }, [])

  useEffect(() => {
    const oneClothingFetch = async(id) => {
      try {
        const data = await getOneClothing(id)
        setOneClothingData(data)
      } catch (error) {
        console.log('Error clothing data: ', error)
      }
    }

    oneClothingFetch(7)
  }, [])

  return (
    <>
      {
        clothingData 
        ? (
          clothingData.map((data) => (
            <article key={data.id}>
            <h1>{data.type}</h1>
            <img src={data.img_url} />
          </article>
          ))
        )
        : (<h2 className='prueba'>Loading...</h2>)

      }
    </>
  )
}
