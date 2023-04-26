import './Header.css'
import { Link } from 'react-router-dom';
function Header(){
    return(
        <>
        <div id="header">
        <h1>Travel Destination</h1>

        <Link className='link1' to="/">Home</Link>
        <Link className='link2' to='/App'>App</Link>

        <br/>
        </div>
        </>
    )
}
export default Header;