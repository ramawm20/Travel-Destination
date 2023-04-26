import { useParams } from "react-router-dom";
import "./TourDetails.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


function TourDetails(props) {

    const { id } = useParams();
    const details = props.data.find(item => item.id === `${id}`)

    const [moredetails, setmoredetails] = useState(details.info.substring(0, 160));
    const [text, settext] = useState(false)

    function test() {

        setmoredetails(details.info);
        settext(true)

    }
    return (
        <div className="details">
            <Card id='card' style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title className='name'><b>Information About {details.name}</b></Card.Title>
                    <Card.Text>
                        {moredetails}
                    </Card.Text>
                    <Button variant="primary" id='button' onClick={test} >
                        {text ? "See Less" : "See More"}
                    </Button>
                </Card.Body>

            </Card>
        </div>


    )
}
export default TourDetails;