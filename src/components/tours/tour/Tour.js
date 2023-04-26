import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import "./Tour.css"

function Tour(props) {
    return (

        <>
            <div className='info'>
                <Link className='linkCard' to={`/city/${props.tour.id}`}>
                    <Card id='card' key={props.tour.id} style={{ width: '40rem' }}>
                        <Card.Img className='img' variant="top" src={props.tour.image} />
                        <Card.Body>
                            <Card.Title className='name'><b>{props.tour.name}</b></Card.Title>
                            {/*  <Card.Text>
                                   {props.tour.info}
                                </Card.Text>
                                <Button variant="primary" id='button'>Go somewhere</Button> */}
                        </Card.Body>

                    </Card>
                </Link>
            </div>
        </>

        /*            <div className='info'>
        
                        {props.data.map(item => {
                            return (
                                <Card id='card' key={item.id} style={{ width: '40rem' }}>
                                    <Card.Img className='img' variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title className='name'><b>{item.name}</b></Card.Title>
                                        <Card.Text>
                                           {item.info}
                                        </Card.Text>
                                        <Button variant="primary" className='button'>Go somewhere</Button>
                                    </Card.Body>
        
                                </Card>
        
                            )
                        })}
        
                    </div> */

    );
}
export default Tour;