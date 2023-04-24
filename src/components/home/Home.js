import './Home.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';

function Home(props) {
    
    return (
        <>
            <div>
                <Header/>
                <Tours data={props.data}/>
                <Footer />
            </div>
        </>
    )
}
export default Home;