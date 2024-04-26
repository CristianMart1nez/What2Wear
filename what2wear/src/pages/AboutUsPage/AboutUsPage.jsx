/* import { useEffect, useState } from 'react'
import { getAllClothing, getOneClothing } from '../../services/clothing'
import './AboutUsPage.css'

export const AboutUsPage = () => {

  const [clothingData, setClothingData] = useState([])
  const [oneClothingData, setOneClothingData] = useState([])

  useEffect(() => {
    document.title = "What2Wear | About"
  }, [])

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

    oneClothingFetch()
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
 */
import React, { useEffect, useState } from 'react';
import { getAllClothing, getOneClothing } from '../../services/clothing';
import './AboutUsPage.css';

export const AboutUsPage = () => {
  const [clothingData, setClothingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'What2Wear | About';
    const fetchData = async () => {
      try {
        const data = await getAllClothing();
        setClothingData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderClothingItems = () => {
    if (loading) return <h2 className="prueba">Loading...</h2>;
    if (error) return <h2 className="prueba">Error: {error.message}</h2>;
    return clothingData.map((data) => (
      <article key={data.id}>
        <h1>{data.type}</h1>
        <img src={data.img_url} alt={data.type} />
      </article>
    ));
  };

  return <>{renderClothingItems()}</>;
};
