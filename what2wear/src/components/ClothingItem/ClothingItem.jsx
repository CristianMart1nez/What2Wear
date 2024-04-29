import { useState } from 'react'
import PropTypes from 'prop-types'
import './ClothingItem.css'

export const ClothingItem = ({ clothingType }) => {

  const [index, setIndex] = useState(0)

  const handleChangeType = () => {
    if (index === clothingType.length - 1) {
      return setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <img 
    key={clothingType[index]?.id} 
    src={clothingType[index]?.img_url} 
    alt="" 
    onClick={handleChangeType} />
  )
}

ClothingItem.propTypes = {
  clothing: PropTypes.array,
/*   index: PropTypes.number,
  onClick: PropTypes.func */
}
