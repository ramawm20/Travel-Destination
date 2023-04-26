import './Home.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
function Home(props) {

    return (
        <>
            <div className='home'>
             
                <Tours data={props.data} />
                
            </div>
        </>
    )
}
export default Home;