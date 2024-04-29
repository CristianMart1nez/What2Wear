import { useState } from 'react'
import PropTypes from 'prop-types'
import './ClothingItem.css'

export const ClothingItem = ({ clothingType, index, handle }) => {





  return (
    <img 
    key={clothingType[index]?.id} 
    src={clothingType[index]?.img_url} 
    alt="" 
    onClick={handle} />
  )
}

ClothingItem.propTypes = {
  clothing: PropTypes.array,
/*   index: PropTypes.number,
  onClick: PropTypes.func */
}
