import { useEffect } from 'react'
import { Clothing } from '../../components/Clothing/Clothing'
import './MyClosetsPage.css'

export const MyClosetsPage = () => {

  useEffect(() => {
    document.title = "What2Wear | Closets"
  }, [])

  return (
   <Clothing/>
  )}