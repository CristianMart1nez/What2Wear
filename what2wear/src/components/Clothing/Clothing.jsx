import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PropTypes from 'prop-types'
import "./Clothing.css";

export const Clothing = ({ clothing, addItem, isSaved }) => {

  /* TODO: Arreglar la tarjeta. Info-Container FALLO
   */

  const[saved, setSaved] = useState(isSaved || false)
  
  const handleToggleSaved = (item) => {
    setSaved(!saved)
    addItem(item)
  }
  

  return (
    <article className="card-closet">
      <div className="card-closet-container">

        <div className="card-closet-img">
          <img
            src={clothing.img_url}
            alt=""
          />
        </div>

        <div className="card-closet-info-container">
          <div className="info-container">
            <p style={{ textTransform: 'uppercase'}}>{clothing.brand}</p>
            {
              clothing.collection 
              ? (<p>{clothing.collection}</p>)
              : (<p>Summer 24</p>)
            }
          </div>
          {
            saved 
            ? (<BookmarkIcon onClick={() => handleToggleSaved(clothing)} />)
            : (<BookmarkBorderIcon onClick={() => handleToggleSaved(clothing)} />)
          }
        </div>
      </div>
    </article>
  );
};

Clothing.propTypes = {
  clothing: PropTypes.object,
  addItem: PropTypes.func
};