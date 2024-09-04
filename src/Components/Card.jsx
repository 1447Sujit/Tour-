import { useState } from "react";
import style from './Card.module.css'



const Card = ({id,name,info,image,price,removeTour})=>{
 
  const [readMore,setReadMore] = useState(false)
  const description = readMore ? info : `${info.substring(0,200)}....`

  function readMoreHandler(){
    setReadMore(!readMore)
  }

  return (
    <div className={style.card}>
          <img src={image} alt=""  className={style.image} />

          <div className={style.tourInfo}>
            <div className={style.tourDetails}>
            <h4 className={style.tourPrice}>₹{price}</h4>
            <h4 className={style.tourName}>{name}</h4>
            </div>
          </div>

          <div className={style.description}>
          {description}
          <span onClick={readMoreHandler} className={style.readMore}>
            {readMore ? 'Show Less' : 'Read More'}
          </span>
          </div>

          <button onClick={()=>removeTour(id)} className={style.btnRed}>Not Interested</button>
    </div>
  )
}

export default Card;