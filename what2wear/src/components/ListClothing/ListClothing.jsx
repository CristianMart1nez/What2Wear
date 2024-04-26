import './ListClothing.css'
import { Clothing } from '../Clothing/Clothing'

export const ListClothing = () => {
  
  const displayClothing =() => {
    let arr = [1,2,3,4,5,6,7,8]

    return arr.map((a, index) => {
      return  <Clothing  key={index}/>
    })

  
  
}

return(
  <>
  {displayClothing()}
  </>
)
 };
  
 