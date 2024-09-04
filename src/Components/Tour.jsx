import Card from "./Card";
import style from './Tour.module.css'

const Tour = ({tours,removeTour})=>{
  return (
    <div className={style.container1}>
        <div>
          <h1 className={style.title}>Plan With Love</h1>
        </div>

      <div className={style.cards}> 
        {
        tours.map((tour)=>{
          return <Card key={tour.id} {...tour}  removeTour={removeTour}></Card>
        })
        }
      </div>
    </div>
  )
}

export default Tour;