import './Tours.css'


function Tours(props){
    console.log(props);
    return(
        <>
        <div className="tours">
        <h2>The most visited cities around world</h2>
        {props.data.map(item=>{
            return(
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={item.image}></img>
                    <hr/>
                </div>
            )
        })}
        </div>
        </>
    
    )
}
export default Tours;