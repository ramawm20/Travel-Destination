import './Tours.css'
import Tour from './tour/Tour';

function Tours(props){
   console.log(props);
    return(
         props.data.map(tour =>
            <Tour tour={tour} key={tour.id} />
        )
    )
     
    
   /*data from previous lab 
    return(
        <>
        <div className="tours">
        <h2>The most visited cities around world</h2>
        {props.data.map(item=>{
            return(
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt={item.name}></img>
                    <hr/>
                </div>
            )
        })}
        </div>
        </>
    
    ) */
}
export default Tours;